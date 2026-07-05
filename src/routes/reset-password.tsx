import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { ArrowLeft, Lock, ShieldCheck, CheckCircle2, AlertCircle, Eye, EyeOff, KeyRound } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.png";

export const Route = createFileRoute("/reset-password")({
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Entered passwords do not match. Please verify.");
      setLoading(false);
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({
      password: password,
    });

    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setSuccess(true);
    
    // Automatically log out to force fresh authentication with the new password
    await supabase.auth.signOut().catch(() => {});
  };

  return (
    <div className="min-h-screen bg-[#04070d] text-[#f0f4ff] font-['Inter'] selection:bg-[#c9a84c]/30 flex flex-col lg:flex-row">
      {/* Left Institutional Branding & Security Mandate */}
      <div className="hidden lg:flex lg:w-5/12 relative bg-[#080d1a] border-r border-white/10 flex-col justify-between p-12 xl:p-16 bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_0%_0%,rgba(201,168,76,0.15),transparent)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <Link to="/login" className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#c9a84c] transition-colors uppercase tracking-[0.2em] mb-12 group">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Return to Client Portal
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 border border-[#c9a84c]/50 bg-[#c9a84c]/5 flex items-center justify-center rounded-sm">
              <img src={logo} alt="TheSpaceHoldings" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <div className="font-light text-xl tracking-[0.2em] text-white font-['Cinzel'] uppercase group-hover:text-[#f0eedd] transition-colors font-semibold">TheSpaceHoldings</div>
              <div className="text-[9px] text-[#c9a84c] tracking-[0.25em] uppercase font-mono">Security & Recovery</div>
            </div>
          </div>

          <h2 className="text-3xl xl:text-4xl font-light text-white font-['Cinzel'] leading-tight mb-6">
            Configure Secure <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f0eedd] via-[#c9a84c] to-[#e8c96a]">
              Client Credentials.
            </span>
          </h2>

          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md mb-10">
            For allocator safety, updating your credentials immediately terminates all active web sessions across other devices.
          </p>

          {/* Security Protocols */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-start gap-3 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-mono uppercase tracking-wider text-[11px]">Enforced Complexity Rules</strong>
                <span className="text-gray-400 text-xs">Passwords must meet statutory corporate entropy standards.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xs text-gray-300">
              <Lock className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-mono uppercase tracking-wider text-[11px]">Hardware Verification Logged</strong>
                <span className="text-gray-400 text-xs">Credentials are updated using a secure hardware token audit log.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-gray-500 uppercase tracking-widest">
          <span>FINRA / SIPC Regulated Portal</span>
          <span>© {new Date().getFullYear()} TSH Inc.</span>
        </div>
      </div>

      {/* Right Reset Form Section */}
      <div className="flex-1 w-full flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 xl:p-24 relative bg-[#04070d] min-h-[100dvh] lg:min-h-0">
        {/* Mobile Header */}
        <div className="lg:hidden w-full max-w-[440px] flex justify-between items-center mb-8 mt-4 shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border border-[#c9a84c]/50 bg-[#c9a84c]/5 flex items-center justify-center rounded-sm">
              <img src={logo} alt="TSH" className="w-5 h-5 object-contain" />
            </div>
            <span className="font-semibold text-base tracking-widest text-white font-['Cinzel'] uppercase">TheSpaceHoldings</span>
          </Link>
          <Link to="/login" className="text-[11px] font-mono text-[#c9a84c] uppercase tracking-widest flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Return
          </Link>
        </div>
        
        <div className="w-full max-w-[440px] bg-[#080d1a] border border-white/10 p-8 sm:p-10 rounded-lg shadow-2xl gold-border-glow relative">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[10px] text-[#c9a84c] uppercase tracking-[0.2em] font-mono mb-4 font-bold">
              <KeyRound className="w-3 h-3" /> Password Reset
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-white font-['Cinzel'] mb-2">
              Update Password
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Configure your new private client security password below to restore full access.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-sm flex items-start gap-3 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {success ? (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 text-white rounded-md text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest text-xs">
                Password Successfully Reset
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                Your portal access credentials have been securely updated. You can now log in using your new password.
              </p>
              <Button 
                onClick={() => navigate({ to: "/login" })} 
                className="w-full py-5 text-xs rounded-sm bg-gradient-to-r from-[#e8c96a] via-[#c9a84c] to-[#a3802c] hover:opacity-95 text-[#04070d] font-bold uppercase tracking-[0.15em] transition-all"
              >
                Proceed to Login
              </Button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[11px] font-mono font-semibold text-gray-300 uppercase tracking-widest block">
                  New Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full bg-black/50 border border-white/15 px-4 py-3.5 pr-11 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 transition-all rounded-sm font-mono"
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

              <div className="space-y-2">
                <label className="text-[11px] font-mono font-semibold text-gray-300 uppercase tracking-widest block">
                  Confirm Password
                </label>
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full bg-black/50 border border-white/15 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 transition-all rounded-sm font-mono"
                  placeholder="Re-enter password"
                />
              </div>

              <Button 
                disabled={loading} 
                type="submit"
                className="w-full py-6 text-xs rounded-sm bg-gradient-to-r from-[#e8c96a] via-[#c9a84c] to-[#a3802c] hover:opacity-95 text-[#04070d] font-bold uppercase tracking-[0.18em] transition-all shadow-lg shadow-[#c9a84c]/15 mt-2"
              >
                {loading ? "Updating Security Credentials..." : "Update Security Password"}
              </Button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-400 font-light">
              Return to{' '}
              <Link to="/login" className="text-[#c9a84c] hover:text-white uppercase tracking-widest font-mono font-bold transition-colors ml-1.5">
                Client Sign In
              </Link>
            </p>
          </div>

          <div className="mt-6 p-3 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-500 flex items-center justify-center gap-2 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Encrypted 256-bit TLS institutional session</span>
          </div>
        </div>
      </div>
    </div>
  );
}
