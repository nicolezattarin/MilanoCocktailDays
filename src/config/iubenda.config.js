/**
 * Configurazione iubenda Cookie Solution per MCD
 *
 * SETUP IUBENDA:
 * 1. Vai su iubenda.com → crea account
 * 2. Crea Privacy Policy (includi: Google Analytics,
 *    Facebook Pixel, Google Tag Manager, Tally.so)
 * 3. Crea Cookie Policy collegata alla Privacy Policy
 * 4. Attiva Cookie Solution → scegli "GDPR + CCPA"
 * 5. Copia Site ID e Cookie Policy ID
 * 6. Nel pannello CS → Integrations → Google Tag Manager
 *    Attiva il blocco automatico di GTM
 * 7. Sostituisci i placeholder in BaseLayout.astro
 * 8. Aggiorna gli href dei link legali in Footer.astro
 */

export const iubendaConfig = {
  siteId: null,         // es: 1234567
  cookiePolicyId: null, // es: 89012345
  lang: 'it',

  banner: {
    position: 'bottom',
    backgroundColor: '#1A1410',
    textColor: '#B8AC9A',
    acceptButtonColor: '#C4850D',
    acceptButtonCaptionColor: '#1A1410',
    customizeButtonColor: '#231C19',
    customizeButtonCaptionColor: '#B8AC9A',
    content: 'Utilizziamo cookie per migliorare la tua esperienza su Milan Cocktail Days.',
    acceptButtonCaption: 'Accetta',
    customizeButtonCaption: 'Preferenze',
  },

  // Blocca GTM finché non c'è consenso esplicito
  googleTagManagerConsentMode: 'advanced',

  // Categorie consenso — mappare come variabili in GTM
  purposes: {
    analytics: 2,  // GA4
    marketing: 5,  // Facebook Pixel
  },
};
