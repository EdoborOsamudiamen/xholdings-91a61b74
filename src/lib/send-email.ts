import { supabase } from './supabase';

/**
 * Sends a branded notification email via the `send-notification-email` edge function.
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
    await supabase.functions.invoke('send-notification-email', {
      body: { to, type, data },
    });
  } catch (err) {
    // Non-fatal — log and continue; the UI action already succeeded
    console.error('[sendNotificationEmail]', err);
  }
}
