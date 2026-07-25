/**
 * Utility helpers that normalize raw admin input (phone numbers, usernames)
 * into valid, clickable URLs for the public-facing footer.
 */

/**
 * Normalize a WhatsApp value → https://wa.me/62...
 * Accepts: "081234567890", "6281234567890", "https://wa.me/628..."
 */
export function formatWaUrl(val) {
    if (!val) return '';
    const trimmed = val.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    const digits = trimmed.replace(/[^0-9]/g, '');
    const normalized = digits.startsWith('0') ? '62' + digits.substring(1) : digits;
    return `https://wa.me/${normalized}`;
}

/**
 * Normalize a Facebook value → https://facebook.com/username
 * Accepts: "desabirowo", "facebook.com/desabirowo", "https://facebook.com/desabirowo"
 */
export function formatFacebookUrl(val) {
    if (!val) return '';
    const trimmed = val.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    if (trimmed.includes('facebook.com')) return `https://${trimmed}`;
    return `https://facebook.com/${trimmed}`;
}

/**
 * Normalize a YouTube value → https://youtube.com/@channel
 * Accepts: "desabirowo", "@desabirowo", "youtube.com/@desabirowo", "https://youtube.com/..."
 */
export function formatYoutubeUrl(val) {
    if (!val) return '';
    const trimmed = val.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    if (trimmed.includes('youtube.com')) return `https://${trimmed}`;
    const handle = trimmed.replace(/^@/, '');
    return `https://youtube.com/@${handle}`;
}

/**
 * Normalize an Email value → mailto:email
 */
export function formatMailtoUrl(val) {
    if (!val) return '';
    const trimmed = val.trim();
    if (trimmed.startsWith('mailto:')) return trimmed;
    return `mailto:${trimmed}`;
}
