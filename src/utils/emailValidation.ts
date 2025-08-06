// Common spam and disposable email domains to block
const SPAM_DOMAINS = [
  // Disposable email services
  'mailinator.com',
  '10minutemail.com',
  'tempmail.org',
  'guerrillamail.com',
  'yopmail.com',
  'temp-mail.org',
  'throwaway.email',
  'maildrop.cc',
  'mailnesia.com',
  'trashmail.com',
  'getnada.com',
  'mailcatch.com',
  'sharklasers.com',
  'guerrillamailblock.com',
  'pokemail.net',
  'spam4.me',
  'tempail.com',
  'tempemail.net',
  'fakeinbox.com',
  'mailtemp.info',
  'dispostable.com',
  'emailondeck.com',
  'mytrashmail.com',
  'tempinbox.com',
  'mohmal.com',
  'anonymbox.com',
  'burnermail.io',
  'emailfake.com',
  'mintemail.com',
  'getairmail.com',
  'tempemailaddress.com',
  'emailsensei.com',
  'emaildrop.io',
  'tempr.email',
  'incognitomail.org',
  'tempmail.ninja',
  'rainmail.xyz',
  '33mail.com',
  'emailtemporar.ro',
  'emkei.cf',
  'tmails.net',
  'tempmailers.com',
];

export function isSpamEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  
  const domain = email.toLowerCase().split('@')[1];
  if (!domain) return false;
  
  return SPAM_DOMAINS.includes(domain);
}

export function validateBusinessEmail(email: string): string | null {
  if (isSpamEmail(email)) {
    return "Please use a business email address. Disposable email addresses are not allowed.";
  }
  return null;
}