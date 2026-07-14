import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { ArrowLeft, Eye, EyeOff, ShieldCheck, Lock, Building2, CheckCircle2, AlertCircle, Award, Sparkles } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";

export const Route = createFileRoute("/register")({
  component: Register,
});

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [alertState, setAlertState] = useState({ open: false, title: '', message: '', onConfirm: () => {} });

  const showAlert = (title: string, message: string, onConfirm = () => {}) => {
    setAlertState({ open: true, title, message, onConfirm });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Entered passwords do not match. Please verify.");
      setLoading(false);
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/login` : undefined,
        data: {
          name,
        }
      }
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    if (data.session === null) {
      showAlert(
        "Institutional Application Submitted", 
        "A secure confirmation link has been sent to your inbox. Please verify your email address to complete your accredited onboarding.", 
        () => navigate({ to: "/login" })
      );
    } else {
      navigate({ to: "/dashboard" });
    }
  };

  return (
    <div className="min-h-screen bg-[#04070d] text-[#f0f4ff] font-['Inter'] selection:bg-[#c9a84c]/30 flex flex-col lg:flex-row">
      <AlertDialog open={alertState.open} onOpenChange={(open) => setAlertState(prev => ({ ...prev, open }))}>
        <AlertDialogContent className="bg-[#080d1a] border border-[#c9a84c]/40 text-white rounded-lg shadow-2xl">
          <AlertDialogHeader>
            <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <AlertDialogTitle className="text-xl font-['Cinzel'] text-white">{alertState.title}</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400 text-sm leading-relaxed">
              {alertState.message}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogAction 
              onClick={() => {
                setAlertState(prev => ({ ...prev, open: false }));
                alertState.onConfirm();
              }} 
              className="bg-gradient-to-r from-[#e8c96a] via-[#c9a84c] to-[#a3802c] text-[#04070d] hover:opacity-95 font-bold uppercase tracking-widest text-xs px-6 py-5 rounded-sm"
            >
              Proceed to Login
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Left Institutional Branding & Onboarding Mandate */}
      <div className="hidden lg:flex lg:w-5/12 relative bg-[#080d1a] border-r border-white/10 flex-col justify-between p-12 xl:p-16 bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_0%_0%,rgba(201,168,76,0.15),transparent)] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#c9a84c] transition-colors uppercase tracking-[0.2em] mb-12 group">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Return to Public Deck
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 border border-[#c9a84c]/50 bg-[#c9a84c]/5 flex items-center justify-center rounded-sm">
              <img src={logo} alt="TheSpaceHoldings" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <div className="font-light text-xl tracking-[0.2em] text-white font-['Cinzel'] uppercase font-semibold">TheSpaceHoldings</div>
              <div className="text-[9px] text-[#c9a84c] tracking-[0.25em] uppercase font-mono">Institutional Onboarding</div>
            </div>
          </div>

          <h2 className="text-3xl xl:text-4xl font-light text-white font-['Cinzel'] leading-tight mb-6">
            Apply For Institutional <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f0eedd] via-[#c9a84c] to-[#e8c96a]">
              Member Allocation.
            </span>
          </h2>

          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md mb-10">
            Join private family offices, sovereign funds, and accredited allocators gaining direct equity and senior credit yield exposure.
          </p>

          {/* Allocation Perks */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-start gap-3 text-xs text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-mono uppercase tracking-wider text-[11px]">Direct Pre-IPO Tender Access</strong>
                <span className="text-gray-400 text-xs">Participate in secondary block trades for SpaceX, Anthropic, and Stripe.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xs text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-mono uppercase tracking-wider text-[11px]">Monthly Senior Secured Yields</strong>
                <span className="text-gray-400 text-xs">Receive 12.4%+ fixed annual cash distributions deposited directly to your wallet.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xs text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-mono uppercase tracking-wider text-[11px]">Delaware LLC SPV Protection</strong>
                <span className="text-gray-400 text-xs">Every investment is isolated in a bankruptcy-remote vehicle with automated K-1 tax forms.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-gray-500 uppercase tracking-widest">
          <span>Statutory SPV Framework</span>
          <span>© {new Date().getFullYear()} TSH Inc.</span>
        </div>
      </div>

      {/* Right Registration Form Section */}
      <div className="flex-1 w-full flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 xl:p-24 relative bg-[#04070d] min-h-[100dvh] lg:min-h-0">
        {/* Mobile Header */}
        <div className="lg:hidden w-full max-w-[460px] flex justify-between items-center mb-8 mt-4 shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border border-[#c9a84c]/50 bg-[#c9a84c]/5 flex items-center justify-center rounded-sm">
              <img src={logo} alt="TSH" className="w-5 h-5 object-contain" />
            </div>
            <span className="font-semibold text-base tracking-widest text-white font-['Cinzel'] uppercase">TheSpaceHoldings</span>
          </Link>
          <Link to="/" className="text-[11px] font-mono text-[#c9a84c] uppercase tracking-widest flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Return
          </Link>
        </div>
        
        <div className="w-full max-w-[460px] bg-[#080d1a] border border-white/10 p-8 sm:p-10 rounded-lg shadow-2xl gold-border-glow relative my-8 lg:my-0">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[10px] text-[#c9a84c] uppercase tracking-[0.2em] font-mono mb-4 font-bold">
              <Award className="w-3 h-3" /> Accredited Investor Onboarding
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-white font-['Cinzel'] mb-2">
              Request Allocation Access
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Complete your profile below to initiate institutional KYC and receive offering memorandums.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-sm flex items-start gap-3 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono font-semibold text-gray-300 uppercase tracking-widest block">
                Full Legal Name / Entity Name
              </label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-black/50 border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 transition-all rounded-sm"
                placeholder="e.g. Alexander Vance / Vance Family Office LLC"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono font-semibold text-gray-300 uppercase tracking-widest block">
                Institutional or Personal Email Address
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/50 border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 transition-all rounded-sm"
                placeholder="allocations@familyoffice.com"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-semibold text-gray-300 uppercase tracking-widest block">
                  Create Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full bg-black/50 border border-white/15 px-4 py-3 pr-10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 transition-all rounded-sm font-mono"
                    placeholder="Min 6 characters"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-semibold text-gray-300 uppercase tracking-widest block">
                  Confirm Password
                </label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full bg-black/50 border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 transition-all rounded-sm font-mono"
                  placeholder="Re-enter password"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-mono font-semibold text-[#c9a84c] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> VIP Allocation / Invite Code
                </label>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Optional</span>
              </div>
              <input 
                type="text" 
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                className="w-full bg-black/50 border border-[#c9a84c]/30 px-4 py-3 text-sm text-[#e8c96a] placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/50 transition-all rounded-sm uppercase font-mono tracking-wider font-semibold"
                placeholder="e.g. TSH-VIP-2026"
              />
            </div>

            <div className="pt-2">
              <Button 
                disabled={loading} 
                type="submit"
                className="w-full py-6 text-xs rounded-sm bg-gradient-to-r from-[#e8c96a] via-[#c9a84c] to-[#a3802c] hover:opacity-95 text-[#04070d] font-bold uppercase tracking-[0.18em] transition-all shadow-lg shadow-[#c9a84c]/15"
              >
                {loading ? "Submitting Application..." : "Submit Allocation Request"}
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-400 font-light">
              Existing Authorized Member?{' '}
              <Link to="/login" className="text-[#c9a84c] hover:text-white uppercase tracking-widest font-mono font-bold transition-colors ml-1.5">
                Client Sign In
              </Link>
            </p>
          </div>

          <div className="mt-6 p-3.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-500 leading-relaxed text-center">
            By submitting, you certify that you meet the accredited investor criteria under Rule 501 of Regulation D under the U.S. Securities Act of 1933 or institutional equivalent.
          </div>
        </div>
      </div>
    </div>
  );
}
