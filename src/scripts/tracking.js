/**
 * MCW — DataLayer Events Reference
 * Da configurare come trigger personalizzati in GTM.
 * NON includere direttamente nelle pagine Astro —
 * questo file è documentazione per la configurazione GTM.
 */

// Evento: click CTA iscrizione
// Trigger su .cta-iscrizione → /contatti
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'cta_click',
  event_category: 'engagement',
  event_label: 'iscrizione',
  page_location: window.location.href,
});

// Evento: visualizzazione pagina festival
window.dataLayer.push({
  event: 'page_view',
  page_title: 'Il Festival',
  page_location: window.location.href,
});

// Evento: click "Diventa partner" (.cta-partner)
window.dataLayer.push({
  event: 'partner_inquiry',
  event_category: 'b2b',
  event_label: 'diventa_partner',
});

// Evento: click newsletter (.cta-newsletter)
window.dataLayer.push({
  event: 'newsletter_signup',
  event_category: 'engagement',
  event_label: 'aggiornamenti',
});

// Evento: click Pass Festival (.cta-pass-festival)
window.dataLayer.push({
  event: 'cta_click',
  event_category: 'conversion',
  event_label: 'pass_festival',
});

// Evento: click Pass VIP (.cta-pass-vip)
window.dataLayer.push({
  event: 'cta_click',
  event_category: 'conversion',
  event_label: 'pass_vip',
});

// Evento: scroll 50% pagina
// Da configurare in GTM con trigger Scroll Depth > 50%
window.dataLayer.push({
  event: 'scroll_depth',
  scroll_threshold: 50,
  page_location: window.location.href,
});
