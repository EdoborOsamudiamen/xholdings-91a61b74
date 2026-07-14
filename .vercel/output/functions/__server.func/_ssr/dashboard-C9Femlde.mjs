import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logo } from "./logo-qUqMBaFB.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectGroup$1, c as SelectTrigger$1, d as SelectIcon, e as SelectPortal, f as SelectContent$1, g as SelectViewport, h as SelectItem$1, i as SelectItemIndicator, j as SelectItemText, k as SelectScrollUpButton$1, l as SelectScrollDownButton$1, m as SelectLabel$1, n as SelectSeparator$1 } from "../_libs/radix-ui__react-select.mjs";
import { c as cn } from "./button-BXrfXN_b.mjs";
import { u as useTransactionStore, D as Dialog, a as DialogContent, b as useCryptoStore, s as sendNotificationEmail } from "./dialog-_gPSYxQI.mjs";
import { s as supabase } from "./supabase-BOMigAZ6.mjs";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogAction } from "./alert-dialog-Xw497zxQ.mjs";
import { H as House, U as Users, T as TrendingUp, W as Wallet, G as Gift, o as User, p as LogOut, q as Bell, r as ArrowDownLeft, s as Activity, h as Shield, t as Check, u as Copy, I as Image, m as Clock, a as CircleCheck, S as ShieldCheck, v as Monitor, w as Smartphone, e as ChevronDown, x as ChevronUp } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-alert-dialog.mjs";
const Select = Select$1;
const SelectGroup = SelectGroup$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectTrigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollUpButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollDownButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectContent$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectViewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectContent$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectLabel$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectLabel$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectItem$1.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectSeparator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function useInvestmentStore() {
  const [investments, setInvestments] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    fetchInvestments();
    const channelId = `investments_changes_${Math.random()}`;
    const channel = supabase.channel(channelId).on(
      "postgres_changes",
      { event: "*", schema: "public", table: "investments" },
      () => {
        fetchInvestments();
      }
    ).subscribe();
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
    const { data, error } = await supabase.from("investments").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
    if (data && !error) {
      const formatted = data.map((inv) => ({
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
  const addInvestment = async (amount) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { error: "Not authenticated" };
    const { data: profile, error: profileError } = await supabase.from("profiles").select("balance").eq("id", user.id).single();
    if (profileError || !profile) {
      return { error: "Could not fetch profile" };
    }
    if (Number(profile.balance) < amount) {
      return { error: "Insufficient balance" };
    }
    const newInv = {
      user_id: user.id,
      plan_name: "Direct Investment",
      amount,
      daily_roi: 0.015,
      // 1.5% daily return
      duration_days: 365,
      // 365 days duration
      status: "active"
    };
    const { error: rpcError } = await supabase.rpc("increment_balance", {
      p_user_id: user.id,
      p_amount: -amount
    });
    if (rpcError) {
      console.error("Error deducting balance:", rpcError);
      return { error: "Balance deduction failed: " + rpcError.message };
    }
    const { error: insertError } = await supabase.from("investments").insert([newInv]);
    if (insertError) {
      console.error("Error inserting investment:", insertError);
      await supabase.rpc("increment_balance", {
        p_user_id: user.id,
        p_amount: amount
      });
      return { error: "Investment failed: " + insertError.message };
    }
    await fetchInvestments();
    return { success: true };
  };
  return { investments, loading, addInvestment, fetchInvestments };
}
const ICON_URL = "/favicon.ico";
async function requestNotificationPermission() {
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;
  const result = await Notification.requestPermission();
  return result === "granted";
}
function sendPushNotification(payload) {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  try {
    const n = new Notification(payload.title, {
      body: payload.body,
      icon: payload.icon ?? ICON_URL,
      badge: payload.badge ?? ICON_URL,
      tag: payload.tag,
      // prevents duplicates with the same tag
      requireInteraction: false
      // auto-dismiss after a few seconds
    });
    setTimeout(() => n.close(), 6e3);
    n.onclick = () => {
      window.focus();
      n.close();
    };
  } catch (_) {
  }
}
function notifyDepositApproved(amount, asset) {
  sendPushNotification({
    title: "✅ Deposit Approved — TheSpaceHoldings",
    body: `Your deposit of ${amount} ${asset} has been credited to your account.`,
    tag: "deposit-approved"
  });
}
function notifyDepositRejected(amount, asset) {
  sendPushNotification({
    title: "❌ Deposit Rejected — TheSpaceHoldings",
    body: `Your deposit of ${amount} ${asset} was not approved. Contact support for help.`,
    tag: "deposit-rejected"
  });
}
function notifyWithdrawalApproved(amount, asset) {
  sendPushNotification({
    title: "💸 Withdrawal Sent — TheSpaceHoldings",
    body: `Your withdrawal of ${amount} ${asset} has been processed and sent.`,
    tag: "withdrawal-approved"
  });
}
function notifyWithdrawalRejected(amount, asset) {
  sendPushNotification({
    title: "❌ Withdrawal Rejected — TheSpaceHoldings",
    body: `Your withdrawal of ${amount} ${asset} was rejected. Contact support.`,
    tag: "withdrawal-rejected"
  });
}
const VAPID_PUBLIC_KEY = "BFpA9qck6mVvXczwUS4uYnD1CClquj5hXJRtFG5Njw8EvCQAzJPcs97Kai2CDnVWkVV7uDJmXppiDAmDLhuSuew";
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}
async function registerPushSubscription() {
  try {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      console.warn("[Push] Service workers or PushManager not supported.");
      return false;
    }
    const registration = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
    await navigator.serviceWorker.ready;
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.warn("[Push] Permission denied.");
      return false;
    }
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    });
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    const subJson = subscription.toJSON();
    await supabase.from("push_subscriptions").upsert({
      user_id: user.id,
      endpoint: subscription.endpoint,
      subscription: subJson
    }, { onConflict: "user_id,endpoint" });
    console.log("[Push] Subscription saved successfully.");
    return true;
  } catch (err) {
    console.error("[Push] Failed to register push subscription:", err);
    return false;
  }
}
function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("home");
  const [profile, setProfile] = reactExports.useState(null);
  const [settings, setSettings] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let profileChannel = null;
    const fetchProfile = async () => {
      setLoading(true);
      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();
      if (!user) {
        navigate({
          to: "/login"
        });
        return;
      }
      const {
        data
      } = await supabase.from("profiles").select("*").eq("id", user.id).single();
      const {
        data: appSettings
      } = await supabase.from("platform_settings").select("*").eq("id", 1).single();
      if (data?.role !== "admin" && appSettings?.maintenance_mode) {
        await supabase.auth.signOut();
        navigate({
          to: "/login"
        });
        return;
      }
      if (data) setProfile(data);
      if (appSettings) setSettings(appSettings);
      registerPushSubscription();
      profileChannel = supabase.channel(`profile_changes_${user.id}`).on("postgres_changes", {
        event: "UPDATE",
        schema: "public",
        table: "profiles",
        filter: `id=eq.${user.id}`
      }, (payload) => {
        setProfile(payload.new);
      }).subscribe();
      setLoading(false);
    };
    fetchProfile();
    return () => {
      if (profileChannel) supabase.removeChannel(profileChannel);
    };
  }, [navigate]);
  const {
    transactions
  } = useTransactionStore();
  const prevStatuses = reactExports.useRef({});
  const isSeeded = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {
      });
    }
  }, []);
  reactExports.useEffect(() => {
    if (transactions.length === 0) return;
    if (!isSeeded.current) {
      transactions.forEach((tx) => {
        prevStatuses.current[tx.id] = tx.status;
      });
      isSeeded.current = true;
      return;
    }
    transactions.forEach((tx) => {
      const prev = prevStatuses.current[tx.id];
      const curr = tx.status;
      if (prev !== void 0 && prev !== curr) {
        const amt = `$${Number(tx.amount).toLocaleString(void 0, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`;
        const asset = tx.asset || "";
        if (tx.type === "deposit") {
          if (curr === "approved") notifyDepositApproved(amt, asset);
          if (curr === "rejected") notifyDepositRejected(amt, asset);
        } else if (tx.type === "withdrawal") {
          if (curr === "approved") notifyWithdrawalApproved(amt, asset);
          if (curr === "rejected") notifyWithdrawalRejected(amt, asset);
        }
      }
      prevStatuses.current[tx.id] = curr;
    });
  }, [transactions]);
  const userTransactions = transactions.filter((t) => t.userId === profile?.id);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({
      to: "/login"
    });
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#070b14] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#04070d] text-[#f0f4ff] font-['Inter'] selection:bg-[#c9a84c]/30 flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden md:flex flex-col w-64 bg-[#0a0f1c] border-r border-white/5 min-h-screen p-6 sticky top-0 h-screen z-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "TheSpaceHoldings", className: "w-8 h-8 object-contain shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-light text-base tracking-[0.08em] text-white font-['Outfit'] uppercase whitespace-nowrap shrink-0", children: "TheSpaceHoldings" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-1 py-2 border-t border-b border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gray-500 uppercase tracking-widest font-bold", children: "Notifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationBell, { transactions: userTransactions, align: "left" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 flex-grow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("home"), className: `flex items-center gap-3 px-4 py-3 rounded-sm font-medium transition-colors ${activeTab === "home" ? "bg-white/5 text-[#c9a84c]" : "text-gray-500 hover:text-white hover:bg-white/5"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-5 h-5" }),
          " Home"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("copytrade"), className: `flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === "copytrade" ? "bg-white/5 text-[#c9a84c]" : "text-gray-500 hover:text-white hover:bg-white/5"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" }),
          " Copy Trading"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("invest"), className: `flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === "invest" ? "bg-white/5 text-[#c9a84c]" : "text-gray-500 hover:text-white hover:bg-white/5"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5" }),
          " Direct Invest"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("wallet"), className: `flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === "wallet" ? "bg-white/5 text-[#c9a84c]" : "text-gray-500 hover:text-white hover:bg-white/5"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-5 h-5" }),
          " Wallet"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("rewards"), className: `flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === "rewards" ? "bg-white/5 text-[#c9a84c]" : "text-gray-500 hover:text-white hover:bg-white/5"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-5 h-5" }),
          " Rewards"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("profile"), className: `flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === "profile" ? "bg-white/5 text-[#c9a84c]" : "text-gray-500 hover:text-white hover:bg-white/5"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5" }),
          " Profile"
        ] }),
        profile?.role === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "flex items-center gap-3 px-4 py-3 rounded-sm transition-colors mt-8 text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold uppercase tracking-widest text-[11px]", children: "SuperAdmin" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLogout, className: "flex items-center gap-3 px-4 py-3 rounded-sm transition-colors mt-auto text-gray-500 hover:text-white hover:bg-red-500/10 hover:text-red-400 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-5 h-5 group-hover:text-red-400" }),
          " Logout"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 flex md:hidden items-center justify-between px-6 py-4 bg-[#0a0f1c]/95 backdrop-blur-md border-b border-white/5 z-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "TheSpaceHoldings", className: "w-8 h-8 object-contain shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-light text-base tracking-[0.08em] text-white font-['Outfit'] uppercase whitespace-nowrap shrink-0", children: "TheSpaceHoldings" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationBell, { transactions: userTransactions }),
        profile?.role === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-red-400 border border-red-500/20 bg-red-500/10 rounded-sm", children: "Admin" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-[1400px] mx-auto px-4 py-4 md:p-6 relative z-10 w-full", children: [
      activeTab === "home" && /* @__PURE__ */ jsxRuntimeExports.jsx(HomeTab, { setActiveTab, profile }),
      activeTab === "copytrade" && /* @__PURE__ */ jsxRuntimeExports.jsx(CopyTradeTab, { profile }),
      activeTab === "invest" && /* @__PURE__ */ jsxRuntimeExports.jsx(InvestTab, { profile }),
      activeTab === "wallet" && /* @__PURE__ */ jsxRuntimeExports.jsx(WalletTab, { profile, settings }),
      activeTab === "rewards" && /* @__PURE__ */ jsxRuntimeExports.jsx(RewardsTab, { profile }),
      activeTab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileTab, { profile })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden fixed bottom-0 left-0 w-full bg-[#0a0f1c]/95 backdrop-blur-lg border-t border-white/5 px-1 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 flex justify-around items-center z-50 shadow-lg shadow-black/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("home"), className: `flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === "home" ? "text-[#c9a84c] scale-105" : "text-gray-500"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-[18px] h-[18px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-medium tracking-wide", children: "Home" }),
        activeTab === "home" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("copytrade"), className: `flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === "copytrade" ? "text-[#c9a84c] scale-105" : "text-gray-500"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-[18px] h-[18px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-medium tracking-wide", children: "Copy" }),
        activeTab === "copytrade" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("invest"), className: `flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === "invest" ? "text-[#c9a84c] scale-105" : "text-gray-500"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-[18px] h-[18px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-medium tracking-wide", children: "Invest" }),
        activeTab === "invest" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("wallet"), className: `flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === "wallet" ? "text-[#c9a84c] scale-105" : "text-gray-500"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-[18px] h-[18px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-medium tracking-wide", children: "Wallet" }),
        activeTab === "wallet" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("profile"), className: `flex-1 flex flex-col items-center gap-0.5 transition-all duration-300 relative py-1 ${activeTab === "profile" ? "text-[#c9a84c] scale-105" : "text-gray-500"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-[18px] h-[18px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-medium tracking-wide", children: "Profile" }),
        activeTab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 w-3 h-0.5 rounded-full bg-[#c9a84c]" })
      ] })
    ] })
  ] });
}
function CopyTradeTab({
  profile
}) {
  const [traders, setTraders] = reactExports.useState([]);
  const [mySubs, setMySubs] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [copying, setCopying] = reactExports.useState(false);
  const [selectedTrader, setSelectedTrader] = reactExports.useState(null);
  const [amount, setAmount] = reactExports.useState("");
  const [alertState, setAlertState] = reactExports.useState({
    open: false,
    title: "",
    message: ""
  });
  const totalBalance = Number(profile?.balance || 0) + Number(profile?.profit || 0) + Number(profile?.total_earned_referrals || 0);
  const fetchCopyData = async () => {
    if (!profile) return;
    setLoading(true);
    const {
      data: t
    } = await supabase.from("master_traders").select("*").eq("is_active", true);
    setTraders(t || []);
    const {
      data: s
    } = await supabase.from("copy_trading_subscriptions").select("*, master_traders(*)").eq("user_id", profile.id).eq("status", "active");
    setMySubs(s || []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    fetchCopyData();
  }, [profile]);
  const showAlert = (title, message) => {
    setAlertState({
      open: true,
      title,
      message
    });
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
    if (deficit > 0) {
      await supabase.rpc("increment_balance", {
        p_user_id: profile.id,
        p_amount: deficit
      });
    }
    const {
      error: insertError
    } = await supabase.from("copy_trading_subscriptions").insert({
      user_id: profile.id,
      master_trader_id: selectedTrader.id,
      amount: Number(amount),
      status: "active"
    });
    if (insertError) {
      if (deficit > 0) {
        await supabase.rpc("increment_balance", {
          p_user_id: profile.id,
          p_amount: -deficit
        });
      }
      showAlert("Error", "Could not start copy trading: " + (insertError?.message || "Unknown error"));
      setCopying(false);
      return;
    }
    const totalDeduction = Number(amount) + deficit;
    await supabase.rpc("increment_balance", {
      p_user_id: profile.id,
      p_amount: -totalDeduction
    });
    await supabase.from("master_traders").update({
      followers_count: selectedTrader.followers_count + 1
    }).eq("id", selectedTrader.id);
    showAlert("Success!", `You are now successfully copying ${selectedTrader.name}!`);
    setSelectedTrader(null);
    setAmount("");
    fetchCopyData();
    if (profile) profile.balance = Number(profile.balance) - Number(amount);
    setCopying(false);
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-gray-500 font-bold uppercase tracking-widest text-xs", children: "Loading Copy Trading..." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: alertState.open, onOpenChange: (open) => setAlertState((prev) => ({
      ...prev,
      open
    })), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: alertState.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-gray-400", children: alertState.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => setAlertState((prev) => ({
        ...prev,
        open: false
      })), className: "bg-[#c9a84c] text-[#070b14] hover:bg-[#b89945]", children: "Okay" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 mt-4 md:mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl text-white font-['Outfit'] font-light mb-2", children: "Copy Trading" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-[13px]", children: "Automatically mirror the trades of our top-performing algorithmic portfolios and expert traders." })
    ] }),
    mySubs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm text-white font-bold uppercase tracking-widest mb-4", children: "Your Active Copies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: mySubs.map((sub) => {
        const pnl = Number(sub.total_pnl || 0);
        const isProfit = pnl >= 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 bg-gradient-to-br from-[#0a0f1c] to-[#070b14] border ${isProfit ? "border-[#00d4aa]/30" : "border-red-500/30"} rounded-sm relative overflow-hidden`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-0 right-0 w-24 h-24 ${isProfit ? "bg-[#00d4aa]/10" : "bg-red-500/10"} blur-xl rounded-full` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 uppercase tracking-widest mb-1", children: "Copying" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg text-white font-['Outfit']", children: sub.master_traders?.name || "Unknown" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-full ${isProfit ? "bg-[#00d4aa]/10 border-[#00d4aa]/20" : "bg-red-500/10 border-red-500/20"} flex items-center justify-center border`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: `w-5 h-5 ${isProfit ? "text-[#00d4aa]" : "text-red-400"}` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 relative z-10 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest mb-1", children: "Invested" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg text-white font-mono", children: [
                "$",
                Number(sub.amount).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest mb-1", children: "Profit/Loss" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-lg font-mono ${isProfit ? "text-[#00d4aa]" : "text-red-400"}`, children: [
                isProfit ? "+" : "",
                "$",
                pnl.toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end relative z-10 pt-3 border-t border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest mb-0.5", children: "Current Equity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-white font-semibold", children: [
                "$",
                (Number(sub.amount) + pnl).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[#00d4aa] uppercase tracking-widest font-bold", children: "Active" }) })
          ] })
        ] }, sub.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm text-white font-bold uppercase tracking-widest mb-4", children: "Top Master Traders" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6", children: traders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full py-12 text-center text-gray-500 border border-white/5 bg-[#0a0f1c] rounded-sm", children: "No master traders available at the moment." }) : traders.map((trader) => {
      const nameInitials = trader.name ? trader.name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() : "TR";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 rounded-sm overflow-hidden flex flex-col group hover:border-[#c9a84c]/30 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-grow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-start mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center overflow-hidden", children: trader.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: trader.avatar_url, alt: trader.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-purple-300 uppercase tracking-wider", children: nameInitials }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg text-white font-['Outfit'] font-semibold leading-tight", children: trader.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-gray-500 uppercase tracking-widest mt-1", children: [
                trader.followers_count,
                " Followers"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-gray-400 leading-relaxed mb-6 line-clamp-2 min-h-[40px]", children: trader.description || "Professional quantitative trader." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 p-3 bg-[#070b14] border border-white/5 rounded-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-r border-white/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-gray-500 uppercase tracking-widest mb-1", children: "Win Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[15px] text-white font-['Outfit'] font-semibold", children: [
                Number(trader.win_rate).toFixed(1),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-r border-white/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-gray-500 uppercase tracking-widest mb-1", children: "Total PnL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[15px] text-[#00d4aa] font-['Outfit'] font-semibold", children: [
                "+$",
                Number(trader.total_pnl).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-gray-500 uppercase tracking-widest mb-1", children: "ROI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[15px] text-[#c9a84c] font-['Outfit'] font-semibold", children: [
                "+",
                Number(trader.roi).toFixed(1),
                "%"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-white/5 bg-white/[0.01]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedTrader(trader), className: "w-full py-3 bg-white/5 hover:bg-[#c9a84c] text-gray-300 hover:text-[#070b14] border border-white/5 hover:border-transparent transition-all duration-300 rounded-sm text-[11px] uppercase tracking-widest font-bold hover:shadow-lg hover:shadow-[#c9a84c]/10", children: "Copy Trader" }) })
      ] }, trader.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!selectedTrader, onOpenChange: (open) => !open && setSelectedTrader(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white sm:max-w-md", children: selectedTrader && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-white/5 border border-[#c9a84c]/30 flex items-center justify-center mb-4 overflow-hidden", children: selectedTrader.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedTrader.avatar_url, alt: selectedTrader.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-7 h-7 text-[#c9a84c]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-white font-['Outfit']", children: selectedTrader.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-[#00d4aa] uppercase tracking-widest font-bold mt-1", children: [
            "Win Rate: ",
            Number(selectedTrader.win_rate).toFixed(1),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest font-bold", children: "Copy Amount (USD)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-gray-500", children: [
                "Available: $",
                Number(totalBalance).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: amount, onChange: (e) => setAmount(Number(e.target.value)), placeholder: "0.00", className: "w-full bg-[#070b14] border border-white/10 text-white p-4 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors text-xl font-['Outfit']" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white/5 border border-[#c9a84c]/20 rounded-sm text-[12px] text-gray-400 leading-relaxed", children: "By copying this trader, your portfolio will automatically mirror their market positions. The amount you specify will be dedicated to their strategy. You can withdraw your copy funds at any time." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedTrader(null), className: "flex-1 py-3 bg-transparent border border-white/10 text-white hover:bg-white/5 rounded-sm uppercase tracking-widest text-xs font-bold transition-colors", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: copying, onClick: handleCopy, className: "flex-1 py-3 bg-[#c9a84c] text-[#070b14] hover:bg-[#b59640] rounded-sm uppercase tracking-widest text-xs font-bold transition-colors", children: copying ? "Processing..." : "Confirm Copy" })
      ] })
    ] }) }) })
  ] });
}
function HomeTab({
  setActiveTab,
  profile
}) {
  const {
    transactions
  } = useTransactionStore();
  const {
    investments
  } = useInvestmentStore();
  const userTransactions = [...transactions].sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);
  const adminProfitSum = transactions.filter((tx) => tx.asset === "PROFIT" && tx.status === "approved").reduce((acc, tx) => acc + (tx.type === "deposit" ? Number(tx.amount) : -Number(tx.amount)), 0);
  const totalWithdrawn = transactions.filter((tx) => tx.type === "withdrawal" && tx.status === "approved").reduce((acc, tx) => acc + Number(tx.amount), 0);
  const roiEarned = investments.reduce((acc, inv) => {
    const daysPassed = Math.floor((Date.now() - new Date(inv.created_at).getTime()) / (1e3 * 60 * 60 * 24));
    return acc + inv.amount * inv.daily_roi * Math.max(0, daysPassed);
  }, 0);
  const activeInvestedPrincipal = investments.filter((inv) => inv.status === "active").reduce((acc, inv) => acc + Number(inv.amount), 0);
  const totalBalance = Number(profile?.balance || 0) + Number(profile?.profit || 0) + activeInvestedPrincipal + roiEarned + Number(profile?.total_earned_referrals || 0);
  const displayWalletBalance = Number(profile?.balance || 0) - adminProfitSum;
  const displayTradingProfits = Number(profile?.profit || 0) + adminProfitSum;
  const [marketData, setMarketData] = reactExports.useState([{
    name: "Bitcoin",
    symbol: "BTC",
    price: 67250,
    change: 1.25,
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
  }, {
    name: "Ethereum",
    symbol: "ETH",
    price: 3480,
    change: -0.45,
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
  }, {
    name: "Solana",
    symbol: "SOL",
    price: 142.5,
    change: 3.12,
    image: "https://assets.coingecko.com/coins/images/4128/large/solana.png"
  }, {
    name: "Ripple",
    symbol: "XRP",
    price: 0.48,
    change: 0.15,
    image: "https://assets.coingecko.com/coins/images/44/large/xrp.png"
  }]);
  reactExports.useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,ripple");
        if (!res.ok) throw new Error("CoinGecko failed");
        const data = await res.json();
        if (Array.isArray(data)) {
          setMarketData(data.map((coin) => ({
            name: coin.name,
            symbol: coin.symbol.toUpperCase(),
            price: coin.current_price,
            change: coin.price_change_percentage_24h,
            image: coin.image
          })));
        }
      } catch (e) {
        console.warn("CoinGecko market fetch failed, falling back to Coinbase API:", e);
        try {
          const res = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=USD");
          if (!res.ok) throw new Error("Coinbase failed");
          const json = await res.json();
          const rates = json?.data?.rates;
          if (rates) {
            const coins = [{
              name: "Bitcoin",
              symbol: "BTC",
              image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
            }, {
              name: "Ethereum",
              symbol: "ETH",
              image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
            }, {
              name: "Solana",
              symbol: "SOL",
              image: "https://assets.coingecko.com/coins/images/4128/large/solana.png"
            }, {
              name: "Ripple",
              symbol: "XRP",
              image: "https://assets.coingecko.com/coins/images/44/large/xrp.png"
            }];
            setMarketData(coins.map((c) => {
              const rate = Number(rates[c.symbol]);
              return {
                name: c.name,
                symbol: c.symbol,
                price: rate > 0 ? 1 / rate : c.symbol === "BTC" ? 67250 : c.symbol === "ETH" ? 3480 : c.symbol === "SOL" ? 142.5 : 0.48,
                change: 0,
                image: c.image
              };
            }));
          }
        } catch (cbErr) {
          console.error("All market APIs failed:", cbErr);
        }
      }
    };
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 6e4);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-gradient-to-r from-[#0e1629] via-[#0a0f1c] to-[#0e1629] border border-white/5 p-6 sm:p-8 rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-80 h-80 bg-[#00d4aa]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-[#00d4aa] uppercase tracking-[0.2em] font-bold", children: "Secure Client Portal" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl sm:text-3xl text-white font-['Outfit'] font-light mb-2", children: [
            "Welcome back, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#c9a84c]", children: profile?.email?.split("@")[0] || "Client" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-[13px] max-w-xl leading-relaxed", children: "Track your asset performance, manage copy trading subscriptions, and deploy capital directly to earn compound returns." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("wallet"), className: "bg-[#c9a84c] hover:bg-[#b59640] text-[#070b14] px-5 py-3 rounded-sm font-bold text-[11px] uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-[#c9a84c]/20 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-3.5 h-3.5" }),
            " Deposit"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("wallet"), className: "bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-3 rounded-sm font-bold text-[11px] uppercase tracking-widest transition-all flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "w-3.5 h-3.5" }),
            " Withdraw"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-white/5 relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-gray-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-purple-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Trading Profits: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-white font-semibold font-mono", children: [
              "$",
              displayTradingProfits.toLocaleString(void 0, {
                minimumFractionDigits: 2
              })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-gray-600", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "w-3.5 h-3.5 text-[#00d4aa]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Successfully Withdrawn: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-white font-semibold font-mono", children: [
              "$",
              totalWithdrawn.toLocaleString(void 0, {
                minimumFractionDigits: 2
              })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 bg-[#0a0f1c] border border-white/5 p-5 md:p-8 relative overflow-hidden rounded-sm flex flex-col justify-between min-h-[300px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/10 rounded-full blur-[80px] pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-2", children: "Total Portfolio Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl sm:text-4xl md:text-5xl font-['Outfit'] font-light text-white tracking-tight", children: [
              "$",
              totalBalance.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 text-[#00d4aa] rounded-full text-[10px] uppercase tracking-widest font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" }),
            "Live"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 pt-6 border-t border-white/5 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest mb-1", children: "Wallet Balance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg text-white font-light font-['Outfit']", children: [
              "$",
              displayWalletBalance.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest mb-1", children: "Trading Profits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg text-purple-400 font-light font-['Outfit']", children: [
              "+$",
              displayTradingProfits.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest mb-1", children: "Referral Earnings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg text-[#00d4aa] font-light font-['Outfit']", children: [
              "+$",
              Number(profile?.total_earned_referrals || 0).toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 bg-[#0a0f1c] border border-white/5 rounded-sm p-6 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-4", children: "Quick Operations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("wallet"), className: "flex flex-col items-center justify-center p-5 bg-[#070b14] border border-white/5 rounded-sm hover:bg-white/5 transition-all group text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-6 h-6 text-[#c9a84c] mb-2 group-hover:scale-110 transition-transform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-gray-400 font-semibold", children: "Deposit" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("wallet"), className: "flex flex-col items-center justify-center p-5 bg-[#070b14] border border-white/5 rounded-sm hover:bg-white/5 transition-all group text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "w-6 h-6 text-[#00d4aa] mb-2 group-hover:scale-110 transition-transform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-gray-400 font-semibold", children: "Withdraw" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("copytrade"), className: "flex flex-col items-center justify-center p-5 bg-[#070b14] border border-white/5 rounded-sm hover:bg-white/5 transition-all group text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-[#3b82f6] mb-2 group-hover:scale-110 transition-transform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-gray-400 font-semibold", children: "Copy Trade" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("invest"), className: "flex flex-col items-center justify-center p-5 bg-[#070b14] border border-white/5 rounded-sm hover:bg-white/5 transition-all group text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-[#a855f7] mb-2 group-hover:scale-110 transition-transform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-gray-400 font-semibold", children: "Invest" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-white/5 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest mb-1", children: "Account Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[#00d4aa]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white font-medium capitalize", children: profile?.status || "Active" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-[#0a0f1c] border border-white/5 rounded-sm p-6 flex flex-col gap-4 group hover:border-[#c9a84c]/30 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-[#c9a84c]/8 rounded-full blur-2xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-sm bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-5 h-5 text-[#c9a84c]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-[#c9a84c] uppercase tracking-[0.2em] font-bold bg-[#c9a84c]/10 px-2 py-1 rounded-full", children: "Affiliate Program" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1", children: "Referral Rewards" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl text-white font-['Outfit'] font-light", children: [
              "$",
              Number(profile?.total_earned_referrals || 0).toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 mt-1", children: "Earned from affiliate referrals" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("rewards"), className: "w-full py-2 text-[11px] uppercase tracking-widest font-bold bg-white/5 hover:bg-white/10 text-gray-300 rounded-sm transition-colors flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-3.5 h-3.5 text-[#c9a84c]" }),
            " View Rewards Program"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-[#0a0f1c] border border-white/5 rounded-sm p-6 flex flex-col gap-4 group hover:border-white/10 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "w-5 h-5 text-gray-300" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold bg-white/5 px-2 py-1 rounded-full", children: "Available Now" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1", children: "Withdrawable Balance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl text-white font-['Outfit'] font-light", children: [
              "$",
              totalBalance.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 mt-1", children: "Wallet balance + referral rewards" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("wallet"), className: "w-full py-2 text-[11px] uppercase tracking-widest font-bold bg-white/5 hover:bg-white/10 text-gray-300 rounded-sm transition-colors flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "w-3.5 h-3.5" }),
            " Withdraw Funds"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 bg-[#0a0f1c] border border-white/5 rounded-sm p-6 overflow-hidden relative flex flex-col justify-between min-h-[300px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-6 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-[#00d4aa] uppercase tracking-[0.2em] font-bold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3 h-3" }),
            " LIVE MARKET"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 relative z-10", children: marketData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-gray-500", children: "Fetching live rates..." }) : marketData.map((coin) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-black/40 flex items-center justify-center font-bold text-[10px] text-white border border-white/10 overflow-hidden", children: coin.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coin.image, alt: coin.name, className: "w-full h-full object-cover p-1.5" }) : coin.symbol.substring(0, 1) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-white font-medium", children: coin.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400", children: coin.symbol })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[14px] text-white font-['Outfit']", children: [
                "$",
                coin.price?.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-[10px] font-bold ${coin.change >= 0 ? "text-[#00d4aa]" : "text-red-400"}`, children: [
                coin.change >= 0 ? "+" : "",
                coin.change?.toFixed(2),
                "%"
              ] })
            ] })
          ] }, coin.symbol)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 bg-[#0a0f1c] border border-white/5 rounded-sm p-6 flex flex-col justify-between min-h-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-light text-white font-['Outfit']", children: "History" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: () => setActiveTab("wallet"), className: "text-[10px] text-[#c9a84c] uppercase tracking-widest cursor-pointer hover:underline", children: "See all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-white/5", children: userTransactions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-gray-500 py-4", children: "No recent history." }) : userTransactions.map((tx) => {
          const isDeposit = tx.type === "deposit";
          const isProfit = tx.asset === "PROFIT";
          const isBonus = tx.asset === "BONUS";
          const label = tx.asset === "PROFIT" ? "Profit" : tx.asset === "BONUS" ? "Bonus" : tx.asset === "ADJUSTMENT" ? "Adjustment" : tx.asset === "MANUAL DEPOSIT" || tx.asset === "DEPOSIT" ? "Deposit" : tx.type;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3.5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-white/5 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-4 h-4", style: {
                color: isProfit || isBonus ? "#a855f7" : "#d1d5db"
              } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-white font-medium capitalize", children: [
                label,
                " ",
                tx.status === "pending" ? "(Pending)" : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] font-bold", style: {
              color: isDeposit ? "#00d4aa" : "white"
            }, children: [
              isDeposit ? "+" : "-",
              "$",
              (tx.amount || 0).toLocaleString(void 0, {
                minimumFractionDigits: 2
              })
            ] })
          ] }, tx.id);
        }) })
      ] }) })
    ] })
  ] });
}
function CryptoSelector({
  focusColor,
  value,
  onChange
}) {
  const {
    cryptos
  } = useCryptoStore();
  const activeCryptos = cryptos.filter((c) => c.active);
  const getCryptoLogo = (symbol) => {
    const map = {
      btc: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
      eth: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
      usdt: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
      bnb: "https://cryptologos.cc/logos/bnb-bnb-logo.svg",
      sol: "https://cryptologos.cc/logos/solana-sol-logo.svg",
      usdc: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg",
      xrp: "https://cryptologos.cc/logos/xrp-xrp-logo.svg",
      doge: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg",
      ton: "https://cryptologos.cc/logos/toncoin-ton-logo.svg",
      ada: "https://cryptologos.cc/logos/cardano-ada-logo.svg"
    };
    return map[symbol.toLowerCase()] || null;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value, onValueChange: onChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: `w-full bg-[#070b14] border-white/10 text-white p-3 h-auto rounded-sm focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-offset-transparent ${focusColor} hover:bg-white/[0.02] transition-colors shadow-none`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Crypto" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-[#0a0f1c] border-white/10 text-white max-h-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectGroup, { children: activeCryptos.map((crypto) => {
      const logo2 = getCryptoLogo(crypto.symbol);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: crypto.symbol.toLowerCase(), className: "hover:bg-white/5 focus:bg-white/5 cursor-pointer py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold shrink-0 overflow-hidden", style: !logo2 ? {
          backgroundColor: `${crypto.color}15`,
          color: crypto.color
        } : {}, children: logo2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo2, alt: crypto.name, className: "w-full h-full object-cover p-0.5" }) : (crypto.symbol || "?").substring(0, 1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium leading-tight mb-0.5", children: crypto.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gray-500 font-semibold leading-tight", children: crypto.symbol })
        ] })
      ] }) }, crypto.id);
    }) }) })
  ] });
}
const COINGECKO_IDS = {
  BTC: "bitcoin",
  ETH: "ethereum",
  SOL: "solana",
  XRP: "ripple",
  USDT: "tether",
  USDC: "usd-coin",
  BNB: "binancecoin",
  ADA: "cardano",
  DOGE: "dogecoin",
  LTC: "litecoin",
  DOT: "polkadot",
  MATIC: "matic-network",
  AVAX: "avalanche-2",
  LINK: "chainlink",
  UNI: "uniswap",
  TRX: "tron"
};
function WalletTab({
  profile,
  settings
}) {
  const [mode, setMode] = reactExports.useState("deposit");
  const [copied, setCopied] = reactExports.useState(false);
  const [selectedAsset, setSelectedAsset] = reactExports.useState("btc");
  const [amount, setAmount] = reactExports.useState("");
  const [txid, setTxid] = reactExports.useState("");
  const [cryptoPrices, setCryptoPrices] = reactExports.useState({
    BTC: 67250,
    ETH: 3480,
    SOL: 142.5,
    XRP: 0.48,
    USDT: 1,
    USDC: 1,
    BNB: 575,
    ADA: 0.38,
    DOGE: 0.12,
    LTC: 72.5,
    DOT: 5.8,
    MATIC: 0.55,
    AVAX: 28.2,
    LINK: 13.9,
    UNI: 7.2,
    TRX: 0.12
  });
  const [pricesLoading, setPricesLoading] = reactExports.useState(true);
  const {
    addTransaction,
    transactions
  } = useTransactionStore();
  const {
    cryptos
  } = useCryptoStore();
  const {
    investments
  } = useInvestmentStore();
  const userTransactions = [...transactions].sort((a, b) => b.timestamp - a.timestamp);
  const selectedCryptoData = cryptos.find((c) => c.symbol.toLowerCase() === selectedAsset.toLowerCase() || c.id === selectedAsset) || cryptos[0];
  reactExports.useEffect(() => {
    const fetchPrices = async () => {
      try {
        setPricesLoading(true);
        const ids = Object.values(COINGECKO_IDS).join(",");
        const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
        if (!res.ok) throw new Error("CoinGecko failed");
        const data = await res.json();
        const prices = {};
        Object.entries(COINGECKO_IDS).forEach(([symbol, id]) => {
          if (data[id]?.usd) prices[symbol] = data[id].usd;
        });
        setCryptoPrices(prices);
      } catch (e) {
        console.warn("CoinGecko fetch failed, falling back to Coinbase API:", e);
        try {
          const res = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=USD");
          if (!res.ok) throw new Error("Coinbase failed");
          const json = await res.json();
          const rates = json?.data?.rates;
          if (rates) {
            const prices = {};
            Object.keys(COINGECKO_IDS).forEach((symbol) => {
              const rate = Number(rates[symbol]);
              if (rate > 0) {
                prices[symbol] = 1 / rate;
              }
            });
            prices["USDT"] = 1;
            prices["USDC"] = 1;
            setCryptoPrices((prev) => ({
              ...prev,
              ...prices
            }));
          }
        } catch (cbErr) {
          console.error("All price APIs failed:", cbErr);
        }
      } finally {
        setPricesLoading(false);
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 6e4);
    return () => clearInterval(interval);
  }, []);
  const selectedSymbol = selectedCryptoData?.symbol?.toUpperCase() || "";
  const selectedPrice = cryptoPrices[selectedSymbol] || null;
  const amountNum = parseFloat(amount) || 0;
  const usdValue = selectedPrice ? amountNum * selectedPrice : null;
  const roiEarned = investments.reduce((acc, inv) => {
    const daysPassed = Math.floor((Date.now() - new Date(inv.created_at).getTime()) / (1e3 * 60 * 60 * 24));
    return acc + inv.amount * inv.daily_roi * Math.max(0, daysPassed);
  }, 0);
  const activeInvestedPrincipal = investments.filter((inv) => inv.status === "active").reduce((acc, inv) => acc + Number(inv.amount), 0);
  const totalBalance = Number(profile?.balance || 0) + Number(profile?.profit || 0) + activeInvestedPrincipal + roiEarned + Number(profile?.total_earned_referrals || 0);
  const handleCopy = (text) => {
    if (text) navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const [screenshotFile, setScreenshotFile] = reactExports.useState(null);
  const [withdrawAddress, setWithdrawAddress] = reactExports.useState("");
  const [depositLoading, setDepositLoading] = reactExports.useState(false);
  const [withdrawLoading, setWithdrawLoading] = reactExports.useState(false);
  const [verificationOpen, setVerificationOpen] = reactExports.useState(false);
  const [verificationCode, setVerificationCode] = reactExports.useState("");
  const [enteredCode, setEnteredCode] = reactExports.useState("");
  const [verificationError, setVerificationError] = reactExports.useState("");
  const [alertState, setAlertState] = reactExports.useState({
    open: false,
    title: "",
    message: "",
    type: "info"
  });
  const showModal = (title, message, type = "info") => {
    setAlertState({
      open: true,
      title,
      message,
      type
    });
  };
  const handleDepositSubmit = async () => {
    if (!amount || !screenshotFile) {
      showModal("Missing Information", "Please enter the amount and upload a screenshot as proof of payment.", "error");
      return;
    }
    setDepositLoading(true);
    let screenshotUrl = "";
    try {
      const fileExt = screenshotFile.name.split(".").pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const {
        data,
        error
      } = await supabase.storage.from("deposit-proofs").upload(fileName, screenshotFile);
      if (error) throw error;
      const {
        data: publicData
      } = supabase.storage.from("deposit-proofs").getPublicUrl(fileName);
      screenshotUrl = publicData.publicUrl;
    } catch (err) {
      console.error("Upload error:", err);
      showModal("Upload Failed", "There was an error uploading your screenshot. Please try again.", "error");
      setDepositLoading(false);
      return;
    }
    const sym = selectedCryptoData?.symbol?.toUpperCase() || "";
    const livePrice = cryptoPrices[sym];
    const cryptoAmt = parseFloat(amount);
    if (!livePrice && sym !== "USDT" && sym !== "USDC") {
      showModal("Network Error", "Unable to securely fetch live crypto prices. Please wait a few seconds and try again, or use a stablecoin.", "error");
      setDepositLoading(false);
      return;
    }
    const usdAmount = livePrice ? cryptoAmt * livePrice : cryptoAmt;
    await addTransaction({
      type: "deposit",
      amount: usdAmount,
      asset: `(${cryptoAmt} ${selectedCryptoData ? selectedCryptoData.symbol : selectedAsset.toUpperCase()})`,
      txid,
      screenshotUrl
    });
    setDepositLoading(false);
    setAmount("");
    setTxid("");
    setScreenshotFile(null);
    const usdNote = livePrice ? ` (~$${usdAmount.toLocaleString(void 0, {
      maximumFractionDigits: 2
    })})` : "";
    showModal("Deposit Submitted!", `Your ${cryptoAmt} ${sym}${usdNote} deposit has been submitted. Our team will verify and credit your balance within 24 hours.`, "deposit");
  };
  const handleWithdrawSubmit = async () => {
    if (settings?.withdrawals_halted) {
      showModal("Withdrawals Halted", "Withdrawals are temporarily suspended due to network maintenance. Please try again later.", "error");
      return;
    }
    if (!amount || !withdrawAddress) {
      showModal("Missing Information", "Please enter both the amount and your receiving wallet address.", "error");
      return;
    }
    const sym = selectedCryptoData?.symbol?.toUpperCase() || "";
    const livePrice = cryptoPrices[sym];
    const cryptoAmt = parseFloat(amount);
    if (!livePrice && sym !== "USDT" && sym !== "USDC") {
      showModal("Network Error", "Unable to securely fetch live crypto prices. Please wait a few seconds and try again, or use a stablecoin.", "error");
      return;
    }
    const usdAmount = livePrice ? cryptoAmt * livePrice : cryptoAmt;
    if (usdAmount > totalBalance) {
      showModal("Insufficient Funds", `You do not have enough available balance for this withdrawal. (${cryptoAmt} ${sym} ≈ $${usdAmount.toLocaleString(void 0, {
        maximumFractionDigits: 2
      })})`, "error");
      return;
    }
    setWithdrawLoading(true);
    setVerificationError("");
    const code = Math.floor(1e5 + Math.random() * 9e5).toString();
    setVerificationCode(code);
    setEnteredCode("");
    try {
      await sendNotificationEmail(profile.email, "withdrawal-verification", {
        amount: usdAmount,
        code,
        full_name: profile.name
      });
      setVerificationOpen(true);
    } catch (error) {
      console.error("Failed to send verification code:", error);
      showModal("Verification Error", "Failed to send verification code to your email. Please try again.", "error");
    } finally {
      setWithdrawLoading(false);
    }
  };
  const handleVerifyAndWithdraw = async () => {
    if (enteredCode !== verificationCode) {
      setVerificationError("The verification code you entered is incorrect. Please check your email.");
      return;
    }
    const sym = selectedCryptoData?.symbol?.toUpperCase() || "";
    const livePrice = cryptoPrices[sym];
    const cryptoAmt = parseFloat(amount);
    const usdAmount = livePrice ? cryptoAmt * livePrice : cryptoAmt;
    setWithdrawLoading(true);
    try {
      await addTransaction({
        type: "withdrawal",
        amount: usdAmount,
        asset: `(${cryptoAmt} ${selectedCryptoData ? selectedCryptoData.symbol : selectedAsset.toUpperCase()})`,
        txid: withdrawAddress
      });
      setAmount("");
      setWithdrawAddress("");
      setVerificationOpen(false);
      setEnteredCode("");
      setVerificationCode("");
      const usdNote = livePrice ? ` (~$${usdAmount.toLocaleString(void 0, {
        maximumFractionDigits: 2
      })})` : "";
      showModal("Withdrawal Requested!", `Your withdrawal of ${cryptoAmt} ${sym}${usdNote} has been submitted and is pending approval. You'll be notified once it's processed.`, "withdrawal");
    } catch (err) {
      console.error("Withdrawal failed:", err);
      showModal("Withdrawal Failed", err.message || "An unexpected error occurred. Please try again.", "error");
    } finally {
      setWithdrawLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: alertState.open, onOpenChange: (open) => setAlertState((prev) => ({
      ...prev,
      open
    })), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white p-0 overflow-hidden max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1.5 w-full ${alertState.type === "deposit" ? "bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" : alertState.type === "withdrawal" ? "bg-gradient-to-r from-[#00d4aa] to-[#00f5c8]" : alertState.type === "error" ? "bg-gradient-to-r from-red-500 to-red-400" : "bg-gradient-to-r from-white/20 to-white/10"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${alertState.type === "deposit" ? "bg-[#c9a84c]/15" : alertState.type === "withdrawal" ? "bg-[#00d4aa]/15" : alertState.type === "error" ? "bg-red-500/15" : "bg-white/10"}`, children: [
          alertState.type === "deposit" && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-[#c9a84c]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }) }),
          alertState.type === "withdrawal" && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-[#00d4aa]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
          alertState.type === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" }) }),
          alertState.type === "info" && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-white/50", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-xl font-['Outfit'] font-semibold text-center mb-3 ${alertState.type === "deposit" ? "text-[#c9a84c]" : alertState.type === "withdrawal" ? "text-[#00d4aa]" : alertState.type === "error" ? "text-red-400" : "text-white"}`, children: alertState.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-[14px] text-center leading-relaxed mb-6", children: alertState.message }),
        alertState.type === "deposit" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-sm px-4 py-2 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#c9a84c] uppercase tracking-widest font-bold", children: "Pending Admin Review" })
        ] }),
        alertState.type === "withdrawal" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-sm px-4 py-2 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#00d4aa] uppercase tracking-widest font-bold", children: "Processing · 24–48 hrs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAlertState((prev) => ({
          ...prev,
          open: false
        })), className: `w-full py-3 font-bold text-[13px] tracking-widest uppercase rounded-sm transition-colors ${alertState.type === "deposit" ? "bg-[#c9a84c] hover:bg-[#b89945] text-[#070b14]" : alertState.type === "withdrawal" ? "bg-[#00d4aa] hover:bg-[#00b38f] text-[#070b14]" : alertState.type === "error" ? "bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30" : "bg-white/10 hover:bg-white/20 text-white"}`, children: alertState.type === "deposit" ? "Got it, Thanks!" : alertState.type === "withdrawal" ? "Done" : "Dismiss" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: verificationOpen, onOpenChange: (open) => {
      if (!withdrawLoading) {
        setVerificationOpen(open);
        if (!open) {
          setEnteredCode("");
          setVerificationCode("");
          setVerificationError("");
        }
      }
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white p-0 overflow-hidden max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-gradient-to-r from-[#c9a84c] to-[#a3802c]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-[#c9a84c]/15 text-[#c9a84c] border border-[#c9a84c]/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-['Outfit'] font-semibold text-center mb-3 text-white", children: "Security Verification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-[14px] text-center leading-relaxed mb-6", children: [
          "A 6-digit verification code has been sent to your registered email address ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: profile?.email }),
          ". Please enter the code below to authorize your withdrawal."
        ] }),
        verificationError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-sm text-center", children: verificationError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", maxLength: 6, value: enteredCode, onChange: (e) => setEnteredCode(e.target.value.replace(/\D/g, "")), placeholder: "Enter 6-digit code", className: "w-full bg-[#070b14] border border-white/10 text-white p-4 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 text-center text-2xl font-mono tracking-[0.4em] placeholder:tracking-normal placeholder:text-sm placeholder:text-gray-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: withdrawLoading || enteredCode.length !== 6, onClick: handleVerifyAndWithdraw, className: "w-full bg-[#c9a84c] hover:bg-[#b5953f] text-[#070b14] py-4 font-bold text-[13px] tracking-widest uppercase transition-colors rounded-sm disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg shadow-[#c9a84c]/10", children: withdrawLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
            ] }),
            " Authorizing..."
          ] }) : "Confirm Withdrawal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled: withdrawLoading, onClick: async () => {
            setWithdrawLoading(true);
            setVerificationError("");
            const code = Math.floor(1e5 + Math.random() * 9e5).toString();
            setVerificationCode(code);
            try {
              const sym = selectedCryptoData?.symbol?.toUpperCase() || "";
              const livePrice = cryptoPrices[sym];
              const cryptoAmt = parseFloat(amount);
              const usdAmount = livePrice ? cryptoAmt * livePrice : cryptoAmt;
              await sendNotificationEmail(profile.email, "withdrawal-verification", {
                amount: usdAmount,
                code,
                full_name: profile.name
              });
              setVerificationError("A new code has been sent to your email.");
            } catch (err) {
              setVerificationError("Failed to resend code. Please try again.");
            } finally {
              setWithdrawLoading(false);
            }
          }, className: "text-xs text-[#c9a84c] hover:underline", children: "Resend Verification Code" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 mt-4 md:mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl text-white font-['Outfit'] font-light mb-6", children: "Wallet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-white/10 overflow-x-auto scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("deposit"), className: `pb-4 px-6 text-[13px] uppercase tracking-widest font-semibold transition-all shrink-0 ${mode === "deposit" ? "text-[#c9a84c] border-b-2 border-[#c9a84c]" : "text-gray-500 hover:text-white"}`, children: "Deposit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("withdraw"), className: `pb-4 px-6 text-[13px] uppercase tracking-widest font-semibold transition-all shrink-0 ${mode === "withdraw" ? "text-[#c9a84c] border-b-2 border-[#c9a84c]" : "text-gray-500 hover:text-white"}`, children: "Withdraw" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("history"), className: `pb-4 px-6 text-[13px] uppercase tracking-widest font-semibold transition-all shrink-0 ${mode === "history" ? "text-[#c9a84c] border-b-2 border-[#c9a84c]" : "text-gray-500 hover:text-white"}`, children: "History" })
      ] })
    ] }),
    mode === "deposit" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] mb-6", children: "Fund Your Account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-3 block", children: "Choose Crypto Asset" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CryptoSelector, { focusColor: "focus:border-[#c9a84c]/50 focus:ring-[#c9a84c]/50", value: selectedAsset, onChange: setSelectedAsset })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-[#070b14] border border-[#c9a84c]/30 rounded-sm mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest block", children: [
            selectedCryptoData?.symbol || "BTC",
            " Wallet Address"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-[#c9a84c] font-semibold bg-[#c9a84c]/10 px-2 py-0.5 rounded-sm", children: [
            "Network: ",
            selectedCryptoData?.network || "N/A"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { readOnly: true, value: selectedCryptoData?.address || "Address not configured", className: "w-full bg-transparent border border-white/10 text-white p-3 rounded-sm text-sm font-mono focus:outline-none select-all overflow-hidden text-ellipsis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleCopy(selectedCryptoData?.address || ""), className: "px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-sm flex items-center justify-center gap-2 text-[12px] uppercase tracking-widest font-semibold transition-colors shrink-0", children: [
            copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-[#00d4aa]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
            copied ? "Copied" : "Copy"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block", children: [
            "Amount Sent (",
            selectedSymbol || "Crypto",
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: amount, onChange: (e) => setAmount(e.target.value), placeholder: "e.g. 0.5", className: "w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 pr-16" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500 font-bold", children: selectedSymbol })
          ] }),
          amountNum > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-1", children: [
            pricesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-600", children: "Fetching price..." }) : usdValue ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#00d4aa] font-semibold", children: [
              "≈ $",
              usdValue.toLocaleString(void 0, {
                maximumFractionDigits: 2
              }),
              " USD"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-500", children: "Price unavailable" }),
            selectedPrice && !pricesLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-gray-600 ml-1", children: [
              "· 1 ",
              selectedSymbol,
              " = $",
              selectedPrice.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block", children: [
            "Transaction ID (TXID) ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 lowercase", children: "(Optional)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: txid, onChange: (e) => setTxid(e.target.value), placeholder: "0x1a2b3c...", className: "w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#c9a84c]/50" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block", children: "Upload Screenshot (Evidence of Payment)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full border-2 border-dashed border-white/10 hover:border-[#c9a84c]/50 rounded-sm p-6 text-center transition-colors cursor-pointer bg-[#070b14]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", onChange: (e) => setScreenshotFile(e.target.files?.[0] || null), className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center gap-2 pointer-events-none", children: screenshotFile ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-[#c9a84c]/10 rounded-full flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-[#c9a84c]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white", children: screenshotFile.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-500 uppercase tracking-widest", children: "Click to change file" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-5 h-5 text-gray-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white", children: "Select screenshot image" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-500 uppercase tracking-widest", children: "PNG, JPG up to 5MB" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: depositLoading, onClick: handleDepositSubmit, className: "w-full bg-white text-[#070b14] py-4 font-bold text-[13px] tracking-widest uppercase transition-colors rounded-sm hover:bg-gray-200 disabled:opacity-60 flex items-center justify-center gap-3", children: depositLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
        ] }),
        " Submitting..."
      ] }) : "Submit Deposit Proof" })
    ] }) }),
    mode === "withdraw" && (() => {
      const kycStatus = profile?.kyc_status || "unsubmitted";
      const isVerified = kycStatus === "verified";
      if (!isVerified) {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-[#0a0f1c] border border-[#c9a84c]/30 rounded-sm p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#c9a84c]/5 via-transparent to-transparent pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#c9a84c]/10 blur-[60px] rounded-full pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-7 h-7 text-[#c9a84c]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-white font-['Outfit'] font-light mb-2", children: "Withdrawals Locked" }),
              kycStatus === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-[14px] leading-relaxed max-w-sm mx-auto mb-4", children: [
                  "Your identity verification is ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c] font-semibold", children: "currently under review" }),
                  ". Withdrawals will be unlocked once your KYC is approved, which typically takes ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c] font-semibold", children: "2 to 14 business days" }),
                  "."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-sm mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#c9a84c] uppercase tracking-widest font-bold", children: "KYC Under Review" })
                ] })
              ] }) : kycStatus === "rejected" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-[14px] leading-relaxed max-w-sm mx-auto mb-4", children: [
                  "Your KYC verification was ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 font-semibold", children: "rejected" }),
                  ". Please re-submit your identity documents to unlock withdrawals."
                ] }),
                profile?.kyc_rejection_reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-sm mb-6 text-[12px] text-red-400 max-w-sm", children: [
                  "Reason: ",
                  profile.kyc_rejection_reason
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-[14px] leading-relaxed max-w-sm mx-auto mb-4", children: [
                "You must complete ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "identity verification (KYC)" }),
                " before you can make withdrawals. This is required to secure your account and comply with regulations."
              ] }) }),
              kycStatus === "unsubmitted" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 max-w-sm mx-auto mb-6 text-left", children: [{
                step: "01",
                label: "Submit your ID documents"
              }, {
                step: "02",
                label: "Admin reviews in 2–14 days"
              }, {
                step: "03",
                label: "Withdrawals unlocked"
              }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/5 border border-white/5 rounded-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[#c9a84c] font-bold uppercase tracking-widest mb-1", children: item.step }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-400 leading-snug", children: item.label })
              ] }, item.step)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-sm overflow-hidden select-none pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-10 bg-[#070b14]/80 backdrop-blur-[3px] flex items-center justify-center rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-[#c9a84c]/40 mx-auto mb-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 uppercase tracking-widest", children: "Locked until KYC verified" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm opacity-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] mb-6", children: "Withdraw Funds" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 bg-white/5 rounded-sm mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 bg-white/5 rounded-sm mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 bg-white/5 rounded-sm mb-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 bg-white/5 rounded-sm" })
            ] })
          ] })
        ] });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] mb-2", children: "Withdraw Funds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-gray-400 mb-6", children: "Processed within 24–48 hours after approval." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-[#00d4aa]/10 to-transparent border border-[#00d4aa]/20 rounded-sm mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#00d4aa] uppercase tracking-widest font-bold mb-1", children: "Available to Withdraw" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl text-white font-light font-['Outfit']", children: [
            "$",
            totalBalance.toLocaleString(void 0, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block", children: [
              "Amount (",
              selectedSymbol || "Crypto",
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: amount, onChange: (e) => setAmount(e.target.value), placeholder: "e.g. 0.5", className: "w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#00d4aa]/50 pr-16" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500 font-bold", children: selectedSymbol })
            ] }),
            amountNum > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-1", children: [
              pricesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-600", children: "Fetching price..." }) : usdValue ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-[#00d4aa] font-semibold", children: [
                "≈ $",
                usdValue.toLocaleString(void 0, {
                  maximumFractionDigits: 2
                }),
                " USD"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-500", children: "Price unavailable" }),
              selectedPrice && !pricesLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-gray-600 ml-1", children: [
                "· 1 ",
                selectedSymbol,
                " = $",
                selectedPrice.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block", children: "Withdrawal Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CryptoSelector, { focusColor: "focus:border-[#00d4aa]/50 focus:ring-[#00d4aa]/50", value: selectedAsset, onChange: setSelectedAsset })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block", children: "Your Receiving Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: withdrawAddress, onChange: (e) => setWithdrawAddress(e.target.value), placeholder: "Paste address here", className: "w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#00d4aa]/50" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-gray-500 mb-6 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c]", children: "⚠" }),
          " Early withdrawal from active direct investments may incur a 10% processing fee. Only matured balances are instantly withdrawable."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: withdrawLoading, onClick: handleWithdrawSubmit, className: "w-full bg-[#00d4aa] text-[#070b14] py-4 font-bold text-[13px] tracking-widest uppercase hover:bg-[#00b38f] transition-colors rounded-sm disabled:opacity-60 flex items-center justify-center gap-3", children: withdrawLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
          ] }),
          " Submitting..."
        ] }) : "Submit Withdrawal Request" })
      ] }) });
    })(),
    mode === "history" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] mb-6", children: "Transaction History" }),
      userTransactions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-gray-500 border border-white/5 bg-[#070b14] rounded-sm", children: "No transactions found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: userTransactions.map((tx) => {
        const timeAgo = Math.floor((Date.now() - tx.timestamp) / 6e4);
        const timeStr = timeAgo < 60 ? `${timeAgo} mins ago` : `${Math.floor(timeAgo / 60)} hours ago`;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#070b14] border border-white/5 p-5 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm ${tx.status === "pending" ? "bg-[#c9a84c]/20 text-[#c9a84c]" : tx.status === "approved" ? "bg-[#00d4aa]/20 text-[#00d4aa]" : "bg-red-500/20 text-red-400"}`, children: tx.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-gray-400 uppercase tracking-widest", children: tx.asset === "PROFIT" ? "Profit" : tx.asset === "BONUS" ? "Bonus" : tx.asset === "ADJUSTMENT" ? "Adjustment" : tx.asset === "MANUAL DEPOSIT" || tx.asset === "DEPOSIT" ? "Deposit" : tx.type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl text-white font-light", children: [
              tx.type === "withdrawal" ? "-" : "+",
              "$",
              (tx.amount || 0).toLocaleString(void 0, {
                minimumFractionDigits: 2
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-widest bg-white/10 px-2 py-1 uppercase rounded-sm text-gray-300", children: tx.asset || "N/A" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-gray-500 mt-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
            " ",
            timeStr,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "•" }),
            "TXID: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
              tx.txid ? tx.txid.substring(0, 8) : "N/A",
              "..."
            ] })
          ] })
        ] }) }, tx.id);
      }) })
    ] }) })
  ] });
}
function ProfileTab({
  profile
}) {
  const [kycProfile, setKycProfile] = reactExports.useState(profile);
  const [kycFullName, setKycFullName] = reactExports.useState("");
  const [kycCountry, setKycCountry] = reactExports.useState("");
  const [kycDocumentType, setKycDocumentType] = reactExports.useState("passport");
  const [kycFrontFile, setKycFrontFile] = reactExports.useState(null);
  const [kycBackFile, setKycBackFile] = reactExports.useState(null);
  const [kycSelfieFile, setKycSelfieFile] = reactExports.useState(null);
  const [kycSubmitting, setKycSubmitting] = reactExports.useState(false);
  const [kycError, setKycError] = reactExports.useState("");
  const [kycSuccess, setKycSuccess] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setKycProfile(profile);
  }, [profile]);
  const kycStatus = kycProfile?.kyc_status || "unsubmitted";
  const handleKycSubmit = async () => {
    if (!kycFullName.trim() || !kycCountry.trim()) {
      setKycError("Please fill in your full name and country.");
      return;
    }
    if (!kycFrontFile) {
      setKycError("Please upload the front of your ID document.");
      return;
    }
    if (!kycSelfieFile) {
      setKycError("Please upload a selfie holding your ID.");
      return;
    }
    setKycError("");
    setKycSubmitting(true);
    try {
      const uploadFile = async (file, prefix) => {
        const ext = file.name.split(".").pop();
        const fileName = `${kycProfile?.id}/${prefix}_${Date.now()}.${ext}`;
        const {
          error
        } = await supabase.storage.from("kyc-documents").upload(fileName, file, {
          upsert: true
        });
        if (error) throw error;
        const {
          data
        } = supabase.storage.from("kyc-documents").getPublicUrl(fileName);
        return data.publicUrl;
      };
      const frontUrl = await uploadFile(kycFrontFile, "front");
      const backUrl = kycBackFile ? await uploadFile(kycBackFile, "back") : null;
      const selfieUrl = await uploadFile(kycSelfieFile, "selfie");
      const {
        error: updateError
      } = await supabase.from("profiles").update({
        kyc_status: "pending",
        kyc_full_name: kycFullName.trim(),
        kyc_country: kycCountry.trim(),
        kyc_document_type: kycDocumentType,
        kyc_document_front_url: frontUrl,
        kyc_document_back_url: backUrl || null,
        kyc_selfie_url: selfieUrl,
        kyc_submitted_at: Date.now(),
        kyc_rejection_reason: null
      }).eq("id", kycProfile?.id);
      if (updateError) throw updateError;
      setKycProfile((prev) => ({
        ...prev,
        kyc_status: "pending"
      }));
      setKycSuccess(true);
    } catch (err) {
      setKycError(err.message || "Submission failed. Please try again.");
    } finally {
      setKycSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 mt-4 md:mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl text-white font-['Outfit'] font-light mb-2", children: "Profile & Security" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: kycStatus === "verified" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#0a0f1c] border border-[#00d4aa]/30 p-6 rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-[#00d4aa]/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6 text-[#00d4aa]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] font-semibold", children: "Identity Verified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#00d4aa]/20 text-[#00d4aa] border border-[#00d4aa]/30", children: "KYC Approved" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-gray-400", children: "Your identity has been successfully verified. Your account has full access." })
      ] })
    ] }) }) : kycStatus === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#0a0f1c] border border-[#c9a84c]/30 p-6 rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-[#c9a84c]/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-[#c9a84c]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] font-semibold", children: "Verification Under Review" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30", children: "Pending" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-gray-400", children: [
          "Your identity verification is currently under review. This process typically takes ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c] font-semibold", children: "2 to 14 business days" }),
          " before your account is fully verified. We will notify you once it's complete."
        ] })
      ] })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-white/5 pb-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-6 h-6 text-[#c9a84c]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] font-semibold", children: "Identity Verification (KYC)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-gray-500 mt-0.5", children: "Required to unlock full platform access and withdrawals" })
        ] })
      ] }),
      kycStatus === "rejected" && kycProfile?.kyc_rejection_reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-sm flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 text-[10px] font-bold", children: "!" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-red-400 font-semibold mb-1", children: "Verification Rejected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-red-300/80", children: kycProfile.kyc_rejection_reason }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 mt-1", children: "Please correct the issue and re-submit below." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold", children: "Full Legal Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: kycFullName, onChange: (e) => setKycFullName(e.target.value), placeholder: "e.g. John Michael Smith", className: "w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold", children: "Country of Residence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: kycCountry, onChange: (e) => setKycCountry(e.target.value), placeholder: "e.g. United States", className: "w-full bg-[#070b14] border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#c9a84c]/50 text-sm" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold", children: "Document Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 flex-wrap", children: ["passport", "id_card", "drivers_license"].map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setKycDocumentType(type), className: `px-4 py-2 text-[11px] uppercase tracking-widest font-bold rounded-sm border transition-all ${kycDocumentType === type ? "border-[#c9a84c]/60 bg-[#c9a84c]/10 text-[#c9a84c]" : "border-white/10 text-gray-500 hover:text-white hover:border-white/20"}`, children: type === "passport" ? "Passport" : type === "id_card" ? "ID Card" : "Driver's License" }, type)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold", children: [
              "Document — Front Side ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-center justify-center gap-2 w-full h-28 border-2 border-dashed rounded-sm cursor-pointer transition-colors ${kycFrontFile ? "border-[#c9a84c]/50 bg-[#c9a84c]/5" : "border-white/10 hover:border-white/20 bg-[#070b14]"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*,application/pdf", className: "hidden", onChange: (e) => setKycFrontFile(e.target.files?.[0] || null) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: `w-6 h-6 mx-auto mb-1 ${kycFrontFile ? "text-[#c9a84c]" : "text-gray-600"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] ${kycFrontFile ? "text-[#c9a84c]" : "text-gray-500"}`, children: kycFrontFile ? kycFrontFile.name.substring(0, 24) + "..." : "Click to upload front" })
              ] })
            ] })
          ] }),
          kycDocumentType !== "passport" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold", children: "Document — Back Side" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-center justify-center gap-2 w-full h-28 border-2 border-dashed rounded-sm cursor-pointer transition-colors ${kycBackFile ? "border-[#c9a84c]/50 bg-[#c9a84c]/5" : "border-white/10 hover:border-white/20 bg-[#070b14]"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*,application/pdf", className: "hidden", onChange: (e) => setKycBackFile(e.target.files?.[0] || null) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: `w-6 h-6 mx-auto mb-1 ${kycBackFile ? "text-[#c9a84c]" : "text-gray-600"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] ${kycBackFile ? "text-[#c9a84c]" : "text-gray-500"}`, children: kycBackFile ? kycBackFile.name.substring(0, 24) + "..." : "Click to upload back" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block font-semibold", children: [
            "Selfie Holding Your ID ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-center justify-center gap-2 w-full h-28 border-2 border-dashed rounded-sm cursor-pointer transition-colors ${kycSelfieFile ? "border-[#00d4aa]/50 bg-[#00d4aa]/5" : "border-white/10 hover:border-white/20 bg-[#070b14]"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: (e) => setKycSelfieFile(e.target.files?.[0] || null) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: `w-6 h-6 mx-auto mb-1 ${kycSelfieFile ? "text-[#00d4aa]" : "text-gray-600"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] ${kycSelfieFile ? "text-[#00d4aa]" : "text-gray-500"}`, children: kycSelfieFile ? kycSelfieFile.name.substring(0, 24) + "..." : "Selfie with document visible — face must be clear" })
            ] })
          ] })
        ] }),
        kycError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-red-500/10 border border-red-500/20 rounded-sm text-[12px] text-red-400", children: kycError }),
        kycSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-sm text-[12px] text-[#c9a84c]", children: "✓ Verification submitted successfully! Your review will take 2 to 14 business days." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-[#070b14] border border-white/5 rounded-sm text-[11px] text-gray-500 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold block mb-1", children: "Processing time: 2 to 14 business days" }),
          "Your documents are encrypted and securely stored. We will never share your data with third parties. You will receive a notification once your review is complete."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: kycSubmitting, onClick: handleKycSubmit, className: "w-full py-4 bg-[#c9a84c] hover:bg-[#b89945] text-[#070b14] font-bold text-[13px] uppercase tracking-widest rounded-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2", children: kycSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
          ] }),
          " Uploading & Submitting..."
        ] }) : kycStatus === "rejected" ? "Re-Submit Verification" : "Submit Identity Verification" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 rounded-sm space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-white/5 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-[#00d4aa]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit']", children: "Security & 2FA" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-white", children: "Two-Factor Authentication" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500", children: "Authenticator app" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-5 bg-[#00d4aa] rounded-full relative cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-[#070b14] rounded-full absolute top-1 right-1" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-white", children: "Login Alerts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500", children: "Email on new device" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-5 bg-[#00d4aa] rounded-full relative cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-[#070b14] rounded-full absolute top-1 right-1" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-white", children: "Withdrawal PIN" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500", children: "Require PIN for transfers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-5 bg-white/10 rounded-full relative cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-white rounded-full absolute top-1 left-1" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 rounded-sm space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-white/5 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-6 h-6 text-[#00d4aa]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit']", children: "Trusted Devices" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between p-4 bg-white/5 rounded-sm border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-5 h-5 text-[#00d4aa]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-white font-semibold flex items-center gap-2", children: [
              "Chrome ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#00d4aa]/10 text-[#00d4aa] px-2 py-0.5 rounded-sm text-[10px] uppercase", children: "Active" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500", children: "Windows · This device" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-transparent border border-white/5 rounded-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-5 h-5 text-gray-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-white", children: "Safari" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500", children: "iPhone · 3 days ago" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[11px] text-red-400 uppercase tracking-widest font-semibold hover:underline", children: "Revoke" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden col-span-1 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: async () => {
        await supabase.auth.signOut();
        window.location.href = "/login";
      }, className: "w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 hover:text-red-400 font-bold uppercase tracking-widest text-[12px] transition-colors rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
        " Sign Out"
      ] }) })
    ] })
  ] });
}
function RewardsTab({
  profile
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const referralCode = profile?.referral_code || "N/A";
  const referralLink = `https://thespaceholdings.com/join?ref=${referralCode}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 mt-4 md:mt-10 text-center py-10 border border-[#b088f5]/30 bg-gradient-to-b from-[#b088f5]/10 to-[#0a0f1c] rounded-sm relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-[#b088f5]/20 rounded-full blur-[80px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-12 h-12 text-[#b088f5] mx-auto mb-4 relative z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl text-white font-['Outfit'] font-light mb-2 relative z-10", children: "Refer & Earn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-[13px] max-w-md mx-auto relative z-10 px-4", children: "Invite friends to join TheSpaceHoldings and earn 5% of their initial deposit instantly to your withdrawable balance." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-[#0a0f1c] border border-white/5 rounded-sm text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 uppercase tracking-widest mb-2 font-semibold", children: "Total Referrals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl text-white font-['Outfit']", children: profile?.total_referrals || 0 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-[#0a0f1c] border border-white/5 rounded-sm text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 uppercase tracking-widest mb-2 font-semibold", children: "Total Earned" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl text-[#00d4aa] font-['Outfit']", children: [
          "$",
          Number(profile?.total_earned_referrals || 0).toLocaleString(void 0, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] mb-4", children: "Your Referral Link" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { readOnly: true, value: referralLink, className: "w-full bg-[#070b14] border border-white/10 text-gray-300 p-4 rounded-sm text-sm focus:outline-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopy, className: "px-8 bg-[#b088f5] hover:bg-[#9a70e0] text-[#070b14] py-4 text-[13px] tracking-widest uppercase font-bold transition-colors rounded-sm whitespace-nowrap", children: copied ? "Copied!" : "Copy Link" })
      ] })
    ] })
  ] });
}
function InvestTab({
  profile
}) {
  const {
    investments,
    loading,
    addInvestment
  } = useInvestmentStore();
  const [amount, setAmount] = reactExports.useState("");
  const [investLoading, setInvestLoading] = reactExports.useState(false);
  const [alertState, setAlertState] = reactExports.useState({
    open: false,
    title: "",
    message: "",
    type: "success"
  });
  const walletBalance = Number(profile?.balance || 0);
  const amountNum = parseFloat(amount) || 0;
  const dailyRoiPercent = 1.5;
  const dailyReturn = amountNum * (dailyRoiPercent / 100);
  const yearlyReturn = dailyReturn * 365;
  const handleInvestSubmit = async () => {
    if (!amountNum || amountNum <= 0) {
      setAlertState({
        open: true,
        title: "Invalid Amount",
        message: "Please enter a valid investment amount.",
        type: "error"
      });
      return;
    }
    if (amountNum > walletBalance) {
      setAlertState({
        open: true,
        title: "Insufficient Balance",
        message: "You do not have enough funds in your wallet balance to make this investment.",
        type: "error"
      });
      return;
    }
    setInvestLoading(true);
    const result = await addInvestment(amountNum);
    setInvestLoading(false);
    if (result?.error) {
      setAlertState({
        open: true,
        title: "Investment Failed",
        message: result.error,
        type: "error"
      });
    } else {
      setAmount("");
      setAlertState({
        open: true,
        title: "Investment Successful!",
        message: `You have successfully invested $${amountNum.toLocaleString()} directly. Your yield will start accumulating immediately.`,
        type: "success"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: alertState.open, onOpenChange: (open) => setAlertState((prev) => ({
      ...prev,
      open
    })), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white p-0 overflow-hidden max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1.5 w-full ${alertState.type === "success" ? "bg-gradient-to-r from-purple-500 to-[#00d4aa]" : "bg-gradient-to-r from-red-500 to-red-400"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${alertState.type === "success" ? "bg-[#00d4aa]/15" : "bg-red-500/15"}`, children: alertState.type === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-[#00d4aa]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-xl font-['Outfit'] font-semibold text-center mb-3 ${alertState.type === "success" ? "text-[#00d4aa]" : "text-red-400"}`, children: alertState.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-[14px] text-center leading-relaxed mb-6", children: alertState.message }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAlertState((prev) => ({
          ...prev,
          open: false
        })), className: `w-full py-3 font-bold text-[13px] tracking-widest uppercase rounded-sm transition-colors ${alertState.type === "success" ? "bg-[#00d4aa] hover:bg-[#00b38f] text-[#070b14]" : "bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30"}`, children: alertState.type === "success" ? "Perfect" : "Dismiss" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 mt-4 md:mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl text-white font-['Outfit'] font-light mb-2", children: "Direct Investments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-gray-500", children: "Invest capital directly to earn high-yield returns without locked plans." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-[#0a0f1c] border border-white/5 rounded-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-[#00d4aa]/5 rounded-full blur-xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 uppercase tracking-widest mb-1 font-semibold", children: "Wallet Balance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl text-white font-light font-['Outfit']", children: [
          "$",
          walletBalance.toLocaleString(void 0, {
            minimumFractionDigits: 2
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAmount(walletBalance.toString()), className: "text-[10px] text-[#00d4aa] uppercase tracking-widest font-bold mt-2 hover:underline", children: "Use Max" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-[#0a0f1c] border border-white/5 rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 uppercase tracking-widest mb-1 font-semibold", children: "Daily Yield Rate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl text-purple-400 font-light font-['Outfit']", children: [
          dailyRoiPercent,
          "% Daily"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 mt-2", children: "100% passive compounding" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-[#0a0f1c] border border-white/5 rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 uppercase tracking-widest mb-1 font-semibold", children: "Maturity Lock" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl text-[#c9a84c] font-light font-['Outfit']", children: "365 Days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 mt-2", children: "Yield is withdrawable daily" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] mb-6", children: "Create New Direct Investment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest mb-2 block", children: "Investment Amount (USD)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: amount, onChange: (e) => setAmount(e.target.value), placeholder: "e.g. 1000", className: "w-full bg-[#070b14] border border-white/10 text-white p-4 rounded-sm focus:outline-none focus:border-purple-500/50 pr-12 text-lg font-mono" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold", children: "USD" })
          ] })
        ] }),
        amountNum > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-[#070b14] border border-purple-500/20 rounded-sm grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gray-500 uppercase tracking-widest block mb-1", children: "Projected Daily ROI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg text-[#00d4aa] font-semibold", children: [
              "+$",
              dailyReturn.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gray-500 uppercase tracking-widest block mb-1", children: "Projected Annual ROI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg text-purple-400 font-semibold", children: [
              "+$",
              yearlyReturn.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: investLoading || !amountNum || amountNum <= 0, onClick: handleInvestSubmit, className: "w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-4 font-bold text-[13px] tracking-widest uppercase transition-colors rounded-sm disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20", children: investLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
          ] }),
          " Processing Investment..."
        ] }) : "Confirm Direct Investment" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 md:p-8 rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-white font-['Outfit'] mb-6", children: "Your Active Direct Investments" }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500", children: "Loading investments..." }) : investments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500 border border-dashed border-white/5 bg-[#070b14] rounded-sm", children: "No active direct investments." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: investments.map((inv) => {
        const createdDate = new Date(inv.created_at);
        const daysPassed = Math.floor((Date.now() - createdDate.getTime()) / (1e3 * 60 * 60 * 24));
        const currentYield = inv.amount * inv.daily_roi * Math.max(0, daysPassed);
        const daysRemaining = Math.max(0, inv.duration_days - daysPassed);
        const isMatured = daysRemaining === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#070b14] border border-white/5 p-5 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm ${isMatured ? "bg-[#00d4aa]/20 text-[#00d4aa]" : "bg-purple-500/20 text-purple-400"}`, children: isMatured ? "Matured" : "Active Lock" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-gray-400 uppercase tracking-widest", children: inv.plan_name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl text-white font-light", children: [
                "$",
                inv.amount.toLocaleString(void 0, {
                  minimumFractionDigits: 2
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-gray-500", children: [
                "@ ",
                inv.daily_roi * 100,
                "% daily ROI"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-gray-500 mt-2 flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Invested: ",
                createdDate.toLocaleDateString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Lock Period: ",
                daysRemaining,
                " days remaining"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right border-t md:border-t-0 border-white/5 pt-3 md:pt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1", children: "Accumulated ROI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl text-[#00d4aa] font-semibold font-mono", children: [
              "+$",
              currentYield.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-gray-500 mt-0.5", children: [
              daysPassed,
              " days active"
            ] })
          ] })
        ] }, inv.id);
      }) })
    ] })
  ] });
}
function NotificationBell({
  transactions,
  align = "right"
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [notifs, setNotifs] = reactExports.useState([]);
  const [permGranted, setPermGranted] = reactExports.useState(typeof window !== "undefined" && "Notification" in window ? Notification.permission === "granted" : false);
  const prevStatuses = reactExports.useRef({});
  reactExports.useEffect(() => {
    transactions.forEach((tx) => {
      const prev = prevStatuses.current[tx.id];
      const curr = tx.status;
      if (prev !== void 0 && prev !== curr) {
        const amt = `$${Number(tx.amount).toLocaleString(void 0, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })} ${tx.asset || ""}`;
        let title = "";
        let body = "";
        if (tx.type === "deposit" && curr === "approved") {
          title = "✅ Deposit Approved";
          body = `Your deposit of ${amt} has been credited.`;
        } else if (tx.type === "deposit" && curr === "rejected") {
          title = "❌ Deposit Rejected";
          body = `Your deposit of ${amt} was not approved.`;
        } else if (tx.type === "withdrawal" && curr === "approved") {
          title = "💸 Withdrawal Sent";
          body = `Your withdrawal of ${amt} has been sent.`;
        } else if (tx.type === "withdrawal" && curr === "rejected") {
          title = "❌ Withdrawal Rejected";
          body = `Your withdrawal of ${amt} was rejected.`;
        }
        if (title) {
          setNotifs((prev2) => [{
            id: `${tx.id}-${curr}`,
            title,
            body,
            time: Date.now(),
            read: false,
            type: tx.type,
            status: curr
          }, ...prev2].slice(0, 20));
        }
      }
      prevStatuses.current[tx.id] = curr;
    });
  }, [transactions]);
  const [seeded, setSeeded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (seeded || transactions.length === 0) return;
    const initial = transactions.filter((tx) => tx.status !== "pending").sort((a, b) => b.timestamp - a.timestamp).slice(0, 5).map((tx) => {
      const amt = `$${Number(tx.amount).toLocaleString(void 0, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })} ${tx.asset || ""}`;
      let title = "";
      let body = "";
      if (tx.type === "deposit" && tx.status === "approved") {
        title = "✅ Deposit Approved";
        body = `Deposit of ${amt} credited.`;
      } else if (tx.type === "deposit" && tx.status === "rejected") {
        title = "❌ Deposit Rejected";
        body = `Deposit of ${amt} rejected.`;
      } else if (tx.type === "withdrawal" && tx.status === "approved") {
        title = "💸 Withdrawal Sent";
        body = `Withdrawal of ${amt} processed.`;
      } else if (tx.type === "withdrawal" && tx.status === "rejected") {
        title = "❌ Withdrawal Rejected";
        body = `Withdrawal of ${amt} rejected.`;
      }
      return {
        id: tx.id,
        title,
        body,
        time: tx.timestamp,
        read: true,
        type: tx.type,
        status: tx.status
      };
    }).filter((n) => n.title !== "");
    setNotifs(initial);
    initial.forEach((n) => {
      prevStatuses.current[n.id.split("-")[0]] = n.status;
    });
    setSeeded(true);
  }, [transactions, seeded]);
  const unread = notifs.filter((n) => !n.read).length;
  const markAllRead = () => setNotifs((prev) => prev.map((n) => ({
    ...n,
    read: true
  })));
  const handleEnable = async () => {
    const granted = await requestNotificationPermission();
    setPermGranted(granted);
  };
  const formatTime = (ts) => {
    const m = Math.floor((Date.now() - ts) / 6e4);
    if (m < 1) return "Just now";
    if (m < 60) return `${m}m ago`;
    if (m < 1440) return `${Math.floor(m / 60)}h ago`;
    return `${Math.floor(m / 1440)}d ago`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
      setOpen((o) => !o);
      if (!open) markAllRead();
    }, className: "relative p-1.5 hover:text-white text-gray-400 transition-colors rounded-sm hover:bg-white/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-5 h-5" }),
      unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 min-w-[16px] h-4 flex items-center justify-center rounded-full bg-[#c9a84c] text-[#070b14] text-[9px] font-bold px-0.5", children: unread > 9 ? "9+" : unread })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute top-10 z-50 w-[320px] max-w-[calc(100vw-2rem)] bg-[#0a0f1c] border border-white/10 rounded-sm shadow-2xl shadow-black/60 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 ${align === "left" ? "left-0" : "right-0"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-[#c9a84c]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-white font-semibold uppercase tracking-widest", children: "Notifications" })
          ] }),
          notifs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: markAllRead, className: "text-[10px] text-gray-500 hover:text-[#c9a84c] uppercase tracking-widest transition-colors", children: "Mark all read" })
        ] }),
        !permGranted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-[#c9a84c]/10 border-b border-[#c9a84c]/20 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#c9a84c] leading-snug", children: "Enable push notifications to get alerts even when the app is in the background." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleEnable, className: "shrink-0 px-3 py-1.5 bg-[#c9a84c] text-[#070b14] text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#b89945] transition-colors", children: "Enable" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[340px] overflow-y-auto divide-y divide-white/5", children: notifs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 text-gray-500 text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-8 h-8 mx-auto mb-2 opacity-20" }),
          "No notifications yet"
        ] }) : notifs.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-4 py-3 flex gap-3 transition-colors ${n.read ? "opacity-70" : "bg-white/[0.02]"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-0.5 w-2 h-2 rounded-full shrink-0 ${n.status === "approved" ? "bg-[#00d4aa]" : n.status === "rejected" ? "bg-red-500" : "bg-[#c9a84c]"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-white font-medium", children: n.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-400 mt-0.5 leading-snug", children: n.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-600 mt-1 uppercase tracking-wide", children: formatTime(n.time) })
          ] })
        ] }, n.id)) })
      ] })
    ] })
  ] });
}
export {
  Dashboard as component
};
