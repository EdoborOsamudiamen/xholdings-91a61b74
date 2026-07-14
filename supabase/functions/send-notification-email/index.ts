// @ts-nocheck
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, prefer, x-supabase-client, accept, accept-language, x-requested-with',
  'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
};

const BRAND_NAME = 'TheSpaceHoldings';
const BRAND_COLOR = '#c9a84c';
const DARK_BG = '#070b14';
const CARD_BG = '#0a0f1c';

function buildEmailHtml(subject: string, headline: string, bodyHtml: string, fromEmail: string) {
  return '<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8" /><title>' + subject + '</title></head>\n<body style="margin:0;padding:0;background:' + DARK_BG + ';font-family:\'Segoe UI\',Arial,sans-serif;">\n  <table width="100%" cellpadding="0" cellspacing="0" style="background:' + DARK_BG + ';padding:40px 16px;">\n    <tr><td align="center">\n      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">\n        <tr><td style="background:' + CARD_BG + ';border-radius:8px 8px 0 0;padding:28px 36px;border-bottom:1px solid #ffffff10;text-align:center;">\n          <div style="display:inline-block;background:' + BRAND_COLOR + '22;border:1px solid ' + BRAND_COLOR + '44;border-radius:4px;padding:6px 18px;margin-bottom:16px;">\n            <span style="color:' + BRAND_COLOR + ';font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;">' + BRAND_NAME + '</span>\n          </div>\n          <h1 style="color:#ffffff;font-size:20px;font-weight:300;margin:0;">' + headline + '</h1>\n        </td></tr>\n        <tr><td style="background:' + CARD_BG + ';padding:28px 36px;">' + bodyHtml + '\n          <div style="text-align:center;margin-top:28px;">\n            <a href="https://thespaceholdings.com/dashboard" style="display:inline-block;background:' + BRAND_COLOR + ';color:' + DARK_BG + ';text-decoration:none;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:13px 32px;border-radius:4px;">Go to Dashboard</a>\n          </div>\n        </td></tr>\n        <tr><td style="background:#070b14;border-radius:0 0 8px 8px;padding:20px 36px;text-align:center;border-top:1px solid #ffffff08;">\n          <p style="color:#4b5563;font-size:11px;margin:0;letter-spacing:1px;text-transform:uppercase;">Automated message from ' + BRAND_NAME + ' &mdash; Do not reply</p>\n        </td></tr>\n      </table>\n    </td></tr>\n  </table>\n</body></html>';
}

function badge(color: string, text: string) {
  return '<span style="display:inline-block;background:' + color + '22;color:' + color + ';border:1px solid ' + color + '44;border-radius:4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:3px 10px;">' + text + '</span>';
}
function bigNum(val: string, color: string) {
  return '<div style="font-size:30px;font-weight:300;color:' + color + ';font-family:\'Courier New\',monospace;margin:12px 0;">' + val + '</div>';
}
function infoTable(rows: [string, string][]) {
  return '<table width="100%" style="border-collapse:collapse;background:#070b14;border-radius:6px;padding:14px;margin:16px 0;">' + rows.map((r) => '<tr><td style="color:#6b7280;font-size:12px;padding:5px 14px;">' + r[0] + '</td><td style="color:#ffffff;font-size:12px;font-weight:600;text-align:right;padding:5px 14px;">' + r[1] + '</td></tr>').join('') + '</table>';
}
const divider = '<hr style="border:none;border-top:1px solid #ffffff0d;margin:20px 0;"/>';
const helpLine = '<p style="color:#6b7280;font-size:12px;margin:0;">Questions? <a href="mailto:support@thespaceholdings.com" style="color:' + BRAND_COLOR + ';">support@thespaceholdings.com</a></p>';

function buildBody(type: string, data: Record<string,any>) {
  const name = data.full_name || (data.email||'').split('@')[0] || 'Valued Client';
  const amt = data.amount ? '$' + Number(data.amount).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}) : '';
  const greet = '<p style="color:#9ca3af;font-size:14px;margin:0 0 20px;">Hello <strong style="color:#fff;">' + name + '</strong>,</p>';
  const reasonBox = (r: string) => '<div style="background:#ef444412;border:1px solid #ef444430;border-radius:6px;padding:14px;margin:14px 0;"><p style="color:#ef4444;font-size:13px;margin:0;"><strong>Reason:</strong> ' + r + '</p></div>';

  switch(type) {
    case 'deposit-approved': return {
      subject: '✅ Deposit Approved — Balance Credited',
      headline: 'Deposit Approved',
      body: greet + badge('#00d4aa','Approved') + ' ' + badge(BRAND_COLOR,'Deposit') + '<br/>' + bigNum(amt,'#00d4aa') + '<p style="color:#9ca3af;font-size:14px;">Your deposit has been verified and <strong style="color:#00d4aa;">credited to your account</strong>.</p>' + infoTable([['Amount Credited',amt],['Status','Approved ✓'],['Processing','Instant']]) + divider + helpLine
    };
    case 'deposit-rejected': return {
      subject: '❌ Deposit Rejected — Action Required',
      headline: 'Deposit Not Approved',
      body: greet + badge('#ef4444','Rejected') + ' ' + badge(BRAND_COLOR,'Deposit') + '<br/>' + bigNum(amt,'#ef4444') + '<p style="color:#9ca3af;font-size:14px;">Your deposit of <strong>' + amt + '</strong> was not approved.</p>' + (data.reason ? reasonBox(data.reason) : '') + '<p style="color:#9ca3af;font-size:13px;">Please re-submit or contact support.</p>' + divider + helpLine
    };
    case 'withdrawal-approved': return {
      subject: '💸 Withdrawal Sent — Funds Dispatched',
      headline: 'Withdrawal Processed',
      body: greet + badge('#00d4aa','Sent') + ' ' + badge(BRAND_COLOR,'Withdrawal') + '<br/>' + bigNum(amt,'#00d4aa') + '<p style="color:#9ca3af;font-size:14px;">Your withdrawal of <strong style="color:#00d4aa;">' + amt + '</strong> has been <strong style="color:#fff;">dispatched</strong>. Allow up to 24 hours for on-chain confirmation.</p>' + infoTable([['Amount Sent',amt],['Status','Dispatched ✓'],['ETA','Up to 24 hours']]) + divider + helpLine
    };
    case 'withdrawal-rejected': return {
      subject: '❌ Withdrawal Rejected — Funds Returned',
      headline: 'Withdrawal Not Processed',
      body: greet + badge('#ef4444','Rejected') + ' ' + badge(BRAND_COLOR,'Withdrawal') + '<br/>' + bigNum(amt,'#ef4444') + '<p style="color:#9ca3af;font-size:14px;">Your withdrawal of <strong>' + amt + '</strong> was not processed. Your funds remain safe.</p>' + (data.reason ? reasonBox(data.reason) : '') + '<p style="color:#9ca3af;font-size:13px;">Contact support if you think this is an error.</p>' + divider + helpLine
    };
    case 'kyc-approved': return {
      subject: '🎉 KYC Verified — Full Access Unlocked',
      headline: 'Identity Verified',
      body: greet + badge('#00d4aa','Verified') + ' ' + badge(BRAND_COLOR,'KYC') + '<br/><div style="font-size:40px;text-align:center;margin:16px 0;">🎉</div><p style="color:#9ca3af;font-size:14px;">Congratulations! Your identity has been <strong style="color:#00d4aa;">successfully verified</strong>. Your account now has full access:</p><ul style="color:#9ca3af;font-size:13px;line-height:2;padding-left:20px;"><li>✅ Withdrawals unlocked</li><li>✅ Full platform features</li><li>✅ Verified account badge</li></ul>' + divider + helpLine
    };
    case 'kyc-rejected': return {
      subject: '❌ KYC Rejected — Re-submission Required',
      headline: 'Identity Verification Failed',
      body: greet + badge('#ef4444','Rejected') + ' ' + badge(BRAND_COLOR,'KYC') + '<br/><p style="color:#9ca3af;font-size:14px;">Your identity verification was not approved. Please review the reason and re-submit your documents.</p>' + (data.reason ? reasonBox(data.reason) : '') + '<p style="color:#9ca3af;font-size:13px;">Visit the <strong style="color:#fff;">Profile</strong> tab in your dashboard to re-submit.</p>' + divider + helpLine
    };
    case 'withdrawal-verification': return {
      subject: '🔒 Withdrawal Verification Code',
      headline: 'Confirm Your Withdrawal',
      body: greet + badge(BRAND_COLOR,'Verification') + ' ' + badge('#00d4aa','Withdrawal') + '<br/><p style="color:#9ca3af;font-size:14px;">Use the following verification code to authorize your withdrawal of <strong style="color:#fff;">' + amt + '</strong>:</p><div style="background:#070b14;border:1px solid ' + BRAND_COLOR + '33;border-radius:6px;padding:24px;margin:20px 0;text-align:center;"><div style="font-size:36px;font-weight:700;color:' + BRAND_COLOR + ';letter-spacing:6px;font-family:\'Courier New\',monospace;margin:10px 0;">' + data.code + '</div><p style="color:#6b7280;font-size:11px;margin:12px 0 0;">This code is valid for 10 minutes. If you did not request this withdrawal, please secure your account immediately.</p></div>' + divider + helpLine
    };
    case 'balance-credited': {
      const cat = (data.category||'Credit').toUpperCase();
      const isProfit = cat==='PROFIT', isBonus = cat==='BONUS';
      const accent = isProfit ? '#00d4aa' : isBonus ? '#b088f5' : BRAND_COLOR;
      const sign = data.direction === 'credit' ? '+' : '-';
      return {
        subject: '💰 ' + cat + ' ' + (data.direction==='credit'?'Credited':'Debited') + ' — ' + amt,
        headline: cat + ' ' + (data.direction==='credit'?'Added':'Adjusted'),
        body: greet + badge(accent,cat) + ' ' + badge(BRAND_COLOR,data.direction==='credit'?'Credit':'Debit') + '<br/>' + bigNum(sign+amt,accent) + '<p style="color:#9ca3af;font-size:14px;">A <strong style="color:' + accent + ';">' + cat.toLowerCase() + '</strong> of <strong style="color:#fff;">' + sign+amt + '</strong> has been ' + (data.direction==='credit'?'credited to':'debited from') + ' your account.</p><p style="color:#9ca3af;font-size:13px;">Log in to view your updated balance.</p>' + divider + helpLine
      };
    }
    case 'custom': return {
      subject: data.subject || 'Notification — ' + BRAND_NAME,
      headline: data.headline || 'Account Update',
      body: greet + '<p style="color:#9ca3af;font-size:14px;line-height:1.6;margin-bottom:20px;">' + (data.body || '').replace(/\n/g, '<br/>') + '</p>' + divider + helpLine
    };
    default: return { subject: 'Account Notification', headline: 'Account Update', body: '<p style="color:#9ca3af;">Your account has been updated.</p>' };
  }
}

serve(async (req: any) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') ?? '';
  const FROM_EMAIL = Deno.env.get('FROM_EMAIL') ?? 'noreply@thespaceholdings.com';
  
  try {
    if (!RESEND_API_KEY) {
      console.warn('[send-notification-email] RESEND_API_KEY not set — skipping');
      return new Response(JSON.stringify({ ok: false, reason: 'no_api_key' }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    const { to, type, data = {} } = await req.json();
    if (!to || !type) return new Response(JSON.stringify({ error: 'Missing to/type' }), { status: 400, headers: corsHeaders });

    const { subject, headline, body } = buildBody(type, { ...data, email: to });
    const html = buildEmailHtml(subject, headline, body, FROM_EMAIL);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 
        'Authorization': 'Bearer ' + RESEND_API_KEY, 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ from: FROM_EMAIL, to: [to], subject, html }),
    });
    const result = await res.json();
    return new Response(JSON.stringify({ ok: res.ok, resend: result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: res.ok ? 200 : 500,
    });
  } catch (err) {
    console.error('[send-notification-email]', err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: corsHeaders });
  }
});
