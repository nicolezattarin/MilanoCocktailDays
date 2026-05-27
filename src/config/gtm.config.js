/**
 * Configurazione Google Tag Manager per MCD
 *
 * SETUP GTM:
 * 1. Vai su tagmanager.google.com → crea account "MCD"
 * 2. Crea container "milanococktaildays.it" → Web
 * 3. Copia GTM-XXXXXXX ID
 * 4. Sostituisci INSERIRE_GTM_ID in BaseLayout.astro
 *
 * TAG DA CREARE IN GTM:
 *
 * TAG 1 — Google Analytics 4
 *   Tipo: Google Analytics: GA4 Configuration
 *   Measurement ID: G-XXXXXXXXXX (da GA4)
 *   Trigger: Consent Initialization - All Pages
 *            + condizione: analytics_storage = granted
 *
 * TAG 2 — Facebook Pixel
 *   Tipo: Custom HTML
 *   Trigger: Consent Initialization - All Pages
 *            + condizione: ad_storage = granted
 *   HTML: snippet fbq('init', 'INSERIRE_PIXEL_ID') + fbq('track', 'PageView')
 *
 * TRIGGER DA CREARE IN GTM:
 *
 * TRIGGER 1 — CTA Iscrizione Click
 *   Tipo: Click - All Elements
 *   Condizione: Click Classes contiene "cta-iscrizione"
 *
 * TRIGGER 2 — CTA Partner Click
 *   Tipo: Click - All Elements
 *   Condizione: Click Classes contiene "cta-partner"
 *
 * TRIGGER 3 — CTA Newsletter Click
 *   Tipo: Click - All Elements
 *   Condizione: Click Classes contiene "cta-newsletter"
 *
 * TRIGGER 4 — Pass Festival Click
 *   Tipo: Click - All Elements
 *   Condizione: Click Classes contiene "cta-pass-festival"
 *
 * TRIGGER 5 — Pass VIP Click
 *   Tipo: Click - All Elements
 *   Condizione: Click Classes contiene "cta-pass-vip"
 *
 * TRIGGER 6 — Scroll 50%
 *   Tipo: Scroll Depth
 *   Verticale: 50%
 *
 * VARIABILI DA CREARE IN GTM:
 *   - Page Path (built-in)
 *   - Click URL (built-in)
 *   - Click Classes (built-in)
 *   - Consent State Analytics (Custom JS → analytics_storage)
 *   - Consent State Marketing (Custom JS → ad_storage)
 */

export const gtmConfig = {
  containerId: null,      // es: GTM-XXXXXXX
  ga4MeasurementId: null, // es: G-XXXXXXXXXX
  fbPixelId: null,        // es: 1234567890123
};
