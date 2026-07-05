import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-BXrfXN_b.mjs";
import { s as supabase } from "./supabase-BOMigAZ6.mjs";
import { l as logo } from "./logo-qUqMBaFB.mjs";
import { A as ArrowLeft, S as ShieldCheck, L as Lock, K as KeyRound, b as CircleAlert, n as MailCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [success, setSuccess] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const {
      error: resetError
    } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });
    setLoading(false);
    if (resetError) {
      setError(resetError.message);
      return;
    }
    setSuccess(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#04070d] text-[#f0f4ff] font-['Inter'] selection:bg-[#c9a84c]/30 flex flex-col lg:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex lg:w-5/12 relative bg-[#080d1a] border-r border-white/10 flex-col justify-between p-12 xl:p-16 bg-grid-pattern overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_0%_0%,rgba(201,168,76,0.15),transparent)] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#c9a84c] transition-colors uppercase tracking-[0.2em] mb-12 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" }),
          " Return to Client Portal"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 border border-[#c9a84c]/50 bg-[#c9a84c]/5 flex items-center justify-center rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "TheSpaceHoldings", className: "w-6 h-6 object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-light text-xl tracking-[0.2em] text-white font-['Cinzel'] uppercase font-semibold", children: "TheSpaceHoldings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-[#c9a84c] tracking-[0.25em] uppercase font-mono", children: "Security & Recovery" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl xl:text-4xl font-light text-white font-['Cinzel'] leading-tight mb-6", children: [
          "Secure Credential ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f0eedd] via-[#c9a84c] to-[#e8c96a]", children: "Recovery Protocol." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 font-light leading-relaxed max-w-md mb-10", children: "For allocator security, password reset links expire after 15 minutes and require secondary email verification." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-6 border-t border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-xs text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white block font-mono uppercase tracking-wider text-[11px]", children: "256-Bit Cryptographic Verification" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: "All recovery requests generate a unique, one-time hardware token." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-xs text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white block font-mono uppercase tracking-wider text-[11px]", children: "Audit Logged Attempt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: "IP address and timestamp are logged in accordance with FINRA cybersecurity guidelines." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 pt-8 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-gray-500 uppercase tracking-widest", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "FINRA / SIPC Regulated Portal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " TSH Inc."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-full flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 xl:p-24 relative bg-[#04070d] min-h-[100dvh] lg:min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden w-full max-w-[440px] flex justify-between items-center mb-8 mt-4 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border border-[#c9a84c]/50 bg-[#c9a84c]/5 flex items-center justify-center rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "TSH", className: "w-5 h-5 object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-base tracking-widest text-white font-['Cinzel'] uppercase", children: "TheSpaceHoldings" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "text-[11px] font-mono text-[#c9a84c] uppercase tracking-widest flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3 h-3" }),
          " Return"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[440px] bg-[#080d1a] border border-white/10 p-8 sm:p-10 rounded-lg shadow-2xl gold-border-glow relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[10px] text-[#c9a84c] uppercase tracking-[0.2em] font-mono mb-4 font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "w-3 h-3" }),
            " Credential Recovery"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-light text-white font-['Cinzel'] mb-2", children: "Recover Portal Access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 font-light leading-relaxed", children: "Enter your authorized allocator email address to receive an encrypted password reset instruction link." })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-sm flex items-start gap-3 animate-in fade-in duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0 mt-0.5 text-red-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error })
        ] }),
        success ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-emerald-500/10 border border-emerald-500/30 text-white rounded-md text-center space-y-4 animate-in zoom-in-95 duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MailCheck, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-400 font-mono font-bold uppercase tracking-widest text-xs", children: "Recovery Link Dispatched" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-300 leading-relaxed font-light", children: [
            "We have dispatched password recovery instructions to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white font-mono", children: email }),
            ". Please check your secure inbox and spam directory."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({
            to: "/login"
          }), className: "w-full py-5 text-xs rounded-sm bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold uppercase tracking-[0.15em] transition-all", children: "Return to Client Sign In" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-mono font-semibold text-gray-300 uppercase tracking-widest block", children: "Authorized Allocator Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "w-full bg-black/50 border border-white/15 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 transition-all rounded-sm", placeholder: "name@familyoffice.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: loading, type: "submit", className: "w-full py-6 text-xs rounded-sm bg-gradient-to-r from-[#e8c96a] via-[#c9a84c] to-[#a3802c] hover:opacity-95 text-[#04070d] font-bold uppercase tracking-[0.18em] transition-all shadow-lg shadow-[#c9a84c]/15 mt-2", children: loading ? "Generating Secure Token..." : "Dispatch Recovery Link" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-white/10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400 font-light", children: [
          "Remembered your credentials?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-[#c9a84c] hover:text-white uppercase tracking-widest font-mono font-bold transition-colors ml-1.5", children: "Client Sign In" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-3 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-500 flex items-center justify-center gap-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Encrypted 256-bit TLS institutional session" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ForgotPassword as component
};
