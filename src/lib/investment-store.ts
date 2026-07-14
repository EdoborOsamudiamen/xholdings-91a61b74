import { useState, useEffect } from 'react';
import { supabase } from './supabase';

export type Investment = {
  id: string;
  user_id: string;
  plan_name: string;
  amount: number;
  daily_roi: number;
  duration_days: number;
  status: string;
  created_at: string;
};

export function useInvestmentStore() {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInvestments();

    const channelId = `investments_changes_${Math.random()}`;
    const channel = supabase
      .channel(channelId)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'investments' },
        () => {
          fetchInvestments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchInvestments = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('investments')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (data && !error) {
      const formatted: Investment[] = data.map(inv => ({
        id: inv.id,
        user_id: inv.user_id,
        plan_name: inv.plan_name,
        amount: Number(inv.amount),
        daily_roi: Number(inv.daily_roi),
        duration_days: Number(inv.duration_days),
        status: inv.status,
        created_at: inv.created_at
      }));
      setInvestments(formatted);
    }
    setLoading(false);
  };

  const addInvestment = async (amount: number) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { error: 'Not authenticated' };

    // Fetch user profile to verify balance
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('balance')
      .eq('id', user.id)
      .single();

    if (profileError || !profile) {
      return { error: 'Could not fetch profile' };
    }

    if (Number(profile.balance) < amount) {
      return { error: 'Insufficient balance' };
    }

    const newInv = {
      user_id: user.id,
      plan_name: 'Direct Investment',
      amount: amount,
      daily_roi: 0.015, // 1.5% daily return
      duration_days: 365, // 365 days duration
      status: 'active'
    };

    // Deduct from balance
    const { error: rpcError } = await supabase.rpc('increment_balance', {
      p_user_id: user.id,
      p_amount: -amount
    });

    if (rpcError) {
      console.error('Error deducting balance:', rpcError);
      return { error: 'Balance deduction failed: ' + rpcError.message };
    }

    // Insert investment
    const { error: insertError } = await supabase
      .from('investments')
      .insert([newInv]);

    if (insertError) {
      console.error('Error inserting investment:', insertError);
      // Revert balance deduction
      await supabase.rpc('increment_balance', {
        p_user_id: user.id,
        p_amount: amount
      });
      return { error: 'Investment failed: ' + insertError.message };
    }

    await fetchInvestments();
    return { success: true };
  };

  return { investments, loading, addInvestment, fetchInvestments };
}
