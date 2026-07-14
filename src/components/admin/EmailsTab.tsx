import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { sendNotificationEmail } from "@/lib/send-email";
import { toast } from "sonner";
import { Search, Users, Mail, CheckCircle2, AlertCircle, Send, Eye } from "lucide-react";

type Profile = { id: string; email: string; name: string | null; role: string };

export default function EmailsTab() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipientType, setRecipientType] = useState<"specific" | "all">("specific");
  const [selectedUser, setSelectedUser] = useState<Profile | null>(null);

  // Email form fields
  const [subject, setSubject] = useState("");
  const [headline, setHeadline] = useState("Account Update");
  const [body, setBody] = useState("");

  // Sending status
  const [isSending, setIsSending] = useState(false);
  const [sendProgress, setSendProgress] = useState({ current: 0, total: 0 });
  const [sendLogs, setSendLogs] = useState<{ email: string; status: "success" | "error"; error?: string }[]>([]);

  // Fetch non-admin users
  useEffect(() => {
    supabase
      .from("profiles")
      .select("id,email,name,role")
      .neq("role", "admin")
      .order("email")
      .then(({ data }) => setUsers(data || []));
  }, []);

  // Filtered users for specific user selection
  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return users.slice(0, 10);
    return users
      .filter(
        (u) =>
          u.email?.toLowerCase().includes(q) ||
          u.name?.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [users, searchQuery]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim()) {
      toast.error("Please enter a subject.");
      return;
    }
    if (!body.trim()) {
      toast.error("Please enter a message body.");
      return;
    }

    let recipients: Profile[] = [];
    if (recipientType === "specific") {
      if (!selectedUser) {
        toast.error("Please select a recipient.");
        return;
      }
      recipients = [selectedUser];
    } else {
      if (users.length === 0) {
        toast.error("No users found to email.");
        return;
      }
      recipients = users;
    }

    setIsSending(true);
    setSendLogs([]);
    setSendProgress({ current: 0, total: recipients.length });

    toast.info(`Starting dispatch of ${recipients.length} email(s)...`);

    for (let i = 0; i < recipients.length; i++) {
      const recipient = recipients[i];
      setSendProgress(prev => ({ ...prev, current: i + 1 }));

      try {
        await sendNotificationEmail(recipient.email, "custom", {
          subject,
          headline,
          body,
          full_name: recipient.name || "",
        });

        setSendLogs((prev) => [
          ...prev,
          { email: recipient.email, status: "success" },
        ]);
      } catch (err: any) {
        setSendLogs((prev) => [
          ...prev,
          { email: recipient.email, status: "error", error: err?.message || String(err) },
        ]);
      }

      // Add a slight delay between sends if sending to multiple users to prevent rate-limiting
      if (recipients.length > 1 && i < recipients.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }

    setIsSending(false);
    toast.success("Email dispatch completed!");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
      {/* Compose Section */}
      <div className="bg-[#0a0f1c] border border-white/5 p-6 rounded-md shadow-2xl flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold text-white font-['Outfit'] tracking-wide uppercase">Compose Custom Email</h2>
          <p className="text-xs text-gray-500 mt-1">Send customized HTML notifications branded with your company theme.</p>
        </div>

        <form onSubmit={handleSend} className="flex flex-col gap-5">
          {/* Recipient Type Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Recipient</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setRecipientType("specific");
                  setSendLogs([]);
                }}
                className={`py-3 px-4 border rounded-sm flex items-center justify-center gap-2 font-medium text-xs tracking-wider uppercase transition-all ${
                  recipientType === "specific"
                    ? "bg-red-500/10 border-red-500/50 text-white"
                    : "bg-[#070b14] border-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
              >
                <Users className="w-4 h-4" />
                Specific User
              </button>
              <button
                type="button"
                onClick={() => {
                  setRecipientType("all");
                  setSelectedUser(null);
                  setSendLogs([]);
                }}
                className={`py-3 px-4 border rounded-sm flex items-center justify-center gap-2 font-medium text-xs tracking-wider uppercase transition-all ${
                  recipientType === "all"
                    ? "bg-red-500/10 border-red-500/50 text-white"
                    : "bg-[#070b14] border-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
              >
                <Mail className="w-4 h-4" />
                All Users ({users.length})
              </button>
            </div>
          </div>

          {/* User Search & Selection (Specific User mode only) */}
          {recipientType === "specific" && (
            <div className="flex flex-col gap-3 p-4 bg-[#070b14] border border-white/5 rounded-sm">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3.5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search user by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0a0f1c] border border-white/5 rounded-sm py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 transition-colors"
                />
              </div>

              {selectedUser ? (
                <div className="flex items-center justify-between p-3 bg-red-500/5 border border-red-500/20 rounded-sm">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white">{selectedUser.name || "Unnamed User"}</span>
                    <span className="text-[11px] text-gray-500">{selectedUser.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedUser(null)}
                    className="text-[10px] text-red-400 hover:text-red-300 font-bold uppercase tracking-wider"
                  >
                    Change
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-1 max-h-40 overflow-y-auto">
                  {filteredUsers.length === 0 ? (
                    <span className="text-xs text-gray-600 text-center py-4">No users match search</span>
                  ) : (
                    filteredUsers.map((u) => (
                      <button
                        key={u.id}
                        type="button"
                        onClick={() => {
                          setSelectedUser(u);
                          setSearchQuery("");
                        }}
                        className="w-full text-left p-2.5 hover:bg-white/5 border-b border-white/5 last:border-0 flex items-center justify-between group transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
                            {u.name || "Unnamed User"}
                          </span>
                          <span className="text-[10px] text-gray-600 group-hover:text-gray-500 transition-colors">
                            {u.email}
                          </span>
                        </div>
                        <span className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded-sm text-gray-500 group-hover:text-white group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all font-semibold uppercase tracking-wider">
                          Select
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          )}

          {/* Subject Line */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Subject Line</label>
            <input
              type="text"
              placeholder="e.g. Important Security Updates Regarding Your Account"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-[#070b14] border border-white/5 rounded-sm py-3 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 transition-colors"
            />
          </div>

          {/* Headline (inside card) */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Email Header / Headline</label>
            <input
              type="text"
              placeholder="e.g. Account Update"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full bg-[#070b14] border border-white/5 rounded-sm py-3 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 transition-colors"
            />
          </div>

          {/* Body Text */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Message Body</label>
            <textarea
              placeholder="Type your email content here. Support line breaks..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              className="w-full bg-[#070b14] border border-white/5 rounded-sm py-3 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 transition-colors resize-none font-sans"
            />
          </div>

          {/* Progress Indicator */}
          {isSending && (
            <div className="p-4 bg-[#070b14] border border-white/5 rounded-sm flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400 font-medium">Sending emails...</span>
                <span className="font-bold text-white">
                  {sendProgress.current} / {sendProgress.total} ({Math.round((sendProgress.current / sendProgress.total) * 100)}%)
                </span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-red-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${(sendProgress.current / sendProgress.total) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-4 bg-red-600 hover:bg-red-500 active:bg-red-700 disabled:bg-gray-800 disabled:text-gray-600 text-white font-bold uppercase tracking-widest text-xs transition-colors rounded-sm flex items-center justify-center gap-2.5"
          >
            <Send className="w-4 h-4" />
            {isSending ? "Sending Dispatch..." : "Send Custom Email"}
          </button>
        </form>

        {/* Send Logs console */}
        {sendLogs.length > 0 && (
          <div className="flex flex-col gap-2 mt-4">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Dispatch Log</span>
            <div className="bg-[#070b14] border border-white/5 rounded-sm max-h-40 overflow-y-auto p-3 flex flex-col gap-1.5 font-mono text-[10px]">
              {sendLogs.map((log, index) => (
                <div key={index} className="flex items-start justify-between gap-4">
                  <span className="text-gray-500 truncate">{log.email}</span>
                  {log.status === "success" ? (
                    <span className="text-green-500 font-semibold uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Sent
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold uppercase flex items-center gap-1" title={log.error}>
                      <AlertCircle className="w-3 h-3" /> Fail
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Branded Live Preview Section */}
      <div className="sticky top-6 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-gray-400 px-1">
          <Eye className="w-4 h-4 text-red-500" />
          <span className="text-[11px] font-bold uppercase tracking-widest">Live Branded Email Preview</span>
        </div>

        {/* Mock Email Frame */}
        <div className="w-full bg-[#070b14] border border-white/5 rounded-md overflow-hidden shadow-2xl p-8 flex justify-center items-center">
          <div className="w-full max-w-[500px] bg-[#0a0f1c] rounded-lg overflow-hidden border border-white/5">
            {/* Branded Header */}
            <div className="p-6 border-b border-white/5 text-center bg-[#0a0f1c]">
              <div className="inline-block bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-[4px] px-4 py-1.5 mb-4">
                <span className="text-[#c9a84c] text-[10px] font-bold tracking-[4px] uppercase font-mono">
                  TheSpaceHoldings
                </span>
              </div>
              <h1 className="text-white text-lg font-light tracking-wide mt-1">
                {headline || "Account Update"}
              </h1>
            </div>

            {/* Email Body */}
            <div className="p-8">
              <p className="text-[#9ca3af] text-sm mb-5 leading-relaxed">
                Hello <strong className="text-white">{selectedUser?.name || "Valued Client"}</strong>,
              </p>

              <div 
                className="text-[#9ca3af] text-sm leading-relaxed whitespace-pre-wrap break-words min-h-[100px]"
                dangerouslySetInnerHTML={{
                  __html: body 
                    ? body.replace(/\n/g, "<br/>") 
                    : "<span style='color: #4b5563; font-style: italic;'>Compose your message in the editor on the left to preview it here...</span>"
                }}
              />

              {/* Mock Dashboard CTA */}
              <div className="text-center mt-8">
                <span className="inline-block bg-[#c9a84c] text-[#070b14] text-[10px] font-bold tracking-[2px] uppercase py-3 px-8 rounded-[4px] cursor-not-allowed select-none">
                  Go to Dashboard
                </span>
              </div>
            </div>

            {/* Branded Footer */}
            <div className="bg-[#070b14] border-t border-white/5 p-5 text-center">
              <p className="text-[#4b5563] text-[9px] uppercase tracking-[1px] mb-2 font-mono">
                Automated message from TheSpaceHoldings &mdash; Do not reply
              </p>
              <p className="text-[#6b7280] text-[10px] font-sans">
                Questions? <span className="text-[#c9a84c] underline cursor-pointer">support@thespaceholdings.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
