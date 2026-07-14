import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { 
  ArrowUpRight, ArrowDownLeft, Wallet, TrendingUp, Gift, User, Bell, Rocket, 
  Clock, CheckCircle2, Home, Copy, Shield, Smartphone, Monitor, ChevronRight,
  Activity, Coins, ArrowRight, ShieldCheck, Check, ImageIcon, Users, LogOut
} from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

import { useCryptoStore } from "../lib/crypto-store";
import { useTransactionStore } from "../lib/transaction-store";
import { useNotificationStore } from "../lib/notification-store";
import { useInvestmentStore } from "../lib/investment-store";
import { sendNotificationEmail } from "../lib/send-email";
import {
  requestNotificationPermission,
  notifyDepositApproved,
  notifyDepositRejected,
  notifyWithdrawalApproved,
  notifyWithdrawalRejected,
} from "../lib/push-notifications";
import { registerPushSubscription } from "../lib/web-push-subscription";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
} from "../components/ui/dialog";

import { supabase } from "../lib/supabase";


export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [profile, setProfile] = useState<any>(null);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let profileChannel: any = null;

    const fetchProfile = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate({ to: "/login" });
        return;
      }

      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      const { data: appSettings } = await supabase.from('platform_settings').select('*').eq('id', 1).single();
      
      if (data?.role !== 'admin' && appSettings?.maintenance_mode) {
        await supabase.auth.signOut();
        navigate({ to: "/login" });
        return;
      }

      if (data) setProfile(data);
      if (appSettings) setSettings(appSettings);

      // Register background push subscription after profile loads
      registerPushSubscription();

      // Setup Realtime listener for this user's profile to instantly reflect balance changes
      profileChannel = supabase
        .channel(`profile_changes_${user.id}`)
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'profiles', filter: `id=eq.${user.id}` },
          (payload) => {
            setProfile(payload.new);
          }
        )
        .subscribe();

      setLoading(false);
    };
    fetchProfile();

    return () => {
      if (profileChannel) supabase.removeChannel(profileChannel);
    };
  }, [navigate]);

  const { transactions } = useTransactionStore();
  // Track previous statuses so we only fire once per change
  const prevStatuses = useRef<Record<string, string>>({});
  // Whether we have seeded the initial snapshot (prevents firing on first load)
  const isSeeded = useRef(false);

  // Request OS notification permission on first load — do it proactively
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().catch(() => {});
    }
  }, []);

  // Watch for transaction status changes and fire browser notifications
  useEffect(() => {
    if (transactions.length === 0) return;

    if (!isSeeded.current) {
      // First time: just snapshot current statuses, don't fire anything
      transactions.forEach(tx => {
        prevStatuses.current[tx.id] = tx.status;
      });
      isSeeded.current = true;
      return;
    }

    // Subsequent updates: detect genuine changes and notify
    transactions.forEach(tx => {
      const prev = prevStatuses.current[tx.id];
      const curr = tx.status;
      if (prev !== undefined && prev !== curr) {
        const amt = `$${Number(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const asset = tx.asset || '';
        if (tx.type === 'deposit') {
          if (curr === 'approved') notifyDepositApproved(amt, asset);
          if (curr === 'rejected') notifyDepositRejected(amt, asset);
        } else if (tx.type === 'withdrawal') {
          if (curr === 'approved') notifyWithdrawalApproved(amt, asset);
          if (curr === 'rejected') notifyWithdrawalRejected(amt, asset);
        }
      }
      prevStatuses.current[tx.id] = curr;
    });
  }, [transactions]);

  // Filter transactions to only those belonging to the logged-in user
  const userTransactions = transactions.filter(t => t.userId === profile?.id);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070b14] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#04070d] text-[#f0f4ff] font-['Inter'] selection:bg-[#c9a84c]/30 flex flex-col md:flex-row">
      
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0a0f1c] border-r border-white/5 min-h-screen p-6 sticky top-0 h-screen z-30">
        <div className="flex flex-col gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="TheSpaceHoldings" className="w-8 h-8 object-contain shrink-0" />
            <span className="font-light text-base tracking-[0.08em] text-white font-['Outfit'] uppercase whitespace-nowrap shrink-0">TheSpaceHoldings</span>
          </Link>
          <div className="flex items-center justify-between px-1 py-2 border-t border-b border-white/5">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Notifications</span>
            <NotificationBell transactions={userTransactions} align="left" />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <button onClick={() => setActiveTab('home')} className={`flex items-center gap-3 px-4 py-3 rounded-sm font-medium transition-colors ${activeTab === 'home' ? 'bg-white/5 text-[#c9a84c]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><Home className="w-5 h-5"/> Home</button>
          <button onClick={() => setActiveTab('copytrade')} className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === 'copytrade' ? 'bg-white/5 text-[#c9a84c]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><Users className="w-5 h-5"/> Copy Trading</button>
          <button onClick={() => setActiveTab('invest')} className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === 'invest' ? 'bg-white/5 text-[#c9a84c]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><TrendingUp className="w-5 h-5"/> Direct Invest</button>
          <button onClick={() => setActiveTab('wallet')} className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === 'wallet' ? 'bg-white/5 text-[#c9a84c]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><Wallet className="w-5 h-5"/> Wallet</button>
          <button onClick={() => setActiveTab('rewards')} className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === 'rewards' ? 'bg-white/5 text-[#c9a84c]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><Gift className="w-5 h-5"/> Rewards</button>
          <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === 'profile' ? 'bg-white/5 text-[#c9a84c]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><User className="w-5 h-5"/> Profile</button>
          {profile?.role === 'admin' && (
            <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-sm transition-colors mt-8 text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20">
              <span className="font-bold uppercase tracking-widest text-[11px]">SuperAdmin</span>
            </Link>
          )}
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-sm transition-colors mt-auto text-gray-500 hover:text-white hover:bg-red-500/10 hover:text-red-400 group">
            <LogOut className="w-5 h-5 group-hover:text-red-400"/> Logout
          </button>
        </div>
      </aside>

      {/* Top Header Mobile */}
      <header className="sticky top-0 flex md:hidden items-center justify-between px-6 py-4 bg-[#0a0f1c]/95 backdrop-blur-md border-b border-white/5 z-40">
        <div className="flex items-center gap-3">
          <img src={logo} alt="TheSpaceHoldings" className="w-8 h-8 object-contain shrink-0" />
          <span className="font-light text-base tracking-[0.08em] text-white font-['Outfit'] uppercase whitespace-nowrap shrink-0">TheSpaceHoldings</span>
        </div>
        <div className="flex items-center gap-3">
          <NotificationBell transactions={userTransactions} />
          {profile?.role === 'admin' && (
            <Link to="/admin" className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-red-400 border border-red-500/20 bg-red-500/10 rounded-sm">
              Admin
            </Link>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1400px] mx-auto px-4 py-4 md:p-6 relative z-10 w-full">

        {activeTab === 'home' && <HomeTab setActiveTab={setActiveTab} profile={profile} />}
        {activeTab === 'copytrade' && <CopyTradeTab profile={profile} />}
        {activeTab === 'invest' && <InvestTab profile={profile} />}
        {activeTab === 'wallet' && <WalletTab profile={profile} settings={settings} />}
        {activeTab === 'rewards' && <RewardsTab profile={profile} />}
        {activeTab === 'profile' && <ProfileTab profile={profile} />}
      </main>

      {/* Mobile Bottom Navigation Bar - 5 items */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#0a0f1c]/95 backdrop-blur-lg border-t border-white/5 px-1 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 flex justify-around items-center z-50 shadow-lg shadow-black/40">
        <button onClick={() => setActiveTab('home')} className={`flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === 'home' ? 'text-[#c9a84c] scale-105' : 'text-gray-500'}`}>
          <Home className="w-[18px] h-[18px]" />
          <span className="text-[9px] font-medium tracking-wide">Home</span>
          {activeTab === 'home' && <span className="absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" />}
        </button>
        <button onClick={() => setActiveTab('copytrade')} className={`flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === 'copytrade' ? 'text-[#c9a84c] scale-105' : 'text-gray-500'}`}>
          <Users className="w-[18px] h-[18px]" />
          <span className="text-[9px] font-medium tracking-wide">Copy</span>
          {activeTab === 'copytrade' && <span className="absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" />}
        </button>
        <button onClick={() => setActiveTab('invest')} className={`flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === 'invest' ? 'text-[#c9a84c] scale-105' : 'text-gray-500'}`}>
          <TrendingUp className="w-[18px] h-[18px]" />
          <span className="text-[9px] font-medium tracking-wide">Invest</span>
          {activeTab === 'invest' && <span className="absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" />}
        </button>
        <button onClick={() => setActiveTab('wallet')} className={`flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === 'wallet' ? 'text-[#c9a84c] scale-105' : 'text-gray-500'}`}>
          <Wallet className="w-[18px] h-[18px]" />
          <span className="text-[9px] font-medium tracking-wide">Wallet</span>
          {activeTab === 'wallet' && <span className="absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" />}
        </button>
        <button onClick={() => setActiveTab('profile')} className={`flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === 'profile' ? 'text-[#c9a84c] scale-105' : 'text-gray-500'}`}>
          <User className="w-[18px] h-[18px]" />
          <span className="text-[9px] font-medium tracking-wide">Profile</span>
          {activeTab === 'profile' && <span className="absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" />}
        </button>
      </div>
    </div>
  );
}

function CopyTradeTab({ profile }: { profile?: any }) {
  const [traders, setTraders] = useState<any[]>([]);
  const [mySubs, setMySubs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [copying, setCopying] = useState(false);
  const [selectedTrader, setSelectedTrader] = useState<any>(null);
  const [amount, setAmount] = useState<number | ''>('');
  const [alertState, setAlertState] = useState({ open: false, title: '', message: '' });

  const totalBalance = Number(profile?.balance || 0) + Number(profile?.profit || 0) + Number(profile?.total_earned_referrals || 0);

  const fetchCopyData = async () => {
    if (!profile) return;
    setLoading(true);
    const { data: t } = await supabase.from('master_traders').select('*').eq('is_active', true);
    setTraders(t || []);
    
    const { data: s } = await supabase.from('copy_trading_subscriptions')
      .select('*, master_traders(*)')
      .eq('user_id', profile.id)
      .eq('status', 'active');
    setMySubs(s || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchCopyData();
  }, [profile]);

  const showAlert = (title: string, message: string) => {
    setAlertState({ open: true, title, message });
  };

  const handleCopy = async () => {
    if (!selectedTrader || !amount || amount <= 0) return;
    if (amount > totalBalance) {
      showAlert("Insufficient Funds", "You do not have enough available balance to copy this trader.");
      return;
    }
    
    setCopying(true);
    
    const currentBaseBalance = Number(profile?.balance || 0);
    const deficit = amount > currentBaseBalance ? amount - currentBaseBalance : 0;

    // Temporarily satisfy RLS if base balance is insufficient
    if (deficit > 0) {
      await supabase.rpc('increment_balance', { p_user_id: profile.id, p_amount: deficit });
    }

    // Insert subscription
    const { error: insertError } = await supabase.from('copy_trading_subscriptions').insert({
      user_id: profile.id,
      master_trader_id: selectedTrader.id,
      amount: Number(amount),
      status: 'active'
    });

    if (insertError) {
      // Revert temporary balance if we added it
      if (deficit > 0) {
        await supabase.rpc('increment_balance', { p_user_id: profile.id, p_amount: -deficit });
      }
      showAlert("Error", "Could not start copy trading: " + (insertError?.message || "Unknown error"));
      setCopying(false);
      return;
    }

    // Success! Deduct the actual amount + revert the temporary deficit boost
    // If deficit was 0, we just deduct the amount.
    // If deficit was > 0, we deduct the amount AND the temporary boost.
    const totalDeduction = Number(amount) + deficit;
    await supabase.rpc('increment_balance', { p_user_id: profile.id, p_amount: -totalDeduction });

    await supabase.from('master_traders').update({ followers_count: selectedTrader.followers_count + 1 }).eq('id', selectedTrader.id);
    showAlert("Success!", `You are now successfully copying ${selectedTrader.name}!`);
    setSelectedTrader(null);
    setAmount('');
    fetchCopyData();
    if (profile) profile.balance = Number(profile.balance) - Number(amount);
    setCopying(false);
  };

  if (loading) {
    return <div className="py-20 text-center text-gray-500 font-bold uppercase tracking-widest text-xs">Loading Copy Trading...</div>;
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      <AlertDialog open={alertState.open} onOpenChange={(open) => setAlertState(prev => ({ ...prev, open }))}>
        <AlertDialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>{alertState.title}</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">{alertState.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setAlertState(prev => ({ ...prev, open: false }))} className="bg-[#c9a84c] text-[#070b14] hover:bg-[#b89945]">
              Okay
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="mb-8 mt-4 md:mt-10">
        <h1 className="text-3xl text-white font-['Outfit'] font-light mb-2">Copy Trading</h1>
        <p className="text-gray-400 text-[13px]">Automatically mirror the trades of our top-performing algorithmic portfolios and expert traders.</p>
      </div>

      {mySubs.length > 0 && (
        <div className="mb-12">
          <h2 className="text-sm text-white font-bold uppercase tracking-widest mb-4">Your Active Copies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mySubs.map(sub => {
              const pnl = Number(sub.total_pnl || 0);
              const isProfit = pnl >= 0;
              return (
                <div key={sub.id} className={`p-5 bg-gradient-to-br from-[#0a0f1c] to-[#070b14] border ${isProfit ? 'border-[#00d4aa]/30' : 'border-red-500/30'} rounded-sm relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${isProfit ? 'bg-[#00d4aa]/10' : 'bg-red-500/10'} blur-xl rounded-full`} />
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Copying</div>
                      <div className="text-lg text-white font-['Outfit']">{sub.master_traders?.name || 'Unknown'}</div>
                    </div>
                    <div className={`w-10 h-10 rounded-full ${isProfit ? 'bg-[#00d4aa]/10 border-[#00d4aa]/20' : 'bg-red-500/10 border-red-500/20'} flex items-center justify-center border`}>
                      <Activity className={`w-5 h-5 ${isProfit ? 'text-[#00d4aa]' : 'text-red-400'}`} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 relative z-10 mb-2">
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Invested</div>
                      <div className="text-lg text-white font-mono">${Number(sub.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Profit/Loss</div>
                      <div className={`text-lg font-mono ${isProfit ? 'text-[#00d4aa]' : 'text-red-400'}`}>
                        {isProfit ? '+' : ''}${pnl.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end relative z-10 pt-3 border-t border-white/5">
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">Current Equity</div>
                      <div className="text-sm text-white font-semibold">${(Number(sub.amount) + pnl).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#00d4aa] uppercase tracking-widest font-bold">Active</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <h2 className="text-sm text-white font-bold uppercase tracking-widest mb-4">Top Master Traders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {traders.length === 0 ? (
          <div className="col-span-full py-12 text-center text-gray-500 border border-white/5 bg-[#0a0f1c] rounded-sm">No master traders available at the moment.</div>
        ) : (
          traders.map(trader => {
            const nameInitials = trader.name
              ? trader.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()
              : 'TR';

            return (
              <div key={trader.id} className="bg-[#0a0f1c] border border-white/5 rounded-sm overflow-hidden flex flex-col group hover:border-[#c9a84c]/30 transition-all duration-300">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center overflow-hidden">
                        {trader.avatar_url ? (
                          <img src={trader.avatar_url} alt={trader.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-sm font-bold text-purple-300 uppercase tracking-wider">
                            {nameInitials}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg text-white font-['Outfit'] font-semibold leading-tight">{trader.name}</h3>
                        <div className="text-[11px] text-gray-500 uppercase tracking-widest mt-1">{trader.followers_count} Followers</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[13px] text-gray-400 leading-relaxed mb-6 line-clamp-2 min-h-[40px]">
                    {trader.description || 'Professional quantitative trader.'}
                  </p>

                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#070b14] border border-white/5 rounded-sm">
                    <div className="text-center border-r border-white/5">
                      <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Win Rate</div>
                      <div className="text-[15px] text-white font-['Outfit'] font-semibold">{Number(trader.win_rate).toFixed(1)}%</div>
                    </div>
                    <div className="text-center border-r border-white/5">
                      <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Total PnL</div>
                      <div className="text-[15px] text-[#00d4aa] font-['Outfit'] font-semibold">
                        +${Number(trader.total_pnl).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">ROI</div>
                      <div className="text-[15px] text-[#c9a84c] font-['Outfit'] font-semibold">+{Number(trader.roi).toFixed(1)}%</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-white/5 bg-white/[0.01]">
                  <button 
                    onClick={() => setSelectedTrader(trader)}
                    className="w-full py-3 bg-white/5 hover:bg-[#c9a84c] text-gray-300 hover:text-[#070b14] border border-white/5 hover:border-transparent transition-all duration-300 rounded-sm text-[11px] uppercase tracking-widest font-bold hover:shadow-lg hover:shadow-[#c9a84c]/10"
                  >
                    Copy Trader
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Dialog open={!!selectedTrader} onOpenChange={(open) => !open && setSelectedTrader(null)}>
        <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white sm:max-w-md">
          {selectedTrader && (
            <>
              <div className="py-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-[#c9a84c]/30 flex items-center justify-center mb-4 overflow-hidden">
                    {selectedTrader.avatar_url ? <img src={selectedTrader.avatar_url} alt={selectedTrader.name} className="w-full h-full object-cover" /> : <Users className="w-7 h-7 text-[#c9a84c]" />}
                  </div>
                  <h2 className="text-2xl text-white font-['Outfit']">{selectedTrader.name}</h2>
                  <div className="text-[11px] text-[#00d4aa] uppercase tracking-widest font-bold mt-1">Win Rate: {Number(selectedTrader.win_rate).toFixed(1)}%</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">Copy Amount (USD)</label>
                      <span className="text-[11px] text-gray-500">Available: ${Number(totalBalance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <input 
                      type="number" 
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      placeholder="0.00" 
                      className="w-full bg-[#070b14] border border-white/10 text-white p-4 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors text-xl font-['Outfit']"
                    />
                  </div>

                  <div className="p-4 bg-white/5 border border-[#c9a84c]/20 rounded-sm text-[12px] text-gray-400 leading-relaxed">
                    By copying this trader, your portfolio will automatically mirror their market positions. The amount you specify will be dedicated to their strategy. You can withdraw your copy funds at any time.
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button onClick={() => setSelectedTrader(null)} className="flex-1 py-3 bg-transparent border border-white/10 text-white hover:bg-white/5 rounded-sm uppercase tracking-widest text-xs font-bold transition-colors">
                  Cancel
                </button>
                <button disabled={copying} onClick={handleCopy} className="flex-1 py-3 bg-[#c9a84c] text-[#070b14] hover:bg-[#b59640] rounded-sm uppercase tracking-widest text-xs font-bold transition-colors">
                  {copying ? 'Processing...' : 'Confirm Copy'}
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
}

// ---- TAB COMPONENTS ----

function HomeTab({ setActiveTab, profile }: { setActiveTab: (tab: string) => void, profile?: any }) {
  const { transactions } = useTransactionStore();
  const { investments } = useInvestmentStore();
  const userTransactions = [...transactions].sort((a,b) => b.timestamp - a.timestamp).slice(0, 5);
  
  const adminProfitSum = transactions
    .filter(tx => tx.asset === 'PROFIT' && tx.status === 'approved')
    .reduce((acc, tx) => acc + (tx.type === 'deposit' ? Number(tx.amount) : -Number(tx.amount)), 0);

  const totalWithdrawn = transactions
    .filter(tx => tx.type === 'withdrawal' && tx.status === 'approved')
    .reduce((acc, tx) => acc + Number(tx.amount), 0);

  const roiEarned = investments.reduce((acc: number, inv: any) => {
    const daysPassed = Math.floor((Date.now() - new Date(inv.created_at).getTime()) / (1000 * 60 * 60 * 24));
    return acc + (inv.amount * inv.daily_roi * Math.max(0, daysPassed));
  }, 0);

  const activeInvestedPrincipal = investments
    .filter((inv: any) => inv.status === 'active')
    .reduce((acc: number, inv: any) => acc + Number(inv.amount), 0);

  const totalBalance = Number(profile?.balance || 0) + Number(profile?.profit || 0) + activeInvestedPrincipal + roiEarned + Number(profile?.total_earned_referrals || 0);
  const displayWalletBalance = Number(profile?.balance || 0) - adminProfitSum;
  const displayTradingProfits = Number(profile?.profit || 0) + adminProfitSum;

  const [marketData, setMarketData] = useState<any[]>([
    { name: 'Bitcoin', symbol: 'BTC', price: 67250.00, change: 1.25, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png' },
    { name: 'Ethereum', symbol: 'ETH', price: 3480.00, change: -0.45, image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
    { name: 'Solana', symbol: 'SOL', price: 142.50, change: 3.12, image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
    { name: 'Ripple', symbol: 'XRP', price: 0.48, change: 0.15, image: 'https://assets.coingecko.com/coins/images/44/large/xrp.png' }
  ]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,ripple');
        if (!res.ok) throw new Error('CoinGecko failed');
        const data = await res.json();
        if (Array.isArray(data)) {
          setMarketData(data.map((coin: any) => ({
            name: coin.name,
            symbol: coin.symbol.toUpperCase(),
            price: coin.current_price,
            change: coin.price_change_percentage_24h,
            image: coin.image
          })));
        }
      } catch (e) {
        console.warn('CoinGecko market fetch failed, falling back to Coinbase API:', e);
        try {
          const res = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=USD');
          if (!res.ok) throw new Error('Coinbase failed');
          const json = await res.json();
          const rates = json?.data?.rates;
          if (rates) {
            const coins = [
              { name: 'Bitcoin', symbol: 'BTC', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png' },
              { name: 'Ethereum', symbol: 'ETH', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
              { name: 'Solana', symbol: 'SOL', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
              { name: 'Ripple', symbol: 'XRP', image: 'https://assets.coingecko.com/coins/images/44/large/xrp.png' }
            ];
            setMarketData(coins.map(c => {
              const rate = Number(rates[c.symbol]);
              return {
                name: c.name,
                symbol: c.symbol,
                price: rate > 0 ? 1 / rate : (c.symbol === 'BTC' ? 67250 : c.symbol === 'ETH' ? 3480 : c.symbol === 'SOL' ? 142.50 : 0.48),
                change: 0.00,
                image: c.image
              };
            }));
          }
        } catch (cbErr) {
          console.error('All market APIs failed:', cbErr);
        }
      }
    };
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Premium Hero Welcome & Performance Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0e1629] via-[#0a0f1c] to-[#0e1629] border border-white/5 p-6 sm:p-8 rounded-sm">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00d4aa]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse"></span>
              <span className="text-[10px] text-[#00d4aa] uppercase tracking-[0.2em] font-bold">Secure Client Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl text-white font-['Outfit'] font-light mb-2">
              Welcome back, <span className="font-semibold text-[#c9a84c]">{profile?.email?.split('@')[0] || 'Client'}</span>
            </h1>
            <p className="text-gray-400 text-[13px] max-w-xl leading-relaxed">
              Track your asset performance, manage copy trading subscriptions, and deploy capital directly to earn compound returns.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setActiveTab('wallet')}
              className="bg-[#c9a84c] hover:bg-[#b59640] text-[#070b14] px-5 py-3 rounded-sm font-bold text-[11px] uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-[#c9a84c]/20 flex items-center gap-2"
            >
              <Wallet className="w-3.5 h-3.5" /> Deposit
            </button>
            <button 
              onClick={() => setActiveTab('wallet')}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-3 rounded-sm font-bold text-[11px] uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <ArrowDownLeft className="w-3.5 h-3.5" /> Withdraw
            </button>
          </div>
        </div>

        {/* Integrated Portfolio Performance Bar */}
        <div className="mt-6 pt-6 border-t border-white/5 relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <span>Trading Profits: <strong className="text-white font-semibold font-mono">${displayTradingProfits.toLocaleString(undefined, {minimumFractionDigits: 2})}</strong></span>
          </div>
          <span className="hidden sm:inline text-gray-600">|</span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/20 flex items-center justify-center">
              <ArrowDownLeft className="w-3.5 h-3.5 text-[#00d4aa]" />
            </div>
            <span>Successfully Withdrawn: <strong className="text-white font-semibold font-mono">${totalWithdrawn.toLocaleString(undefined, {minimumFractionDigits: 2})}</strong></span>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Balance Card: 8 Columns */}
        <div className="lg:col-span-8 bg-[#0a0f1c] border border-white/5 p-5 md:p-8 relative overflow-hidden rounded-sm flex flex-col justify-between min-h-[300px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/10 rounded-full blur-[80px] pointer-events-none" />
          <div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-2">Total Portfolio Value</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-['Outfit'] font-light text-white tracking-tight">${totalBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 text-[#00d4aa] rounded-full text-[10px] uppercase tracking-widest font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse"></div>Live
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 relative z-10">
            <div><div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Wallet Balance</div><div className="text-lg text-white font-light font-['Outfit']">${displayWalletBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div></div>
            <div><div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Trading Profits</div><div className="text-lg text-purple-400 font-light font-['Outfit']">+${displayTradingProfits.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div></div>
            <div><div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Referral Earnings</div><div className="text-lg text-[#00d4aa] font-light font-['Outfit']">+${Number(profile?.total_earned_referrals || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div></div>
          </div>
        </div>

        {/* Quick Operations Card: 4 Columns */}
        <div className="lg:col-span-4 bg-[#0a0f1c] border border-white/5 rounded-sm p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-4">Quick Operations</h3>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setActiveTab('wallet')} 
                className="flex flex-col items-center justify-center p-5 bg-[#070b14] border border-white/5 rounded-sm hover:bg-white/5 transition-all group text-center"
              >
                <Wallet className="w-6 h-6 text-[#c9a84c] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Deposit</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('wallet')} 
                className="flex flex-col items-center justify-center p-5 bg-[#070b14] border border-white/5 rounded-sm hover:bg-white/5 transition-all group text-center"
              >
                <ArrowDownLeft className="w-6 h-6 text-[#00d4aa] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Withdraw</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('copytrade')} 
                className="flex flex-col items-center justify-center p-5 bg-[#070b14] border border-white/5 rounded-sm hover:bg-white/5 transition-all group text-center"
              >
                <Users className="w-6 h-6 text-[#3b82f6] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Copy Trade</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('invest')} 
                className="flex flex-col items-center justify-center p-5 bg-[#070b14] border border-white/5 rounded-sm hover:bg-white/5 transition-all group text-center"
              >
                <TrendingUp className="w-6 h-6 text-[#a855f7] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Invest</span>
              </button>
            </div>
          </div>
          
          <div className="pt-4 border-t border-white/5 mt-4">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Account Status</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00d4aa]"></span>
              <span className="text-xs text-white font-medium capitalize">{profile?.status || 'Active'}</span>
            </div>
          </div>
        </div>

        {/* ─── Financial Summary Strip ─── */}
        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Referral Rewards Earned */}
          <div className="relative overflow-hidden bg-[#0a0f1c] border border-white/5 rounded-sm p-6 flex flex-col gap-4 group hover:border-[#c9a84c]/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c]/8 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-sm bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
                <Gift className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <span className="text-[9px] text-[#c9a84c] uppercase tracking-[0.2em] font-bold bg-[#c9a84c]/10 px-2 py-1 rounded-full">
                Affiliate Program
              </span>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Referral Rewards</div>
              <div className="text-3xl text-white font-['Outfit'] font-light">
                ${Number(profile?.total_earned_referrals || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-[11px] text-gray-500 mt-1">Earned from affiliate referrals</div>
            </div>
            <div className="pt-3 border-t border-white/5">
              <button
                onClick={() => setActiveTab('rewards')}
                className="w-full py-2 text-[11px] uppercase tracking-widest font-bold bg-white/5 hover:bg-white/10 text-gray-300 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Gift className="w-3.5 h-3.5 text-[#c9a84c]" /> View Rewards Program
              </button>
            </div>
          </div>

          {/* Withdrawable Balance */}
          <div className="relative overflow-hidden bg-[#0a0f1c] border border-white/5 rounded-sm p-6 flex flex-col gap-4 group hover:border-white/10 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                <ArrowDownLeft className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold bg-white/5 px-2 py-1 rounded-full">
                Available Now
              </span>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Withdrawable Balance</div>
              <div className="text-3xl text-white font-['Outfit'] font-light">
                ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-[11px] text-gray-500 mt-1">Wallet balance + referral rewards</div>
            </div>
            <div className="pt-3 border-t border-white/5">
              <button
                onClick={() => setActiveTab('wallet')}
                className="w-full py-2 text-[11px] uppercase tracking-widest font-bold bg-white/5 hover:bg-white/10 text-gray-300 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <ArrowDownLeft className="w-3.5 h-3.5" /> Withdraw Funds
              </button>
            </div>
          </div>
        </div>

        {/* Live Market Data: 6 Columns */}
        <div className="lg:col-span-6 bg-[#0a0f1c] border border-white/5 rounded-sm p-6 overflow-hidden relative flex flex-col justify-between min-h-[300px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="text-[10px] text-[#00d4aa] uppercase tracking-[0.2em] font-bold flex items-center gap-2"><Activity className="w-3 h-3" /> LIVE MARKET</div>
            </div>
            <div className="space-y-4 relative z-10">
              {marketData.length === 0 ? (
                <div className="text-[13px] text-gray-500">Fetching live rates...</div>
              ) : (
                marketData.map(coin => (
                  <div key={coin.symbol} className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center font-bold text-[10px] text-white border border-white/10 overflow-hidden">
                        {coin.image ? <img src={coin.image} alt={coin.name} className="w-full h-full object-cover p-1.5" /> : coin.symbol.substring(0, 1)}
                      </div>
                      <div><div className="text-[13px] text-white font-medium">{coin.name}</div><div className="text-[10px] text-gray-400">{coin.symbol}</div></div>
                    </div>
                    <div className="text-right">
                      <div className="text-[14px] text-white font-['Outfit']">${coin.price?.toLocaleString()}</div>
                      <div className={`text-[10px] font-bold ${coin.change >= 0 ? 'text-[#00d4aa]' : 'text-red-400'}`}>
                        {coin.change >= 0 ? '+' : ''}{coin.change?.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Recent Transactions: 6 Columns */}
        <div className="lg:col-span-6 bg-[#0a0f1c] border border-white/5 rounded-sm p-6 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-light text-white font-['Outfit']">History</h2>
              <span onClick={() => setActiveTab('wallet')} className="text-[10px] text-[#c9a84c] uppercase tracking-widest cursor-pointer hover:underline">See all</span>
            </div>
            <div className="divide-y divide-white/5">
              {userTransactions.length === 0 ? (
                 <div className="text-[13px] text-gray-500 py-4">No recent history.</div>
              ) : (
                userTransactions.map((tx: any) => {
                  const isDeposit = tx.type === 'deposit';
                  const isProfit = tx.asset === 'PROFIT';
                  const isBonus = tx.asset === 'BONUS';
                  const label = tx.asset === 'PROFIT' ? 'Profit' : tx.asset === 'BONUS' ? 'Bonus' : tx.asset === 'ADJUSTMENT' ? 'Adjustment' : (tx.asset === 'MANUAL DEPOSIT' || tx.asset === 'DEPOSIT') ? 'Deposit' : tx.type;

                  return (
                    <div key={tx.id} className="py-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                          <Wallet className="w-4 h-4" style={{color: (isProfit || isBonus) ? '#a855f7' : '#d1d5db'}} />
                        </div>
                        <div className="text-[13px] text-white font-medium capitalize">
                          {label} {tx.status === 'pending' ? '(Pending)' : ''}
                        </div>
                      </div>
                      <div className="text-[13px] font-bold" style={{color: isDeposit ? '#00d4aa' : 'white'}}>
                        {isDeposit ? '+' : '-'}${(tx.amount || 0).toLocaleString(undefined, {minimumFractionDigits: 2})}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


function CryptoSelector({ focusColor, value, onChange }: { focusColor: string, value?: string, onChange?: (v: string) => void }) {
  const { cryptos } = useCryptoStore();
  const activeCryptos = cryptos.filter(c => c.active);

  const getCryptoLogo = (symbol: string) => {
    const map: Record<string, string> = {
      btc: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
      eth: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
      usdt: 'https://cryptologos.cc/logos/tether-usdt-logo.svg',
      bnb: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg',
      sol: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
      usdc: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg',
      xrp: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg',
      doge: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg',
      ton: 'https://cryptologos.cc/logos/toncoin-ton-logo.svg',
      ada: 'https://cryptologos.cc/logos/cardano-ada-logo.svg'
    };
    return map[symbol.toLowerCase()] || null;
  };

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`w-full bg-[#070b14] border-white/10 text-white p-3 h-auto rounded-sm focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-offset-transparent ${focusColor} hover:bg-white/[0.02] transition-colors shadow-none`}>
        <SelectValue placeholder="Select Crypto" />
      </SelectTrigger>
      <SelectContent className="bg-[#0a0f1c] border-white/10 text-white max-h-[300px]">
        <SelectGroup>
          {activeCryptos.map(crypto => {
            const logo = getCryptoLogo(crypto.symbol);
            return (
            <SelectItem key={crypto.id} value={crypto.symbol.toLowerCase()} className="hover:bg-white/5 focus:bg-white/5 cursor-pointer py-2.5">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold shrink-0 overflow-hidden" style={!logo ? { backgroundColor: `${crypto.color}15`, color: crypto.color } : {}}>
                  {logo ? <img src={logo} alt={crypto.name} className="w-full h-full object-cover p-0.5" /> : (crypto.symbol || '?').substring(0, 1)}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[13px] font-medium leading-tight mb-0.5">{crypto.name}</span>
                  <span className="text-[10px] text-gray-500 font-semibold leading-tight">{crypto.symbol}</span>
                </div>
              </div>
            </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

// Map from our crypto symbol to CoinGecko ID
const COINGECKO_IDS: Record<string, string> = {
  BTC: 'bitcoin', ETH: 'ethereum', SOL: 'solana', XRP: 'ripple',
  USDT: 'tether', USDC: 'usd-coin', BNB: 'binancecoin', ADA: 'cardano',
  DOGE: 'dogecoin', LTC: 'litecoin', DOT: 'polkadot', MATIC: 'matic-network',
  AVAX: 'avalanche-2', LINK: 'chainlink', UNI: 'uniswap', TRX: 'tron',
};

function WalletTab({ profile, settings }: { profile?: any, settings?: any }) {
  const [mode, setMode] = useState('deposit');
  const [copied, setCopied] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState('btc');
  const [amount, setAmount] = useState('');
  const [txid, setTxid] = useState('');
  const [cryptoPrices, setCryptoPrices] = useState<Record<string, number>>({
    BTC: 67250.00,
    ETH: 3480.00,
    SOL: 142.50,
    XRP: 0.48,
    USDT: 1.00,
    USDC: 1.00,
    BNB: 575.00,
    ADA: 0.38,
    DOGE: 0.12,
    LTC: 72.50,
    DOT: 5.80,
    MATIC: 0.55,
    AVAX: 28.20,
    LINK: 13.90,
    UNI: 7.20,
    TRX: 0.12,
  });
  const [pricesLoading, setPricesLoading] = useState(true);

  const { addTransaction, transactions } = useTransactionStore();
  const { cryptos } = useCryptoStore();
  const { investments } = useInvestmentStore();
  
  const userTransactions = [...transactions].sort((a,b) => b.timestamp - a.timestamp);
  const selectedCryptoData = cryptos.find(c => c.symbol.toLowerCase() === selectedAsset.toLowerCase() || c.id === selectedAsset) || cryptos[0];

  // Fetch live prices from CoinGecko with Coinbase fallback
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setPricesLoading(true);
        const ids = Object.values(COINGECKO_IDS).join(',');
        const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
        if (!res.ok) throw new Error('CoinGecko failed');
        const data = await res.json();
        const prices: Record<string, number> = {};
        Object.entries(COINGECKO_IDS).forEach(([symbol, id]) => {
          if (data[id]?.usd) prices[symbol] = data[id].usd;
        });
        setCryptoPrices(prices);
      } catch (e) {
        console.warn('CoinGecko fetch failed, falling back to Coinbase API:', e);
        try {
          const res = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=USD');
          if (!res.ok) throw new Error('Coinbase failed');
          const json = await res.json();
          const rates = json?.data?.rates;
          if (rates) {
            const prices: Record<string, number> = {};
            Object.keys(COINGECKO_IDS).forEach(symbol => {
              const rate = Number(rates[symbol]);
              if (rate > 0) {
                prices[symbol] = 1 / rate;
              }
            });
            prices['USDT'] = 1.00;
            prices['USDC'] = 1.00;
            setCryptoPrices(prev => ({ ...prev, ...prices }));
          }
        } catch (cbErr) {
          console.error('All price APIs failed:', cbErr);
        }
      } finally {
        setPricesLoading(false);
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  const selectedSymbol = selectedCryptoData?.symbol?.toUpperCase() || '';
  const selectedPrice = cryptoPrices[selectedSymbol] || null;
  const amountNum = parseFloat(amount) || 0;
  const usdValue = selectedPrice ? amountNum * selectedPrice : null;

  const roiEarned = investments.reduce((acc: number, inv: any) => {
    // Floor the days passed to prevent the balance from artificially 'counting up' in real-time
    const daysPassed = Math.floor((Date.now() - new Date(inv.created_at).getTime()) / (1000 * 60 * 60 * 24));
    return acc + (inv.amount * inv.daily_roi * Math.max(0, daysPassed));
  }, 0);

  const activeInvestedPrincipal = investments
    .filter((inv: any) => inv.status === 'active')
    .reduce((acc: number, inv: any) => acc + Number(inv.amount), 0);

  const totalBalance = Number(profile?.balance || 0) + Number(profile?.profit || 0) + activeInvestedPrincipal + roiEarned + Number(profile?.total_earned_referrals || 0);

  const handleCopy = (text: string) => {
    if (text) navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [depositLoading, setDepositLoading] = useState(false);
  const [withdrawLoading, setWithdrawLoading] = useState(false);
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [alertState, setAlertState] = useState<{ open: boolean; title: string; message: string; type: 'deposit' | 'withdrawal' | 'error' | 'info' }>({
    open: false, title: '', message: '', type: 'info'
  });

  const showModal = (title: string, message: string, type: 'deposit' | 'withdrawal' | 'error' | 'info' = 'info') => {
    setAlertState({ open: true, title, message, type });
  };

  const handleDepositSubmit = async () => {
    if (!amount || !screenshotFile) {
      showModal("Missing Information", "Please enter the amount and upload a screenshot as proof of payment.", 'error');
      return;
    }
    setDepositLoading(true);
    let screenshotUrl = '';

    try {
      const fileExt = screenshotFile.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from('deposit-proofs')
        .upload(fileName, screenshotFile);

      if (error) throw error;
      
      const { data: publicData } = supabase.storage
        .from('deposit-proofs')
        .getPublicUrl(fileName);
        
      screenshotUrl = publicData.publicUrl;
    } catch (err: any) {
      console.error('Upload error:', err);
      showModal("Upload Failed", "There was an error uploading your screenshot. Please try again.", 'error');
      setDepositLoading(false);
      return;
    }

    // Convert crypto amount to USD using live price
    const sym = selectedCryptoData?.symbol?.toUpperCase() || '';
    const livePrice = cryptoPrices[sym];
    const cryptoAmt = parseFloat(amount);
    
    if (!livePrice && sym !== 'USDT' && sym !== 'USDC') {
      showModal("Network Error", "Unable to securely fetch live crypto prices. Please wait a few seconds and try again, or use a stablecoin.", 'error');
      setDepositLoading(false);
      return;
    }

    const usdAmount = livePrice ? cryptoAmt * livePrice : cryptoAmt;

    await addTransaction({
      type: 'deposit',
      amount: usdAmount,
      asset: `(${cryptoAmt} ${selectedCryptoData ? selectedCryptoData.symbol : selectedAsset.toUpperCase()})`,
      txid,
      screenshotUrl
    } as any);
    setDepositLoading(false);
    setAmount('');
    setTxid('');
    setScreenshotFile(null);
    const usdNote = livePrice ? ` (~$${usdAmount.toLocaleString(undefined, {maximumFractionDigits: 2})})` : '';
    showModal("Deposit Submitted!", `Your ${cryptoAmt} ${sym}${usdNote} deposit has been submitted. Our team will verify and credit your balance within 24 hours.`, 'deposit');
  };

  const handleWithdrawSubmit = async () => {
    if (settings?.withdrawals_halted) {
      showModal("Withdrawals Halted", "Withdrawals are temporarily suspended due to network maintenance. Please try again later.", 'error');
      return;
    }
    if (!amount || !withdrawAddress) {
      showModal("Missing Information", "Please enter both the amount and your receiving wallet address.", 'error');
      return;
    }
    
    const sym = selectedCryptoData?.symbol?.toUpperCase() || '';
    const livePrice = cryptoPrices[sym];
    const cryptoAmt = parseFloat(amount);
    
    if (!livePrice && sym !== 'USDT' && sym !== 'USDC') {
      showModal("Network Error", "Unable to securely fetch live crypto prices. Please wait a few seconds and try again, or use a stablecoin.", 'error');
      return;
    }

    const usdAmount = livePrice ? cryptoAmt * livePrice : cryptoAmt;

    if (usdAmount > totalBalance) {
      showModal("Insufficient Funds", `You do not have enough available balance for this withdrawal. (${cryptoAmt} ${sym} ≈ $${usdAmount.toLocaleString(undefined, {maximumFractionDigits: 2})})`, 'error');
      return;
    }
    
    setWithdrawLoading(true);
    setVerificationError('');
    
    // Generate a 6-digit random verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(code);
    setEnteredCode('');
    
    try {
      // Send code to user's email via Resend
      await sendNotificationEmail(profile.email, 'withdrawal-verification', {
        amount: usdAmount,
        code: code,
        full_name: profile.name
      });
      
      setVerificationOpen(true);
    } catch (error: any) {
      console.error('Failed to send verification code:', error);
      showModal("Verification Error", "Failed to send verification code to your email. Please try again.", 'error');
    } finally {
      setWithdrawLoading(false);
    }
  };

  const handleVerifyAndWithdraw = async () => {
    if (enteredCode !== verificationCode) {
      setVerificationError("The verification code you entered is incorrect. Please check your email.");
      return;
    }
    
    const sym = selectedCryptoData?.symbol?.toUpperCase() || '';
    const livePrice = cryptoPrices[sym];
    const cryptoAmt = parseFloat(amount);
    const usdAmount = livePrice ? cryptoAmt * livePrice : cryptoAmt;

    setWithdrawLoading(true);
    try {
      await addTransaction({
        type: 'withdrawal',
        amount: usdAmount,
        asset: `(${cryptoAmt} ${selectedCryptoData ? selectedCryptoData.symbol : selectedAsset.toUpperCase()})`,
        txid: withdrawAddress
      });
      
      setAmount('');
      setWithdrawAddress('');
      setVerificationOpen(false);
      setEnteredCode('');
      setVerificationCode('');
      
      const usdNote = livePrice ? ` (~$${usdAmount.toLocaleString(undefined, {maximumFractionDigits: 2})})` : '';
      showModal("Withdrawal Requested!", `Your withdrawal of ${cryptoAmt} ${sym}${usdNote} has been submitted and is pending approval. You'll be notified once it's processed.`, 'withdrawal');
    } catch (err: any) {
      console.error('Withdrawal failed:', err);
      showModal("Withdrawal Failed", err.message || "An unexpected error occurred. Please try again.", "error");
    } finally {
      setWithdrawLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">

      {/* Rich Deposit/Withdrawal Success Modal */}
      <Dialog open={alertState.open} onOpenChange={(open) => setAlertState(prev => ({ ...prev, open }))}>
        <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white p-0 overflow-hidden max-w-md">
          {/* Colored top bar */}
          <div className={`h-1.5 w-full ${
            alertState.type === 'deposit' ? 'bg-gradient-to-r from-[#c9a84c] to-[#f0d080]' :
            alertState.type === 'withdrawal' ? 'bg-gradient-to-r from-[#00d4aa] to-[#00f5c8]' :
            alertState.type === 'error' ? 'bg-gradient-to-r from-red-500 to-red-400' :
            'bg-gradient-to-r from-white/20 to-white/10'
          }`} />

          <div className="p-8">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${
              alertState.type === 'deposit' ? 'bg-[#c9a84c]/15' :
              alertState.type === 'withdrawal' ? 'bg-[#00d4aa]/15' :
              alertState.type === 'error' ? 'bg-red-500/15' :
              'bg-white/10'
            }`}>
              {alertState.type === 'deposit' && (
                <svg className="w-8 h-8 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              )}
              {alertState.type === 'withdrawal' && (
                <svg className="w-8 h-8 text-[#00d4aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              )}
              {alertState.type === 'error' && (
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              )}
              {alertState.type === 'info' && (
                <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
              )}
            </div>

            {/* Title */}
            <h2 className={`text-xl font-['Outfit'] font-semibold text-center mb-3 ${
              alertState.type === 'deposit' ? 'text-[#c9a84c]' :
              alertState.type === 'withdrawal' ? 'text-[#00d4aa]' :
              alertState.type === 'error' ? 'text-red-400' :
              'text-white'
            }`}>{alertState.title}</h2>

            {/* Message */}
            <p className="text-gray-400 text-[14px] text-center leading-relaxed mb-6">{alertState.message}</p>

            {/* Status badge for deposit */}
            {alertState.type === 'deposit' && (
              <div className="flex items-center justify-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-sm px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
                <span className="text-[11px] text-[#c9a84c] uppercase tracking-widest font-bold">Pending Admin Review</span>
              </div>
            )}
            {alertState.type === 'withdrawal' && (
              <div className="flex items-center justify-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-sm px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
                <span className="text-[11px] text-[#00d4aa] uppercase tracking-widest font-bold">Processing · 24–48 hrs</span>
              </div>
            )}

            {/* Close button */}
            <button
              onClick={() => setAlertState(prev => ({ ...prev, open: false }))}
              className={`w-full py-3 font-bold text-[13px] tracking-widest uppercase rounded-sm transition-colors ${
                alertState.type === 'deposit' ? 'bg-[#c9a84c] hover:bg-[#b89945] text-[#070b14]' :
                alertState.type === 'withdrawal' ? 'bg-[#00d4aa] hover:bg-[#00b38f] text-[#070b14]' :
                alertState.type === 'error' ? 'bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30' :
                'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {alertState.type === 'deposit' ? 'Got it, Thanks!' :
               alertState.type === 'withdrawal' ? 'Done' :
               'Dismiss'}
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Withdrawal OTP Verification Dialog */}
      <Dialog open={verificationOpen} onOpenChange={(open) => {
        if (!withdrawLoading) {
          setVerificationOpen(open);
          if (!open) {
            setEnteredCode('');
            setVerificationCode('');
            setVerificationError('');
          }
        }
      }}>
        <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white p-0 overflow-hidden max-w-md">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#c9a84c] to-[#a3802c]" />
          <div className="p-8">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-[#c9a84c]/15 text-[#c9a84c] border border-[#c9a84c]/30">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-['Outfit'] font-semibold text-center mb-3 text-white">Security Verification</h2>
            <p className="text-gray-400 text-[14px] text-center leading-relaxed mb-6">
              A 6-digit verification code has been sent to your registered email address <strong className="text-white">{profile?.email}</strong>. Please enter the code below to authorize your withdrawal.
            </p>
            
            {verificationError && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-sm text-center">
                {verificationError}
              </div>
            )}
            
            <div className="space-y-4">
              <input
                type="text"
                maxLength={6}
                value={enteredCode}
                onChange={(e) => setEnteredCode(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6-digit code"
                className="w-full bg-[#070b14] border border-white/10 text-white p-4 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 text-center text-2xl font-mono tracking-[0.4em] placeholder:tracking-normal placeholder:text-sm placeholder:text-gray-600"
              />
              
              <button
                disabled={withdrawLoading || enteredCode.length !== 6}
                onClick={handleVerifyAndWithdraw}
                className="w-full bg-[#c9a84c] hover:bg-[#b5953f] text-[#070b14] py-4 font-bold text-[13px] tracking-widest uppercase transition-colors rounded-sm disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg shadow-[#c9a84c]/10"
              >
                {withdrawLoading ? (
                  <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Authorizing...</>
                ) : 'Confirm Withdrawal'}
              </button>
              
              <div className="text-center mt-4">
                <button
                  type="button"
                  disabled={withdrawLoading}
                  onClick={async () => {
                    setWithdrawLoading(true);
                    setVerificationError('');
                    const code = Math.floor(100000 + Math.random() * 900000).toString();
                    setVerificationCode(code);
                    try {
                      const sym = selectedCryptoData?.symbol?.toUpperCase() || '';
                      const livePrice = cryptoPrices[sym];
                      const cryptoAmt = parseFloat(amount);
                      const usdAmount = livePrice ? cryptoAmt * livePrice : cryptoAmt;
                      
                      await sendNotificationEmail(profile.email, 'withdrawal-verification', {
                        amount: usdAmount,
                        code: code,
                        full_name: profile.name
                      });
                      setVerificationError("A new code has been sent to your email.");
                    } catch (err) {
                      setVerificationError("Failed to resend code. Please try again.");
                    } finally {
                      setWithdrawLoading(false);
                    }
                  }}
                  className="text-xs text-[#c9a84c] hover:underline"
                >
                  Resend Verification Code
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mb-8 mt-4 md:mt-10">
        <h1 className="text-3xl text-white font-['Outfit'] font-light mb-6">Wallet</h1>
        
        <div className="flex border-b border-white/10 overflow-x-auto scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0">
          <button onClick={() => setMode('deposit')} className={`pb-4 px-6 text-[13px] uppercase tracking-widest font-semibold transition-all shrink-0 ${mode === 'deposit' ? 'text-[#c9a84c] border-b-2 border-[#c9a84c]' : 'text-gray-500 hover:text-white'}`}>Deposit</button>
          <button onClick={() => setMode('withdraw')} className={`pb-4 px-6 text-[13px] uppercase tracking-widest font-semibold transition-all shrink-0 ${mode === 'withdraw' ? 'text-[#c9a84c] border-b-2 border-[#c9a84c]' : 'text-gray-500 hover:text-white'}`}>Withdraw</button>
          <button onClick={() => setMode('history')} className={`pb-4 px-6 text-[13px] uppercase tracking-widest font-semibold transition-all shrink-0 ${mode === 'history' ? 'text-[#c9a84c] border-b-2 border-[#c9a84c]' : 'text-gray-500 hover:text-white'}`}>History</button>
        </div>
      </div>

      {mode === 'deposit' && (
        <div className="space-y-8">
          <div className="bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm">
            <h2 className="text-lg text-white font-['Outfit'] mb-6">Fund Your Account</h2>
            
            <div className="mb-6">
              <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-3 block">Choose Crypto Asset</label>
              <CryptoSelector focusColor="focus:border-[#c9a84c]/50 focus:ring-[#c9a84c]/50" value={selectedAsset} onChange={setSelectedAsset} />
            </div>

            <div className="p-6 bg-[#070b14] border border-[#c9a84c]/30 rounded-sm mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[11px] text-gray-400 uppercase tracking-widest block">{selectedCryptoData?.symbol || 'BTC'} Wallet Address</label>
                <span className="text-[10px] text-[#c9a84c] font-semibold bg-[#c9a84c]/10 px-2 py-0.5 rounded-sm">Network: {selectedCryptoData?.network || 'N/A'}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input readOnly value={selectedCryptoData?.address || "Address not configured"} className="w-full bg-transparent border border-white/10 text-white p-3 rounded-sm text-sm font-mono focus:outline-none select-all overflow-hidden text-ellipsis" />
                <button onClick={() => handleCopy(selectedCryptoData?.address || '')} className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-sm flex items-center justify-center gap-2 text-[12px] uppercase tracking-widest font-semibold transition-colors shrink-0">
                  {copied ? <Check className="w-4 h-4 text-[#00d4aa]" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block">
                  Amount Sent ({selectedSymbol || 'Crypto'})
                </label>
                <div className="relative">
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 0.5" className="w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 pr-16" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500 font-bold">{selectedSymbol}</span>
                </div>
                {amountNum > 0 && (
                  <div className="mt-1.5 flex items-center gap-1">
                    {pricesLoading ? (
                      <span className="text-[11px] text-gray-600">Fetching price...</span>
                    ) : usdValue ? (
                      <span className="text-[12px] text-[#00d4aa] font-semibold">≈ ${usdValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</span>
                    ) : (
                      <span className="text-[11px] text-gray-500">Price unavailable</span>
                    )}
                    {selectedPrice && !pricesLoading && (
                      <span className="text-[10px] text-gray-600 ml-1">· 1 {selectedSymbol} = ${selectedPrice.toLocaleString()}</span>
                    )}
                  </div>
                )}
              </div>
              <div>
                <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block">Transaction ID (TXID) <span className="text-gray-500 lowercase">(Optional)</span></label>
                <input type="text" value={txid} onChange={(e) => setTxid(e.target.value)} placeholder="0x1a2b3c..." className="w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#c9a84c]/50" />
              </div>
            </div>

            <div className="mb-8">
              <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block">Upload Screenshot (Evidence of Payment)</label>
              <div className="relative w-full border-2 border-dashed border-white/10 hover:border-[#c9a84c]/50 rounded-sm p-6 text-center transition-colors cursor-pointer bg-[#070b14]">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => setScreenshotFile(e.target.files?.[0] || null)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center gap-2 pointer-events-none">
                  {screenshotFile ? (
                    <>
                      <div className="w-10 h-10 bg-[#c9a84c]/10 rounded-full flex items-center justify-center mb-2">
                        <Check className="w-5 h-5 text-[#c9a84c]" />
                      </div>
                      <span className="text-sm font-medium text-white">{screenshotFile.name}</span>
                      <span className="text-[11px] text-gray-500 uppercase tracking-widest">Click to change file</span>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-2">
                        <ImageIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <span className="text-sm font-medium text-white">Select screenshot image</span>
                      <span className="text-[11px] text-gray-500 uppercase tracking-widest">PNG, JPG up to 5MB</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <button disabled={depositLoading} onClick={handleDepositSubmit} className="w-full bg-white text-[#070b14] py-4 font-bold text-[13px] tracking-widest uppercase transition-colors rounded-sm hover:bg-gray-200 disabled:opacity-60 flex items-center justify-center gap-3">
              {depositLoading ? (
                <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Submitting...</>
              ) : 'Submit Deposit Proof'}
            </button>
          </div>
        </div>
      )}
      
      {mode === 'withdraw' && (() => {
        const kycStatus = profile?.kyc_status || 'unsubmitted';
        const isVerified = kycStatus === 'verified';

        if (!isVerified) {
          return (
            <div className="space-y-6">
              {/* Lock Banner */}
              <div className="relative overflow-hidden bg-[#0a0f1c] border border-[#c9a84c]/30 rounded-sm p-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#c9a84c]/10 blur-[60px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  {/* Lock icon */}
                  <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>

                  <h2 className="text-2xl text-white font-['Outfit'] font-light mb-2">Withdrawals Locked</h2>

                  {kycStatus === 'pending' ? (
                    <>
                      <p className="text-gray-400 text-[14px] leading-relaxed max-w-sm mx-auto mb-4">
                        Your identity verification is <span className="text-[#c9a84c] font-semibold">currently under review</span>. Withdrawals will be unlocked once your KYC is approved, which typically takes <span className="text-[#c9a84c] font-semibold">2 to 14 business days</span>.
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
                        <span className="text-[11px] text-[#c9a84c] uppercase tracking-widest font-bold">KYC Under Review</span>
                      </div>
                    </>
                  ) : kycStatus === 'rejected' ? (
                    <>
                      <p className="text-gray-400 text-[14px] leading-relaxed max-w-sm mx-auto mb-4">
                        Your KYC verification was <span className="text-red-400 font-semibold">rejected</span>. Please re-submit your identity documents to unlock withdrawals.
                      </p>
                      {profile?.kyc_rejection_reason && (
                        <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-sm mb-6 text-[12px] text-red-400 max-w-sm">
                          Reason: {profile.kyc_rejection_reason}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-gray-400 text-[14px] leading-relaxed max-w-sm mx-auto mb-4">
                        You must complete <span className="text-white font-semibold">identity verification (KYC)</span> before you can make withdrawals. This is required to secure your account and comply with regulations.
                      </p>
                    </>
                  )}

                  {/* Steps */}
                  {kycStatus === 'unsubmitted' && (
                    <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-6 text-left">
                      {[
                        { step: '01', label: 'Submit your ID documents' },
                        { step: '02', label: 'Admin reviews in 2–14 days' },
                        { step: '03', label: 'Withdrawals unlocked' },
                      ].map(item => (
                        <div key={item.step} className="p-3 bg-white/5 border border-white/5 rounded-sm">
                          <div className="text-[10px] text-[#c9a84c] font-bold uppercase tracking-widest mb-1">{item.step}</div>
                          <div className="text-[11px] text-gray-400 leading-snug">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Dimmed/blurred withdrawal form preview */}
              <div className="relative rounded-sm overflow-hidden select-none pointer-events-none">
                <div className="absolute inset-0 z-10 bg-[#070b14]/80 backdrop-blur-[3px] flex items-center justify-center rounded-sm">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-[#c9a84c]/40 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <div className="text-[11px] text-gray-500 uppercase tracking-widest">Locked until KYC verified</div>
                  </div>
                </div>
                <div className="bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm opacity-30">
                  <h2 className="text-lg text-white font-['Outfit'] mb-6">Withdraw Funds</h2>
                  <div className="h-16 bg-white/5 rounded-sm mb-4" />
                  <div className="h-12 bg-white/5 rounded-sm mb-4" />
                  <div className="h-12 bg-white/5 rounded-sm mb-6" />
                  <div className="h-14 bg-white/5 rounded-sm" />
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="space-y-8">
            <div className="bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm">
              <h2 className="text-lg text-white font-['Outfit'] mb-2">Withdraw Funds</h2>
              <p className="text-[12px] text-gray-400 mb-6">Processed within 24–48 hours after approval.</p>
              
              <div className="p-6 bg-gradient-to-r from-[#00d4aa]/10 to-transparent border border-[#00d4aa]/20 rounded-sm mb-8">
                <div className="text-[11px] text-[#00d4aa] uppercase tracking-widest font-bold mb-1">Available to Withdraw</div>
                <div className="text-3xl text-white font-light font-['Outfit']">${totalBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block">Amount ({selectedSymbol || 'Crypto'})</label>
                  <div className="relative">
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 0.5" className="w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#00d4aa]/50 pr-16" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500 font-bold">{selectedSymbol}</span>
                  </div>
                  {amountNum > 0 && (
                    <div className="mt-1.5 flex items-center gap-1">
                      {pricesLoading ? (
                        <span className="text-[11px] text-gray-600">Fetching price...</span>
                      ) : usdValue ? (
                        <span className="text-[12px] text-[#00d4aa] font-semibold">≈ ${usdValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</span>
                      ) : (
                        <span className="text-[11px] text-gray-500">Price unavailable</span>
                      )}
                      {selectedPrice && !pricesLoading && (
                        <span className="text-[10px] text-gray-600 ml-1">· 1 {selectedSymbol} = ${selectedPrice.toLocaleString()}</span>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block">Withdrawal Method</label>
                  <CryptoSelector focusColor="focus:border-[#00d4aa]/50 focus:ring-[#00d4aa]/50" value={selectedAsset} onChange={setSelectedAsset} />
                </div>
                <div>
                  <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block">Your Receiving Address</label>
                  <input type="text" value={withdrawAddress} onChange={(e) => setWithdrawAddress(e.target.value)} placeholder="Paste address here" className="w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#00d4aa]/50" />
                </div>
              </div>

              <p className="text-[11px] text-gray-500 mb-6 flex gap-2"><span className="text-[#c9a84c]">⚠</span> Early withdrawal from active direct investments may incur a 10% processing fee. Only matured balances are instantly withdrawable.</p>

              <button disabled={withdrawLoading} onClick={handleWithdrawSubmit} className="w-full bg-[#00d4aa] text-[#070b14] py-4 font-bold text-[13px] tracking-widest uppercase hover:bg-[#00b38f] transition-colors rounded-sm disabled:opacity-60 flex items-center justify-center gap-3">
                {withdrawLoading ? (
                  <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Submitting...</>
                ) : 'Submit Withdrawal Request'}
              </button>
            </div>
          </div>
        );
      })()}


      {mode === 'history' && (
        <div className="space-y-8">
          <div className="bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm">
            <h2 className="text-lg text-white font-['Outfit'] mb-6">Transaction History</h2>
            
            {userTransactions.length === 0 ? (
              <div className="text-center py-12 text-gray-500 border border-white/5 bg-[#070b14] rounded-sm">No transactions found.</div>
            ) : (
              <div className="space-y-4">
                {userTransactions.map(tx => {
                  const timeAgo = Math.floor((Date.now() - tx.timestamp) / 60000);
                  const timeStr = timeAgo < 60 ? `${timeAgo} mins ago` : `${Math.floor(timeAgo/60)} hours ago`;
                  
                  return (
                    <div key={tx.id} className="bg-[#070b14] border border-white/5 p-5 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm ${
                            tx.status === 'pending' ? 'bg-[#c9a84c]/20 text-[#c9a84c]' : 
                            tx.status === 'approved' ? 'bg-[#00d4aa]/20 text-[#00d4aa]' : 
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {tx.status}
                          </span>
                          <span className="text-[12px] text-gray-400 uppercase tracking-widest">
                            {tx.asset === 'PROFIT' ? 'Profit' : tx.asset === 'BONUS' ? 'Bonus' : tx.asset === 'ADJUSTMENT' ? 'Adjustment' : (tx.asset === 'MANUAL DEPOSIT' || tx.asset === 'DEPOSIT') ? 'Deposit' : tx.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xl text-white font-light">
                            {tx.type === 'withdrawal' ? '-' : '+'}${(tx.amount || 0).toLocaleString(undefined, {minimumFractionDigits: 2})}
                          </span>
                          <span className="text-[10px] font-bold tracking-widest bg-white/10 px-2 py-1 uppercase rounded-sm text-gray-300">
                            {tx.asset || 'N/A'}
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-500 mt-2 flex items-center gap-2">
                          <Clock className="w-3 h-3" /> {timeStr}
                          <span className="mx-2">•</span>
                          TXID: <span className="font-mono">{tx.txid ? tx.txid.substring(0, 8) : 'N/A'}...</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function ProfileTab({ profile }: { profile?: any }) {
  const [kycProfile, setKycProfile] = useState<any>(profile);
  const [kycFullName, setKycFullName] = useState('');
  const [kycCountry, setKycCountry] = useState('');
  const [kycDocumentType, setKycDocumentType] = useState('passport');
  const [kycFrontFile, setKycFrontFile] = useState<File | null>(null);
  const [kycBackFile, setKycBackFile] = useState<File | null>(null);
  const [kycSelfieFile, setKycSelfieFile] = useState<File | null>(null);
  const [kycSubmitting, setKycSubmitting] = useState(false);
  const [kycError, setKycError] = useState('');
  const [kycSuccess, setKycSuccess] = useState(false);

  useEffect(() => { setKycProfile(profile); }, [profile]);

  const kycStatus = kycProfile?.kyc_status || 'unsubmitted';

  const handleKycSubmit = async () => {
    if (!kycFullName.trim() || !kycCountry.trim()) {
      setKycError('Please fill in your full name and country.');
      return;
    }
    if (!kycFrontFile) {
      setKycError('Please upload the front of your ID document.');
      return;
    }
    if (!kycSelfieFile) {
      setKycError('Please upload a selfie holding your ID.');
      return;
    }
    setKycError('');
    setKycSubmitting(true);

    try {
      const uploadFile = async (file: File, prefix: string) => {
        const ext = file.name.split('.').pop();
        const fileName = `${kycProfile?.id}/${prefix}_${Date.now()}.${ext}`;
        const { error } = await supabase.storage.from('kyc-documents').upload(fileName, file, { upsert: true });
        if (error) throw error;
        const { data } = supabase.storage.from('kyc-documents').getPublicUrl(fileName);
        return data.publicUrl;
      };

      const frontUrl = await uploadFile(kycFrontFile, 'front');
      const backUrl = kycBackFile ? await uploadFile(kycBackFile, 'back') : null;
      const selfieUrl = await uploadFile(kycSelfieFile, 'selfie');

      const { error: updateError } = await supabase.from('profiles').update({
        kyc_status: 'pending',
        kyc_full_name: kycFullName.trim(),
        kyc_country: kycCountry.trim(),
        kyc_document_type: kycDocumentType,
        kyc_document_front_url: frontUrl,
        kyc_document_back_url: backUrl || null,
        kyc_selfie_url: selfieUrl,
        kyc_submitted_at: Date.now(),
        kyc_rejection_reason: null,
      }).eq('id', kycProfile?.id);

      if (updateError) throw updateError;
      setKycProfile((prev: any) => ({ ...prev, kyc_status: 'pending' }));
      setKycSuccess(true);
    } catch (err: any) {
      setKycError(err.message || 'Submission failed. Please try again.');
    } finally {
      setKycSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="mb-8 mt-4 md:mt-10">
        <h1 className="text-3xl text-white font-['Outfit'] font-light mb-2">Profile & Security</h1>
      </div>

      {/* ─── KYC Identity Verification Card ─── */}
      <div className="mb-6">
        {kycStatus === 'verified' ? (
          <div className="bg-[#0a0f1c] border border-[#00d4aa]/30 p-6 rounded-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00d4aa]/15 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#00d4aa]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg text-white font-['Outfit'] font-semibold">Identity Verified</h2>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#00d4aa]/20 text-[#00d4aa] border border-[#00d4aa]/30">KYC Approved</span>
                </div>
                <p className="text-[13px] text-gray-400">Your identity has been successfully verified. Your account has full access.</p>
              </div>
            </div>
          </div>
        ) : kycStatus === 'pending' ? (
          <div className="bg-[#0a0f1c] border border-[#c9a84c]/30 p-6 rounded-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#c9a84c]/15 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#c9a84c]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg text-white font-['Outfit'] font-semibold">Verification Under Review</h2>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30">Pending</span>
                </div>
                <p className="text-[13px] text-gray-400">Your identity verification is currently under review. This process typically takes <span className="text-[#c9a84c] font-semibold">2 to 14 business days</span> before your account is fully verified. We will notify you once it's complete.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
              <ShieldCheck className="w-6 h-6 text-[#c9a84c]" />
              <div>
                <h2 className="text-lg text-white font-['Outfit'] font-semibold">Identity Verification (KYC)</h2>
                <p className="text-[12px] text-gray-500 mt-0.5">Required to unlock full platform access and withdrawals</p>
              </div>
            </div>

            {kycStatus === 'rejected' && kycProfile?.kyc_rejection_reason && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-sm flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-400 text-[10px] font-bold">!</span>
                </div>
                <div>
                  <div className="text-[13px] text-red-400 font-semibold mb-1">Verification Rejected</div>
                  <div className="text-[12px] text-red-300/80">{kycProfile.kyc_rejection_reason}</div>
                  <div className="text-[11px] text-gray-500 mt-1">Please correct the issue and re-submit below.</div>
                </div>
              </div>
            )}

            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold">Full Legal Name</label>
                  <input
                    type="text"
                    value={kycFullName}
                    onChange={e => setKycFullName(e.target.value)}
                    placeholder="e.g. John Michael Smith"
                    className="w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 text-sm"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold">Country of Residence</label>
                  <input
                    type="text"
                    value={kycCountry}
                    onChange={e => setKycCountry(e.target.value)}
                    placeholder="e.g. United States"
                    className="w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold">Document Type</label>
                <div className="flex gap-3 flex-wrap">
                  {['passport', 'id_card', 'drivers_license'].map(type => (
                    <button
                      key={type}
                      onClick={() => setKycDocumentType(type)}
                      className={`px-4 py-2 text-[11px] uppercase tracking-widest font-bold rounded-sm border transition-all ${kycDocumentType === type ? 'border-[#c9a84c]/60 bg-[#c9a84c]/10 text-[#c9a84c]' : 'border-white/10 text-gray-500 hover:text-white hover:border-white/20'}`}
                    >
                      {type === 'passport' ? 'Passport' : type === 'id_card' ? 'ID Card' : "Driver's License"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold">
                    Document — Front Side <span className="text-red-400">*</span>
                  </label>
                  <label className={`flex items-center justify-center gap-2 w-full h-28 border-2 border-dashed rounded-sm cursor-pointer transition-colors ${kycFrontFile ? 'border-[#c9a84c]/50 bg-[#c9a84c]/5' : 'border-white/10 hover:border-white/20 bg-[#070b14]'}`}>
                    <input type="file" accept="image/*,application/pdf" className="hidden" onChange={e => setKycFrontFile(e.target.files?.[0] || null)} />
                    <div className="text-center">
                      <ImageIcon className={`w-6 h-6 mx-auto mb-1 ${kycFrontFile ? 'text-[#c9a84c]' : 'text-gray-600'}`} />
                      <span className={`text-[11px] ${kycFrontFile ? 'text-[#c9a84c]' : 'text-gray-500'}`}>
                        {kycFrontFile ? kycFrontFile.name.substring(0, 24) + '...' : 'Click to upload front'}
                      </span>
                    </div>
                  </label>
                </div>
                {kycDocumentType !== 'passport' && (
                  <div>
                    <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold">Document — Back Side</label>
                    <label className={`flex items-center justify-center gap-2 w-full h-28 border-2 border-dashed rounded-sm cursor-pointer transition-colors ${kycBackFile ? 'border-[#c9a84c]/50 bg-[#c9a84c]/5' : 'border-white/10 hover:border-white/20 bg-[#070b14]'}`}>
                      <input type="file" accept="image/*,application/pdf" className="hidden" onChange={e => setKycBackFile(e.target.files?.[0] || null)} />
                      <div className="text-center">
                        <ImageIcon className={`w-6 h-6 mx-auto mb-1 ${kycBackFile ? 'text-[#c9a84c]' : 'text-gray-600'}`} />
                        <span className={`text-[11px] ${kycBackFile ? 'text-[#c9a84c]' : 'text-gray-500'}`}>
                          {kycBackFile ? kycBackFile.name.substring(0, 24) + '...' : 'Click to upload back'}
                        </span>
                      </div>
                    </label>
                  </div>
                )}
              </div>

              <div>
                <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold">
                  Selfie Holding Your ID <span className="text-red-400">*</span>
                </label>
                <label className={`flex items-center justify-center gap-2 w-full h-28 border-2 border-dashed rounded-sm cursor-pointer transition-colors ${kycSelfieFile ? 'border-[#00d4aa]/50 bg-[#00d4aa]/5' : 'border-white/10 hover:border-white/20 bg-[#070b14]'}`}>
                  <input type="file" accept="image/*" className="hidden" onChange={e => setKycSelfieFile(e.target.files?.[0] || null)} />
                  <div className="text-center">
                    <User className={`w-6 h-6 mx-auto mb-1 ${kycSelfieFile ? 'text-[#00d4aa]' : 'text-gray-600'}`} />
                    <span className={`text-[11px] ${kycSelfieFile ? 'text-[#00d4aa]' : 'text-gray-500'}`}>
                      {kycSelfieFile ? kycSelfieFile.name.substring(0, 24) + '...' : 'Selfie with document visible — face must be clear'}
                    </span>
                  </div>
                </label>
              </div>

              {kycError && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-sm text-[12px] text-red-400">{kycError}</div>
              )}

              {kycSuccess && (
                <div className="p-3 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-sm text-[12px] text-[#c9a84c]">
                  ✓ Verification submitted successfully! Your review will take 2 to 14 business days.
                </div>
              )}

              <div className="p-4 bg-[#070b14] border border-white/5 rounded-sm text-[11px] text-gray-500 leading-relaxed">
                <span className="text-white font-semibold block mb-1">Processing time: 2 to 14 business days</span>
                Your documents are encrypted and securely stored. We will never share your data with third parties. You will receive a notification once your review is complete.
              </div>

              <button
                disabled={kycSubmitting}
                onClick={handleKycSubmit}
                className="w-full py-4 bg-[#c9a84c] hover:bg-[#b89945] text-[#070b14] font-bold text-[13px] uppercase tracking-widest rounded-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {kycSubmitting ? (
                  <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Uploading & Submitting...</>
                ) : kycStatus === 'rejected' ? 'Re-Submit Verification' : 'Submit Identity Verification'}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#0a0f1c] border border-white/5 p-6 rounded-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-white/5 pb-4">
            <Shield className="w-6 h-6 text-[#00d4aa]" />
            <h2 className="text-lg text-white font-['Outfit']">Security & 2FA</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div><div className="text-[13px] text-white">Two-Factor Authentication</div><div className="text-[11px] text-gray-500">Authenticator app</div></div>
              <div className="w-10 h-5 bg-[#00d4aa] rounded-full relative cursor-pointer"><div className="w-3 h-3 bg-[#070b14] rounded-full absolute top-1 right-1"></div></div>
            </div>
            <div className="flex items-center justify-between">
              <div><div className="text-[13px] text-white">Login Alerts</div><div className="text-[11px] text-gray-500">Email on new device</div></div>
              <div className="w-10 h-5 bg-[#00d4aa] rounded-full relative cursor-pointer"><div className="w-3 h-3 bg-[#070b14] rounded-full absolute top-1 right-1"></div></div>
            </div>
            <div className="flex items-center justify-between">
              <div><div className="text-[13px] text-white">Withdrawal PIN</div><div className="text-[11px] text-gray-500">Require PIN for transfers</div></div>
              <div className="w-10 h-5 bg-white/10 rounded-full relative cursor-pointer"><div className="w-3 h-3 bg-white rounded-full absolute top-1 left-1"></div></div>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0f1c] border border-white/5 p-6 rounded-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-white/5 pb-4">
            <Monitor className="w-6 h-6 text-[#00d4aa]" />
            <h2 className="text-lg text-white font-['Outfit']">Trusted Devices</h2>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-sm border border-white/10">
            <div className="flex items-center gap-3">
              <Monitor className="w-5 h-5 text-[#00d4aa]" />
              <div><div className="text-[13px] text-white font-semibold flex items-center gap-2">Chrome <span className="bg-[#00d4aa]/10 text-[#00d4aa] px-2 py-0.5 rounded-sm text-[10px] uppercase">Active</span></div><div className="text-[11px] text-gray-500">Windows · This device</div></div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-transparent border border-white/5 rounded-sm">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-gray-500" />
              <div><div className="text-[13px] text-white">Safari</div><div className="text-[11px] text-gray-500">iPhone · 3 days ago</div></div>
            </div>
            <button className="text-[11px] text-red-400 uppercase tracking-widest font-semibold hover:underline">Revoke</button>
          </div>
        </div>

        {/* Mobile-only Logout in Profile */}
        <div className="md:hidden col-span-1 mt-4">
          <button onClick={async () => { await supabase.auth.signOut(); window.location.href = '/login'; }} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 hover:text-red-400 font-bold uppercase tracking-widest text-[12px] transition-colors rounded-sm">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

function RewardsTab({ profile }: { profile?: any }) {
  const [copied, setCopied] = useState(false);

  const referralCode = profile?.referral_code || 'N/A';
  const referralLink = `https://thespaceholdings.com/join?ref=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="mb-8 mt-4 md:mt-10 text-center py-10 border border-[#b088f5]/30 bg-gradient-to-b from-[#b088f5]/10 to-[#0a0f1c] rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-[#b088f5]/20 rounded-full blur-[80px] pointer-events-none" />
        <Gift className="w-12 h-12 text-[#b088f5] mx-auto mb-4 relative z-10" />
        <h1 className="text-4xl text-white font-['Outfit'] font-light mb-2 relative z-10">Refer & Earn</h1>
        <p className="text-gray-400 text-[13px] max-w-md mx-auto relative z-10 px-4">Invite friends to join TheSpaceHoldings and earn 5% of their initial deposit instantly to your withdrawable balance.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-[#0a0f1c] border border-white/5 rounded-sm text-center">
          <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-2 font-semibold">Total Referrals</div>
          <div className="text-4xl text-white font-['Outfit']">{profile?.total_referrals || 0}</div>
        </div>
        <div className="p-6 bg-[#0a0f1c] border border-white/5 rounded-sm text-center">
          <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-2 font-semibold">Total Earned</div>
          <div className="text-4xl text-[#00d4aa] font-['Outfit']">${Number(profile?.total_earned_referrals || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
        </div>
      </div>

      <div className="bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm mb-8">
        <h2 className="text-lg text-white font-['Outfit'] mb-4">Your Referral Link</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input readOnly value={referralLink} className="w-full bg-[#070b14] border border-white/10 text-gray-300 p-4 rounded-sm text-sm focus:outline-none" />
          <button onClick={handleCopy} className="px-8 bg-[#b088f5] hover:bg-[#9a70e0] text-[#070b14] py-4 text-[13px] tracking-widest uppercase font-bold transition-colors rounded-sm whitespace-nowrap">
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  )
}

function InvestTab({ profile }: { profile?: any }) {
  const { investments, loading, addInvestment } = useInvestmentStore();
  const [amount, setAmount] = useState('');
  const [investLoading, setInvestLoading] = useState(false);
  const [alertState, setAlertState] = useState<{ open: boolean; title: string; message: string; type: 'success' | 'error' }>({
    open: false, title: '', message: '', type: 'success'
  });

  const walletBalance = Number(profile?.balance || 0);
  const amountNum = parseFloat(amount) || 0;
  
  // Calculate projections
  const dailyRoiPercent = 1.5; // 1.5% daily
  const dailyReturn = amountNum * (dailyRoiPercent / 100);
  const yearlyReturn = dailyReturn * 365;

  const handleInvestSubmit = async () => {
    if (!amountNum || amountNum <= 0) {
      setAlertState({ open: true, title: 'Invalid Amount', message: 'Please enter a valid investment amount.', type: 'error' });
      return;
    }
    if (amountNum > walletBalance) {
      setAlertState({ open: true, title: 'Insufficient Balance', message: 'You do not have enough funds in your wallet balance to make this investment.', type: 'error' });
      return;
    }

    setInvestLoading(true);
    const result = await addInvestment(amountNum);
    setInvestLoading(false);

    if (result?.error) {
      setAlertState({ open: true, title: 'Investment Failed', message: result.error, type: 'error' });
    } else {
      setAmount('');
      setAlertState({ 
        open: true, 
        title: 'Investment Successful!', 
        message: `You have successfully invested $${amountNum.toLocaleString()} directly. Your yield will start accumulating immediately.`, 
        type: 'success' 
      });
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      
      {/* Success/Error Modal */}
      <Dialog open={alertState.open} onOpenChange={(open) => setAlertState(prev => ({ ...prev, open }))}>
        <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white p-0 overflow-hidden max-w-md">
          <div className={`h-1.5 w-full ${alertState.type === 'success' ? 'bg-gradient-to-r from-purple-500 to-[#00d4aa]' : 'bg-gradient-to-r from-red-500 to-red-400'}`} />
          <div className="p-8">
            <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${alertState.type === 'success' ? 'bg-[#00d4aa]/15' : 'bg-red-500/15'}`}>
              {alertState.type === 'success' ? (
                <svg className="w-8 h-8 text-[#00d4aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              )}
            </div>
            <h2 className={`text-xl font-['Outfit'] font-semibold text-center mb-3 ${alertState.type === 'success' ? 'text-[#00d4aa]' : 'text-red-400'}`}>{alertState.title}</h2>
            <p className="text-gray-400 text-[14px] text-center leading-relaxed mb-6">{alertState.message}</p>
            <button
              onClick={() => setAlertState(prev => ({ ...prev, open: false }))}
              className={`w-full py-3 font-bold text-[13px] tracking-widest uppercase rounded-sm transition-colors ${alertState.type === 'success' ? 'bg-[#00d4aa] hover:bg-[#00b38f] text-[#070b14]' : 'bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30'}`}
            >
              {alertState.type === 'success' ? 'Perfect' : 'Dismiss'}
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mb-8 mt-4 md:mt-10">
        <h1 className="text-3xl text-white font-['Outfit'] font-light mb-2">Direct Investments</h1>
        <p className="text-[13px] text-gray-500">Invest capital directly to earn high-yield returns without locked plans.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-[#0a0f1c] border border-white/5 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00d4aa]/5 rounded-full blur-xl pointer-events-none" />
          <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-1 font-semibold">Wallet Balance</div>
          <div className="text-2xl text-white font-light font-['Outfit']">${walletBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
          <button onClick={() => setAmount(walletBalance.toString())} className="text-[10px] text-[#00d4aa] uppercase tracking-widest font-bold mt-2 hover:underline">Use Max</button>
        </div>
        <div className="p-6 bg-[#0a0f1c] border border-white/5 rounded-sm">
          <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-1 font-semibold">Daily Yield Rate</div>
          <div className="text-2xl text-purple-400 font-light font-['Outfit']">{dailyRoiPercent}% Daily</div>
          <div className="text-[10px] text-gray-500 mt-2">100% passive compounding</div>
        </div>
        <div className="p-6 bg-[#0a0f1c] border border-white/5 rounded-sm">
          <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-1 font-semibold">Maturity Lock</div>
          <div className="text-2xl text-[#c9a84c] font-light font-['Outfit']">365 Days</div>
          <div className="text-[10px] text-gray-500 mt-2">Yield is withdrawable daily</div>
        </div>
      </div>

      <div className="bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm mb-8">
        <h2 className="text-lg text-white font-['Outfit'] mb-6">Create New Direct Investment</h2>
        <div className="space-y-6">
          <div>
            <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block">Investment Amount (USD)</label>
            <div className="relative">
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="e.g. 1000" 
                className="w-full bg-[#070b14] border border-white/10 text-white p-4 rounded-sm focus:outline-none focus:border-purple-500/50 pr-12 text-lg font-mono" 
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold">USD</span>
            </div>
          </div>

          {amountNum > 0 && (
            <div className="p-5 bg-[#070b14] border border-purple-500/20 rounded-sm grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Projected Daily ROI</span>
                <span className="text-lg text-[#00d4aa] font-semibold">+${dailyReturn.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Projected Annual ROI</span>
                <span className="text-lg text-purple-400 font-semibold">+${yearlyReturn.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
            </div>
          )}

          <button 
            disabled={investLoading || !amountNum || amountNum <= 0} 
            onClick={handleInvestSubmit} 
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-4 font-bold text-[13px] tracking-widest uppercase transition-colors rounded-sm disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20"
          >
            {investLoading ? (
              <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Processing Investment...</>
            ) : 'Confirm Direct Investment'}
          </button>
        </div>
      </div>

      <div className="bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm">
        <h2 className="text-lg text-white font-['Outfit'] mb-6">Your Active Direct Investments</h2>
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading investments...</div>
        ) : investments.length === 0 ? (
          <div className="text-center py-8 text-gray-500 border border-dashed border-white/5 bg-[#070b14] rounded-sm">No active direct investments.</div>
        ) : (
          <div className="space-y-4">
            {investments.map((inv) => {
              const createdDate = new Date(inv.created_at);
              const daysPassed = Math.floor((Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24));
              const currentYield = inv.amount * inv.daily_roi * Math.max(0, daysPassed);
              const daysRemaining = Math.max(0, inv.duration_days - daysPassed);
              const isMatured = daysRemaining === 0;

              return (
                <div key={inv.id} className="bg-[#070b14] border border-white/5 p-5 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm ${isMatured ? 'bg-[#00d4aa]/20 text-[#00d4aa]' : 'bg-purple-500/20 text-purple-400'}`}>
                        {isMatured ? 'Matured' : 'Active Lock'}
                      </span>
                      <span className="text-[12px] text-gray-400 uppercase tracking-widest">{inv.plan_name}</span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-xl text-white font-light">${inv.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                      <span className="text-[10px] text-gray-500">@ {inv.daily_roi * 100}% daily ROI</span>
                    </div>
                    <div className="text-[11px] text-gray-500 mt-2 flex flex-wrap items-center gap-2">
                      <span>Invested: {createdDate.toLocaleDateString()}</span>
                      <span className="text-gray-700">•</span>
                      <span>Lock Period: {daysRemaining} days remaining</span>
                    </div>
                  </div>
                  <div className="text-right border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Accumulated ROI</div>
                    <div className="text-xl text-[#00d4aa] font-semibold font-mono">+${currentYield.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{daysPassed} days active</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}

// ─── Notification Bell Component ─────────────────────────────────────────────

type NotifItem = {
  id: string;
  title: string;
  body: string;
  time: number;
  read: boolean;
  type: 'deposit' | 'withdrawal' | 'info';
  status: 'approved' | 'rejected' | 'pending';
};

function NotificationBell({ transactions, align = 'right' }: { transactions: any[], align?: 'left' | 'right' }) {
  const [open, setOpen] = useState(false);
  const [notifs, setNotifs] = useState<NotifItem[]>([]);
  const [permGranted, setPermGranted] = useState(
    typeof window !== 'undefined' && 'Notification' in window
      ? Notification.permission === 'granted'
      : false
  );
  const prevStatuses = useRef<Record<string, string>>({});

  // Build notification list from transaction changes
  useEffect(() => {
    transactions.forEach(tx => {
      const prev = prevStatuses.current[tx.id];
      const curr = tx.status;
      if (prev !== undefined && prev !== curr) {
        const amt = `$${Number(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${tx.asset || ''}`;
        let title = '';
        let body = '';
        if (tx.type === 'deposit' && curr === 'approved') {
          title = '✅ Deposit Approved';
          body = `Your deposit of ${amt} has been credited.`;
        } else if (tx.type === 'deposit' && curr === 'rejected') {
          title = '❌ Deposit Rejected';
          body = `Your deposit of ${amt} was not approved.`;
        } else if (tx.type === 'withdrawal' && curr === 'approved') {
          title = '💸 Withdrawal Sent';
          body = `Your withdrawal of ${amt} has been sent.`;
        } else if (tx.type === 'withdrawal' && curr === 'rejected') {
          title = '❌ Withdrawal Rejected';
          body = `Your withdrawal of ${amt} was rejected.`;
        }
        if (title) {
          setNotifs(prev => [{
            id: `${tx.id}-${curr}`,
            title,
            body,
            time: Date.now(),
            read: false,
            type: tx.type,
            status: curr,
          }, ...prev].slice(0, 20));
        }
      }
      prevStatuses.current[tx.id] = curr;
    });
  }, [transactions]);

  const [seeded, setSeeded] = useState(false);

  // Seed with most recent transactions on first load
  useEffect(() => {
    if (seeded || transactions.length === 0) return;

    const initial: NotifItem[] = transactions
      .filter(tx => tx.status !== 'pending')
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 5)
      .map(tx => {
        const amt = `$${Number(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${tx.asset || ''}`;
        let title = '';
        let body = '';
        if (tx.type === 'deposit' && tx.status === 'approved') { title = '✅ Deposit Approved'; body = `Deposit of ${amt} credited.`; }
        else if (tx.type === 'deposit' && tx.status === 'rejected') { title = '❌ Deposit Rejected'; body = `Deposit of ${amt} rejected.`; }
        else if (tx.type === 'withdrawal' && tx.status === 'approved') { title = '💸 Withdrawal Sent'; body = `Withdrawal of ${amt} processed.`; }
        else if (tx.type === 'withdrawal' && tx.status === 'rejected') { title = '❌ Withdrawal Rejected'; body = `Withdrawal of ${amt} rejected.`; }
        return { id: tx.id, title, body, time: tx.timestamp, read: true, type: tx.type, status: tx.status };
      })
      .filter(n => n.title !== '');
    setNotifs(initial);
    initial.forEach(n => { prevStatuses.current[n.id.split('-')[0]] = n.status; });
    setSeeded(true);
  }, [transactions, seeded]);

  const unread = notifs.filter(n => !n.read).length;

  const markAllRead = () => setNotifs(prev => prev.map(n => ({ ...n, read: true })));

  const handleEnable = async () => {
    const granted = await requestNotificationPermission();
    setPermGranted(granted);
  };

  const formatTime = (ts: number) => {
    const m = Math.floor((Date.now() - ts) / 60000);
    if (m < 1) return 'Just now';
    if (m < 60) return `${m}m ago`;
    if (m < 1440) return `${Math.floor(m / 60)}h ago`;
    return `${Math.floor(m / 1440)}d ago`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => { setOpen(o => !o); if (!open) markAllRead(); }}
        className="relative p-1.5 hover:text-white text-gray-400 transition-colors rounded-sm hover:bg-white/5"
      >
        <Bell className="w-5 h-5" />
        {unread > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 flex items-center justify-center rounded-full bg-[#c9a84c] text-[#070b14] text-[9px] font-bold px-0.5">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          {/* Dropdown Panel */}
          <div className={`absolute top-10 z-50 w-[320px] max-w-[calc(100vw-2rem)] bg-[#0a0f1c] border border-white/10 rounded-sm shadow-2xl shadow-black/60 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 ${align === 'left' ? 'left-0' : 'right-0'}`}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-[13px] text-white font-semibold uppercase tracking-widest">Notifications</span>
              </div>
              {notifs.length > 0 && (
                <button onClick={markAllRead} className="text-[10px] text-gray-500 hover:text-[#c9a84c] uppercase tracking-widest transition-colors">
                  Mark all read
                </button>
              )}
            </div>

            {/* Enable push prompt */}
            {!permGranted && (
              <div className="px-4 py-3 bg-[#c9a84c]/10 border-b border-[#c9a84c]/20 flex items-center justify-between gap-3">
                <p className="text-[11px] text-[#c9a84c] leading-snug">Enable push notifications to get alerts even when the app is in the background.</p>
                <button onClick={handleEnable} className="shrink-0 px-3 py-1.5 bg-[#c9a84c] text-[#070b14] text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#b89945] transition-colors">
                  Enable
                </button>
              </div>
            )}

            {/* Notification list */}
            <div className="max-h-[340px] overflow-y-auto divide-y divide-white/5">
              {notifs.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-[13px]">
                  <Bell className="w-8 h-8 mx-auto mb-2 opacity-20" />
                  No notifications yet
                </div>
              ) : (
                notifs.map(n => (
                  <div key={n.id} className={`px-4 py-3 flex gap-3 transition-colors ${n.read ? 'opacity-70' : 'bg-white/[0.02]'}`}>
                    <div className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${n.status === 'approved' ? 'bg-[#00d4aa]' : n.status === 'rejected' ? 'bg-red-500' : 'bg-[#c9a84c]'}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] text-white font-medium">{n.title}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">{n.body}</div>
                      <div className="text-[10px] text-gray-600 mt-1 uppercase tracking-wide">{formatTime(n.time)}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

