# Milano Cocktail Days — SEO/GEO Growth Plan

> **milanococktaildays.it** · SEO · GEO · Analytics · Presence · Content

---

## Fase 01 — Fondamenta Tecniche
*Astro config · Sitemap · Robots · hreflang · Noindex* · 5/7 completate

### ✅ astro.config.mjs — site: corretto
🔴 `CODE` · *Fatto*

Il campo site: è prerequisito per canonical URL, sitemap e og:url automatici. Già configurato con milanococktaildays.it.

---

### ✅ @astrojs/sitemap installato e filter /grazie attivo
🔴 `CODE` · *Fatto*

Genera sitemap-0.xml ad ogni build. Filter esclude /grazie/ e /grazie-partner/.

---

### ✅ public/robots.txt con Sitemap URL corretto
🔴 `CODE` · *Fatto*

Già presente. Punta a https://milanococktaildays.it/sitemap-index.xml.

---

### ✅ hreflang IT/EN su tutte le pagine
🔴 `SEO` · *Fatto*

Già implementato in BaseLayout.astro con getAlternateUrl() e alternates array.

---

### ✅ noindex + rimozione sitemap su /grazie/ e /grazie-partner/
🔴 `SEO` · *Fatto*

Verificato nel codebase: filter attivo in astro.config.mjs, noindex={true} nelle pagine grazie.

---

### ✅ og-default.jpg 1200×630px — logo inchiostro su sfondo brand
🟡 `CODE` · *Fatto*

JPG creato e deployato. Testare su Facebook Debugger per confermare preview.

→ [Testa su Facebook Debugger →](https://developers.facebook.com/tools/debug)

---

### ⬜ apple-touch-icon.png 180×180px
🔵 `CODE` · *Da fare*

PNG logo MCD su sfondo #1A1410 per home screen iOS.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days.
The file public/apple-touch-icon.png does not exist yet.

Please:
1. Create a script scripts/generate-icons.js using Sharp
   that generates public/apple-touch-icon.png at 180×180px with:
   - Background: as in og logo
   - Centered panna logo 1
2. Run: node scripts/generate-icons.js
3. Check if src/layouts/BaseLayout.astro has <link rel="apple-touch-icon">.
   If not, add: <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
4. Run: npm run build — confirm no errors.
Show all files created or modified.
```

</details>

---

## Fase 02 — On-Page SEO
*Meta · OG · Canonical · Heading · Alt text* · 4/6 completate

### ✅ SEO component con title, description, canonical, OG, Twitter
🔴 `SEO` · *Fatto*

Già in BaseLayout.astro con fullTitle, canonical, ogImageAbsolute, ogLocale. Completo.

---

### ✅ lang="it" IT / lang="en" EN gestito automaticamente
🔴 `SEO` · *Fatto*

BaseLayout già gestisce lang da pathname. Nessuna azione richiesta.

---

### ✅ Title univoco ogni pagina con keyword + "Milano Cocktail Days 2027"
🔴 `SEO` · *Fatto*

fullTitle in BaseLayout già applica il pattern. Verificare le singole pagine.

---

### 🔄 Description 150–160 caratteri specifica per ogni pagina
🟡 `SEO` · *In corso*

Verifica che sponsor.astro, bar.astro, festival.astro abbiano description reale non generica.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).

Please audit every page in src/pages/ (including /en/ subfolder) for SEO meta descriptions:

1. Open each .astro page and check the description prop passed to BaseLayout.
2. For any page with a generic, too short (<100 chars), or missing description, rewrite it:
   - Target: 150–160 characters
   - Include: "Milano Cocktail Days", a keyword relevant to that page, and "Milano"
   - Make it compelling (invites the click, not just a summary)
   - Italian for IT pages, English for EN pages

Target descriptions per page:
- index: festival diffuso cocktail bar Milano, 10 giorni aprile-maggio 2027, pass unico
- festival: come funziona il festival, 30 bar, cocktail a €6, pass festival e VIP
- bar: i cocktail bar partner di Milano Cocktail Days, Navigli Brera Isola
- sponsor: partnership per brand beverage tech mobility, pubblico premium 25-40 Milano
- contatti: acquista il pass Milano Cocktail Days, lista d'attesa, domande frequenti

3. Show a table of: page / old description / new description / character count.
4. Apply all changes.
```

</details>

---

### ✅ Alt text descrittivo IT su tutte le immagini
🟡 `SEO` · *Fatto*

Alt vuoti o generici penalizzano SEO. Ogni img deve descrivere il contenuto con keyword naturali.

---

### ✅ width + height su tutti i `<img>` — elimina CLS layout shift
🟡 `SEO` · *Fatto*

Immagini senza dimensioni causano Cumulative Layout Shift. Verificare tutto il codebase.

---

## Fase 03 — Structured Data + AEO
*JSON-LD Event · FAQPage · Organization · Offers* · 3/5 completate

### ✅ JSON-LD Event in BaseLayout con pageType="event"
🔴 `GEO` · *Fatto*

Già implementato. name, organizer (Luca Ferrara + Nicole Zattarin), location Milano, url.

---

### ✅ JSON-LD FAQPage su index, bar, sponsor
🔴 `GEO` · *Fatto*

Già implementato con le FAQ esistenti di ogni pagina.

---

### ✅ offers nel JSON-LD Event
🟡 `GEO` · *Fatto*

Già presente in BaseLayout.astro. Aggiungere price: "6" e priceCurrency: "EUR" per rich results completi.

<details>
<summary>📋 Prompt Claude Code</summary>

```
In src/layouts/BaseLayout.astro, inside the jsonLdEvent offers object, add:
  price: '6',
  priceCurrency: 'EUR',

The offers object should become:
{
  '@type': 'Offer',
  name: 'Pass Festival',
  price: '6',
  priceCurrency: 'EUR',
  availability: 'https://schema.org/InStock',
  validFrom: '2026-01-01',
  url: `${siteUrl}/contatti`,
}

Run: npm run build — confirm no errors.
```

</details>

---

### ⬜ Compila startDate e endDate reali nel JSON-LD Event
🔴 `GEO` · *Da fare*

Attualmente ha placeholder 2027-04-25/2027-05-04. Aggiornare quando le date sono confermate.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).

Please update startDate and endDate in the jsonLdEvent object in src/layouts/BaseLayout.astro:
  startDate: "2027-[MM]-[DD]T18:00:00+02:00"
  endDate: "2027-[MM]-[DD]T23:59:00+02:00"

Use the real confirmed dates. Add a comment: // UPDATE WHEN DATES CONFIRMED
Run: npm run build — confirm no errors.
```

</details>

---

### ⏳ Valida JSON-LD su Rich Results Test — nessun errore
🔴 `GEO` · *In attesa*

Ogni errore nel structured data impedisce i rich results su Google.

→ [Apri Rich Results Test →](https://search.google.com/test/rich-results)

---

## Fase 04 — Google Search Console
*Indicizzazione · Performance · Core Web Vitals · Errori* · 3/7 completate

### ✅ Ownership verificata via TXT record
🔴 `ANALYTICS` · *Fatto*

Dominio milanococktaildays.it confermato come proprietà.

---

### ✅ Sitemap inviata — sitemap-index.xml
🔴 `ANALYTICS` · *Fatto*

Inviata con 11 URL. IT + EN per tutte le pagine principali.

---

### ✅ URL Inspection — indicizzazione richiesta per pagine principali
🔴 `ANALYTICS` · *Fatto*

Richiesta per /, /bar/, /festival/, /sponsor/, /contatti/ + versioni /en/.

---

### ⏳ Controlla Coverage report — nessun errore 4xx/5xx
🔴 `ANALYTICS` · *In attesa*

Search Console → Copertura → verifica zero errori rossi. Qualsiasi 404 va risolto.

→ [Apri Search Console →](https://search.google.com/search-console)

---

### ⏳ Verifica site:milanococktaildays.it su Google (dopo 7gg)
🔴 `ANALYTICS` · *In attesa*

Se non appare nulla dopo 7gg dalla richiesta, ri-invia la sitemap e controlla robots.txt.

---

### ⬜ Collega Search Console a GA4
🟡 `ANALYTICS` · *Fatto*

GA4 → Admin → Search Console Links. Vedi quali query portano click e il comportamento post-landing.

*Nota: fare DOPO che GA4 è configurato con il Measurement ID G-SC0R1MQGH9.*

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task is done entirely in Google product dashboards — no code changes needed.

Steps to link Search Console to GA4:
1. Go to https://analytics.google.com
2. Admin → Property Settings → Search Console Links
3. Click "Link" → select your milanococktaildays.it Search Console property
4. Choose the GA4 data stream for milanococktaildays.it
5. Confirm.

After linking, in GA4 you'll find Search Console data under:
Reports → Acquisition → Search Console → Queries

This shows: which Google queries bring users, CTR, impressions, avg position.
No code changes needed in the Astro project.
```

</details>

---

### ⏳ Monitora Search Performance settimanalmente
🟡 `ANALYTICS` · *In attesa*

Query, impressioni, CTR, posizione media. Disponibile dopo ~4 settimane di dati.

---

## Fase 05 — Meta Pixel — Setup e Utilizzo
*GTM Custom HTML · Events · Audiences · Retargeting* · 1/7 completate

### ✅ GTM-KRJ9XDPV attivo nel codebase con lazy loading
🔴 `ANALYTICS` · *Fatto*

GTM container hardcoded in BaseLayout.astro. Snippet noscript nel body. Caricamento lazy su scroll/click/keydown/touchstart o dopo 5s. Funzionante.

---

### ⬜ Aggiungi iubenda Site ID reale in BaseLayout
🔴 `LEGAL` · *Da fare*

BaseLayout.astro ha `siteId: "YOUR_SITE_ID"` come placeholder. Il cookiePolicyId 47664786 è già presente. Manca solo il siteId.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
In src/layouts/BaseLayout.astro the iubenda config has:
  siteId: "YOUR_SITE_ID"

Please replace "YOUR_SITE_ID" with the real iubenda Site ID: [INSERISCI_SITE_ID]

Also open src/components/Footer.astro and find the Privacy Policy and Cookie Policy links.
Replace href="#" placeholders with:
- Privacy: https://www.iubenda.com/privacy-policy/[INSERISCI_SITE_ID]
- Cookies: https://www.iubenda.com/privacy-policy/[INSERISCI_SITE_ID]/cookie-policy

Run: npm run build — confirm no errors.
Show all files modified.
```

</details>

---

### ⬜ Configura Meta Pixel in GTM come Custom HTML tag
🔴 `ANALYTICS` · *Fatto*

Il Pixel NON va nel codice Astro — va in GTM con trigger consenso ad_storage. GTM-KRJ9XDPV è già attivo sul sito.

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task is done entirely inside Google Tag Manager (tagmanager.google.com) — NO code changes in Astro.

The GTM container GTM-KRJ9XDPV is already live on milanococktaildays.it.
Your Facebook Pixel ID is: [INSERISCI_PIXEL_ID]

Steps in GTM:

1. VARIABLE — Consent State Marketing:
   Variables → New → Custom JavaScript
   Name: "Consent - ad_storage"
   Code: function(){ return window.dataLayer && window.dataLayer.some(function(e){ return e['ad_storage']==='granted'; }); }

2. TRIGGER — Consent Marketing Granted:
   Triggers → New → Custom Event
   Event name: iubenda_consent_given
   Condition: Consent - ad_storage equals true

3. TAG — Facebook Pixel:
   Tags → New → Custom HTML
   Name: "Facebook Pixel - Base"
   HTML: (paste the standard fbq snippet with your Pixel ID)
   Trigger: Consent Marketing Granted (created above)

4. PUBLISH the container (Submit → Publish).

After publishing: install Meta Pixel Helper Chrome extension and visit milanococktaildays.it.
Accept cookies → should see green PageView event.
```

</details>

---

### ⬜ Configura evento Lead per form iscrizione
🔴 `ANALYTICS` · *Da fare*

Traccia compilazione form Tally. Si attiva su redirect a /grazie. KPI principale pre-vendita.
#### fatto la parte astro

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task requires GTM configuration + a small Astro code check.

PART 1 — Check Astro code:
I'm working on an Astro 6 site for Milano Cocktail Days.
Please check src/pages/grazie.astro — does it have a dataLayer push for form submission?
If not, add inside a <script> tag:
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'form_submit', form_type: 'iscrizione_lista' });
Show the change made.

PART 2 — GTM:
In GTM container GTM-KRJ9XDPV:

1. TRIGGER — Grazie Page View:
   Triggers → New → Page View
   Condition: Page Path equals /grazie/
   Name: "Page - /grazie/"

2. TAG — Facebook Lead Event:
   Tags → New → Custom HTML
   Name: "Facebook Pixel - Lead"
   HTML: <script>fbq('track', 'Lead');</script>
   Trigger: "Page - /grazie/"

3. TAG — GA4 Event - form_submit:
   Tags → New → Google Analytics: GA4 Event
   Event name: form_submit
   Parameters: form_type = iscrizione_lista
   Trigger: "Page - /grazie/"

4. PUBLISH.
```

</details>

---

### ⬜ Configura evento ViewContent su /festival/
🟡 `ANALYTICS` · *Fatto*

fbq ViewContent + GA4 event per segmentare interesse al festival.

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task is done entirely in Google Tag Manager — no Astro code changes needed.

In GTM container GTM-KRJ9XDPV:

1. TRIGGER — Festival Page View:
   Triggers → New → Page View
   Condition: Page Path equals /festival/
   Name: "Page - /festival/"

2. TAG — Facebook ViewContent:
   Tags → New → Custom HTML
   Name: "Facebook Pixel - ViewContent Festival"
   HTML: fbq('track', 'ViewContent', { content_name: 'Festival', content_type: 'event' });
   Trigger: "Page - /festival/"

3. TAG — GA4 Event - page_interest:
   Tags → New → GA4 Event
   Event name: page_interest
   Parameters: page_section = festival
   Trigger: "Page - /festival/"

4. PUBLISH.
```

</details>

---

### ⬜ Crea Custom Audience "Visitatori sito 30gg" su Meta
🟡 `SOCIAL` · *Fatto*

Meta Business → Audiences → Custom Audience → Website Traffic. Per retargeting vendita pass.

→ [Crea Audience →](https://business.facebook.com/audiences)

---

### ⬜ Testa Pixel con Meta Pixel Helper — PageView verde
🔴 `ANALYTICS` · *Fatto*

Installa estensione Chrome, accetta cookie sul sito, verifica PageView verde.

---

## Fase 06 — Google Analytics 4 — Setup e Utilizzo
*Proprietà · Events · Conversioni · Reports* · 1/6 completate

### ✅ Proprietà GA4 creata — Measurement ID G-SC0R1MQGH9
🔴 `ANALYTICS` · *Fatto*

Proprietà "Milano Cocktail Days" già creata su analytics.google.com. Measurement ID: **G-SC0R1MQGH9**.

---

### ⬜ Aggiungi tag GA4 in GTM — usa G-SC0R1MQGH9
🔴 `ANALYTICS` · *Fatto*

**Questo è il prossimo passo concreto.** GTM-KRJ9XDPV è attivo, GA4 è pronto. Manca il collegamento tra i due in GTM.

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task is done entirely in Google Tag Manager — no Astro code changes needed.
GA4 Measurement ID: G-SC0R1MQGH9
GTM Container: GTM-KRJ9XDPV (already live on milanococktaildays.it)

Steps in GTM (tagmanager.google.com):

1. VARIABLE — Consent State Analytics:
   Variables → New → Custom JavaScript
   Name: "Consent - analytics_storage"
   Code: function(){ return window.dataLayer && window.dataLayer.some(function(e){ return e['analytics_storage']==='granted'; }); }

2. TRIGGER — Consent Analytics Granted:
   Triggers → New → Custom Event
   Event name: iubenda_consent_given
   Condition: Consent - analytics_storage equals true
   Name: "Consent - Analytics Granted"

3. TAG — GA4 Configuration:
   Tags → New → Google Analytics: GA4 Configuration
   Measurement ID: G-SC0R1MQGH9
   Trigger: Consent Initialization - All Pages
   Additional trigger condition: Consent - analytics_storage equals true
   Name: "GA4 - Configuration"

4. PUBLISH (Submit → Publish).

After publishing: open GA4 → Reports → Realtime.
Visit milanococktaildays.it, accept analytics cookies.
You should see 1 active user in Realtime within 30 seconds.
```

</details>

---

### ⬜ Configura iscrizione_lista come conversione GA4
🔴 `ANALYTICS` · *Da fare*

In GTM: trigger su .cta-iscrizione click → GA4 event. In GA4: marca come Key Event.

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task requires both GTM configuration and a small Astro code check.

PART 1 — Check Astro code (Claude Code task):
I'm working on an Astro 6 site for Milano Cocktail Days.
Please check src/pages/index.astro and src/pages/contatti.astro for the waitlist/signup CTA button.
Verify the button has the CSS class "cta-iscrizione" (as documented in src/config/gtm.config.js).
If missing, add it. Show any changes made.

PART 2 — GTM (GTM-KRJ9XDPV):
1. TRIGGER — CTA Iscrizione Click:
   Triggers → New → Click - All Elements
   Condition: Click Classes contains "cta-iscrizione"
   Name: "Click - CTA Iscrizione"

2. TAG — GA4 Event iscrizione_lista:
   Tags → New → GA4 Event
   Event name: iscrizione_lista
   Parameters: cta_location = {{Page Path}}
   Trigger: "Click - CTA Iscrizione"

3. PUBLISH.

PART 3 — GA4:
Admin → Events → find "iscrizione_lista" → toggle "Mark as key event".
```

</details>

---

### ⬜ Configura partner_inquiry come conversione B2B
🔴 `ANALYTICS` · *Da fare*

Trigger su .cta-partner click → GA4 event. Misura interesse sponsor da /sponsor/.

<details>
<summary>📋 Prompt Claude Code</summary>

```
PART 1 — Check Astro code:
I'm working on an Astro 6 site for Milano Cocktail Days.
Please check src/pages/sponsor.astro for the "Parliamone" CTA button.
Verify it has the CSS class "cta-partner" (documented in src/config/gtm.config.js).
If missing, add it. Show any changes made.

PART 2 — GTM (GTM-KRJ9XDPV):
1. TRIGGER — CTA Partner Click:
   Click - All Elements → Click Classes contains "cta-partner"

2. TAG — GA4 Event partner_inquiry:
   GA4 Event → event name: partner_inquiry
   Parameters: inquiry_source = sponsor_page
   Trigger: CTA Partner Click

3. PUBLISH.

In GA4 → mark "partner_inquiry" as a Key Event.
```

</details>

---

### ⬜ Scroll Depth 50% — misura engagement contenuto
🟡 `ANALYTICS` · *Fatto*

GTM Trigger Scroll Depth → GA4 event. Capisce se gli utenti leggono /festival/ fino in fondo.

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task is done entirely in GTM — no Astro code changes needed.

In GTM container GTM-KRJ9XDPV:

1. TRIGGER — Scroll Depth 50%:
   Triggers → New → Scroll Depth
   Vertical scroll depths: 50 (percent)
   Enable for: All Pages
   Name: "Scroll - 50%"

2. TAG — GA4 Event scroll_depth:
   Tags → New → GA4 Event
   Event name: scroll_depth
   Parameters: scroll_threshold = 50, page_path = {{Page Path}}
   Trigger: Scroll - 50%

3. PUBLISH.
```

</details>

---

### ⬜ Testa con GA4 DebugView dopo setup GTM
🔴 `ANALYTICS` · *Da fare*

GA4 → Configure → DebugView. Visita sito con ?gtm_debug=x, accetta cookie analytics. Verifica eventi in tempo reale.

---

## Fase 07 — GEO — Visibilità AI
*Gemini · ChatGPT · Perplexity · Google AI Overview* · 0/6 completate

### ⬜ Google Business Profile — crea profilo "Milano Cocktail Days"
🔴 `GEO` · *Fatto* --> In verifica da Google

Segnale primario Gemini per eventi locali. Categoria: Festival. URL sito. È la cosa più immediata per apparire su Gemini.

→ [Crea profilo →](https://business.google.com)

---

### ⬜ Wikidata — crea scheda entità Milano Cocktail Days
🔴 `GEO` · *Da fare*

wikidata.org. Proprietà: instance of recurring event, location Milano, organizer (Luca Ferrara, Nicole Zattarin), official website.

→ [Crea su Wikidata →](https://www.wikidata.org/wiki/Special:NewItem)

---

### ⬜ Eventbrite — pubblica evento pubblico 2027
🔴 `GEO` · *Da fare*

Fonte evento che i modelli AI citano per eventi italiani. Anche senza vendita biglietti online.

→ [Crea su Eventbrite →](https://www.eventbrite.it)

---

### ⬜ Facebook Events — crea evento pubblico con tutti i dettagli
🔴 `SOCIAL` · *Da fare*

Evento pubblico con descrizione completa, URL sito, categoria Festival.

---

### 🔄 Verifica contenuto testuale chi/cosa/dove/quando nel DOM
🔴 `GEO` · *In corso*

Date, organizzatori, quartieri devono essere testo HTML visibile — non solo immagini.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
For GEO (AI engine optimization), key event information must appear in real HTML text.

Please audit src/pages/index.astro and src/pages/festival.astro:

1. Check that the following appear in visible HTML text:
   ✓ Event name: "Milano Cocktail Days"
   ✓ City: "Milano"
   ✓ Neighbourhoods: "Navigli", "Brera", "Isola" (at least 2)
   ✓ Organizers: "Luca Ferrara" and "Nicole Zattarin"
   ✓ Duration: "10 giorni"
   ✓ Period: "aprile" and "maggio 2027"
   ✓ Concept: "30 bar" and "cocktail"

2. For any missing item, add it as visible text without changing the design.
3. Show a checklist of what was found and what was added.
```

</details>

---

### ⏳ Testa su Perplexity dopo 14gg da indicizzazione
🟡 `GEO` · *In attesa*

Cerca "Milano Cocktail Days 2027". Se Google ti mostra ma Perplexity no: problema di autorità dominio.

→ [Testa su Perplexity →](https://perplexity.ai)

---

## Fase 08 — Performance — Lighthouse
*Score attuale 62/100 · LCP 20.9s → target < 2.5s* · 0/4 completate

### ✅ Converti immagini in WebP/AVIF con Sharp — LCP CRITICO
🔴 `⚠ CRITICAL` · *fatto*

bar_photo1.jpg (3.19MB) deve diventare WebP/AVIF a più risoluzioni. Risparmio stimato 6.333 KiB.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
Lighthouse reports LCP of 20.9s caused by large unoptimized images. This is CRITICAL.

Please:
1. Install Sharp: npm install sharp --save-dev
2. Create scripts/convert-images.js converting these images to WebP and AVIF at multiple sizes:

- bar_photo1.jpg → 430w, 500w, 1024w, 1920w
- Clear Wine Glass Photo.jpg → 378w, 756w, 1200w
- Szymon Fischer.jpg → 378w, 756w
- bartender_1.jpg → 424w, 848w

Output: bar_photo1-430.webp, bar_photo1-430.avif, etc. in public/images/

3. Run: node scripts/convert-images.js
4. Confirm all files exist and show sizes.
```

</details>

---

### ✅ Aggiorna `<picture>` tags con srcset WebP/AVIF
🔴 `CODE` · *fatto*

Dopo conversione immagini. Hero usa già fetchpriority="high" e loading="eager" — mantenere.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days.
Images have been converted to WebP/AVIF (run convert-images.js first).

Update all content images in src/pages/ and src/components/ to use <picture> with srcset.

For HERO (bar_photo1) — KEEP fetchpriority="high" loading="eager":
<picture class="hero-bg" aria-hidden="true">
  <source type="image/avif" srcset="/images/bar_photo1-430.avif 430w, /images/bar_photo1-500.avif 500w, /images/bar_photo1-1024.avif 1024w, /images/bar_photo1-1920.avif 1920w" sizes="100vw"/>
  <source type="image/webp" srcset="/images/bar_photo1-430.webp 430w, /images/bar_photo1-500.webp 500w, /images/bar_photo1-1024.webp 1024w, /images/bar_photo1-1920.webp 1920w" sizes="100vw"/>
  <img src="/images/bar_photo1.jpg" alt="" width="1920" height="1080" fetchpriority="high" loading="eager"/>
</picture>

For content images (below fold) — use loading="lazy".
Keep all existing classes, aria attributes, and alt text.
Show all files modified.
```

</details>

---

### ⬜ Attiva Vercel Analytics — Web Vitals da utenti reali
🟡 `ANALYTICS` · *Da fare*

Dashboard Vercel → Analytics → Enable. LCP, CLS, FID reali. Gratis su piano Hobby.

→ [Attiva su Vercel →](https://vercel.com/analytics)

---

### ✅ Re-run Lighthouse — target ≥90 dopo fix immagini

Le fix immagini da sole portano il score da 62 a ~85–90.

→ [Testa su PageSpeed →](https://pagespeed.web.dev)

---

## Fase 09 — Presenza Esterna — Link Building
*PR · Testate di settore · Backlink · Autorità dominio* · 0/3 completate

### ⬜ Comunicato stampa ottimizzato per testate food & drink
🔴 `CONTENT` · *Da fare*

Dissapore, Identità Golose, Bargiornale. Ogni backlink da DA alto vale molto per SEO e visibilità AI.

<details>
<summary>📋 Prompt Claude Code</summary>

```
Please write an Italian press release (comunicato stampa) optimized for SEO and AI visibility.

Event details:
- Name: Milano Cocktail Days
- Organizers: Luca Ferrara e Nicole Zattarin
- What: festival diffuso dei cocktail bar di Milano — 30 bar selezionati
- Duration: 10 giorni tra aprile e maggio 2027
- Concept: un solo pass per accedere a tutti i bar partner, cocktail signature a €6
- Target: appassionati di cocktail, non professionisti
- Neighborhoods: Navigli, Brera, Isola, Porta Romana e tutta Milano
- Website: https://milanococktaildays.it

Requirements:
- Length: 350–450 words
- Headline: includes "Milano Cocktail Days" and "Milano"
- First paragraph: who/what/where/when/why
- Quote from "Luca Ferrara, co-fondatore di Milano Cocktail Days"
- Quote from "Nicole Zattarin, co-fondatrice"
- Boilerplate: organizzatori, contatto email, URL
- Naturally include: "festival cocktail Milano", "cocktail bar Milano 2027", "Navigli", "Brera"

Also provide:
- 3 target publications with submission contact info
- Subject line for the pitch email
```

</details>

---

### ⬜ Articolo: "I migliori cocktail bar dei Navigli"
🔴 `CONTENT` · *Da fare*

Query con 2.400 ricerche/mese su Google IT. Porta traffico organico e costruisce autorità locale.

<details>
<summary>📋 Prompt Claude Code</summary>

```
Please write a long-form SEO article in Italian for the Milano Cocktail Days blog.

Title: "I migliori cocktail bar dei Navigli a Milano [2027]"
Target keyword: "cocktail bar Navigli Milano" (~2.400 searches/month)
Length: 900–1100 words
Tone: friendly, for cocktail enthusiasts not professionals

Structure:
1. Intro: why Navigli is Milan's cocktail capital (150 words)
2. 5–7 bar typologies (no specific names — describe dive bar, speakeasy, aperitivo bar, etc.)
3. Best time to visit
4. Natural mention: "Milano Cocktail Days è il festival che porta i migliori bar in un unico pass" + link to /
5. CTA to homepage

SEO: "cocktail bar Navigli Milano" in H1 and 3–4x in text.
Meta description suggestion (155 chars) at the end.
Format as ready-to-use HTML article body.
```

</details>

---

### ⬜ Articolo: "Milano da bere — i quartieri del cocktail"
🟡 `CONTENT` · *Da fare*

Contenuto evergreen. Intercetta "cocktail Milano" (4.400 ricerche/mese). Autorità locale.

<details>
<summary>📋 Prompt Claude Code</summary>

```
Please write a long-form Italian SEO article for the Milano Cocktail Days blog.

Title: "Milano da bere: la guida ai quartieri del cocktail [2027]"
Target keyword: "cocktail Milano" (~4.400 searches/month)
Length: 1000–1200 words

Structure:
1. Intro: Milano as Italy's cocktail capital
2. One H2 per neighbourhood: Navigli, Brera, Isola, Porta Romana, Centro/Duomo
3. Tips for a cocktail bar crawl evening
4. Mention: "Milano Cocktail Days trasforma questi quartieri in un unico festival diffuso" + link
5. CTA to waitlist

SEO: "cocktail Milano" in H1 and 4–5x naturally.
Meta description (155 chars) at the end.
Format as ready-to-use HTML article body.
```

</details>

---

## Fase 10 — Social e Blog
*Profili · UTM · Content calendar* · 0/4 completate

### ⬜ Crea sezione /blog/ o /news/ in Astro
🔴 `CODE` · *Da fare*

Google premia siti aggiornati. Astro Content Collections è perfetto per blog statici.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
Please add a blog/news section to the site.

1. Create src/content/config.ts — "blog" content collection:
   Fields: title (string), description (string), pubDate (date), slug (string), draft (boolean, default false)

2. Create src/pages/blog/index.astro:
   - Lists all non-draft posts in reverse chronological order
   - Uses BaseLayout with title "Blog | Milano Cocktail Days 2027"
   - Dark aesthetic matching existing design (--bg, --gold, --cream tokens)

3. Create src/pages/blog/[slug].astro — dynamic route for individual posts

4. Create src/content/blog/cocktail-bar-navigli.md as placeholder:
   - title: "I migliori cocktail bar dei Navigli a Milano"
   - description: "Guida ai cocktail bar dei Navigli, il quartiere più vivace di Milano."
   - pubDate: today's date
   - draft: false

5. Add "Blog" to Header.astro navigation (IT and EN).

6. Run: npm run build — confirm /blog/ is in sitemap-0.xml.
Show all files created or modified.
```

</details>

---

### ⬜ Profili social con nome esatto "Milano Cocktail Days"
🔴 `SOCIAL` · *Fatto*

Instagram, Facebook, LinkedIn. Nome identico su tutte le piattaforme = segnale entità AI.

---

### ⬜ Aggiorna link social reali in Footer e Contatti
🟡 `CODE` · *Da fare*

Footer.astro e contatti.astro hanno href="#" placeholder. Sostituire con URL reali.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
Social media links in footer and contacts page have placeholder href="#".

I have these real social profiles:
- Instagram: https://instagram.com/[INSERISCI_HANDLE]
- Facebook: https://facebook.com/[INSERISCI_HANDLE]
- LinkedIn: https://linkedin.com/company/[INSERISCI_HANDLE]

Please:
1. Open src/components/Footer.astro — replace href="#" with real URLs.
2. Open src/pages/contatti.astro — replace href="#" with real URLs.
3. Add rel="noopener noreferrer" target="_blank" to all external social links.
4. Run: npm run build — confirm no errors.
```

</details>

---

### ⬜ UTM parameters su link social → sito
🟡 `ANALYTICS` · *Da fare*

`?utm_source=instagram&utm_medium=social&utm_campaign=lancio` in tutti i link bio → homepage.

---

## 🛠 Tutti i Tool Utili

| Tool | Tipo | Descrizione | Stato |
|------|------|-------------|-------|
| 🔍 **Google Search Console** | SEO · Indexing | Query, impressioni, errori crawl, Core Web Vitals reali. | 🟢 Attivo |
| 📊 **Google Analytics 4** | Analytics | Measurement ID: G-SC0R1MQGH9. Tag GTM da configurare. | 🟡 Tag mancante in GTM |
| 🏷️ **Google Tag Manager** | Tag Management | GTM-KRJ9XDPV hardcoded in BaseLayout. Live e funzionante. | 🟢 Attivo |
| 📘 **Meta Pixel / Events Mgr** | Marketing · Retargeting | Traccia iscrizioni, viewcontent, crea audience per ads. | 🟡 Da configurare in GTM |
| ⚡ **Vercel Analytics** | Web Vitals | LCP, CLS, FID da utenti reali. Gratis su piano Hobby. | 🟡 Da attivare |
| 🚀 **PageSpeed Insights** | Performance | Lighthouse score. Attuale 62/100. Target ≥90 dopo fix immagini. | 🟢 Pronto |
| 🍪 **iubenda Cookie Solution** | GDPR · Compliance | cookiePolicyId 47664786 presente. siteId "YOUR_SITE_ID" da sostituire. | 🔴 siteId mancante |
| ✅ **Rich Results Test** | Structured Data | Valida JSON-LD Event e FAQPage. Usalo dopo ogni modifica schema. | 🟢 Pronto |
| 🔎 **Perplexity AI** | GEO Monitor | Test visibilità AI. Cerca "Milano Cocktail Days 2027" dopo 14gg. | 🔴 In attesa |
| 🗺️ **Google Business Profile** | GEO · Local | Segnale primario Gemini per eventi locali. Crea subito. | 🔴 Da creare |
| 📋 **Wikidata** | GEO · AI Entities | ChatGPT e Gemini leggono Wikidata. Crea scheda entità MCD. | 🔴 Da creare |
| 🎟️ **Eventbrite** | GEO · Listing | Fonte evento citata dai modelli AI per eventi italiani. | 🔴 Da creare |

---

## 📋 Prossimi 3 passi concreti

1. **GTM → aggiungi tag GA4 con G-SC0R1MQGH9** — 10 minuti, impatto immediato su analytics
2. **iubenda siteId reale in BaseLayout** — sblocca il banner cookie e il consenso
3. **Google Business Profile** — impatto più diretto su Gemini

---

## 📅 Timeline — Quando Aspettarsi Risultati

### Questa settimana
- Tag GA4 in GTM (G-SC0R1MQGH9)
- iubenda Site ID reale
- Meta Pixel in GTM
- Google Business Profile
- Fix immagini hero (WebP)

### Settimana 2–3
- site: su Google verificato
- Wikidata scheda
- Eventbrite + FB Events
- Profili social creati
- Lighthouse re-run ≥85

### Mese 1
- Comunicato stampa Dissapore
- Articolo cocktail Navigli
- GA4 conversioni attive
- Search Console primi dati
- Rich Results live su Google

### Mese 2–3
- Perplexity ti trova
- Core Web Vitals report
- Blog 2° articolo
- Menzione Identità Golose
- GA4 audience retargeting

### Mese 6+
- Gemini ti conosce
- ChatGPT prossimo training
- Top 3 branded keyword
- Domain authority stabile
- Pre-vendita pass aperta
