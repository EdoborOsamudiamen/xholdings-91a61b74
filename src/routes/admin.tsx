import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { 
  Users, DollarSign, Wallet, ShieldAlert, CheckCircle, XCircle, ShieldCheck,
  Trash2, Ban, Edit, Settings, Activity, Search, Power, Clock,
  TrendingUp, Plus, ImageIcon, ToggleLeft, ToggleRight, Eye, X as XIcon, Menu, Copy, Sliders,
  Mail
} from "lucide-react";
import { useCryptoStore } from "../lib/crypto-store";
import { useTransactionStore } from "../lib/transaction-store";
import BalanceOpsTab from "../components/admin/BalanceOpsTab";
import EmailsTab from "../components/admin/EmailsTab";
import { sendNotificationEmail } from "../lib/send-email";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "../components/ui/dialog";

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate({ from: '/admin' });
  const [isChecking, setIsChecking] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate({ to: '/login' });
        return;
      }
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();
        
      if (!profile || profile.role !== 'admin') {
        navigate({ to: '/dashboard' });
      } else {
        setIsChecking(false);
      }
    };
    checkAdmin();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#c9a84c] border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-gray-500 uppercase tracking-widest text-[11px] font-bold">Verifying Access...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-[#f0f4ff] font-['Inter'] flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-[#0a0f1c] border-b border-white/5 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600/20 border border-red-500/50 flex items-center justify-center font-bold text-red-500 font-['Outfit'] text-sm">A</div>
          <span className="font-light text-lg tracking-[0.15em] text-white font-['Outfit'] uppercase">SuperAdmin</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white">
          {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen bg-[#0a0f1c] border-r border-white/5 p-6 z-50 flex flex-col transition-transform duration-300 w-64 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <Link to="/" className="hidden lg:flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-red-600/20 border border-red-500/50 flex items-center justify-center font-bold text-red-500 font-['Outfit'] text-sm">A</div>
          <span className="font-light text-xl tracking-[0.15em] text-white font-['Outfit'] uppercase">SuperAdmin</span>
        </Link>
        <div className="flex flex-col gap-2 flex-grow mt-4 lg:mt-0">
          <TabButton active={activeTab === 'overview'} onClick={() => {setActiveTab('overview'); setIsMobileMenuOpen(false);}} icon={Activity} label="Overview" />
          <TabButton active={activeTab === 'users'} onClick={() => {setActiveTab('users'); setIsMobileMenuOpen(false);}} icon={Users} label="Manage Users" />
          <TabButton active={activeTab === 'transactions'} onClick={() => {setActiveTab('transactions'); setIsMobileMenuOpen(false);}} icon={DollarSign} label="Transactions" />
          <TabButton active={activeTab === 'balance_ops'} onClick={() => {setActiveTab('balance_ops'); setIsMobileMenuOpen(false);}} icon={Sliders} label="Balance Ops" />
          <TabButton active={activeTab === 'wallets'} onClick={() => {setActiveTab('wallets'); setIsMobileMenuOpen(false);}} icon={Wallet} label="Platform Wallets" />
          <TabButton active={activeTab === 'copy_trading'} onClick={() => {setActiveTab('copy_trading'); setIsMobileMenuOpen(false);}} icon={Copy} label="Copy Trading" />
          <TabButton active={activeTab === 'kyc'} onClick={() => {setActiveTab('kyc'); setIsMobileMenuOpen(false);}} icon={ShieldCheck} label="KYC Review" />
          <TabButton active={activeTab === 'security'} onClick={() => {setActiveTab('security'); setIsMobileMenuOpen(false);}} icon={ShieldAlert} label="Security logs" />
          <TabButton active={activeTab === 'emails'} onClick={() => {setActiveTab('emails'); setIsMobileMenuOpen(false);}} icon={Mail} label="Send Emails" />
        </div>
        <div className="mt-auto border-t border-white/5 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">SA</div>
              <div>
                <div className="text-[13px] font-medium text-white">System Admin</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Level 5 Access</div>
              </div>
            </div>
            <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-sm transition-colors" title="Logout">
              <Power className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 w-full max-w-[1400px]">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'users' && <UsersTab />}
        {activeTab === 'transactions' && <TransactionsTab />}
        {activeTab === 'balance_ops' && <BalanceOpsTab />}
        {activeTab === 'wallets' && <WalletsTab />}
        {activeTab === 'copy_trading' && <CopyTradingTab />}
        {activeTab === 'kyc' && <KYCTab />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'emails' && <EmailsTab />}
      </main>
    </div>
  );
}

function TabButton({ active, onClick, icon: Icon, label }: any) {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors w-full text-left ${active ? 'bg-red-500/10 border-l-2 border-red-500 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5 border-l-2 border-transparent'}`}
    >
      <Icon className={`w-5 h-5 ${active ? 'text-red-400' : ''}`} /> 
      <span className="text-[13px] font-medium tracking-wide">{label}</span>
    </button>
  );
}

function OverviewTab() {
  const [usersCount, setUsersCount] = useState(0);
  const [totalAUM, setTotalAUM] = useState(0);
  const { transactions } = useTransactionStore();

  useEffect(() => {
    const fetchStats = async () => {
      const { data: profiles } = await supabase.from('profiles').select('id, balance, role');
      const { data: investments } = await supabase.from('investments').select('amount, status');

      if (profiles) {
        setUsersCount(profiles.filter(p => p.role !== 'admin').length);
        const userBalances = profiles
          .filter(p => p.role !== 'admin')
          .reduce((acc, p) => acc + Number(p.balance || 0), 0);
        let investedAmount = 0;
        if (investments) {
          investedAmount = investments
            .filter(inv => inv.status === 'active')
            .reduce((acc, inv) => acc + Number(inv.amount || 0), 0);
        }
        setTotalAUM(userBalances + investedAmount);
      }
    };
    fetchStats();
  }, []);

  const pendingDeposits = transactions.filter(t => t.type === 'deposit' && t.status === 'pending');
  const pendingAmount = pendingDeposits.reduce((acc, t) => acc + Number(t.amount || 0), 0);
  const approvedDeposits = transactions.filter(t => t.type === 'deposit' && t.status === 'approved');
  const totalDepositedAmount = approvedDeposits.reduce((acc, t) => acc + Number(t.amount || 0), 0);

  const recentActivity = [...transactions]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 10);

  const formatTime = (timestamp: number) => {
    const mins = Math.floor((Date.now() - timestamp) / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    if (mins < 1440) return `${Math.floor(mins / 60)}h ago`;
    return `${Math.floor(mins / 1440)}d ago`;
  };

  const getActivityLabel = (tx: any) => {
    const amt = `$${Number(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    const user = tx.userEmail || 'Unknown user';
    const asset = tx.asset || '';
    if (tx.type === 'deposit') return `Deposit of ${amt} ${asset} from ${user}`;
    if (tx.type === 'withdrawal') return `Withdrawal of ${amt} ${asset} by ${user}`;
    return `${tx.type} of ${amt} by ${user}`;
  };

  const getDotColor = (status: string) => {
    if (status === 'approved') return 'bg-[#00d4aa]';
    if (status === 'pending') return 'bg-[#c9a84c]';
    return 'bg-red-500';
  };

  const getBadgeStyle = (status: string) => {
    if (status === 'approved') return 'bg-[#00d4aa]/10 text-[#00d4aa]';
    if (status === 'pending') return 'bg-[#c9a84c]/10 text-[#c9a84c]';
    return 'bg-red-500/10 text-red-400';
  };

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-2xl sm:text-3xl text-white font-light font-['Outfit'] mb-6 sm:mb-8">System Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        <StatCard title="Total Users" value={usersCount.toString()} change="Registered accounts" />
        <StatCard
          title="Total AUM"
          value={`$${totalAUM.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          change="Managed by platform" color="text-[#00d4aa]"
        />
        <StatCard
          title="Total Deposits"
          value={`$${totalDepositedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          change={`${approvedDeposits.length} approved`} color="text-[#00d4aa]"
        />
        <StatCard title="Pending" value={pendingDeposits.length.toString()} change={`$${pendingAmount.toLocaleString()} pending`} color="text-[#c9a84c]" />
      </div>

      {/* Recent Activity */}
      <div className="bg-[#0a0f1c] border border-white/5 rounded-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[14px] text-white font-semibold uppercase tracking-widest">Recent Activity</h3>
          <span className="text-[11px] text-gray-500 uppercase tracking-widest">{recentActivity.length} events</span>
        </div>

        {recentActivity.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-[13px]">
            <Activity className="w-8 h-8 mx-auto mb-3 opacity-30" />
            No activity yet.
          </div>
        ) : (
          <div className="space-y-0">
            {recentActivity.map(tx => (
              <div key={tx.id} className="flex items-start gap-3 sm:gap-4 border-b border-white/5 py-3.5 last:border-0 last:pb-0 first:pt-0">
                <div className={`mt-[5px] w-2 h-2 rounded-full shrink-0 ${getDotColor(tx.status)}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-[13px] text-gray-200 break-words">{getActivityLabel(tx)}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm ${getBadgeStyle(tx.status)}`}>
                      {tx.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5 uppercase tracking-wider">{tx.type}</div>
                </div>
                <div className="text-[11px] text-gray-500 whitespace-nowrap shrink-0 mt-0.5">
                  {formatTime(tx.timestamp)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}



function StatCard({ title, value, change, color = "text-white" }: any) {
  return (
    <div className="bg-[#0a0f1c] border border-white/5 p-6 rounded-sm">
      <div className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold mb-2">{title}</div>
      <div className={`text-3xl font-light font-['Outfit'] mb-2 ${color}`}>{value}</div>
      <div className="text-[12px] text-gray-400">{change}</div>
    </div>
  );
}

function UsersTab() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();

    const channel = supabase
      .channel('profiles_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, () => {
        fetchUsers();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchUsers = async () => {
    const { data: profiles, error } = await supabase.from('profiles').select('*').order('role', { ascending: true });
    const { data: investments } = await supabase.from('investments').select('user_id, amount, daily_roi, created_at').eq('status', 'active');
    
    if (error) {
      console.error('Error fetching users:', error);
    }
    if (profiles) {
      const usersWithTotal = profiles.map(profile => {
        const userInvs = (investments || []).filter(inv => inv.user_id === profile.id);
        const roiEarned = userInvs.reduce((acc, inv) => {
          const daysPassed = Math.floor((Date.now() - new Date(inv.created_at).getTime()) / (1000 * 60 * 60 * 24));
          return acc + (inv.amount * inv.daily_roi * Math.max(0, daysPassed));
        }, 0);
        
        const totalBalance = Number(profile.balance || 0) + Number(profile.profit || 0) + roiEarned + Number(profile.total_earned_referrals || 0);
        
        return {
          ...profile,
          totalBalance
        };
      });
      setUsers(usersWithTotal);
    }
    setLoading(false);
  };

  const makeAdmin = async (id: string) => {
    await supabase.from('profiles').update({ role: 'admin' }).eq('id', id);
    fetchUsers();
  };

  const handleEdit = async (id: string, newBalance: number) => {
    if (!isNaN(Number(newBalance))) {
      await supabase.from('profiles').update({ balance: Number(newBalance) }).eq('id', id);
      fetchUsers();
    }
  };

  const handleEditProfit = async (id: string, newProfit: number) => {
    if (!isNaN(Number(newProfit))) {
      await supabase.from('profiles').update({ profit: Number(newProfit) }).eq('id', id);
      fetchUsers();
    }
  };

  const handleBan = async (id: string, newStatus: string) => {
    await supabase.from('profiles').update({ status: newStatus }).eq('id', id);
    fetchUsers();
  };

  const handleDelete = async (id: string) => {
    await supabase.from('profiles').delete().eq('id', id);
    fetchUsers();
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header — stacks on mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl text-white font-light font-['Outfit']">User Management</h1>
        <div className="relative w-full sm:w-auto">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search email or ID..."
            className="w-full sm:w-64 bg-[#0a0f1c] border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-sm text-sm focus:outline-none focus:border-white/30"
          />
        </div>
      </div>

      {/* Table — horizontally scrollable on mobile */}
      <div className="bg-[#0a0f1c] border border-white/5 rounded-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-[11px] text-gray-500 uppercase tracking-widest">
                <th className="p-3 sm:p-4 font-semibold">User</th>
                <th className="p-3 sm:p-4 font-semibold">Balance</th>
                <th className="p-3 sm:p-4 font-semibold">Role</th>
                <th className="p-3 sm:p-4 font-semibold">Status</th>
                <th className="p-3 sm:p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr><td colSpan={5} className="p-8 text-center text-gray-500">Loading...</td></tr>
              ) : users.length === 0 ? (
                <tr><td colSpan={5} className="p-8 text-center text-gray-500">No users found.</td></tr>
              ) : (
                users.map(user => (
                  <UserRow
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    balance={`$${Number(user.balance || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
                    totalBalance={`$${Number(user.totalBalance || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
                    rawBalance={Number(user.balance || 0)}
                    profit={`$${Number(user.profit || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
                    rawProfit={Number(user.profit || 0)}
                    status={user.status || 'Active'}
                    role={user.role}
                    onMakeAdmin={() => makeAdmin(user.id)}
                    onEdit={(newBalance: number) => handleEdit(user.id, newBalance)}
                    onEditProfit={(newProfit: number) => handleEditProfit(user.id, newProfit)}
                    onBan={() => handleBan(user.id, user.status || 'Active')}
                    onDelete={() => handleDelete(user.id)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function UserRow({ id, name, email, balance, totalBalance, rawBalance, profit, rawProfit, status, role, onMakeAdmin, onEdit, onEditProfit, onBan, onDelete }: any) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isProfitEditOpen, setIsProfitEditOpen] = useState(false);
  const [editBalance, setEditBalance] = useState(String(rawBalance));
  const [editProfit, setEditProfit] = useState(String(rawProfit));
  const [plansOpen, setPlansOpen] = useState(false);
  const [userSubs, setUserSubs] = useState<any[]>([]);
  const [loadingPlans, setLoadingPlans] = useState(false);

  useEffect(() => {
    setEditBalance(String(rawBalance));
  }, [rawBalance]);

  useEffect(() => {
    setEditProfit(String(rawProfit));
  }, [rawProfit]);

  useEffect(() => {
    if (plansOpen) {
      const fetchPlans = async () => {
        setLoadingPlans(true);
        // Fetch copy trading subscriptions
        const { data: s } = await supabase.from('copy_trading_subscriptions').select('*, master_traders(name)').eq('user_id', id).order('created_at', { ascending: false });
        setUserSubs(s || []);
        setLoadingPlans(false);
      };
      fetchPlans();
    }
  }, [plansOpen, id]);

  const submitEdit = () => {
    onEdit(Number(editBalance));
    setIsEditOpen(false);
  };

  const submitProfitEdit = () => {
    onEditProfit(Number(editProfit));
    setIsProfitEditOpen(false);
  };

  const handleWithdrawSub = async (sub: any) => {
    if (sub.status !== 'active') return;
    await supabase.from('copy_trading_subscriptions').update({ status: 'withdrawn' }).eq('id', sub.id);
    const { data: profile } = await supabase.from('profiles').select('balance').eq('id', id).single();
    if (profile) {
      const newBal = Number(profile.balance || 0) + Number(sub.amount);
      await supabase.from('profiles').update({ balance: newBal }).eq('id', id);
      onEdit(newBal); 
    }
    setUserSubs(userSubs.map(s => s.id === sub.id ? { ...s, status: 'withdrawn' } : s));
  };

  return (
    <tr className="hover:bg-white/[0.02] transition-colors">
      <td className="p-3 sm:p-4 max-w-[160px]">
        <div className="text-[13px] text-white font-medium truncate">{name || '—'}</div>
        <div className="text-[11px] text-gray-500 truncate">{email}</div>
      </td>
      <td className="p-3 sm:p-4 text-[13px] font-mono whitespace-nowrap">
        <div className="text-white font-semibold">{totalBalance}</div>
        <div className="text-[10px] text-gray-500 mt-0.5" title="Base Wallet Balance">Wallet: {balance}</div>
        <div className="text-[10px] text-purple-400 mt-0.5" title="Manual Profit">Profit: {profit}</div>
      </td>
      <td className="p-3 sm:p-4">
        <span className={`px-2 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold whitespace-nowrap ${role === 'admin' ? 'bg-purple-500/10 text-purple-400' : 'bg-gray-500/10 text-gray-400'}`}>
          {role}
        </span>
      </td>
      <td className="p-3 sm:p-4">
        <span className={`px-2 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold whitespace-nowrap ${status === 'Active' ? 'bg-[#00d4aa]/10 text-[#00d4aa]' : status === 'Suspended' ? 'bg-red-500/10 text-red-500' : 'bg-[#c9a84c]/10 text-[#c9a84c]'}`}>
          {status}
        </span>
      </td>
      <td className="p-3 sm:p-4 text-right">
        <div className="flex justify-end gap-1.5 flex-wrap">

          {role !== 'admin' && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="px-3 py-1 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-sm text-[11px] font-bold uppercase transition-colors mr-2">
                  Make Admin
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Make {name} an Admin?</AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-400">This will grant them full access to the admin dashboard.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5">Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onMakeAdmin} className="bg-purple-500 text-white hover:bg-purple-600">Yes, Make Admin</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

        {/* View Plans Modal */}
        <Dialog open={plansOpen} onOpenChange={setPlansOpen}>
          <DialogTrigger asChild>
            <button className="p-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-sm transition-colors" title="View Copy Trading"><TrendingUp className="w-4 h-4" /></button>
          </DialogTrigger>
          <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Copy Trading for {name}</DialogTitle>
              <DialogDescription className="text-gray-400">View active copy trading subscriptions and force withdrawals.</DialogDescription>
            </DialogHeader>
            <div className="py-2">
              {loadingPlans ? (
                <div className="text-center py-8 text-gray-500">Loading subscriptions...</div>
              ) : (
                <div className="space-y-6">
                  {/* Copy Trading */}
                  <div>
                    <h3 className="text-[12px] font-bold text-white uppercase tracking-widest mb-3">Copy Trading Subscriptions</h3>
                    {userSubs.length === 0 ? <p className="text-gray-500 text-sm">No copy trading subscriptions.</p> : (
                      <div className="space-y-2">
                        {userSubs.map(s => (
                          <div key={s.id} className="flex items-center justify-between bg-[#070b14] border border-white/5 p-3 rounded-sm">
                            <div>
                              <div className="text-sm font-semibold text-white">Copy: {s.master_traders?.name || 'Unknown Trader'}</div>
                              <div className="text-xs text-gray-500 font-mono">${Number(s.amount).toLocaleString()}</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm ${s.status === 'active' ? 'bg-[#00d4aa]/10 text-[#00d4aa]' : 'bg-gray-500/10 text-gray-400'}`}>{s.status}</span>
                              {s.status === 'active' && (
                                <button onClick={() => handleWithdrawSub(s)} className="px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-sm hover:bg-red-500/20 font-bold uppercase tracking-widest">Withdraw</button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogTrigger asChild>
            <button className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-sm transition-colors" title="Edit Balance"><Edit className="w-4 h-4" /></button>
          </DialogTrigger>
          <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
            <DialogHeader>
              <DialogTitle>Edit Balance for {name}</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <label className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block">New Balance</label>
              <input type="number" value={editBalance} onChange={e => setEditBalance(e.target.value)} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm">Cancel</button>
              </DialogClose>
              <button onClick={submitEdit} className="px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] transition-colors">
                Save
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isProfitEditOpen} onOpenChange={setIsProfitEditOpen}>
          <DialogTrigger asChild>
            <button className="p-2 bg-white/5 hover:bg-white/10 text-purple-400 rounded-sm transition-colors" title="Edit Profit"><TrendingUp className="w-4 h-4" /></button>
          </DialogTrigger>
          <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
            <DialogHeader>
              <DialogTitle>Edit Profit for {name}</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <label className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block">New Profit Amount</label>
              <input type="number" value={editProfit} onChange={e => setEditProfit(e.target.value)} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm">Cancel</button>
              </DialogClose>
              <button onClick={submitProfitEdit} className="px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] transition-colors">
                Save
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="p-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 rounded-sm transition-colors" title={status === 'Suspended' ? 'Unban User' : 'Ban User'}><Ban className="w-4 h-4" /></button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
            <AlertDialogHeader>
              <AlertDialogTitle>{status === 'Suspended' ? 'Unban' : 'Ban'} {name}?</AlertDialogTitle>
              <AlertDialogDescription className="text-gray-400">
                Are you sure you want to {status === 'Suspended' ? 'unban' : 'ban'} this user?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => onBan(status === 'Suspended' ? 'Active' : 'Suspended')} className="bg-orange-500 text-white hover:bg-orange-600">{status === 'Suspended' ? 'Unban' : 'Ban'}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="p-2 bg-red-900/20 hover:bg-red-900/40 text-red-600 rounded-sm transition-colors" title="Delete User"><Trash2 className="w-4 h-4" /></button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Delete {name}?</AlertDialogTitle>
              <AlertDialogDescription className="text-gray-400">
                WARNING: Are you sure you want to completely delete this user profile? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} className="bg-red-600 text-white hover:bg-red-700">Delete Permanently</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        </div>
      </td>
    </tr>
  );
}

function TransactionsTab() {
  const { transactions } = useTransactionStore();
  const pendingTxs = transactions.filter(t => t.status === 'pending');

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-white font-light font-['Outfit']">Pending Approvals</h1>
      </div>
      
      <div className="space-y-4">
        {pendingTxs.length === 0 ? (
          <div className="text-center py-12 text-gray-500 border border-white/5 bg-[#0a0f1c] rounded-sm">No pending transactions.</div>
        ) : (
          pendingTxs.map(tx => (
            <TransactionCard key={tx.id} tx={tx} />
          ))
        )}
      </div>
    </div>
  );
}

function TransactionCard({ tx }: { tx: any }) {
  const { updateStatus } = useTransactionStore();
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [usdValue, setUsdValue] = useState('');
  const [sentTxid, setSentTxid] = useState('');
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Helper: fire a background push to the user's phone
  const sendPushToUser = async (title: string, body: string, tag: string) => {
    try {
      // Get the user_id from the transaction's user email
      const { data: profile } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', tx.userEmail)
        .single();
      if (!profile) return;

      await supabase.functions.invoke('send-push-notification', {
        body: { user_id: profile.id, title, body, tag },
      });
    } catch (err) {
      console.error('[Admin Push]', err);
    }
  };

  // Helper: fire a background email notification to the user
  const sendEmailToUser = async (type: string, amount: number, extraData: any = {}) => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('name')
        .eq('email', tx.userEmail)
        .single();
      
      await sendNotificationEmail(tx.userEmail, type, {
        amount,
        full_name: profile?.name || '',
        ...extraData
      });
    } catch (err) {
      console.error('[Admin Email Notification]', err);
    }
  };

  const handleApprove = async () => {
    const amt = `$${Number(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })} ${tx.asset || ''}`;
    if (tx.type === 'deposit') {
      updateStatus(tx.id, 'approved', tx.amount);
      await sendPushToUser(
        '✅ Deposit Approved — TheSpaceHoldings',
        `Your deposit of ${amt} has been credited to your account.`,
        'deposit-approved'
      );
      sendEmailToUser('deposit-approved', tx.amount);
    } else {
      if (sentTxid) {
        await supabase.from('transactions').update({ txid: sentTxid }).eq('id', tx.id);
      }
      updateStatus(tx.id, 'approved');
      await sendPushToUser(
        '💸 Withdrawal Sent — TheSpaceHoldings',
        `Your withdrawal of ${amt} has been processed and sent.`,
        'withdrawal-approved'
      );
      sendEmailToUser('withdrawal-approved', tx.amount);
    }
    setIsApproveOpen(false);
  };

  const handleReject = async () => {
    const amt = `$${Number(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })} ${tx.asset || ''}`;
    updateStatus(tx.id, 'rejected');
    await sendPushToUser(
      `❌ ${tx.type === 'deposit' ? 'Deposit' : 'Withdrawal'} Rejected — TheSpaceHoldings`,
      `Your ${tx.type} of ${amt} was not approved. Please contact support.`,
      `${tx.type}-rejected`
    );
    sendEmailToUser(`${tx.type}-rejected`, tx.amount);
  };

  const handleCopy = (text: string) => {
    if (text) navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const timeAgo = Math.floor((Date.now() - tx.timestamp) / 60000);
  const timeStr = timeAgo < 60 ? `${timeAgo} mins ago` : `${Math.floor(timeAgo/60)} hours ago`;

  return (
    <div className="relative">
    {/* Screenshot Lightbox */}
    {lightboxOpen && tx.screenshotUrl && (
      <div
        className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
        onClick={() => setLightboxOpen(false)}
      >
        <button
          className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          onClick={() => setLightboxOpen(false)}
        >
          <XIcon className="w-5 h-5" />
        </button>
        <img
          src={tx.screenshotUrl}
          alt="Deposit proof"
          className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
          onClick={e => e.stopPropagation()}
        />
      </div>
    )}

    <div className="bg-[#0a0f1c] border border-[#c9a84c]/30 rounded-sm overflow-hidden">
      {/* Screenshot strip - visible only for deposits with a screenshot */}
      {tx.screenshotUrl && tx.type === 'deposit' && (
        <div
          className="relative h-32 bg-[#070b14] overflow-hidden cursor-pointer group"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={tx.screenshotUrl}
            alt="Deposit proof screenshot"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 left-3 flex items-center gap-1.5 text-[10px] text-white/70 font-bold uppercase tracking-widest">
            <Eye className="w-3 h-3" /> Deposit Proof - Click to enlarge
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <div className="text-[10px] text-[#c9a84c] uppercase tracking-widest font-bold mb-2">{tx.type} Pending</div>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-2xl text-white font-light">{tx.amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 6})}</span>
          <span className="text-[11px] font-bold tracking-widest bg-white/10 px-2 py-1 uppercase rounded-sm text-gray-300">{tx.asset}</span>
        </div>
        <div className="text-[13px] text-gray-400 mb-1">From: <span className="text-white font-medium">{tx.userEmail}</span></div>
        <div className="text-[13px] text-gray-400">TXID: <span className="font-mono text-white text-[12px]">{tx.txid || 'N/A'}</span></div>
        {!tx.screenshotUrl && tx.type === 'deposit' && (
          <div className="mt-2 text-[11px] text-orange-400/70 flex items-center gap-1">
            <ImageIcon className="w-3 h-3" /> No screenshot submitted
          </div>
        )}
        <div className="text-[11px] text-gray-500 mt-3 flex items-center gap-2"><Clock className="w-3 h-3" /> Submitted {timeStr}</div>
      </div>
      <div className="flex flex-col gap-3">
        <Dialog open={isApproveOpen} onOpenChange={setIsApproveOpen}>
          <DialogTrigger asChild>
            <button className="px-8 py-3 bg-[#00d4aa] hover:bg-[#00b38f] text-[#070b14] font-bold text-[12px] uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" /> Approve
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white p-0 overflow-hidden max-w-md">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#00d4aa] to-[#00f5c8]" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#00d4aa]/15 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#00d4aa]" />
                </div>
                <div>
                  <h2 className="text-lg font-['Outfit'] font-semibold text-white capitalize">Approve {tx.type}</h2>
                  <p className="text-[12px] text-gray-500 uppercase tracking-widest">{tx.type === 'deposit' ? 'Credit user balance' : 'Send funds to user'}</p>
                </div>
              </div>

              <div className="bg-[#070b14] border border-white/5 rounded-sm p-4 mb-5 space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-500 uppercase tracking-widest">Amount</span>
                  <span className="text-white font-mono font-semibold">{tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })} {tx.asset}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-500 uppercase tracking-widest">User</span>
                  <span className="text-[13px] text-gray-300 truncate max-w-[200px]">{tx.userEmail}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-500 uppercase tracking-widest">TXID</span>
                  <span className="text-[12px] text-gray-400 font-mono">{tx.txid ? tx.txid.substring(0, 16) + '...' : 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-500 uppercase tracking-widest">Submitted</span>
                  <span className="text-[12px] text-gray-400">{timeStr}</span>
                </div>
              </div>

              {/* Screenshot preview inside modal */}
              {tx.screenshotUrl && tx.type === 'deposit' && (
                <div className="mb-5">
                  <label className="text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-2 block flex items-center gap-1.5"><Eye className="w-3 h-3" /> Deposit Screenshot</label>
                  <div
                    className="relative rounded-sm overflow-hidden cursor-pointer group border border-white/10"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <img
                      src={tx.screenshotUrl}
                      alt="Deposit proof"
                      className="w-full max-h-40 object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              )}

              {tx.type === 'deposit' && (
                <div className="mb-5 bg-[#00d4aa]/10 border border-[#00d4aa]/20 p-4 rounded-sm">
                  <p className="text-[14px] text-[#00d4aa] font-medium text-center">
                    Have you confirmed that payment has been received in your account?
                  </p>
                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    Clicking Confirm Approval will instantly credit ${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} to the user's balance.
                  </p>
                </div>
              )}

              {tx.type === 'withdrawal' && (
                <div className="mb-5 space-y-4">
                  <div>
                    <label className="text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-2 block">User's Receiving Address</label>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-[#070b14] border border-white/10 text-gray-300 p-3 rounded-sm text-[12px] font-mono truncate">{tx.txid || 'No address provided'}</div>
                      <button onClick={() => handleCopy(tx.txid)} className="px-4 bg-[#00d4aa]/10 hover:bg-[#00d4aa]/20 border border-[#00d4aa]/30 text-[#00d4aa] rounded-sm text-[11px] uppercase tracking-widest font-bold transition-colors whitespace-nowrap">
                        {copied ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-2 block">Sent TXID <span className="text-gray-600 normal-case tracking-normal font-normal">(optional)</span></label>
                    <input type="text" value={sentTxid} onChange={e => setSentTxid(e.target.value)} placeholder="Paste transaction hash after sending..."
                      className="w-full bg-[#070b14] border border-white/10 focus:border-[#00d4aa]/50 p-3 rounded-sm text-[12px] focus:outline-none text-white font-mono transition-colors" />
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <DialogClose asChild>
                  <button className="flex-1 py-3 text-[12px] uppercase tracking-widest font-bold bg-white/5 hover:bg-white/10 text-gray-300 rounded-sm transition-colors">Cancel</button>
                </DialogClose>
                <button onClick={handleApprove}
                  className="flex-1 py-3 text-[12px] uppercase tracking-widest font-bold bg-[#00d4aa] hover:bg-[#00b38f] text-[#070b14] rounded-sm disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                  ✓ Confirm Approval
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="px-8 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold text-[12px] uppercase tracking-widest border border-red-500/30 rounded-sm transition-colors flex items-center justify-center gap-2">
              <XCircle className="w-4 h-4" /> Reject
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Reject {tx.type}</AlertDialogTitle>
              <AlertDialogDescription className="text-gray-400">
                Are you sure you want to reject this {tx.type}? The user will not receive these funds.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5 hover:text-white">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => updateStatus(tx.id, 'rejected')} className="bg-red-500 text-white hover:bg-red-600">
                Yes, Reject
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      </div>
    </div>
    </div>
  );
}

function WalletsTab() {
  const { cryptos, addCrypto, toggleActive, removeCrypto, updateAddress } = useCryptoStore();
  const [isOpen, setIsOpen] = useState(false);
  const [symbol, setSymbol] = useState('');
  const [name, setName] = useState('');
  const [network, setNetwork] = useState('Native');
  const [address, setAddress] = useState('');

  const handleAdd = () => {
    if (!symbol || !name || !network || !address) return;
    addCrypto({
      name,
      symbol: symbol.toUpperCase(),
      color: '#c9a84c',
      address,
      network,
      active: true
    });
    setIsOpen(false);
    setSymbol(''); setName(''); setNetwork('Native'); setAddress('');
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-white font-light font-['Outfit']">Platform Wallets</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="px-6 py-3 bg-white text-[#070b14] text-[12px] font-bold uppercase tracking-widest rounded-sm hover:bg-gray-200 transition-colors">
              + Add New Wallet
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
            <DialogHeader>
              <DialogTitle>Add New Wallet</DialogTitle>
              <DialogDescription className="text-gray-400">
                Enter the details for the new platform wallet.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Symbol</label>
                <input value={symbol} onChange={e => setSymbol(e.target.value)} placeholder="e.g. BTC" className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Name</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Bitcoin" className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Network</label>
                <input value={network} onChange={e => setNetwork(e.target.value)} placeholder="e.g. Native" className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Wallet Address</label>
                <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Enter wallet address" className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm">Cancel</button>
              </DialogClose>
              <button onClick={handleAdd} disabled={!symbol || !name || !network || !address} className="px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] disabled:opacity-50 transition-colors">
                Save Wallet
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cryptos.map(crypto => (
          <WalletCard 
            key={crypto.id} 
            crypto={crypto} 
            toggleActive={toggleActive}
            removeCrypto={removeCrypto}
            updateAddress={updateAddress}
          />
        ))}
      </div>
    </div>
  );
}

function WalletCard({ 
  crypto, 
  toggleActive, 
  removeCrypto, 
  updateAddress 
}: { 
  crypto: any; 
  toggleActive: (id: string) => Promise<void>; 
  removeCrypto: (id: string) => Promise<void>; 
  updateAddress: (id: string, address: string) => Promise<void>; 
}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editAddress, setEditAddress] = useState(crypto.address || '');

  const handleEdit = () => {
    if (editAddress && editAddress !== crypto.address) {
      updateAddress(crypto.id, editAddress);
    }
    setIsEditOpen(false);
  };

  return (
    <div className={`bg-[#0a0f1c] border ${crypto.active ? 'border-white/20' : 'border-white/5'} p-6 rounded-sm relative overflow-hidden group`}>
      
      <div className="flex justify-between items-start mb-6 relative z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[12px] font-bold" style={{ backgroundColor: `${crypto.color}15`, color: crypto.color }}>
            {crypto.symbol.substring(0,1)}
          </div>
          <div>
            <h3 className="text-lg text-white font-['Outfit'] leading-none mb-1.5 flex items-center gap-2">
              {crypto.name} <span className="text-sm text-gray-500">({crypto.symbol})</span>
              <span className={`px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-widest ${crypto.active ? 'bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'}`}>
                {crypto.active ? 'Active' : 'Inactive'}
              </span>
            </h3>
            <div className="text-[11px] text-gray-500 uppercase tracking-widest">{crypto.network}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => toggleActive(crypto.id)} title={crypto.active ? "Deactivate" : "Activate"} className={`transition-colors p-2 rounded-sm ${crypto.active ? 'text-gray-500 hover:text-orange-400 bg-white/5 hover:bg-orange-500/10' : 'text-white hover:text-green-400 bg-white/10 hover:bg-green-500/20'}`}><Power className="w-4 h-4" /></button>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="text-red-400 hover:text-red-300 transition-colors bg-red-500/10 p-2 rounded-sm"><Trash2 className="w-4 h-4" /></button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
              <AlertDialogHeader>
                <AlertDialogTitle>Delete {crypto.symbol}?</AlertDialogTitle>
                <AlertDialogDescription className="text-gray-400">
                  Are you sure you want to permanently remove {crypto.name} from the platform wallets? Users will no longer see this as a deposit option.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5 hover:text-white">Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => removeCrypto(crypto.id)} className="bg-red-500 text-white hover:bg-red-600">Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className="bg-[#070b14] border border-white/10 p-3 rounded-sm flex items-center justify-between relative z-20">
        <code className="text-[13px] text-gray-300 truncate mr-4">{crypto.address || 'No address set'}</code>
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogTrigger asChild>
            <button className="text-[#c9a84c] text-[11px] uppercase tracking-widest font-bold hover:underline shrink-0">Edit Address</button>
          </DialogTrigger>
          <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
            <DialogHeader>
              <DialogTitle>Update {crypto.symbol} Address</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <label className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block">Wallet Address</label>
              <input value={editAddress} onChange={e => setEditAddress(e.target.value)} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm">Cancel</button>
              </DialogClose>
              <button onClick={handleEdit} className="px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] transition-colors">
                Update
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function SecurityTab() {
  const [settings, setSettings] = useState({ maintenance_mode: false, withdrawals_halted: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase.from('platform_settings').select('*').eq('id', 1).single();
      if (data) setSettings(data);
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const toggleMaintenance = async () => {
    const newVal = !settings.maintenance_mode;
    await supabase.from('platform_settings').update({ maintenance_mode: newVal }).eq('id', 1);
    setSettings(prev => ({ ...prev, maintenance_mode: newVal }));
  };

  const toggleWithdrawals = async () => {
    const newVal = !settings.withdrawals_halted;
    await supabase.from('platform_settings').update({ withdrawals_halted: newVal }).eq('id', 1);
    setSettings(prev => ({ ...prev, withdrawals_halted: newVal }));
  };

  const handleWipe = async () => {
    await supabase.rpc('wipe_database');
    window.location.reload();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="animate-in fade-in duration-500 max-w-3xl">
      <h1 className="text-3xl text-white font-light font-['Outfit'] mb-8">SuperAdmin Settings</h1>
      
      <div className="space-y-6">
        <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-sm">
          <h3 className="text-lg text-red-400 font-['Outfit'] mb-2 flex items-center gap-2"><ShieldAlert className="w-5 h-5" /> Danger Zone</h3>
          <p className="text-[13px] text-gray-400 mb-6">These actions affect the entire platform. Proceed with extreme caution.</p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#070b14] border border-white/5 rounded-sm">
              <div>
                <div className="text-[14px] text-white font-semibold">Maintenance Mode</div>
                <div className="text-[12px] text-gray-500">Disable all user logins and trading</div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className={`px-6 py-2 text-[11px] uppercase tracking-widest font-bold rounded-sm border transition-colors ${settings.maintenance_mode ? 'bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/20 hover:bg-[#c9a84c]/20' : 'bg-white/5 hover:bg-white/10 text-white border-white/10'}`}>
                    {settings.maintenance_mode ? 'Disable' : 'Enable'}
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>{settings.maintenance_mode ? 'Disable' : 'Enable'} Maintenance Mode?</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-400">
                      {settings.maintenance_mode ? 'This will allow users to log in and trade normally again.' : 'This will prevent all non-admin users from logging in or making transactions.'}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={toggleMaintenance} className="bg-red-600 text-white hover:bg-red-700">Confirm</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-[#070b14] border border-white/5 rounded-sm">
              <div>
                <div className="text-[14px] text-white font-semibold">Halt Withdrawals</div>
                <div className="text-[12px] text-gray-500">Temporarily suspend all outgoing transactions</div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className={`px-6 py-2 text-[11px] uppercase tracking-widest font-bold rounded-sm border transition-colors ${settings.withdrawals_halted ? 'bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/20 hover:bg-[#c9a84c]/20' : 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20'}`}>
                    {settings.withdrawals_halted ? 'Resume' : 'Halt'}
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>{settings.withdrawals_halted ? 'Resume' : 'Halt'} Withdrawals?</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-400">
                      {settings.withdrawals_halted ? 'This will allow users to submit withdrawal requests again.' : 'This will prevent users from submitting any new withdrawal requests.'}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={toggleWithdrawals} className="bg-red-600 text-white hover:bg-red-700">Confirm</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-[#070b14] border border-white/5 rounded-sm">
              <div>
                <div className="text-[14px] text-white font-semibold">Wipe Database</div>
                <div className="text-[12px] text-gray-500">Delete all users, transactions, and wallets</div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="px-6 py-2 bg-red-900/40 hover:bg-red-900/60 text-red-200 text-[11px] uppercase tracking-widest font-bold rounded-sm border border-red-500 transition-colors">Wipe All</button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-[#0a0f1c] border border-red-500/50 text-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-red-500">EXTREME DANGER: Wipe Database?</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-300">
                      This will permanently delete ALL users (except admins), ALL transactions, ALL investments, and ALL wallets. This action cannot be undone. Are you absolutely sure?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleWipe} className="bg-red-600 text-white font-bold hover:bg-red-700">Yes, Destroy Everything</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Copy Trading Tab ─────────────────────────────────────────────────────────

type MasterTrader = {
  id: string;
  name: string;
  description: string | null;
  avatar_url: string | null;
  win_rate: number;
  total_pnl: number;
  roi: number;
  followers_count: number;
  is_active: boolean;
  daily_trades_min: number;
  daily_trades_max: number;
  created_at: string;
};

const EMPTY_TRADER: Omit<MasterTrader, 'id' | 'created_at'> = {
  name: '',
  description: '',
  avatar_url: null,
  win_rate: 85,
  total_pnl: 0,
  roi: 0,
  followers_count: 0,
  is_active: true,
  daily_trades_min: 2,
  daily_trades_max: 5,
};

function CopyTradingTab() {
  const [traders, setTraders] = useState<MasterTrader[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTrader, setEditingTrader] = useState<MasterTrader | null>(null);
  const [form, setForm] = useState({ ...EMPTY_TRADER });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Simulate trades state
  const [isSimulateOpen, setIsSimulateOpen] = useState(false);
  const [simTrader, setSimTrader] = useState<MasterTrader | null>(null);
  const [simDays, setSimDays] = useState(1);
  const [simulating, setSimulating] = useState(false);
  const [simResult, setSimResult] = useState<{ trades: number; pnl: number; winRate: number } | null>(null);

  // Followers state
  const [isFollowersOpen, setIsFollowersOpen] = useState(false);
  const [selectedTraderFollowers, setSelectedTraderFollowers] = useState<any[]>([]);
  const [loadingFollowers, setLoadingFollowers] = useState(false);

  const fetchTraders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('master_traders')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) {
      console.error("Master traders table might not exist yet:", error);
      // Fallback for UI mockup when DB isn't ready
      setTraders([
        {
          id: 'mock-1', name: 'Crypto King', description: 'High frequency scalping on majors', avatar_url: null,
          win_rate: 92.5, total_pnl: 15400, roi: 340, followers_count: 124, is_active: true,
          daily_trades_min: 5, daily_trades_max: 15, created_at: new Date().toISOString()
        },
        {
          id: 'mock-2', name: 'Alpha Signals', description: 'Long-term swing trading, strictly fundamental', avatar_url: null,
          win_rate: 76.2, total_pnl: 8520, roi: 125, followers_count: 89, is_active: true,
          daily_trades_min: 1, daily_trades_max: 3, created_at: new Date().toISOString()
        }
      ]);
    } else if (data) {
      setTraders(data as MasterTrader[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchTraders(); }, []);

  const openAdd = () => {
    setEditingTrader(null);
    setForm({ ...EMPTY_TRADER });
    setImageFile(null);
    setImagePreview(null);
    setError('');
    setIsModalOpen(true);
  };

  const openEdit = (trader: MasterTrader) => {
    setEditingTrader(trader);
    setForm({
      name: trader.name,
      description: trader.description,
      avatar_url: trader.avatar_url,
      win_rate: trader.win_rate,
      total_pnl: trader.total_pnl,
      roi: trader.roi,
      followers_count: trader.followers_count,
      is_active: trader.is_active,
      daily_trades_min: trader.daily_trades_min,
      daily_trades_max: trader.daily_trades_max,
    });
    setImageFile(null);
    setImagePreview(trader.avatar_url);
    setError('');
    setIsModalOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const ext = file.name.split('.').pop();
    const path = `trader-${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from('avatars').upload(path, file, { upsert: true });
    if (error) { setError('Image upload failed: ' + error.message); return null; }
    const { data } = supabase.storage.from('avatars').getPublicUrl(path);
    return data.publicUrl;
  };

  const handleSave = async () => {
    if (!form.name.trim()) { setError('Trader name is required.'); return; }
    setSaving(true);
    setError('');

    let avatarUrl = form.avatar_url;
    if (imageFile) {
      setUploading(true);
      avatarUrl = await uploadImage(imageFile);
      setUploading(false);
      if (!avatarUrl) { setSaving(false); return; }
    }

    const payload = {
      name: form.name.trim(),
      description: form.description?.trim() || null,
      avatar_url: avatarUrl,
      win_rate: Number(form.win_rate),
      total_pnl: Number(form.total_pnl),
      roi: Number(form.roi),
      followers_count: Number(form.followers_count),
      is_active: form.is_active,
      daily_trades_min: Number(form.daily_trades_min),
      daily_trades_max: Number(form.daily_trades_max),
    };

    let resultError;
    if (editingTrader && !editingTrader.id.startsWith('mock')) {
      const { error } = await supabase.from('master_traders').update(payload).eq('id', editingTrader.id);
      resultError = error;
    } else if (!editingTrader || editingTrader.id.startsWith('mock')) {
      const { error } = await supabase.from('master_traders').insert(payload);
      resultError = error;
    }

    if (resultError) {
      setError('Error saving trader: ' + resultError.message + ' (Check database schema)');
      setSaving(false);
      return;
    }

    setSaving(false);
    setIsModalOpen(false);
    fetchTraders();
  };

  const handleDelete = async (id: string) => {
    if (id.startsWith('mock')) {
      setTraders(traders.filter(t => t.id !== id));
      return;
    }
    await supabase.from('master_traders').delete().eq('id', id);
    fetchTraders();
  };

  const toggleActive = async (trader: MasterTrader) => {
    if (trader.id.startsWith('mock')) {
      setTraders(traders.map(t => t.id === trader.id ? { ...t, is_active: !t.is_active } : t));
      return;
    }
    await supabase.from('master_traders').update({ is_active: !trader.is_active }).eq('id', trader.id);
    fetchTraders();
  };

  const openSimulate = (trader: MasterTrader) => {
    setSimTrader(trader);
    setSimDays(1);
    setSimResult(null);
    setIsSimulateOpen(true);
  };

  const runSimulation = async () => {
    if (!simTrader) return;
    setSimulating(true);

    let totalTrades = 0;
    let newPnl = simTrader.total_pnl;
    let wins = Math.round((simTrader.win_rate / 100) * 100); 
    let totalHistoricalTrades = wins > 0 ? 100 : 0; 

    for (let i = 0; i < simDays; i++) {
      const tradesToday = Math.floor(Math.random() * (simTrader.daily_trades_max - simTrader.daily_trades_min + 1)) + simTrader.daily_trades_min;
      totalTrades += tradesToday;
      
      for (let j = 0; j < tradesToday; j++) {
        const isWin = Math.random() * 100 <= simTrader.win_rate;
        totalHistoricalTrades++;
        if (isWin) {
          wins++;
          newPnl += Math.random() * 50 + 10;
        } else {
          newPnl -= Math.random() * 40 + 10;
        }
      }
    }

    const newWinRate = totalHistoricalTrades > 0 ? (wins / totalHistoricalTrades) * 100 : simTrader.win_rate;
    const pnlDiff = newPnl - simTrader.total_pnl;
    const newRoi = simTrader.roi + (pnlDiff / 100);

    const payload = {
      total_pnl: newPnl,
      win_rate: newWinRate,
      roi: newRoi,
    };

    if (!simTrader.id.startsWith('mock')) {
      await supabase.from('master_traders').update(payload).eq('id', simTrader.id);

      // Distribute profits to followers
      const roiDiff = newRoi - simTrader.roi;
      if (Math.abs(roiDiff) > 0) {
        const { data: followers } = await supabase
          .from('copy_trading_subscriptions')
          .select('id, user_id, amount, total_pnl')
          .eq('master_trader_id', simTrader.id)
          .eq('status', 'active');
          
        if (followers && followers.length > 0) {
          for (const follower of followers) {
            // Profit is the % change in ROI applied to their invested amount
            const followerProfit = (roiDiff / 100) * Number(follower.amount);
            
            // Update the subscription's total_pnl
            const newTotalPnl = Number(follower.total_pnl || 0) + followerProfit;
            await supabase.from('copy_trading_subscriptions').update({ total_pnl: newTotalPnl }).eq('id', follower.id);
            
            // Fetch current user balance
            const { data: profile } = await supabase
              .from('profiles')
              .select('balance, email')
              .eq('id', follower.user_id)
              .single();
              
            if (profile) {
              const newBalance = Number(profile.balance || 0) + followerProfit;
              
              // Update user balance directly
              await supabase.from('profiles').update({ balance: newBalance }).eq('id', follower.user_id);
              
              // Log the transaction
              await supabase.from('transactions').insert({
                user_id: follower.user_id,
                userEmail: profile.email,
                type: followerProfit >= 0 ? 'deposit' : 'withdrawal',
                amount: Math.abs(followerProfit),
                asset: followerProfit >= 0 ? 'PROFIT' : 'LOSS',
                txid: 'Automated copy trading return from ' + simTrader.name,
                status: 'approved',
                timestamp: Date.now()
              });
            }
          }
        }
      }
    } else {
      setTraders(traders.map(t => t.id === simTrader.id ? { ...t, ...payload } : t));
    }

    setSimResult({
      trades: totalTrades,
      pnl: pnlDiff,
      winRate: newWinRate,
    });
    
    if (!simTrader.id.startsWith('mock')) fetchTraders();
    setSimulating(false);
  };

  const openFollowers = async (trader: MasterTrader) => {
    setIsFollowersOpen(true);
    setLoadingFollowers(true);
    if (!trader.id.startsWith('mock')) {
      const { data, error } = await supabase
        .from('copy_trading_subscriptions')
        .select('*, profiles(email)')
        .eq('master_trader_id', trader.id);
      
      if (!error && data) {
        setSelectedTraderFollowers(data);
      } else {
        setSelectedTraderFollowers([]);
      }
    } else {
      setSelectedTraderFollowers([
        { id: '1', profiles: { email: 'user123@example.com' }, amount: 500, status: 'active' },
        { id: '2', profiles: { email: 'investor44@example.com' }, amount: 1200, status: 'active' },
        { id: '3', profiles: { email: 'crypto.whale@example.com' }, amount: 5000, status: 'active' }
      ]);
    }
    setLoadingFollowers(false);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl text-white font-light font-['Outfit'] flex items-center gap-3">
            Copy Trading
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 text-[#00d4aa] rounded-full text-[10px] uppercase tracking-widest font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse"></div>
              Auto-Bot Active
            </span>
          </h1>
          <p className="text-[13px] text-gray-500 mt-1">Manage master traders, simulate trades, and view followers.</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-[#070b14] text-[12px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#b89945] transition-colors"
        >
          <Plus className="w-4 h-4" /> New Trader
        </button>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-500">Loading traders...</div>
      ) : traders.length === 0 ? (
        <div className="text-center py-16 border border-white/5 bg-[#0a0f1c] rounded-sm">
          <Copy className="w-10 h-10 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500">No master traders available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {traders.map(trader => (
            <TraderCard
              key={trader.id}
              trader={trader}
              onEdit={() => openEdit(trader)}
              onDelete={() => handleDelete(trader.id)}
              onToggle={() => toggleActive(trader)}
              onSimulate={() => openSimulate(trader)}
              onFollowers={() => openFollowers(trader)}
            />
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-['Outfit'] text-xl">
              {editingTrader ? 'Edit Master Trader' : 'New Master Trader'}
            </DialogTitle>
            <DialogDescription className="text-gray-500 text-[12px]">
              Set up the copy trading profile.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-2 block">Avatar</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#070b14] border border-white/10 overflow-hidden flex items-center justify-center shrink-0">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <Users className="w-6 h-6 text-gray-600" />
                  )}
                </div>
                <label className="flex-1 cursor-pointer">
                  <div className="border border-dashed border-white/20 hover:border-[#c9a84c]/50 rounded-sm p-3 text-center transition-colors">
                    <p className="text-[12px] text-gray-400">Click to upload avatar</p>
                  </div>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block">Trader Name *</label>
              <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="e.g. Satoshi Ninja" className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white" />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block">Strategy Description</label>
              <textarea value={form.description || ''} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={2} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block">Win Rate (%)</label>
                <input type="number" step="0.1" value={form.win_rate} onChange={e => setForm(f => ({ ...f, win_rate: Number(e.target.value) }))} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block">ROI (%)</label>
                <input type="number" step="0.1" value={form.roi} onChange={e => setForm(f => ({ ...f, roi: Number(e.target.value) }))} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block">Total PnL ($)</label>
                <input type="number" value={form.total_pnl} onChange={e => setForm(f => ({ ...f, total_pnl: Number(e.target.value) }))} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block">Followers (Fake)</label>
                <input type="number" value={form.followers_count} onChange={e => setForm(f => ({ ...f, followers_count: Number(e.target.value) }))} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block">Min Daily Trades</label>
                <input type="number" value={form.daily_trades_min} onChange={e => setForm(f => ({ ...f, daily_trades_min: Number(e.target.value) }))} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block">Max Daily Trades</label>
                <input type="number" value={form.daily_trades_max} onChange={e => setForm(f => ({ ...f, daily_trades_max: Number(e.target.value) }))} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#070b14] border border-white/10 rounded-sm">
              <div className="text-[13px] text-white font-medium">Active Status</div>
              <button type="button" onClick={() => setForm(f => ({ ...f, is_active: !f.is_active }))} className={form.is_active ? 'text-[#00d4aa]' : 'text-gray-600'}>
                {form.is_active ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
              </button>
            </div>

            {error && <p className="text-red-400 text-[12px] bg-red-500/10 border border-red-500/20 p-3 rounded-sm">{error}</p>}
          </div>

          <DialogFooter>
            <DialogClose asChild><button className="px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm text-[12px] uppercase tracking-widest">Cancel</button></DialogClose>
            <button onClick={handleSave} disabled={saving || uploading} className="px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] disabled:opacity-50 transition-colors text-[12px] uppercase tracking-widest">
              {uploading ? 'Uploading...' : saving ? 'Saving...' : 'Save Trader'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Simulate Trades Modal */}
      <Dialog open={isSimulateOpen} onOpenChange={setIsSimulateOpen}>
        <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Simulate Trades for {simTrader?.name}</DialogTitle>
            <DialogDescription className="text-gray-400">Generate fake trading activity to update PnL and stats.</DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div>
              <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-2 block">Days to simulate</label>
              <input type="number" min="1" max="30" value={simDays} onChange={e => setSimDays(Number(e.target.value))} className="w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" />
            </div>
            
            {simResult && (
              <div className="bg-[#070b14] p-4 rounded-sm border border-white/5 space-y-2">
                <h4 className="text-[12px] uppercase tracking-widest text-[#c9a84c] font-bold mb-2">Simulation Results</h4>
                <div className="flex justify-between text-sm"><span className="text-gray-400">Trades Executed:</span> <span>{simResult.trades}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-400">PnL Change:</span> <span className={simResult.pnl >= 0 ? 'text-[#00d4aa]' : 'text-red-400'}>{simResult.pnl >= 0 ? '+' : ''}${simResult.pnl.toFixed(2)}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-400">New Win Rate:</span> <span>{simResult.winRate.toFixed(2)}%</span></div>
              </div>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild><button className="px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm text-[12px] uppercase tracking-widest">Close</button></DialogClose>
            <button onClick={runSimulation} disabled={simulating} className="px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] disabled:opacity-50 transition-colors text-[12px] uppercase tracking-widest">
              {simulating ? 'Running...' : 'Run Simulation'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Followers Modal */}
      <Dialog open={isFollowersOpen} onOpenChange={setIsFollowersOpen}>
        <DialogContent className="bg-[#0a0f1c] border border-white/10 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Followers</DialogTitle>
            <DialogDescription className="text-gray-400">Users actively copying this trader.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {loadingFollowers ? (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            ) : selectedTraderFollowers.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No active followers.</div>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 text-[11px] text-gray-500 uppercase tracking-widest">
                    <th className="pb-2 font-semibold">User</th>
                    <th className="pb-2 font-semibold">Copy Amount</th>
                    <th className="pb-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {selectedTraderFollowers.map((f: any, i: number) => (
                    <tr key={i}>
                      <td className="py-3 text-[13px]">{f.profiles?.email || 'Unknown User'}</td>
                      <td className="py-3 text-[13px] font-mono">${f.amount}</td>
                      <td className="py-3"><span className="bg-[#00d4aa]/10 text-[#00d4aa] px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-widest font-bold">{f.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function TraderCard({ trader, onEdit, onDelete, onToggle, onSimulate, onFollowers }: { trader: MasterTrader; onEdit: () => void; onDelete: () => void; onToggle: () => void; onSimulate: () => void; onFollowers: () => void; }) {
  return (
    <div className={`bg-[#0a0f1c] border ${trader.is_active ? 'border-[#c9a84c]/30' : 'border-white/5'} rounded-sm p-5 relative`}>
      <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-widest ${trader.is_active ? 'bg-[#00d4aa]/20 text-[#00d4aa] border border-[#00d4aa]/30' : 'bg-white/5 text-gray-500 border border-white/10'}`}>
        {trader.is_active ? 'Active' : 'Inactive'}
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#070b14] border border-white/10 flex items-center justify-center shrink-0">
          {trader.avatar_url ? <img src={trader.avatar_url} alt={trader.name} className="w-full h-full object-cover" /> : <Users className="w-6 h-6 text-gray-600" />}
        </div>
        <div>
          <h3 className="text-white font-['Outfit'] font-semibold text-lg leading-none">{trader.name}</h3>
          <div className="text-[12px] text-gray-500 mt-1">{trader.followers_count} Followers</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-[#070b14] border border-white/5 p-2 rounded-sm text-center">
          <div className="text-white font-mono font-bold text-sm">{trader.win_rate.toFixed(1)}%</div>
          <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">Win Rate</div>
        </div>
        <div className="bg-[#070b14] border border-white/5 p-2 rounded-sm text-center">
          <div className="text-[#00d4aa] font-mono font-bold text-sm">+{trader.roi.toFixed(1)}%</div>
          <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">ROI</div>
        </div>
        <div className="bg-[#070b14] border border-white/5 p-2 rounded-sm text-center">
          <div className={`font-mono font-bold text-sm ${trader.total_pnl >= 0 ? 'text-[#00d4aa]' : 'text-red-400'}`}>
            ${trader.total_pnl.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">Total PnL</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={onSimulate} className="flex-1 py-2 bg-[#c9a84c]/10 hover:bg-[#c9a84c]/20 text-[#c9a84c] rounded-sm text-[10px] uppercase tracking-widest font-bold transition-colors">Simulate Trades</button>
        <button onClick={onFollowers} className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-white rounded-sm text-[10px] uppercase tracking-widest font-bold transition-colors">View Followers</button>
      </div>

      <div className="flex gap-2">
        <button onClick={onEdit} className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-white rounded-sm text-[11px] uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-1.5"><Edit className="w-3.5 h-3.5" /> Edit</button>
        <button onClick={onToggle} className={`p-2 rounded-sm transition-colors ${trader.is_active ? 'bg-orange-500/10 hover:bg-orange-500/20 text-orange-400' : 'bg-[#00d4aa]/10 hover:bg-[#00d4aa]/20 text-[#00d4aa]'}`}><Power className="w-4 h-4" /></button>
        <AlertDialog>
          <AlertDialogTrigger asChild><button className="p-2 bg-red-900/20 hover:bg-red-900/40 text-red-500 rounded-sm transition-colors"><Trash2 className="w-4 h-4" /></button></AlertDialogTrigger>
          <AlertDialogContent className="bg-[#0a0f1c] border border-white/10 text-white">
            <AlertDialogHeader><AlertDialogTitle>Delete {trader.name}?</AlertDialogTitle><AlertDialogDescription className="text-gray-400">This will permanently remove this copy trader profile.</AlertDialogDescription></AlertDialogHeader>
            <AlertDialogFooter><AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5">Cancel</AlertDialogCancel><AlertDialogAction onClick={onDelete} className="bg-red-600 text-white hover:bg-red-700">Delete</AlertDialogAction></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

function KYCDocumentViewer({ url, label, onClose }: { url: string; label: string; onClose: () => void }) {
  const [zoom, setZoom] = React.useState(1);
  const [dragging, setDragging] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [start, setStart] = React.useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStart({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setPos({ x: e.clientX - start.x, y: e.clientY - start.y });
  };
  const handleMouseUp = () => setDragging(false);
  const resetView = () => { setZoom(1); setPos({ x: 0, y: 0 }); };

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex flex-col" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#c9a84c]" />
          <span className="text-white font-['Outfit'] font-semibold">{label}</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-sm">Document Inspector</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <span className="text-[12px] text-gray-400 mr-2">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(z => Math.max(0.5, z - 0.25))} className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-sm border border-white/10 text-lg font-bold transition-colors">−</button>
          <button onClick={resetView} className="px-3 h-8 bg-white/5 hover:bg-white/10 text-gray-400 rounded-sm border border-white/10 text-[10px] uppercase tracking-widest font-bold transition-colors">Reset</button>
          <button onClick={() => setZoom(z => Math.min(4, z + 0.25))} className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-sm border border-white/10 text-lg font-bold transition-colors">+</button>
          <a href={url} download target="_blank" rel="noopener noreferrer" className="ml-2 px-4 h-8 flex items-center bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-sm border border-white/10 text-[10px] uppercase tracking-widest font-bold transition-colors gap-1.5">
            <Eye className="w-3.5 h-3.5" /> Open Original
          </a>
          <button onClick={onClose} className="ml-2 w-8 h-8 flex items-center justify-center bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-sm border border-red-500/20 transition-colors">
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing" onMouseDown={handleMouseDown}>
        <img
          src={url}
          alt={label}
          draggable={false}
          style={{
            transform: `scale(${zoom}) translate(${pos.x / zoom}px, ${pos.y / zoom}px)`,
            transition: dragging ? 'none' : 'transform 0.15s ease',
            maxWidth: 'none',
            userSelect: 'none',
          }}
          className="max-h-[80vh] rounded-sm shadow-2xl"
          onError={e => (e.currentTarget.src = '')}
        />
      </div>

      {/* Bottom zoom hint */}
      <div className="text-center py-3 text-[10px] text-gray-600 uppercase tracking-widest border-t border-white/5">
        Click and drag to pan · Use + / − to zoom · Scroll to zoom
      </div>
    </div>
  );
}

function KYCInspectModal({ user, onClose, onApprove, onReject, processing }: {
  user: any; onClose: () => void;
  onApprove: () => void; onReject: (reason: string) => void; processing: boolean;
}) {
  const [viewerUrl, setViewerUrl] = React.useState<string | null>(null);
  const [viewerLabel, setViewerLabel] = React.useState('');
  const [rejectReason, setRejectReason] = React.useState('');
  const [showReject, setShowReject] = React.useState(false);
  const [checks, setChecks] = React.useState({ nameMatch: false, faceMatch: false, docClear: false, notExpired: false });

  const allChecked = Object.values(checks).every(Boolean);
  const docs = [
    { url: user.kyc_document_front_url, label: 'Front of ID' },
    { url: user.kyc_document_back_url, label: 'Back of ID' },
    { url: user.kyc_selfie_url, label: 'Selfie with ID' },
  ].filter(d => d.url);

  return (
    <>
      {viewerUrl && (
        <KYCDocumentViewer url={viewerUrl} label={viewerLabel} onClose={() => setViewerUrl(null)} />
      )}

      <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-5xl bg-[#0a0f1c] border border-white/10 rounded-sm shadow-2xl shadow-black/60 my-8">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl text-white font-['Outfit'] font-semibold">KYC Document Inspection</h2>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30">Under Review</span>
              </div>
              <p className="text-[12px] text-gray-500">{user.email} · {user.kyc_full_name} · {user.kyc_country} · <span className="capitalize">{user.kyc_document_type?.replace('_', ' ')}</span></p>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 text-gray-400 rounded-sm transition-colors">
              <XIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Documents Side-by-Side */}
          <div className="p-6 border-b border-white/5">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-4">Submitted Documents — Click any image to inspect full resolution</div>
            <div className={`grid gap-4 ${docs.length === 3 ? 'grid-cols-3' : docs.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {docs.map(doc => (
                <div key={doc.label} className="group">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-semibold flex items-center gap-2">
                    {doc.label}
                    <span className="text-[9px] text-gray-700 group-hover:text-[#c9a84c] transition-colors">Click to inspect</span>
                  </div>
                  <div
                    onClick={() => { setViewerUrl(doc.url); setViewerLabel(doc.label); }}
                    className="cursor-zoom-in relative rounded-sm overflow-hidden border border-white/10 group-hover:border-[#c9a84c]/40 transition-colors"
                  >
                    <img
                      src={doc.url}
                      alt={doc.label}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={e => { e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-52 flex items-center justify-center text-gray-600 text-xs bg-white/5">Unable to load image</div>'; }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 px-3 py-1.5 rounded-sm flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#c9a84c]" />
                        <span className="text-[10px] text-white uppercase tracking-widest font-bold">Full View</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Cross-Check Checklist */}
          <div className="p-6 border-b border-white/5">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-4">Cross-Check Verification — All items must be checked before approving</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { key: 'nameMatch', label: 'Name on document matches submitted name', detail: `Submitted: ${user.kyc_full_name}` },
                { key: 'faceMatch', label: 'Face in selfie matches face on document', detail: 'Verify facial features match clearly' },
                { key: 'docClear', label: 'Document image is clear and unobstructed', detail: 'No blur, glare, or cropping issues' },
                { key: 'notExpired', label: 'Document appears valid and not expired', detail: 'Check expiry date if visible' },
              ].map(item => (
                <label key={item.key} className={`flex items-start gap-3 p-4 rounded-sm border cursor-pointer transition-all ${checks[item.key as keyof typeof checks] ? 'border-[#00d4aa]/30 bg-[#00d4aa]/5' : 'border-white/5 hover:border-white/10 bg-[#070b14]'}`}>
                  <div className={`w-5 h-5 rounded-sm border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all ${checks[item.key as keyof typeof checks] ? 'border-[#00d4aa] bg-[#00d4aa]' : 'border-white/20'}`}
                    onClick={() => setChecks(c => ({ ...c, [item.key]: !c[item.key as keyof typeof checks] }))}
                  >
                    {checks[item.key as keyof typeof checks] && <svg className="w-3 h-3 text-[#070b14]" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <div>
                    <div className="text-[13px] text-white font-medium leading-snug">{item.label}</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">{item.detail}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div className="p-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="text-[12px] text-gray-500">
              {allChecked
                ? <span className="text-[#00d4aa] font-semibold">✓ All checks passed — ready to approve or reject</span>
                : <span>Complete all {Object.values(checks).filter(Boolean).length}/4 checklist items before taking action</span>
              }
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => setShowReject(r => !r)}
                disabled={processing}
                className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-sm text-[11px] uppercase tracking-widest font-bold transition-colors disabled:opacity-50"
              >
                ✕ Reject
              </button>
              <button
                disabled={!allChecked || processing}
                onClick={onApprove}
                className="px-6 py-3 bg-[#00d4aa] hover:bg-[#00b38f] text-[#070b14] rounded-sm text-[11px] uppercase tracking-widest font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {processing ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Processing...</> : '✓ Approve Identity'}
              </button>
            </div>
          </div>

          {/* Reject Input */}
          {showReject && (
            <div className="px-6 pb-6 border-t border-white/5 pt-5">
              <label className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold">Rejection Reason <span className="text-red-400">*</span> <span className="text-gray-600 normal-case tracking-normal">(this will be shown to the user)</span></label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={rejectReason}
                  onChange={e => setRejectReason(e.target.value)}
                  placeholder="e.g. Document image is too blurry to verify identity"
                  className="flex-1 bg-[#070b14] border border-red-500/30 text-white p-3 rounded-sm focus:outline-none focus:border-red-500/60 text-sm"
                />
                <button
                  onClick={() => { if (rejectReason.trim()) onReject(rejectReason.trim()); }}
                  disabled={!rejectReason.trim() || processing}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-sm text-[11px] uppercase tracking-widest font-bold transition-colors disabled:opacity-50"
                >
                  Confirm Reject
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function KYCTab() {
  const [submissions, setSubmissions] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [processingId, setProcessingId] = React.useState<string | null>(null);
  const [filterStatus, setFilterStatus] = React.useState<'pending' | 'verified' | 'rejected'>('pending');
  const [inspecting, setInspecting] = React.useState<any | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('profiles')
      .select('id, email, kyc_status, kyc_full_name, kyc_country, kyc_document_type, kyc_document_front_url, kyc_document_back_url, kyc_selfie_url, kyc_submitted_at, kyc_rejection_reason')
      .eq('kyc_status', filterStatus)
      .order('kyc_submitted_at', { ascending: false });
    setSubmissions(data || []);
    setLoading(false);
  };

  React.useEffect(() => { fetchSubmissions(); }, [filterStatus]);

  const handleApprove = async (userId: string) => {
    setProcessingId(userId);
    await supabase.from('profiles').update({ kyc_status: 'verified' }).eq('id', userId);
    setProcessingId(null);
    setInspecting(null);
    fetchSubmissions();
  };

  const handleReject = async (userId: string, reason: string) => {
    setProcessingId(userId);
    await supabase.from('profiles').update({ kyc_status: 'rejected', kyc_rejection_reason: reason }).eq('id', userId);
    setProcessingId(null);
    setInspecting(null);
    fetchSubmissions();
  };

  return (
    <>
      {inspecting && (
        <KYCInspectModal
          user={inspecting}
          onClose={() => setInspecting(null)}
          onApprove={() => handleApprove(inspecting.id)}
          onReject={(reason) => handleReject(inspecting.id, reason)}
          processing={processingId === inspecting?.id}
        />
      )}

      <div className="animate-in fade-in duration-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl text-white font-light font-['Outfit']">KYC Review</h1>
            <p className="text-[13px] text-gray-500 mt-1">Inspect, cross-check and verify user identity submissions</p>
          </div>
          <div className="flex gap-2">
            {(['pending', 'verified', 'rejected'] as const).map(s => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-4 py-2 text-[11px] uppercase tracking-widest font-bold rounded-sm border transition-all ${
                  filterStatus === s
                    ? s === 'pending' ? 'border-[#c9a84c]/60 bg-[#c9a84c]/10 text-[#c9a84c]'
                      : s === 'verified' ? 'border-[#00d4aa]/60 bg-[#00d4aa]/10 text-[#00d4aa]'
                      : 'border-red-500/60 bg-red-500/10 text-red-400'
                    : 'border-white/10 text-gray-500 hover:border-white/20 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 text-[13px] uppercase tracking-widest">Loading submissions...</div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/5 rounded-sm">
            <ShieldCheck className="w-10 h-10 text-gray-700 mx-auto mb-3" />
            <div className="text-gray-500 text-[13px]">No {filterStatus} KYC submissions.</div>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map(user => (
              <div key={user.id} className="bg-[#0a0f1c] border border-white/5 hover:border-white/10 rounded-sm overflow-hidden transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5">
                  {/* User info */}
                  <div className="flex items-start gap-4">
                    {/* Avatar initials */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 text-sm font-bold text-purple-300 uppercase">
                      {(user.kyc_full_name || user.email || '?').split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-white font-semibold font-['Outfit']">{user.kyc_full_name || '—'}</span>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm ${
                          user.kyc_status === 'pending' ? 'bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30'
                          : user.kyc_status === 'verified' ? 'bg-[#00d4aa]/20 text-[#00d4aa] border border-[#00d4aa]/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>{user.kyc_status}</span>
                      </div>
                      <div className="text-[12px] text-gray-500">{user.email}</div>
                      <div className="text-[11px] text-gray-600 mt-1 flex items-center gap-2 flex-wrap">
                        <span>{user.kyc_country}</span>
                        <span className="text-gray-700">·</span>
                        <span className="capitalize">{user.kyc_document_type?.replace('_', ' ')}</span>
                        {user.kyc_submitted_at && (
                          <><span className="text-gray-700">·</span><span>{new Date(user.kyc_submitted_at).toLocaleDateString()}</span></>
                        )}
                      </div>
                      {user.kyc_rejection_reason && (
                        <div className="text-[11px] text-red-400/70 mt-1">Rejection: {user.kyc_rejection_reason}</div>
                      )}
                    </div>
                  </div>

                  {/* Document thumbnails + inspect button */}
                  <div className="flex items-center gap-3 shrink-0">
                    {/* Mini thumbnail strip */}
                    <div className="flex gap-2">
                      {[user.kyc_document_front_url, user.kyc_document_back_url, user.kyc_selfie_url].filter(Boolean).map((url, i) => (
                        <div key={i} className="w-12 h-12 rounded-sm overflow-hidden border border-white/10">
                          <img src={url} alt="" className="w-full h-full object-cover" onError={e => (e.currentTarget.style.display = 'none')} />
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setInspecting(user)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#c9a84c]/10 hover:bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30 rounded-sm text-[11px] uppercase tracking-widest font-bold transition-all hover:shadow-lg hover:shadow-[#c9a84c]/10"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Inspect Docs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
