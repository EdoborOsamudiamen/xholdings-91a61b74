import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./supabase-BOMigAZ6.mjs";
import { u as useTransactionStore, b as useCryptoStore, D as Dialog, c as DialogTrigger, a as DialogContent, d as DialogHeader, e as DialogTitle, f as DialogDescription, g as DialogFooter, h as DialogClose } from "./dialog-PWqLBZEl.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AlertDialog, g as AlertDialogTrigger, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, h as AlertDialogCancel, f as AlertDialogAction } from "./alert-dialog-Xw497zxQ.mjs";
import { X, M as Menu, s as Activity, U as Users, D as DollarSign, y as SlidersVertical, W as Wallet, u as Copy, z as ShieldAlert, P as Power, k as Search, J as ArrowUpRight, N as ArrowDownRight, O as Plus, Q as ToggleRight, R as ToggleLeft, T as TrendingUp, V as SquarePen, Y as Ban, Z as Trash2, c as Eye, I as Image, m as Clock, _ as CircleCheckBig, $ as CircleX } from "../_libs/lucide-react.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "./button-BXrfXN_b.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-alert-dialog.mjs";
const CATEGORIES = ["PROFIT", "BONUS", "ADJUSTMENT", "MANUAL DEPOSIT"];
const ADMIN_TAG = "[ADMIN]";
function BalanceOpsTab() {
  const [users, setUsers] = reactExports.useState([]);
  const [query, setQuery] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(null);
  const [category, setCategory] = reactExports.useState("PROFIT");
  const [amount, setAmount] = reactExports.useState("");
  const [direction, setDirection] = reactExports.useState("credit");
  const [note, setNote] = reactExports.useState("");
  const [history, setHistory] = reactExports.useState([]);
  const [busy, setBusy] = reactExports.useState(false);
  reactExports.useEffect(() => {
    supabase.from("profiles").select("id,email,name,balance,role").neq("role", "admin").order("email").then(({ data }) => setUsers(data || []));
    const globalProfileCh = supabase.channel("global_profile_changes_balance_ops").on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "profiles" },
      ({ new: n }) => {
        setUsers((prev) => prev.map((u) => u.id === n.id ? { ...u, balance: n.balance } : u));
        setSelected((s) => s && s.id === n.id ? { ...s, balance: n.balance } : s);
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(globalProfileCh);
    };
  }, []);
  reactExports.useEffect(() => {
    if (!selected) {
      setHistory([]);
      return;
    }
    const load = async () => {
      const { data } = await supabase.from("transactions").select("*").eq("user_id", selected.id).order("timestamp", { ascending: false }).limit(50);
      setHistory(data || []);
    };
    load();
    const ch = supabase.channel(`bo_${selected.id}_${Math.random()}`).on(
      "postgres_changes",
      { event: "*", schema: "public", table: "transactions", filter: `user_id=eq.${selected.id}` },
      load
    ).subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [selected?.id]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users.slice(0, 25);
    return users.filter(
      (u) => u.email?.toLowerCase().includes(q) || u.name?.toLowerCase().includes(q) || u.id.toLowerCase().includes(q)
    ).slice(0, 25);
  }, [users, query]);
  const adminOps = reactExports.useMemo(
    () => history.filter((t) => CATEGORIES.includes(t.asset) && t.txid?.startsWith(ADMIN_TAG)),
    [history]
  );
  const submit = async () => {
    if (!selected) return toast.error("Select a user first");
    const amt = Number(amount);
    if (!isFinite(amt) || amt <= 0) return toast.error("Enter a valid positive amount");
    const signed = direction === "credit" ? amt : -amt;
    if (direction === "debit" && selected.balance + signed < 0)
      return toast.error("Debit exceeds user balance");
    setBusy(true);
    const payload = {
      id: Math.random().toString(36).slice(2, 10),
      user_id: selected.id,
      user_email: selected.email,
      type: direction === "credit" ? "deposit" : "withdrawal",
      amount: amt,
      asset: category,
      txid: `${ADMIN_TAG} ${note || category.toLowerCase()}`.slice(0, 200),
      status: "approved",
      timestamp: Date.now()
    };
    const { error: insErr } = await supabase.from("transactions").insert([payload]);
    if (insErr) {
      setBusy(false);
      return toast.error(insErr.message);
    }
    const { error: rpcErr } = await supabase.rpc("increment_balance", {
      p_user_id: selected.id,
      p_amount: signed
    });
    setBusy(false);
    if (rpcErr) {
      toast.error("Balance update failed: " + rpcErr.message);
      return;
    }
    toast.success(`${direction === "credit" ? "Credited" : "Debited"} $${amt.toFixed(2)} ${category}`);
    setAmount("");
    setNote("");
  };
  const reverse = async (tx) => {
    if (!selected) return;
    if (!confirm(`Reverse ${tx.type === "deposit" ? "+" : "-"}$${tx.amount} ${tx.asset}?`)) return;
    const counterType = tx.type === "deposit" ? "withdrawal" : "deposit";
    const signed = tx.type === "deposit" ? -tx.amount : tx.amount;
    if (signed < 0 && selected.balance + signed < 0)
      return toast.error("Reversal would make balance negative");
    const { error } = await supabase.from("transactions").insert([
      {
        id: Math.random().toString(36).slice(2, 10),
        user_id: tx.user_id,
        user_email: tx.user_email,
        type: counterType,
        amount: tx.amount,
        asset: tx.asset,
        txid: `${ADMIN_TAG} REVERSAL of ${tx.id}`,
        status: "approved",
        timestamp: Date.now()
      }
    ]);
    if (error) return toast.error(error.message);
    const { error: rpcErr } = await supabase.rpc("increment_balance", {
      p_user_id: tx.user_id,
      p_amount: signed
    });
    if (rpcErr) return toast.error(rpcErr.message);
    toast.success("Reversed");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-light text-white font-['Outfit']", children: "Balance Operations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Manually credit profit, bonuses, deposits, or adjustments." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[350px_1fr] gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-5 rounded-sm flex flex-col h-[600px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: "Search users...",
              className: "w-full bg-[#070b14] border border-white/10 pl-9 pr-3 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-[#00d4aa]/50 transition-colors rounded-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar", children: [
          filtered.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setSelected(u),
              className: `w-full text-left px-4 py-3 rounded-sm text-xs transition-all border ${selected?.id === u.id ? "bg-[#00d4aa]/10 border-[#00d4aa]/30 text-white shadow-[0_0_15px_rgba(0,212,170,0.1)]" : "bg-transparent border-transparent text-gray-400 hover:bg-white/5 hover:border-white/10"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-medium truncate ${selected?.id === u.id ? "text-[#00d4aa]" : "text-white"}`, children: u.name || "Unnamed User" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-[10px] font-mono ${selected?.id === u.id ? "text-white" : "text-gray-500"}`, children: [
                    "$",
                    Number(u.balance || 0).toLocaleString(void 0, { minimumFractionDigits: 2 })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 truncate", children: u.email })
              ]
            },
            u.id
          )),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-40 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 mb-2 opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", children: "No users found" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: !selected ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-12 rounded-sm flex flex-col items-center justify-center text-gray-500 min-h-[300px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-12 h-12 mb-4 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm tracking-wide", children: "Select a user to manage their balance" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-[#0a0f1c] to-[#070b14] border border-[#00d4aa]/20 p-6 rounded-sm relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-[#00d4aa]/5 blur-2xl rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-6 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-[#00d4aa] font-bold mb-1", children: "Current Balance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-light text-white font-mono", children: [
                "$",
                Number(selected.balance || 0).toLocaleString(void 0, { minimumFractionDigits: 2 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-400 mb-1", children: selected.name || "User" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-gray-600 font-mono bg-black/40 px-2 py-1 rounded-sm border border-white/5", children: [
                selected.id.slice(0, 12),
                "…"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: category,
                onChange: (e) => setCategory(e.target.value),
                className: "w-full bg-[#070b14] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#00d4aa]/50 transition-colors rounded-sm",
                children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Direction", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["credit", "debit"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setDirection(d),
                className: `flex-1 px-4 py-3 text-xs uppercase tracking-widest rounded-sm border transition-all font-bold ${direction === d ? d === "credit" ? "border-[#00d4aa]/50 bg-[#00d4aa]/10 text-[#00d4aa] shadow-[0_0_10px_rgba(0,212,170,0.1)]" : "border-red-500/50 bg-red-500/10 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.1)]" : "border-white/10 text-gray-500 hover:bg-white/5 hover:border-white/20"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                  d === "credit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "w-3.5 h-3.5" }),
                  d
                ] })
              },
              d
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Amount (USD)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono", children: "$" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: "0",
                  step: "0.01",
                  value: amount,
                  onChange: (e) => setAmount(e.target.value),
                  placeholder: "0.00",
                  className: "w-full bg-[#070b14] border border-white/10 pl-8 pr-4 py-3 text-sm text-white outline-none focus:border-[#00d4aa]/50 transition-colors rounded-sm font-mono"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Admin Note (Optional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: note,
                onChange: (e) => setNote(e.target.value),
                placeholder: "e.g. VIP deposit bonus",
                maxLength: 160,
                className: "w-full bg-[#070b14] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#00d4aa]/50 transition-colors rounded-sm"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: submit,
              disabled: busy || !amount || Number(amount) <= 0,
              className: `flex-1 w-full sm:w-auto px-6 py-3.5 text-[12px] uppercase tracking-widest font-bold rounded-sm transition-all flex items-center justify-center gap-2 ${!amount || Number(amount) <= 0 || busy ? "bg-white/5 text-gray-500 cursor-not-allowed" : direction === "credit" ? "bg-[#00d4aa] text-[#070b14] hover:bg-[#00b38f] shadow-[0_0_15px_rgba(0,212,170,0.3)]" : "bg-red-500 text-white hover:bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.3)]"}`,
              children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }),
                " Processing..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "Apply ",
                direction === "credit" ? "Credit" : "Debit"
              ] })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 rounded-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-b border-white/5 text-xs uppercase tracking-widest text-gray-400", children: [
            "Admin Activity (",
            adminOps.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-white/5 max-h-[360px] overflow-y-auto", children: [
            adminOps.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-6 text-xs text-gray-600", children: "No admin entries yet." }),
            adminOps.map((tx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 flex items-center gap-3 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 text-[10px] uppercase tracking-widest bg-white/5 text-gray-300 rounded-sm", children: tx.asset }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `font-mono ${tx.type === "deposit" ? "text-emerald-400" : "text-red-400"}`,
                      children: [
                        tx.type === "deposit" ? "+" : "-",
                        "$",
                        Number(tx.amount).toFixed(2)
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 truncate mt-0.5", children: tx.txid }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-600 mt-0.5", children: new Date(Number(tx.timestamp)).toLocaleString() })
              ] }),
              !tx.txid.includes("REVERSAL") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => reverse(tx),
                  className: "px-3 py-1.5 text-[10px] uppercase tracking-widest border border-white/10 text-gray-300 hover:bg-white/5 rounded-sm",
                  children: "Reverse"
                }
              )
            ] }, tx.id))
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-widest text-gray-500 mb-1.5", children: label }),
    children
  ] });
}
function AdminDashboard() {
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const navigate = useNavigate({
    from: "/admin"
  });
  const [isChecking, setIsChecking] = reactExports.useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: {
          session
        }
      } = await supabase.auth.getSession();
      if (!session) {
        navigate({
          to: "/login"
        });
        return;
      }
      const {
        data: profile
      } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (!profile || profile.role !== "admin") {
        navigate({
          to: "/dashboard"
        });
      } else {
        setIsChecking(false);
      }
    };
    checkAdmin();
  }, [navigate]);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({
      to: "/login"
    });
  };
  if (isChecking) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#070b14] flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-4 border-[#c9a84c] border-t-transparent rounded-full animate-spin mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 uppercase tracking-widest text-[11px] font-bold", children: "Verifying Access..." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#070b14] text-[#f0f4ff] font-['Inter'] flex flex-col lg:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden sticky top-0 z-40 bg-[#0a0f1c] border-b border-white/5 p-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-red-600/20 border border-red-500/50 flex items-center justify-center font-bold text-red-500 font-['Outfit'] text-sm", children: "A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-light text-lg tracking-[0.15em] text-white font-['Outfit'] uppercase", children: "SuperAdmin" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "p-2 text-white", children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" }) })
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm", onClick: () => setIsMobileMenuOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `fixed lg:sticky top-0 left-0 h-screen bg-[#0a0f1c] border-r border-white/5 p-6 z-50 flex flex-col transition-transform duration-300 w-64 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "hidden lg:flex items-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-red-600/20 border border-red-500/50 flex items-center justify-center font-bold text-red-500 font-['Outfit'] text-sm", children: "A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-light text-xl tracking-[0.15em] text-white font-['Outfit'] uppercase", children: "SuperAdmin" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 flex-grow mt-4 lg:mt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabButton, { active: activeTab === "overview", onClick: () => {
          setActiveTab("overview");
          setIsMobileMenuOpen(false);
        }, icon: Activity, label: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabButton, { active: activeTab === "users", onClick: () => {
          setActiveTab("users");
          setIsMobileMenuOpen(false);
        }, icon: Users, label: "Manage Users" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabButton, { active: activeTab === "transactions", onClick: () => {
          setActiveTab("transactions");
          setIsMobileMenuOpen(false);
        }, icon: DollarSign, label: "Transactions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabButton, { active: activeTab === "balance_ops", onClick: () => {
          setActiveTab("balance_ops");
          setIsMobileMenuOpen(false);
        }, icon: SlidersVertical, label: "Balance Ops" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabButton, { active: activeTab === "wallets", onClick: () => {
          setActiveTab("wallets");
          setIsMobileMenuOpen(false);
        }, icon: Wallet, label: "Platform Wallets" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabButton, { active: activeTab === "copy_trading", onClick: () => {
          setActiveTab("copy_trading");
          setIsMobileMenuOpen(false);
        }, icon: Copy, label: "Copy Trading" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabButton, { active: activeTab === "security", onClick: () => {
          setActiveTab("security");
          setIsMobileMenuOpen(false);
        }, icon: ShieldAlert, label: "Security logs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto border-t border-white/5 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold", children: "SA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium text-white", children: "System Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 uppercase tracking-widest", children: "Level 5 Access" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleLogout, className: "p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-sm transition-colors", title: "Logout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-4 h-4" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 p-4 sm:p-6 md:p-8 lg:p-12 w-full max-w-[1400px]", children: [
      activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, {}),
      activeTab === "users" && /* @__PURE__ */ jsxRuntimeExports.jsx(UsersTab, {}),
      activeTab === "transactions" && /* @__PURE__ */ jsxRuntimeExports.jsx(TransactionsTab, {}),
      activeTab === "balance_ops" && /* @__PURE__ */ jsxRuntimeExports.jsx(BalanceOpsTab, {}),
      activeTab === "wallets" && /* @__PURE__ */ jsxRuntimeExports.jsx(WalletsTab, {}),
      activeTab === "copy_trading" && /* @__PURE__ */ jsxRuntimeExports.jsx(CopyTradingTab, {}),
      activeTab === "security" && /* @__PURE__ */ jsxRuntimeExports.jsx(SecurityTab, {})
    ] })
  ] });
}
function TabButton({
  active,
  onClick,
  icon: Icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: `flex items-center gap-3 px-4 py-3 rounded-sm transition-colors w-full text-left ${active ? "bg-red-500/10 border-l-2 border-red-500 text-white" : "text-gray-500 hover:text-white hover:bg-white/5 border-l-2 border-transparent"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${active ? "text-red-400" : ""}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium tracking-wide", children: label })
  ] });
}
function OverviewTab() {
  const [usersCount, setUsersCount] = reactExports.useState(0);
  const [totalAUM, setTotalAUM] = reactExports.useState(0);
  const {
    transactions
  } = useTransactionStore();
  reactExports.useEffect(() => {
    const fetchStats = async () => {
      const {
        data: profiles
      } = await supabase.from("profiles").select("id, balance, role");
      const {
        data: investments
      } = await supabase.from("investments").select("amount, status");
      if (profiles) {
        setUsersCount(profiles.filter((p) => p.role !== "admin").length);
        const userBalances = profiles.filter((p) => p.role !== "admin").reduce((acc, p) => acc + Number(p.balance || 0), 0);
        let investedAmount = 0;
        if (investments) {
          investedAmount = investments.filter((inv) => inv.status === "active").reduce((acc, inv) => acc + Number(inv.amount || 0), 0);
        }
        setTotalAUM(userBalances + investedAmount);
      }
    };
    fetchStats();
  }, []);
  const pendingDeposits = transactions.filter((t) => t.type === "deposit" && t.status === "pending");
  const pendingAmount = pendingDeposits.reduce((acc, t) => acc + Number(t.amount || 0), 0);
  const approvedDeposits = transactions.filter((t) => t.type === "deposit" && t.status === "approved");
  const totalDepositedAmount = approvedDeposits.reduce((acc, t) => acc + Number(t.amount || 0), 0);
  const recentActivity = [...transactions].sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
  const formatTime = (timestamp) => {
    const mins = Math.floor((Date.now() - timestamp) / 6e4);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    if (mins < 1440) return `${Math.floor(mins / 60)}h ago`;
    return `${Math.floor(mins / 1440)}d ago`;
  };
  const getActivityLabel = (tx) => {
    const amt = `$${Number(tx.amount).toLocaleString(void 0, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
    const user = tx.userEmail || "Unknown user";
    const asset = tx.asset || "";
    if (tx.type === "deposit") return `Deposit of ${amt} ${asset} from ${user}`;
    if (tx.type === "withdrawal") return `Withdrawal of ${amt} ${asset} by ${user}`;
    return `${tx.type} of ${amt} by ${user}`;
  };
  const getDotColor = (status) => {
    if (status === "approved") return "bg-[#00d4aa]";
    if (status === "pending") return "bg-[#c9a84c]";
    return "bg-red-500";
  };
  const getBadgeStyle = (status) => {
    if (status === "approved") return "bg-[#00d4aa]/10 text-[#00d4aa]";
    if (status === "pending") return "bg-[#c9a84c]/10 text-[#c9a84c]";
    return "bg-red-500/10 text-red-400";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl text-white font-light font-['Outfit'] mb-6 sm:mb-8", children: "System Overview" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Total Users", value: usersCount.toString(), change: "Registered accounts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Total AUM", value: `$${totalAUM.toLocaleString(void 0, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`, change: "Managed by platform", color: "text-[#00d4aa]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Total Deposits", value: `$${totalDepositedAmount.toLocaleString(void 0, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`, change: `${approvedDeposits.length} approved`, color: "text-[#00d4aa]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Pending", value: pendingDeposits.length.toString(), change: `$${pendingAmount.toLocaleString()} pending`, color: "text-[#c9a84c]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 rounded-sm p-4 sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] text-white font-semibold uppercase tracking-widest", children: "Recent Activity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-gray-500 uppercase tracking-widest", children: [
          recentActivity.length,
          " events"
        ] })
      ] }),
      recentActivity.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-gray-500 text-[13px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-8 h-8 mx-auto mb-3 opacity-30" }),
        "No activity yet."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: recentActivity.map((tx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 sm:gap-4 border-b border-white/5 py-3.5 last:border-0 last:pb-0 first:pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-[5px] w-2 h-2 rounded-full shrink-0 ${getDotColor(tx.status)}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-gray-200 break-words", children: getActivityLabel(tx) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm ${getBadgeStyle(tx.status)}`, children: tx.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 mt-0.5 uppercase tracking-wider", children: tx.type })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 whitespace-nowrap shrink-0 mt-0.5", children: formatTime(tx.timestamp) })
      ] }, tx.id)) })
    ] })
  ] });
}
function StatCard({
  title,
  value,
  change,
  color = "text-white"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-white/5 p-6 rounded-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 uppercase tracking-widest font-semibold mb-2", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-3xl font-light font-['Outfit'] mb-2 ${color}`, children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-gray-400", children: change })
  ] });
}
function UsersTab() {
  const [users, setUsers] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    fetchUsers();
    const channel = supabase.channel("profiles_changes").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "profiles"
    }, () => {
      fetchUsers();
    }).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  const fetchUsers = async () => {
    const {
      data: profiles,
      error
    } = await supabase.from("profiles").select("*").order("role", {
      ascending: true
    });
    const {
      data: investments
    } = await supabase.from("investments").select("user_id, amount, daily_roi, created_at").eq("status", "active");
    if (error) {
      console.error("Error fetching users:", error);
    }
    if (profiles) {
      const usersWithTotal = profiles.map((profile) => {
        const userInvs = (investments || []).filter((inv) => inv.user_id === profile.id);
        const roiEarned = userInvs.reduce((acc, inv) => {
          const daysPassed = Math.floor((Date.now() - new Date(inv.created_at).getTime()) / (1e3 * 60 * 60 * 24));
          return acc + inv.amount * inv.daily_roi * Math.max(0, daysPassed);
        }, 0);
        const totalBalance = Number(profile.balance || 0) + roiEarned + Number(profile.total_earned_referrals || 0);
        return {
          ...profile,
          totalBalance
        };
      });
      setUsers(usersWithTotal);
    }
    setLoading(false);
  };
  const makeAdmin = async (id) => {
    await supabase.from("profiles").update({
      role: "admin"
    }).eq("id", id);
    fetchUsers();
  };
  const handleEdit = async (id, newBalance) => {
    if (!isNaN(Number(newBalance))) {
      await supabase.from("profiles").update({
        balance: Number(newBalance)
      }).eq("id", id);
      fetchUsers();
    }
  };
  const handleBan = async (id, newStatus) => {
    await supabase.from("profiles").update({
      status: newStatus
    }).eq("id", id);
    fetchUsers();
  };
  const handleDelete = async (id) => {
    await supabase.from("profiles").delete().eq("id", id);
    fetchUsers();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl text-white font-light font-['Outfit']", children: "User Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search email or ID...", className: "w-full sm:w-64 bg-[#0a0f1c] border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-sm text-sm focus:outline-none focus:border-white/30" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#0a0f1c] border border-white/5 rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[640px] w-full text-left border-collapse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 text-[11px] text-gray-500 uppercase tracking-widest", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 sm:p-4 font-semibold", children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 sm:p-4 font-semibold", children: "Balance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 sm:p-4 font-semibold", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 sm:p-4 font-semibold", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 sm:p-4 font-semibold text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-white/5", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "p-8 text-center text-gray-500", children: "Loading..." }) }) : users.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "p-8 text-center text-gray-500", children: "No users found." }) }) : users.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserRow, { id: user.id, name: user.name, email: user.email, balance: `$${Number(user.balance || 0).toLocaleString(void 0, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`, totalBalance: `$${Number(user.totalBalance || 0).toLocaleString(void 0, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`, rawBalance: Number(user.balance || 0), status: user.status || "Active", role: user.role, onMakeAdmin: () => makeAdmin(user.id), onEdit: (newBalance) => handleEdit(user.id, newBalance), onBan: () => handleBan(user.id, user.status || "Active"), onDelete: () => handleDelete(user.id) }, user.id)) })
    ] }) }) })
  ] });
}
function UserRow({
  id,
  name,
  email,
  balance,
  totalBalance,
  rawBalance,
  status,
  role,
  onMakeAdmin,
  onEdit,
  onBan,
  onDelete
}) {
  const [isEditOpen, setIsEditOpen] = reactExports.useState(false);
  const [editBalance, setEditBalance] = reactExports.useState(String(rawBalance));
  const [plansOpen, setPlansOpen] = reactExports.useState(false);
  const [userSubs, setUserSubs] = reactExports.useState([]);
  const [loadingPlans, setLoadingPlans] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setEditBalance(String(rawBalance));
  }, [rawBalance]);
  reactExports.useEffect(() => {
    if (plansOpen) {
      const fetchPlans = async () => {
        setLoadingPlans(true);
        const {
          data: s
        } = await supabase.from("copy_trading_subscriptions").select("*, master_traders(name)").eq("user_id", id).order("created_at", {
          ascending: false
        });
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
  const handleWithdrawSub = async (sub) => {
    if (sub.status !== "active") return;
    await supabase.from("copy_trading_subscriptions").update({
      status: "withdrawn"
    }).eq("id", sub.id);
    const {
      data: profile
    } = await supabase.from("profiles").select("balance").eq("id", id).single();
    if (profile) {
      const newBal = Number(profile.balance || 0) + Number(sub.amount);
      await supabase.from("profiles").update({
        balance: newBal
      }).eq("id", id);
      onEdit(newBal);
    }
    setUserSubs(userSubs.map((s) => s.id === sub.id ? {
      ...s,
      status: "withdrawn"
    } : s));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-white/[0.02] transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 sm:p-4 max-w-[160px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-white font-medium truncate", children: name || "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 truncate", children: email })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 sm:p-4 text-[13px] font-mono whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-semibold", children: totalBalance }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-gray-500 mt-0.5", title: "Base Wallet Balance", children: [
        "Wallet: ",
        balance
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold whitespace-nowrap ${role === "admin" ? "bg-purple-500/10 text-purple-400" : "bg-gray-500/10 text-gray-400"}`, children: role }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold whitespace-nowrap ${status === "Active" ? "bg-[#00d4aa]/10 text-[#00d4aa]" : status === "Suspended" ? "bg-red-500/10 text-red-500" : "bg-[#c9a84c]/10 text-[#c9a84c]"}`, children: status }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 sm:p-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1.5 flex-wrap", children: [
      role !== "admin" && /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-3 py-1 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-sm text-[11px] font-bold uppercase transition-colors mr-2", children: "Make Admin" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
              "Make ",
              name,
              " an Admin?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-gray-400", children: "This will grant them full access to the admin dashboard." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "bg-transparent border-white/10 text-white hover:bg-white/5", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: onMakeAdmin, className: "bg-purple-500 text-white hover:bg-purple-600", children: "Yes, Make Admin" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: plansOpen, onOpenChange: setPlansOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-sm transition-colors", title: "View Copy Trading", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white max-w-2xl max-h-[85vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
              "Copy Trading for ",
              name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-gray-400", children: "View active copy trading subscriptions and force withdrawals." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2", children: loadingPlans ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500", children: "Loading subscriptions..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[12px] font-bold text-white uppercase tracking-widest mb-3", children: "Copy Trading Subscriptions" }),
            userSubs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: "No copy trading subscriptions." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: userSubs.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-[#070b14] border border-white/5 p-3 rounded-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-white", children: [
                  "Copy: ",
                  s.master_traders?.name || "Unknown Trader"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 font-mono", children: [
                  "$",
                  Number(s.amount).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm ${s.status === "active" ? "bg-[#00d4aa]/10 text-[#00d4aa]" : "bg-gray-500/10 text-gray-400"}`, children: s.status }),
                s.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleWithdrawSub(s), className: "px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-sm hover:bg-red-500/20 font-bold uppercase tracking-widest", children: "Withdraw" })
              ] })
            ] }, s.id)) })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: isEditOpen, onOpenChange: setIsEditOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-2 bg-white/5 hover:bg-white/10 text-white rounded-sm transition-colors", title: "Edit Balance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Edit Balance for ",
            name
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block", children: "New Balance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: editBalance, onChange: (e) => setEditBalance(e.target.value), className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm", children: "Cancel" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: submitEdit, className: "px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] transition-colors", children: "Save" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 rounded-sm transition-colors", title: status === "Suspended" ? "Unban User" : "Ban User", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { className: "w-4 h-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
              status === "Suspended" ? "Unban" : "Ban",
              " ",
              name,
              "?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { className: "text-gray-400", children: [
              "Are you sure you want to ",
              status === "Suspended" ? "unban" : "ban",
              " this user?"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "bg-transparent border-white/10 text-white hover:bg-white/5", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => onBan(status === "Suspended" ? "Active" : "Suspended"), className: "bg-orange-500 text-white hover:bg-orange-600", children: status === "Suspended" ? "Unban" : "Ban" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-2 bg-red-900/20 hover:bg-red-900/40 text-red-600 rounded-sm transition-colors", title: "Delete User", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
              "Delete ",
              name,
              "?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-gray-400", children: "WARNING: Are you sure you want to completely delete this user profile? This action cannot be undone." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "bg-transparent border-white/10 text-white hover:bg-white/5", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: onDelete, className: "bg-red-600 text-white hover:bg-red-700", children: "Delete Permanently" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function TransactionsTab() {
  const {
    transactions
  } = useTransactionStore();
  const pendingTxs = transactions.filter((t) => t.status === "pending");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl text-white font-light font-['Outfit']", children: "Pending Approvals" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: pendingTxs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-gray-500 border border-white/5 bg-[#0a0f1c] rounded-sm", children: "No pending transactions." }) : pendingTxs.map((tx) => /* @__PURE__ */ jsxRuntimeExports.jsx(TransactionCard, { tx }, tx.id)) })
  ] });
}
function TransactionCard({
  tx
}) {
  const {
    updateStatus
  } = useTransactionStore();
  const [isApproveOpen, setIsApproveOpen] = reactExports.useState(false);
  const [usdValue, setUsdValue] = reactExports.useState("");
  const [sentTxid, setSentTxid] = reactExports.useState("");
  const [copied, setCopied] = reactExports.useState(false);
  const [lightboxOpen, setLightboxOpen] = reactExports.useState(false);
  const sendPushToUser = async (title, body, tag) => {
    try {
      const {
        data: profile
      } = await supabase.from("profiles").select("id").eq("email", tx.userEmail).single();
      if (!profile) return;
      await supabase.functions.invoke("send-push-notification", {
        body: {
          user_id: profile.id,
          title,
          body,
          tag
        }
      });
    } catch (err) {
      console.error("[Admin Push]", err);
    }
  };
  const handleApprove = async () => {
    const amt = `$${Number(tx.amount).toLocaleString(void 0, {
      minimumFractionDigits: 2
    })} ${tx.asset || ""}`;
    if (tx.type === "deposit") {
      updateStatus(tx.id, "approved", tx.amount);
      await sendPushToUser("✅ Deposit Approved — TheSpaceHoldings", `Your deposit of ${amt} has been credited to your account.`, "deposit-approved");
    } else {
      if (sentTxid) {
        await supabase.from("transactions").update({
          txid: sentTxid
        }).eq("id", tx.id);
      }
      updateStatus(tx.id, "approved");
      await sendPushToUser("💸 Withdrawal Sent — TheSpaceHoldings", `Your withdrawal of ${amt} has been processed and sent.`, "withdrawal-approved");
    }
    setIsApproveOpen(false);
  };
  const handleCopy = (text) => {
    if (text) navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const timeAgo = Math.floor((Date.now() - tx.timestamp) / 6e4);
  const timeStr = timeAgo < 60 ? `${timeAgo} mins ago` : `${Math.floor(timeAgo / 60)} hours ago`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    lightboxOpen && tx.screenshotUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4", onClick: () => setLightboxOpen(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors", onClick: () => setLightboxOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tx.screenshotUrl, alt: "Deposit proof", className: "max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl", onClick: (e) => e.stopPropagation() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0f1c] border border-[#c9a84c]/30 rounded-sm overflow-hidden", children: [
      tx.screenshotUrl && tx.type === "deposit" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-32 bg-[#070b14] overflow-hidden cursor-pointer group", onClick: () => setLightboxOpen(true), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tx.screenshotUrl, alt: "Deposit proof screenshot", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 left-3 flex items-center gap-1.5 text-[10px] text-white/70 font-bold uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
          " Deposit Proof - Click to enlarge"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-[#c9a84c] uppercase tracking-widest font-bold mb-2", children: [
            tx.type,
            " Pending"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-white font-light", children: tx.amount.toLocaleString(void 0, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 6
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold tracking-widest bg-white/10 px-2 py-1 uppercase rounded-sm text-gray-300", children: tx.asset })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-gray-400 mb-1", children: [
            "From: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: tx.userEmail })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-gray-400", children: [
            "TXID: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-white text-[12px]", children: tx.txid || "N/A" })
          ] }),
          !tx.screenshotUrl && tx.type === "deposit" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-[11px] text-orange-400/70 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-3 h-3" }),
            " No screenshot submitted"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-gray-500 mt-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
            " Submitted ",
            timeStr
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: isApproveOpen, onOpenChange: setIsApproveOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "px-8 py-3 bg-[#00d4aa] hover:bg-[#00b38f] text-[#070b14] font-bold text-[12px] uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
              " Approve"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white p-0 overflow-hidden max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-gradient-to-r from-[#00d4aa] to-[#00f5c8]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-[#00d4aa]/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-[#00d4aa]" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-['Outfit'] font-semibold text-white capitalize", children: [
                      "Approve ",
                      tx.type
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-gray-500 uppercase tracking-widest", children: tx.type === "deposit" ? "Credit user balance" : "Send funds to user" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#070b14] border border-white/5 rounded-sm p-4 mb-5 space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-500 uppercase tracking-widest", children: "Amount" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-mono font-semibold", children: [
                      tx.amount.toLocaleString(void 0, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 6
                      }),
                      " ",
                      tx.asset
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-500 uppercase tracking-widest", children: "User" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-gray-300 truncate max-w-[200px]", children: tx.userEmail })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-500 uppercase tracking-widest", children: "TXID" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-gray-400 font-mono", children: tx.txid ? tx.txid.substring(0, 16) + "..." : "N/A" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-gray-500 uppercase tracking-widest", children: "Submitted" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-gray-400", children: timeStr })
                  ] })
                ] }),
                tx.screenshotUrl && tx.type === "deposit" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-2 block flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                    " Deposit Screenshot"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-sm overflow-hidden cursor-pointer group border border-white/10", onClick: () => setLightboxOpen(true), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tx.screenshotUrl, alt: "Deposit proof", className: "w-full max-h-40 object-cover group-hover:opacity-90 transition-opacity" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-6 h-6 text-white" }) })
                  ] })
                ] }),
                tx.type === "deposit" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 bg-[#00d4aa]/10 border border-[#00d4aa]/20 p-4 rounded-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-[#00d4aa] font-medium text-center", children: "Have you confirmed that payment has been received in your account?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-gray-400 text-center mt-2", children: [
                    "Clicking Confirm Approval will instantly credit $",
                    tx.amount.toLocaleString(void 0, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }),
                    " to the user's balance."
                  ] })
                ] }),
                tx.type === "withdrawal" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-2 block", children: "User's Receiving Address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-[#070b14] border border-white/10 text-gray-300 p-3 rounded-sm text-[12px] font-mono truncate", children: tx.txid || "No address provided" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleCopy(tx.txid), className: "px-4 bg-[#00d4aa]/10 hover:bg-[#00d4aa]/20 border border-[#00d4aa]/30 text-[#00d4aa] rounded-sm text-[11px] uppercase tracking-widest font-bold transition-colors whitespace-nowrap", children: copied ? "✓ Copied" : "Copy" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-2 block", children: [
                      "Sent TXID ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 normal-case tracking-normal font-normal", children: "(optional)" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: sentTxid, onChange: (e) => setSentTxid(e.target.value), placeholder: "Paste transaction hash after sending...", className: "w-full bg-[#070b14] border border-white/10 focus:border-[#00d4aa]/50 p-3 rounded-sm text-[12px] focus:outline-none text-white font-mono transition-colors" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 py-3 text-[12px] uppercase tracking-widest font-bold bg-white/5 hover:bg-white/10 text-gray-300 rounded-sm transition-colors", children: "Cancel" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleApprove, className: "flex-1 py-3 text-[12px] uppercase tracking-widest font-bold bg-[#00d4aa] hover:bg-[#00b38f] text-[#070b14] rounded-sm disabled:opacity-40 disabled:cursor-not-allowed transition-colors", children: "✓ Confirm Approval" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "px-8 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold text-[12px] uppercase tracking-widest border border-red-500/30 rounded-sm transition-colors flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }),
              " Reject"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
                  "Reject ",
                  tx.type
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { className: "text-gray-400", children: [
                  "Are you sure you want to reject this ",
                  tx.type,
                  "? The user will not receive these funds."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "bg-transparent border-white/10 text-white hover:bg-white/5 hover:text-white", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => updateStatus(tx.id, "rejected"), className: "bg-red-500 text-white hover:bg-red-600", children: "Yes, Reject" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function WalletsTab() {
  const {
    cryptos,
    addCrypto
  } = useCryptoStore();
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [symbol, setSymbol] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const [network, setNetwork] = reactExports.useState("Native");
  const [address, setAddress] = reactExports.useState("");
  const handleAdd = () => {
    if (!symbol || !name || !network || !address) return;
    addCrypto({
      id: symbol.toLowerCase(),
      name,
      symbol: symbol.toUpperCase(),
      color: "#c9a84c",
      address,
      network,
      active: true
    });
    setIsOpen(false);
    setSymbol("");
    setName("");
    setNetwork("Native");
    setAddress("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl text-white font-light font-['Outfit']", children: "Platform Wallets" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: isOpen, onOpenChange: setIsOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-3 bg-white text-[#070b14] text-[12px] font-bold uppercase tracking-widest rounded-sm hover:bg-gray-200 transition-colors", children: "+ Add New Wallet" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New Wallet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-gray-400", children: "Enter the details for the new platform wallet." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-gray-400 font-bold", children: "Symbol" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: symbol, onChange: (e) => setSymbol(e.target.value), placeholder: "e.g. BTC", className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-gray-400 font-bold", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Bitcoin", className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-gray-400 font-bold", children: "Network" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: network, onChange: (e) => setNetwork(e.target.value), placeholder: "e.g. Native", className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-gray-400 font-bold", children: "Wallet Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: address, onChange: (e) => setAddress(e.target.value), placeholder: "Enter wallet address", className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm", children: "Cancel" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAdd, disabled: !symbol || !name || !network || !address, className: "px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] disabled:opacity-50 transition-colors", children: "Save Wallet" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: cryptos.map((crypto) => /* @__PURE__ */ jsxRuntimeExports.jsx(WalletCard, { crypto }, crypto.id)) })
  ] });
}
function WalletCard({
  crypto
}) {
  const {
    toggleActive,
    removeCrypto,
    updateAddress
  } = useCryptoStore();
  const [isEditOpen, setIsEditOpen] = reactExports.useState(false);
  const [editAddress, setEditAddress] = reactExports.useState(crypto.address || "");
  const handleEdit = () => {
    if (editAddress && editAddress !== crypto.address) {
      updateAddress(crypto.id, editAddress);
    }
    setIsEditOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-[#0a0f1c] border ${crypto.active ? "border-white/20" : "border-white/5"} p-6 rounded-sm relative overflow-hidden group`, children: [
    !crypto.active && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 z-10 flex items-center justify-center backdrop-blur-[1px] pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold tracking-widest uppercase bg-black px-3 py-1 rounded-sm border border-white/10 text-gray-400", children: "Inactive" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6 relative z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[12px] font-bold", style: {
          backgroundColor: `${crypto.color}15`,
          color: crypto.color
        }, children: crypto.symbol.substring(0, 1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg text-white font-['Outfit'] leading-none mb-1", children: [
            crypto.name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-500", children: [
              "(",
              crypto.symbol,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-500 uppercase tracking-widest", children: crypto.network })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleActive(crypto.id), title: crypto.active ? "Deactivate" : "Activate", className: `transition-colors p-2 rounded-sm ${crypto.active ? "text-gray-500 hover:text-orange-400 bg-white/5 hover:bg-orange-500/10" : "text-white hover:text-green-400 bg-white/10 hover:bg-green-500/20"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-red-400 hover:text-red-300 transition-colors bg-red-500/10 p-2 rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
                "Delete ",
                crypto.symbol,
                "?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { className: "text-gray-400", children: [
                "Are you sure you want to permanently remove ",
                crypto.name,
                " from the platform wallets? Users will no longer see this as a deposit option."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "bg-transparent border-white/10 text-white hover:bg-white/5 hover:text-white", children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => removeCrypto(crypto.id), className: "bg-red-500 text-white hover:bg-red-600", children: "Delete" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#070b14] border border-white/10 p-3 rounded-sm flex items-center justify-between relative z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[13px] text-gray-300 truncate mr-4", children: crypto.address || "No address set" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: isEditOpen, onOpenChange: setIsEditOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[#c9a84c] text-[11px] uppercase tracking-widest font-bold hover:underline shrink-0", children: "Edit Address" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Update ",
            crypto.symbol,
            " Address"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block", children: "Wallet Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: editAddress, onChange: (e) => setEditAddress(e.target.value), className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm", children: "Cancel" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleEdit, className: "px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] transition-colors", children: "Update" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function SecurityTab() {
  const [settings, setSettings] = reactExports.useState({
    maintenance_mode: false,
    withdrawals_halted: false
  });
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const fetchSettings = async () => {
      const {
        data
      } = await supabase.from("platform_settings").select("*").eq("id", 1).single();
      if (data) setSettings(data);
      setLoading(false);
    };
    fetchSettings();
  }, []);
  const toggleMaintenance = async () => {
    const newVal = !settings.maintenance_mode;
    await supabase.from("platform_settings").update({
      maintenance_mode: newVal
    }).eq("id", 1);
    setSettings((prev) => ({
      ...prev,
      maintenance_mode: newVal
    }));
  };
  const toggleWithdrawals = async () => {
    const newVal = !settings.withdrawals_halted;
    await supabase.from("platform_settings").update({
      withdrawals_halted: newVal
    }).eq("id", 1);
    setSettings((prev) => ({
      ...prev,
      withdrawals_halted: newVal
    }));
  };
  const handleWipe = async () => {
    await supabase.rpc("wipe_database");
    window.location.reload();
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in duration-500 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl text-white font-light font-['Outfit'] mb-8", children: "SuperAdmin Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-red-500/5 border border-red-500/20 rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg text-red-400 font-['Outfit'] mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-5 h-5" }),
        " Danger Zone"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-gray-400 mb-6", children: "These actions affect the entire platform. Proceed with extreme caution." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-[#070b14] border border-white/5 rounded-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[14px] text-white font-semibold", children: "Maintenance Mode" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-gray-500", children: "Disable all user logins and trading" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `px-6 py-2 text-[11px] uppercase tracking-widest font-bold rounded-sm border transition-colors ${settings.maintenance_mode ? "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/20 hover:bg-[#c9a84c]/20" : "bg-white/5 hover:bg-white/10 text-white border-white/10"}`, children: settings.maintenance_mode ? "Disable" : "Enable" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
                  settings.maintenance_mode ? "Disable" : "Enable",
                  " Maintenance Mode?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-gray-400", children: settings.maintenance_mode ? "This will allow users to log in and trade normally again." : "This will prevent all non-admin users from logging in or making transactions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "bg-transparent border-white/10 text-white hover:bg-white/5", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: toggleMaintenance, className: "bg-red-600 text-white hover:bg-red-700", children: "Confirm" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-[#070b14] border border-white/5 rounded-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[14px] text-white font-semibold", children: "Halt Withdrawals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-gray-500", children: "Temporarily suspend all outgoing transactions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `px-6 py-2 text-[11px] uppercase tracking-widest font-bold rounded-sm border transition-colors ${settings.withdrawals_halted ? "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/20 hover:bg-[#c9a84c]/20" : "bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20"}`, children: settings.withdrawals_halted ? "Resume" : "Halt" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
                  settings.withdrawals_halted ? "Resume" : "Halt",
                  " Withdrawals?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-gray-400", children: settings.withdrawals_halted ? "This will allow users to submit withdrawal requests again." : "This will prevent users from submitting any new withdrawal requests." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "bg-transparent border-white/10 text-white hover:bg-white/5", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: toggleWithdrawals, className: "bg-red-600 text-white hover:bg-red-700", children: "Confirm" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-[#070b14] border border-white/5 rounded-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[14px] text-white font-semibold", children: "Wipe Database" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-gray-500", children: "Delete all users, transactions, and wallets" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-2 bg-red-900/40 hover:bg-red-900/60 text-red-200 text-[11px] uppercase tracking-widest font-bold rounded-sm border border-red-500 transition-colors", children: "Wipe All" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-red-500/50 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "text-red-500", children: "EXTREME DANGER: Wipe Database?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-gray-300", children: "This will permanently delete ALL users (except admins), ALL transactions, ALL investments, and ALL wallets. This action cannot be undone. Are you absolutely sure?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "bg-transparent border-white/10 text-white hover:bg-white/5", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleWipe, className: "bg-red-600 text-white font-bold hover:bg-red-700", children: "Yes, Destroy Everything" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
const EMPTY_TRADER = {
  name: "",
  description: "",
  avatar_url: null,
  win_rate: 85,
  total_pnl: 0,
  roi: 0,
  followers_count: 0,
  is_active: true,
  daily_trades_min: 2,
  daily_trades_max: 5
};
function CopyTradingTab() {
  const [traders, setTraders] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingTrader, setEditingTrader] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    ...EMPTY_TRADER
  });
  const [imageFile, setImageFile] = reactExports.useState(null);
  const [imagePreview, setImagePreview] = reactExports.useState(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [isSimulateOpen, setIsSimulateOpen] = reactExports.useState(false);
  const [simTrader, setSimTrader] = reactExports.useState(null);
  const [simDays, setSimDays] = reactExports.useState(1);
  const [simulating, setSimulating] = reactExports.useState(false);
  const [simResult, setSimResult] = reactExports.useState(null);
  const [isFollowersOpen, setIsFollowersOpen] = reactExports.useState(false);
  const [selectedTraderFollowers, setSelectedTraderFollowers] = reactExports.useState([]);
  const [loadingFollowers, setLoadingFollowers] = reactExports.useState(false);
  const fetchTraders = async () => {
    setLoading(true);
    const {
      data,
      error: error2
    } = await supabase.from("master_traders").select("*").order("created_at", {
      ascending: true
    });
    if (error2) {
      console.error("Master traders table might not exist yet:", error2);
      setTraders([{
        id: "mock-1",
        name: "Crypto King",
        description: "High frequency scalping on majors",
        avatar_url: null,
        win_rate: 92.5,
        total_pnl: 15400,
        roi: 340,
        followers_count: 124,
        is_active: true,
        daily_trades_min: 5,
        daily_trades_max: 15,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }, {
        id: "mock-2",
        name: "Alpha Signals",
        description: "Long-term swing trading, strictly fundamental",
        avatar_url: null,
        win_rate: 76.2,
        total_pnl: 8520,
        roi: 125,
        followers_count: 89,
        is_active: true,
        daily_trades_min: 1,
        daily_trades_max: 3,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }]);
    } else if (data) {
      setTraders(data);
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    fetchTraders();
  }, []);
  const openAdd = () => {
    setEditingTrader(null);
    setForm({
      ...EMPTY_TRADER
    });
    setImageFile(null);
    setImagePreview(null);
    setError("");
    setIsModalOpen(true);
  };
  const openEdit = (trader) => {
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
      daily_trades_max: trader.daily_trades_max
    });
    setImageFile(null);
    setImagePreview(trader.avatar_url);
    setError("");
    setIsModalOpen(true);
  };
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };
  const uploadImage = async (file) => {
    const ext = file.name.split(".").pop();
    const path = `trader-${Date.now()}.${ext}`;
    const {
      error: error2
    } = await supabase.storage.from("avatars").upload(path, file, {
      upsert: true
    });
    if (error2) {
      setError("Image upload failed: " + error2.message);
      return null;
    }
    const {
      data
    } = supabase.storage.from("avatars").getPublicUrl(path);
    return data.publicUrl;
  };
  const handleSave = async () => {
    if (!form.name.trim()) {
      setError("Trader name is required.");
      return;
    }
    setSaving(true);
    setError("");
    let avatarUrl = form.avatar_url;
    if (imageFile) {
      setUploading(true);
      avatarUrl = await uploadImage(imageFile);
      setUploading(false);
      if (!avatarUrl) {
        setSaving(false);
        return;
      }
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
      daily_trades_max: Number(form.daily_trades_max)
    };
    let resultError;
    if (editingTrader && !editingTrader.id.startsWith("mock")) {
      const {
        error: error2
      } = await supabase.from("master_traders").update(payload).eq("id", editingTrader.id);
      resultError = error2;
    } else if (!editingTrader || editingTrader.id.startsWith("mock")) {
      const {
        error: error2
      } = await supabase.from("master_traders").insert(payload);
      resultError = error2;
    }
    if (resultError) {
      setError("Error saving trader: " + resultError.message + " (Check database schema)");
      setSaving(false);
      return;
    }
    setSaving(false);
    setIsModalOpen(false);
    fetchTraders();
  };
  const handleDelete = async (id) => {
    if (id.startsWith("mock")) {
      setTraders(traders.filter((t) => t.id !== id));
      return;
    }
    await supabase.from("master_traders").delete().eq("id", id);
    fetchTraders();
  };
  const toggleActive = async (trader) => {
    if (trader.id.startsWith("mock")) {
      setTraders(traders.map((t) => t.id === trader.id ? {
        ...t,
        is_active: !t.is_active
      } : t));
      return;
    }
    await supabase.from("master_traders").update({
      is_active: !trader.is_active
    }).eq("id", trader.id);
    fetchTraders();
  };
  const openSimulate = (trader) => {
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
    let wins = Math.round(simTrader.win_rate / 100 * 100);
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
    const newWinRate = totalHistoricalTrades > 0 ? wins / totalHistoricalTrades * 100 : simTrader.win_rate;
    const pnlDiff = newPnl - simTrader.total_pnl;
    const newRoi = simTrader.roi + pnlDiff / 100;
    const payload = {
      total_pnl: newPnl,
      win_rate: newWinRate,
      roi: newRoi
    };
    if (!simTrader.id.startsWith("mock")) {
      await supabase.from("master_traders").update(payload).eq("id", simTrader.id);
      const roiDiff = newRoi - simTrader.roi;
      if (Math.abs(roiDiff) > 0) {
        const {
          data: followers
        } = await supabase.from("copy_trading_subscriptions").select("id, user_id, amount, total_pnl").eq("master_trader_id", simTrader.id).eq("status", "active");
        if (followers && followers.length > 0) {
          for (const follower of followers) {
            const followerProfit = roiDiff / 100 * Number(follower.amount);
            const newTotalPnl = Number(follower.total_pnl || 0) + followerProfit;
            await supabase.from("copy_trading_subscriptions").update({
              total_pnl: newTotalPnl
            }).eq("id", follower.id);
            const {
              data: profile
            } = await supabase.from("profiles").select("balance, email").eq("id", follower.user_id).single();
            if (profile) {
              const newBalance = Number(profile.balance || 0) + followerProfit;
              await supabase.from("profiles").update({
                balance: newBalance
              }).eq("id", follower.user_id);
              await supabase.from("transactions").insert({
                user_id: follower.user_id,
                userEmail: profile.email,
                type: followerProfit >= 0 ? "deposit" : "withdrawal",
                amount: Math.abs(followerProfit),
                asset: followerProfit >= 0 ? "PROFIT" : "LOSS",
                txid: "Automated copy trading return from " + simTrader.name,
                status: "approved",
                timestamp: Date.now()
              });
            }
          }
        }
      }
    } else {
      setTraders(traders.map((t) => t.id === simTrader.id ? {
        ...t,
        ...payload
      } : t));
    }
    setSimResult({
      trades: totalTrades,
      pnl: pnlDiff,
      winRate: newWinRate
    });
    if (!simTrader.id.startsWith("mock")) fetchTraders();
    setSimulating(false);
  };
  const openFollowers = async (trader) => {
    setIsFollowersOpen(true);
    setLoadingFollowers(true);
    if (!trader.id.startsWith("mock")) {
      const {
        data,
        error: error2
      } = await supabase.from("copy_trading_subscriptions").select("*, profiles(email)").eq("master_trader_id", trader.id);
      if (!error2 && data) {
        setSelectedTraderFollowers(data);
      } else {
        setSelectedTraderFollowers([]);
      }
    } else {
      setSelectedTraderFollowers([{
        id: "1",
        profiles: {
          email: "user123@example.com"
        },
        amount: 500,
        status: "active"
      }, {
        id: "2",
        profiles: {
          email: "investor44@example.com"
        },
        amount: 1200,
        status: "active"
      }, {
        id: "3",
        profiles: {
          email: "crypto.whale@example.com"
        },
        amount: 5e3,
        status: "active"
      }]);
    }
    setLoadingFollowers(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl text-white font-light font-['Outfit'] flex items-center gap-3", children: [
          "Copy Trading",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 px-2.5 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 text-[#00d4aa] rounded-full text-[10px] uppercase tracking-widest font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" }),
            "Auto-Bot Active"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-gray-500 mt-1", children: "Manage master traders, simulate trades, and view followers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openAdd, className: "flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-[#070b14] text-[12px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#b89945] transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        " New Trader"
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 text-gray-500", children: "Loading traders..." }) : traders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 border border-white/5 bg-[#0a0f1c] rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-10 h-10 text-gray-600 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "No master traders available." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6", children: traders.map((trader) => /* @__PURE__ */ jsxRuntimeExports.jsx(TraderCard, { trader, onEdit: () => openEdit(trader), onDelete: () => handleDelete(trader.id), onToggle: () => toggleActive(trader), onSimulate: () => openSimulate(trader), onFollowers: () => openFollowers(trader) }, trader.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isModalOpen, onOpenChange: setIsModalOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white max-w-lg max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-['Outfit'] text-xl", children: editingTrader ? "Edit Master Trader" : "New Master Trader" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-gray-500 text-[12px]", children: "Set up the copy trading profile." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-2 block", children: "Avatar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-[#070b14] border border-white/10 overflow-hidden flex items-center justify-center shrink-0", children: imagePreview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imagePreview, alt: "Preview", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-gray-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex-1 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-dashed border-white/20 hover:border-[#c9a84c]/50 rounded-sm p-3 text-center transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-gray-400", children: "Click to upload avatar" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", onChange: handleImageChange, className: "hidden" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block", children: "Trader Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.name, onChange: (e) => setForm((f) => ({
            ...f,
            name: e.target.value
          })), placeholder: "e.g. Satoshi Ninja", className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block", children: "Strategy Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.description || "", onChange: (e) => setForm((f) => ({
            ...f,
            description: e.target.value
          })), rows: 2, className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block", children: "Win Rate (%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", step: "0.1", value: form.win_rate, onChange: (e) => setForm((f) => ({
              ...f,
              win_rate: Number(e.target.value)
            })), className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block", children: "ROI (%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", step: "0.1", value: form.roi, onChange: (e) => setForm((f) => ({
              ...f,
              roi: Number(e.target.value)
            })), className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block", children: "Total PnL ($)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: form.total_pnl, onChange: (e) => setForm((f) => ({
              ...f,
              total_pnl: Number(e.target.value)
            })), className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block", children: "Followers (Fake)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: form.followers_count, onChange: (e) => setForm((f) => ({
              ...f,
              followers_count: Number(e.target.value)
            })), className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block", children: "Min Daily Trades" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: form.daily_trades_min, onChange: (e) => setForm((f) => ({
              ...f,
              daily_trades_min: Number(e.target.value)
            })), className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 block", children: "Max Daily Trades" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: form.daily_trades_max, onChange: (e) => setForm((f) => ({
              ...f,
              daily_trades_max: Number(e.target.value)
            })), className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-[#070b14] border border-white/10 rounded-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-white font-medium", children: "Active Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setForm((f) => ({
            ...f,
            is_active: !f.is_active
          })), className: form.is_active ? "text-[#00d4aa]" : "text-gray-600", children: form.is_active ? /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { className: "w-8 h-8" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLeft, { className: "w-8 h-8" }) })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-[12px] bg-red-500/10 border border-red-500/20 p-3 rounded-sm", children: error })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm text-[12px] uppercase tracking-widest", children: "Cancel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSave, disabled: saving || uploading, className: "px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] disabled:opacity-50 transition-colors text-[12px] uppercase tracking-widest", children: uploading ? "Uploading..." : saving ? "Saving..." : "Save Trader" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isSimulateOpen, onOpenChange: setIsSimulateOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
          "Simulate Trades for ",
          simTrader?.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-gray-400", children: "Generate fake trading activity to update PnL and stats." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-2 block", children: "Days to simulate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "1", max: "30", value: simDays, onChange: (e) => setSimDays(Number(e.target.value)), className: "w-full bg-[#070b14] border border-white/10 p-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a84c]/50 text-white font-mono" })
        ] }),
        simResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#070b14] p-4 rounded-sm border border-white/5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[12px] uppercase tracking-widest text-[#c9a84c] font-bold mb-2", children: "Simulation Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Trades Executed:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: simResult.trades })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "PnL Change:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: simResult.pnl >= 0 ? "text-[#00d4aa]" : "text-red-400", children: [
              simResult.pnl >= 0 ? "+" : "",
              "$",
              simResult.pnl.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "New Win Rate:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              simResult.winRate.toFixed(2),
              "%"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-2 bg-transparent text-white hover:bg-white/5 rounded-sm text-[12px] uppercase tracking-widest", children: "Close" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: runSimulation, disabled: simulating, className: "px-6 py-2 bg-[#c9a84c] text-[#070b14] font-bold rounded-sm hover:bg-[#b89945] disabled:opacity-50 transition-colors text-[12px] uppercase tracking-widest", children: simulating ? "Running..." : "Run Simulation" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isFollowersOpen, onOpenChange: setIsFollowersOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white max-w-2xl max-h-[80vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Followers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-gray-400", children: "Users actively copying this trader." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: loadingFollowers ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500", children: "Loading..." }) : selectedTraderFollowers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500", children: "No active followers." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 text-[11px] text-gray-500 uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 font-semibold", children: "User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 font-semibold", children: "Copy Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 font-semibold", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-white/5", children: selectedTraderFollowers.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-[13px]", children: f.profiles?.email || "Unknown User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 text-[13px] font-mono", children: [
            "$",
            f.amount
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#00d4aa]/10 text-[#00d4aa] px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-widest font-bold", children: f.status }) })
        ] }, i)) })
      ] }) })
    ] }) })
  ] });
}
function TraderCard({
  trader,
  onEdit,
  onDelete,
  onToggle,
  onSimulate,
  onFollowers
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-[#0a0f1c] border ${trader.is_active ? "border-[#c9a84c]/30" : "border-white/5"} rounded-sm p-5 relative`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-3 right-3 px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-widest ${trader.is_active ? "bg-[#00d4aa]/20 text-[#00d4aa] border border-[#00d4aa]/30" : "bg-white/5 text-gray-500 border border-white/10"}`, children: trader.is_active ? "Active" : "Inactive" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full overflow-hidden bg-[#070b14] border border-white/10 flex items-center justify-center shrink-0", children: trader.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: trader.avatar_url, alt: trader.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-gray-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-['Outfit'] font-semibold text-lg leading-none", children: trader.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-gray-500 mt-1", children: [
          trader.followers_count,
          " Followers"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#070b14] border border-white/5 p-2 rounded-sm text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-mono font-bold text-sm", children: [
          trader.win_rate.toFixed(1),
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-gray-500 uppercase tracking-widest mt-0.5", children: "Win Rate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#070b14] border border-white/5 p-2 rounded-sm text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[#00d4aa] font-mono font-bold text-sm", children: [
          "+",
          trader.roi.toFixed(1),
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-gray-500 uppercase tracking-widest mt-0.5", children: "ROI" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#070b14] border border-white/5 p-2 rounded-sm text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-mono font-bold text-sm ${trader.total_pnl >= 0 ? "text-[#00d4aa]" : "text-red-400"}`, children: [
          "$",
          trader.total_pnl.toLocaleString(void 0, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-gray-500 uppercase tracking-widest mt-0.5", children: "Total PnL" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onSimulate, className: "flex-1 py-2 bg-[#c9a84c]/10 hover:bg-[#c9a84c]/20 text-[#c9a84c] rounded-sm text-[10px] uppercase tracking-widest font-bold transition-colors", children: "Simulate Trades" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onFollowers, className: "flex-1 py-2 bg-white/5 hover:bg-white/10 text-white rounded-sm text-[10px] uppercase tracking-widest font-bold transition-colors", children: "View Followers" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onEdit, className: "flex-1 py-2 bg-white/5 hover:bg-white/10 text-white rounded-sm text-[11px] uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }),
        " Edit"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onToggle, className: `p-2 rounded-sm transition-colors ${trader.is_active ? "bg-orange-500/10 hover:bg-orange-500/20 text-orange-400" : "bg-[#00d4aa]/10 hover:bg-[#00d4aa]/20 text-[#00d4aa]"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-2 bg-red-900/20 hover:bg-red-900/40 text-red-500 rounded-sm transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#0a0f1c] border border-white/10 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
              "Delete ",
              trader.name,
              "?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-gray-400", children: "This will permanently remove this copy trader profile." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "bg-transparent border-white/10 text-white hover:bg-white/5", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: onDelete, className: "bg-red-600 text-white hover:bg-red-700", children: "Delete" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminDashboard as component
};
