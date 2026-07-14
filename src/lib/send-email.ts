import { supabase } from './supabase';
import { sendEmailServerFn } from './api/email.functions';

/**
 * Sends a branded notification email via the server function (`sendEmailServerFn`)
 * or falls back to the client-side `send-notification-email` edge function.
 *
 * @param to       Recipient email address
 * @param type     Email template key (e.g. 'deposit-approved', 'kyc-rejected', 'balance-credited')
 * @param data     Extra data passed to the template (amount, full_name, reason, category, direction …)
 */
export async function sendNotificationEmail(
  to: string,
  type: string,
  data: Record<string, unknown> = {}
): Promise<void> {
  if (!to) return;
  try {
    const serverRes = await sendEmailServerFn({ data: { to, type, data } });
    if (serverRes?.ok) {
      return;
    }
    console.warn('[sendNotificationEmail] Server fn returned error, attempting fallback:', serverRes?.error);
  } catch (err) {
    console.warn('[sendNotificationEmail] Server fn call failed, falling back to client invocation:', err);
  }

  try {
    const { error } = await supabase.functions.invoke('send-notification-email', {
      body: { to, type, data },
    });
    if (error) {
      console.error('[sendNotificationEmail] Edge function error:', error);
    }
  } catch (err) {
    // Non-fatal — log and continue; the UI action already succeeded
    console.error('[sendNotificationEmail]', err);
  }
}
