# Milano Cocktail Days — SEO/GEO Growth Plan

> **milanococktaildays.it** · SEO · GEO · Analytics · Presence · Content

---

## Fase 01 — Fondamenta Tecniche
*Astro config · Sitemap · Robots · hreflang · Noindex* · 4/7 completate

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

Pagine di conferma form da escludere dall'indicizzazione Google.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
The site has these thank-you pages that must NOT be indexed by Google:
- src/pages/grazie.astro
- src/pages/grazie-partner.astro
- src/pages/en/grazie.astro (if it exists)
- src/pages/en/grazie-partner.astro (if it exists)

BaseLayout.astro already accepts a noindex prop that adds <meta name="robots" content="noindex, nofollow">.

Please:
1. Open each grazie page and add noindex={true} to the <BaseLayout> component call.
2. Check astro.config.mjs — the sitemap filter should already exclude /grazie paths.
   If not, update it to:
   filter: (page) => !page.includes('/grazie') && !page.includes('/grazie-partner')
3. Run: npm run build
4. Confirm dist/sitemap-0.xml does NOT contain /grazie/ or /grazie-partner/ URLs.
Show all files modified.
```

</details>

---

### ✅ og-default.jpg 1200×630px — sostituire placeholder SVG
🟡 `CODE` · *Fatto*

Facebook e WhatsApp non renderizzano SVG. Serve JPG con branding MCD.

→ [Testa su Facebook Debugger →](https://developers.facebook.com/tools/debug)

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days.
The file public/og-default.svg is a placeholder — Facebook and WhatsApp don't render SVG og:images.

Please:
1. Create a script scripts/generate-og.js using Sharp (install if needed: npm install sharp)
   that generates public/og-default.jpg at 1200×630px.
   The image should have:
   - Background color: #1A1410 (dark brown, MCD brand)
   - Centered text "Milano Cocktail Days" in white
   - Subtitle: "Festival dei Cocktail Bar · Milano · Aprile–Maggio 2027"
   - A thin gold (#C4850D) horizontal line as decoration
   This is a placeholder until the real branded image is designed.
2. Run the script: node scripts/generate-og.js
3. Verify public/og-default.jpg exists and is ~1200×630px.
4. Check BaseLayout.astro — ogImage already defaults to /og-default.jpg, no code change needed.
Show the script and confirm the file was generated.
```

</details>

---

### ✅ apple-touch-icon.png 180×180px
🔵 `CODE` · *Fatto*

PNG logo MCD su sfondo #1A1410 per home screen iOS.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days.
The file public/apple-touch-icon.png does not exist yet.

Please:
1. Create a script scripts/generate-icons.js using Sharp
   that generates public/apple-touch-icon.png at 180×180px with:
   - Background:as in og logo
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
*Meta · OG · Canonical · Heading · Alt text* · 3/6 completate

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
🟡 `SEO` · *fatto*

Alt vuoti o generici penalizzano SEO. Ogni img deve descrivere il contenuto con keyword naturali.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).

Please audit all <img> tags across src/pages/ and src/components/ for alt text:

1. Find every <img> tag.
2. For decorative images (hero bg, overlays): alt="" is correct — keep it.
3. For content images: write descriptive Italian alt text that:
   - Describes what's in the image
   - Includes natural keywords where relevant (e.g. "cocktail bar Milano", "bartender preparare cocktail", "Navigli Milano sera")
   - Is under 125 characters
   - Never starts with "Immagine di" or "Foto di"

4. Show a table: file / image src / old alt / new alt.
5. Apply all changes.
```

</details>

---

### ✅ width + height su tutti i <img> — elimina CLS layout shift
🟡 `SEO` · *da fare*

Immagini senza dimensioni causano Cumulative Layout Shift. Verificare tutto il codebase.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days.

Please audit all <img> tags across src/pages/ and src/components/ for missing width/height attributes:

1. Find every <img> that is missing width or height (or both).
2. For each, determine the correct natural dimensions:
   - Check the actual image file in public/images/ or public/logos/
   - Use the displayed/intrinsic size if the file is accessible
   - For SVGs, check the viewBox attribute
3. Add both width and height attributes to every img missing them.
4. Do NOT change loading, fetchpriority, or src attributes.
5. Show a table: file / img src / dimensions added.
6. Run: npm run build — confirm no errors.
```

</details>

---

## Fase 03 — Structured Data + AEO
*JSON-LD Event · FAQPage · Organization · Offers* · 2/5 completate

### ✅ JSON-LD Event in BaseLayout con pageType="event"
🔴 `GEO` · *Fatto*

Già implementato. name, organizer (Luca Ferrara + Nicole Zattarin), location Milano, url.

---

### ✅ JSON-LD FAQPage su index, bar, sponsor
🔴 `GEO` · *Fatto*

Già implementato con le FAQ esistenti di ogni pagina.

---

### ⬜ Compila startDate e endDate reali nel JSON-LD Event
🔴 `GEO` · *Da fare*

Attualmente potrebbe avere placeholder. Inserire le date esatte quando confermate.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
The event runs for 10 days between April and May 2027 (exact dates TBD).

Please update the JSON-LD Event structured data in src/layouts/BaseLayout.astro:

1. Find the jsonLdEvent object.
2. Update startDate to "2027-04-25T18:00:00+02:00" (placeholder — easy to change later).
3. Update endDate to "2027-05-04T23:59:00+02:00".
4. Add eventStatus: "https://schema.org/EventScheduled"
5. Add eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode"
6. Verify organizer array has both:
   { "@type": "Person", "name": "Luca Ferrara" }
   { "@type": "Person", "name": "Nicole Zattarin" }
7. Verify location uses City type with addressLocality: "Milano", addressCountry: "IT"
8. Run: npm run build — confirm no errors.
NOTE: Add a comment next to startDate/endDate: // UPDATE WHEN DATES CONFIRMED
Show the final jsonLdEvent object.
```

</details>

---

### ✅ Aggiungi offers al JSON-LD Event (prezzo pass €6)
🟡 `GEO` · *Da fare*

schema.org/Offer con price, priceCurrency, availability. Aumenta probabilità rich results.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days.
The event has a pass that gives access to 30 cocktail bars for 10 days. Each cocktail costs €6.

Please add an "offers" field to the JSON-LD Event in src/layouts/BaseLayout.astro:

Add inside jsonLdEvent:
"offers": {
  "@type": "Offer",
  "name": "Pass Milano Cocktail Days",
  "price": "TBD",
  "priceCurrency": "EUR",
  "availability": "https://schema.org/PreOrder",
  "url": "https://milanococktaildays.it/contatti/"
}

Also add "description" to each FAQ answer in the FAQPage JSON-LD if missing —
answers should be at least 50 characters for Google to show them as rich results.

Run: npm run build — confirm no errors.
Validate at: https://search.google.com/test/rich-results
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
🟡 `ANALYTICS` · *Da fare*

GA4 → Admin → Search Console Links. Vedi quali query portano click e il comportamento post-landing.

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

BaseLayout.astro carica GTM on scroll/click/keydown. Snippet correttamente inserito.

---

### ⬜ Aggiungi iubenda Site ID reale in BaseLayout
 `LEGAL` · *Da fare*

BaseLayout ha "YOUR_SITE_ID" come placeholder. Va sostituito con l'ID reale da iubenda.com.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
The iubenda Cookie Solution is already configured in src/layouts/BaseLayout.astro but has placeholder IDs.

I have these real iubenda IDs:
- Site ID: [INSERISCI_SITE_ID]
- Cookie Policy ID: [INSERISCI_COOKIE_POLICY_ID]

Please:
1. Open src/layouts/BaseLayout.astro
2. Find: siteId: "YOUR_SITE_ID"
   Replace with: siteId: [INSERISCI_SITE_ID]
3. Find: cookiePolicyId: (the existing value)
   Replace with: cookiePolicyId: [INSERISCI_COOKIE_POLICY_ID]
4. Open src/components/Footer.astro
   Find the Privacy Policy and Cookie Policy links (href="#" placeholders)
   Replace with:
   - Privacy: https://www.iubenda.com/privacy-policy/[INSERISCI_COOKIE_POLICY_ID]
   - Cookies: https://www.iubenda.com/privacy-policy/[INSERISCI_COOKIE_POLICY_ID]/cookie-policy
5. Run: npm run build — confirm no errors.
Show all files modified.
```

</details>

---

### ⬜ Configura Meta Pixel in GTM come Custom HTML tag
🔴 `ANALYTICS` · *Da fare*

Il Pixel NON va nel codice Astro — va in GTM con trigger consenso ad_storage.

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task is done entirely inside Google Tag Manager (tagmanager.google.com) — NO code changes in Astro.

The GTM container GTM-KRJ9XDPV is already active on milanococktaildays.it.
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
   HTML:
   <scr"+"ipt>
   !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', '[INSERISCI_PIXEL_ID]');
   fbq('track', 'PageView');
   </script>
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

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task is done in Google Tag Manager + a small Astro code change.

PART 1 — GTM (no code change):
In GTM container GTM-KRJ9XDPV:

1. TRIGGER — Grazie Page View:
   Triggers → New → Page View
   Condition: Page Path equals /grazie/
   Name: "Page - /grazie/"

2. TAG — Facebook Lead Event:
   Tags → New → Custom HTML
   Name: "Facebook Pixel - Lead"
   HTML: <scr"+"ipt>fbq('track', 'Lead');</script>
   Trigger: "Page - /grazie/"

3. TAG — GA4 Event - form_submit:
   Tags → New → Google Analytics: GA4 Event
   Event name: form_submit
   Parameters: form_type = iscrizione_lista
   Trigger: "Page - /grazie/"

4. PUBLISH.

PART 2 — Astro code (small change needed):
I'm working on an Astro 6 site for Milano Cocktail Days.
Please check src/pages/grazie.astro — does it have a dataLayer push for the form submission?
If not, add inside the page <scr"+"ipt> tag:
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'form_submit', form_type: 'iscrizione_lista' });
Show the change made.
```

</details>

---

### ⬜ Configura evento ViewContent su /festival/
🟡 `ANALYTICS` · *Da fare*

fbq ViewContent + GA4 event per segmentare interesse al festival. Capisce chi è più coinvolto.

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
   HTML:
   <scr"+"ipt>
   fbq('track', 'ViewContent', {
     content_name: 'Festival',
     content_type: 'event',
     content_ids: ['festival-mcd-2027']
   });
   </script>
   Trigger: "Page - /festival/"

3. TAG — GA4 Event - page_interest:
   Tags → New → GA4 Event
   Event name: page_interest
   Parameters: page_section = festival
   Trigger: "Page - /festival/"

4. PUBLISH.

In GA4, mark "page_interest" as a key event to track interest segmentation.
```

</details>

---

### ⬜ Crea Custom Audience "Visitatori sito 30gg" su Meta
🟡 `SOCIAL` · *Da fare*

Meta Business → Audiences → Custom Audience → Website Traffic. Per retargeting vendita pass.

→ [Crea Audience →](https://business.facebook.com/audiences)

---

### ⬜ Testa Pixel con Meta Pixel Helper — PageView verde
🔴 `ANALYTICS` · *Da fare*

Installa estensione Chrome, accetta cookie sul sito, verifica PageView verde.

---

## Fase 06 — Google Analytics 4 — Setup e Utilizzo
*Proprietà · Events · Conversioni · Reports* · 0/6 completate

### ⬜ Crea proprietà GA4 e ottieni Measurement ID G-XXXXXXXXXX
🔴 `ANALYTICS` · *Da fare*

analytics.google.com → Nuova proprietà → Milano Cocktail Days → Italia.

→ [Apri GA4 →](https://analytics.google.com)

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task is done in GA4 dashboard — no Astro code changes needed.

Steps:
1. Go to https://analytics.google.com
2. Admin → Create Property
   - Property name: "Milano Cocktail Days"
   - Reporting time zone: Italy (GMT+1)
   - Currency: Euro (€)
3. Industry: Arts & Entertainment
4. Create data stream → Web → https://milanococktaildays.it
5. Copy the Measurement ID (format: G-XXXXXXXXXX)

Then come back to Claude Code and say:
"Ho il GA4 Measurement ID: G-XXXXXXXXXX"
and I'll configure the GTM tag for you.
```

</details>

---

### ⬜ Aggiungi tag GA4 in GTM con trigger consenso
🔴 `ANALYTICS` · *Da fare*

GTM → Tag GA4 Configuration → G-XXXXXXXXXX → Trigger: Consent Initialization + analytics_storage granted.

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task is done in Google Tag Manager — no Astro code changes needed.
You need your GA4 Measurement ID (G-XXXXXXXXXX) ready.

Steps in GTM container GTM-KRJ9XDPV:

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
   Measurement ID: G-XXXXXXXXXX [your real ID]
   Trigger: Consent Initialization - All Pages
   Additional trigger condition: Consent - analytics_storage equals true
   Name: "GA4 - Configuration"

4. PUBLISH.

After publishing: open GA4 → Reports → Realtime.
Visit milanococktaildays.it, accept analytics cookies.
You should see 1 active user in Realtime within 30 seconds.
```

</details>

---

### ⬜ Configura iscrizione_lista come conversione GA4
🔴 `ANALYTICS` · *Da fare*

In GTM: trigger su .cta-iscrizione click → GA4 event. In GA4: marca come Key Event. KPI principale.

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task requires both GTM configuration and a small Astro code check.

PART 1 — Check Astro code (Claude Code task):
I'm working on an Astro 6 site for Milano Cocktail Days.
Please check src/pages/index.astro and src/pages/contatti.astro for the waitlist/signup CTA button.
Verify the button has the CSS class "cta-iscrizione" (as documented in src/config/gtm.config.js).
If missing, add it. Show any changes made.

PART 2 — GTM (no code change):
In GTM container GTM-KRJ9XDPV:

1. TRIGGER — CTA Iscrizione Click:
   Triggers → New → Click - All Elements
   Condition: Click Classes contains "cta-iscrizione"
   Name: "Click - CTA Iscrizione"

2. TAG — GA4 Event iscrizione_lista:
   Tags → New → GA4 Event
   Event name: iscrizione_lista
   Parameters: cta_location = {{Page Path}}
   Trigger: "Click - CTA Iscrizione"
   Name: "GA4 - iscrizione_lista"

3. PUBLISH.

PART 3 — GA4 Key Event:
In GA4 → Admin → Events → find "iscrizione_lista" → toggle "Mark as key event".
This makes it appear in conversions reports.
```

</details>

---

### ⬜ Configura partner_inquiry come conversione B2B
🔴 `ANALYTICS` · *Da fare*

Trigger su .cta-partner click in GTM → GA4 event. Misura interesse sponsor da /sponsor/.

<details>
<summary>📋 Prompt Claude Code</summary>

```
This task requires both GTM configuration and a small Astro code check.

PART 1 — Check Astro code:
I'm working on an Astro 6 site for Milano Cocktail Days.
Please check src/pages/sponsor.astro for the "Diventa partner" / "Parliamone" CTA button.
Verify it has the CSS class "cta-partner" (documented in src/config/gtm.config.js).
If missing, add it. Show any changes made.

PART 2 — GTM:
In GTM container GTM-KRJ9XDPV:

1. TRIGGER — CTA Partner Click:
   Triggers → New → Click - All Elements
   Condition: Click Classes contains "cta-partner"
   Name: "Click - CTA Partner"

2. TAG — GA4 Event partner_inquiry:
   Tags → New → GA4 Event
   Event name: partner_inquiry
   Parameters: inquiry_source = sponsor_page
   Trigger: "Click - CTA Partner"

3. PUBLISH.

In GA4 → mark "partner_inquiry" as a Key Event.
```

</details>

---

### ⬜ Scroll Depth 50% — misura engagement contenuto
🟡 `ANALYTICS` · *Da fare*

GTM Trigger Scroll Depth → GA4 event. Capisce se gli utenti leggono /festival/ in fondo.

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
   Parameters:
   - scroll_threshold = 50
   - page_path = {{Page Path}}
   Trigger: "Scroll - 50%"
   Name: "GA4 - Scroll 50%"

3. PUBLISH.

In GA4, this appears under Events as "scroll_depth".
Most useful for /festival/ and /bar/ pages to measure content engagement.
```

</details>

---

### ⬜ Testa con GA4 DebugView dopo deploy
🔴 `ANALYTICS` · *Da fare*

GA4 → Configure → DebugView. Visita sito con ?gtm_debug=x. Verifica eventi in tempo reale.

---

## Fase 07 — GEO — Visibilità AI
*Gemini · ChatGPT · Perplexity · Google AI Overview* · 0/6 completate

### ⬜ Google Business Profile — crea profilo "Milano Cocktail Days"
 `GEO` · *Da fare*

Segnale primario Gemini per eventi locali. Categoria: Festival. URL sito.

→ [Crea profilo →](https://business.google.com)

---

### ⬜ Wikidata — crea scheda entità Milano Cocktail Days
🔴 `GEO` · *Da fare*

wikidata.org. Proprietà: instance of recurring event, location Milano, organizer, official website.

→ [Crea su Wikidata →](https://www.wikidata.org/wiki/Special:NewItem)

---

### ⬜ Eventbrite — pubblica evento pubblico 2027
🔴 `GEO` · *Da fare*

Fonte evento che i modelli AI citano per eventi italiani. Anche senza vendita biglietti online.

→ [Crea su Eventbrite →](https://www.eventbrite.it)

---

### ⬜ Facebook Events — crea evento pubblico con tutti i dettagli
🔴 `SOCIAL` · *Da fare*

Evento pubblico con descrizione completa, URL sito, categoria Festival. Perplexity indicizza FB Events.

---

### 🔄 Verifica contenuto testuale chi/cosa/dove/quando nel DOM
🔴 `GEO` · *In corso*

Date, organizzatori, quartieri devono essere testo HTML visibile — non solo immagini.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
For GEO (AI engine optimization), key event information must appear in real HTML text — not only in images or SVGs.

Please audit src/pages/index.astro and src/pages/festival.astro:

1. Check that the following appear in visible HTML text (not inside <img alt=""> or decorative SVGs):
   ✓ Event name: "Milano Cocktail Days"
   ✓ City: "Milano"
   ✓ Neighbourhoods: "Navigli", "Brera", "Isola" (or at least 2 of them)
   ✓ Organizers: "Luca Ferrara" and "Nicole Zattarin"
   ✓ Duration: "10 giorni" or similar
   ✓ Period: "aprile" and "maggio 2027" or similar
   ✓ Concept: "30 bar" and "cocktail"

2. For any missing item, add it to the appropriate section as visible text.
   Keep the existing design — add to existing prose or a "credits" line, don't create new ugly sections.

3. The hero already has: "Trenta bar di Milano. Per dieci giorni." and Luca Ferrara + Nicole Zattarin credit ✓
   Focus on verifying the rest.

Show a checklist of what was found and what was added.
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

### ⬜ Converti immagini in WebP/AVIF con Sharp — LCP CRITICO
 `⚠ CRITICAL` · *Da fare*

bar_photo1.jpg (3.19MB) deve diventare WebP/AVIF a più risoluzioni. Risparmio stimato 6.333 KiB.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
Lighthouse reports LCP of 20.9s caused by large unoptimized images. This is CRITICAL.

Please:
1. Install Sharp: npm install sharp --save-dev
2. Create scripts/convert-images.js that converts these images to WebP and AVIF at multiple sizes:

Images to convert (in public/images/):
- bar_photo1.jpg → sizes: 430w, 500w, 1024w, 1920w
- Clear Wine Glass Photo.jpg → sizes: 378w, 756w, 1200w
- Szymon Fischer.jpg → sizes: 378w, 756w
- bartender_1.jpg → sizes: 424w, 848w

For each image and size, generate both .webp and .avif variants.
Output filename pattern: bar_photo1-430.webp, bar_photo1-430.avif, etc.
Save all outputs to public/images/

3. Run: node scripts/convert-images.js
4. Confirm all generated files exist in public/images/
5. Show the script and list all generated files with sizes.

After running, I'll apply the <picture> srcset changes separately.
```

</details>

---

### ⬜ Aggiorna <picture> tags con srcset WebP/AVIF
 `CODE` · *Da fare*

Dopo conversione immagini. Hero usa già fetchpriority="high" e loading="eager" — mantenere.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days.
The images have been converted to WebP/AVIF variants (run convert-images.js first).

Please update all content images in src/pages/ and src/components/ to use <picture> with srcset:

For the HERO image (bar_photo1) in index.astro — KEEP fetchpriority="high" loading="eager":
<picture class="hero-bg" aria-hidden="true">
  <source type="image/avif" srcset="/images/bar_photo1-430.avif 430w, /images/bar_photo1-500.avif 500w, /images/bar_photo1-1024.avif 1024w, /images/bar_photo1-1920.avif 1920w" sizes="100vw"/>
  <source type="image/webp" srcset="/images/bar_photo1-430.webp 430w, /images/bar_photo1-500.webp 500w, /images/bar_photo1-1024.webp 1024w, /images/bar_photo1-1920.webp 1920w" sizes="100vw"/>
  <img src="/images/bar_photo1.jpg" alt="" width="1920" height="1080" fetchpriority="high" loading="eager"/>
</picture>

For content images (below fold) — use loading="lazy":
<picture>
  <source type="image/avif" srcset="[avif variants with srcset]"/>
  <source type="image/webp" srcset="[webp variants with srcset]"/>
  <img src="[original]" width="[w]" height="[h]" loading="lazy" alt="[existing alt]"/>
</picture>

Apply to: bar_photo1 (hero), Clear Wine Glass Photo, Szymon Fischer, bartender_1.
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

### ⏳ Re-run Lighthouse — target ≥90 dopo fix immagini
🔴 `ANALYTICS` · *In attesa*

Le fix immagini da sole portano il score da 62 a ~85–90.

→ [Testa su PageSpeed →](https://pagespeed.web.dev)

---

## Fase 09 — Presenza Esterna — Link Building
*PR · Testate di settore · Backlink · Autorità dominio* · 0/3 completate

### ⬜ Comunicato stampa ottimizzato per testate food & drink
 `CONTENT` · *Da fare*

Dissapore, Identità Golose, Bargiornale. Ogni backlink da DA alto vale molto per SEO e visibilità AI.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on a content task for Milano Cocktail Days (https://milanococktaildays.it).
Please write an Italian press release (comunicato stampa) optimized for SEO and AI visibility.

Event details:
- Name: Milano Cocktail Days
- Organizers: Luca Ferrara e Nicole Zattarin
- What: festival diffuso dei cocktail bar di Milano — 30 bar selezionati partecipano
- Duration: 10 giorni tra aprile e maggio 2027
- Concept: un solo pass per accedere a tutti i bar partner, cocktail signature a €6 in ogni locale
- Target: appassionati di cocktail, non professionisti
- Neighborhoods: Navigli, Brera, Isola, Porta Romana e tutta Milano
- Website: https://milanococktaildays.it

Requirements:
- Length: 350–450 words
- Headline: compelling, includes "Milano Cocktail Days" and "Milano"
- First paragraph: answers who/what/where/when/why (AI engines extract from intros)
- Include exact quote from "Luca Ferrara, co-fondatore di Milano Cocktail Days" (write a plausible one)
- Include exact quote from "Nicole Zattarin, co-fondatrice" (write a plausible one)
- End with boilerplate: chi sono gli organizzatori, contatto email, URL sito
- Naturally include: "festival cocktail Milano", "cocktail bar Milano 2027", "Navigli", "Brera"
- Tone: entusiasta ma professionale, settore food & drink

Also provide:
- 3 target publications to send to (with their submission/contact info)
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
I'm working on a content task for Milano Cocktail Days (https://milanococktaildays.it).
Please write a long-form SEO article in Italian for the blog/news section.

Title: "I migliori cocktail bar dei Navigli a Milano [2027]"
Target keyword: "cocktail bar Navigli Milano" (~2.400 searches/month)
Length: 900–1100 words
Tone: friendly, knowledgeable, written for cocktail enthusiasts not professionals

Structure:
1. Intro: why Navigli is Milan's cocktail capital (150 words)
2. List of 5–7 types of bars you find in Navigli (use general descriptions, not specific bar names since we don't have confirmed partners yet — describe the bar typology: dive bar, speakeasy, modern aperitivo bar, etc.)
3. Best time to visit Navigli for cocktails
4. Natural mention of Milano Cocktail Days as "il festival che porta i migliori bar di Milano in un unico pass" with link to /
5. Outro with CTA to the homepage

SEO requirements:
- Use "cocktail bar Navigli Milano" in H1 and naturally 3–4 times in text
- Include "Navigli Milano" "aperitivo Milano" "cocktail Milano 2027" as secondary keywords
- One <h2> per main section
- Meta description suggestion (155 chars) at the end

Format as ready-to-use HTML article content (just the <article> body, no full HTML document).
```

</details>

---

### ⬜ Articolo: "Milano da bere — i quartieri del cocktail"
🟡 `CONTENT` · *Da fare*

Contenuto evergreen. Intercetta "cocktail Milano" (4.400 ricerche/mese). Autorità locale.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on a content task for Milano Cocktail Days (https://milanococktaildays.it).
Please write a long-form Italian SEO article for the site blog.

Title: "Milano da bere: la guida ai quartieri del cocktail [2027]"
Target keyword: "cocktail Milano" (~4.400 searches/month)
Length: 1000–1200 words
Tone: authoritative local guide, enthusiastic, for cocktail lovers

Structure:
1. Intro: Milano as Italy's cocktail capital (150 words)
2. One section per neighbourhood (H2 for each):
   - Navigli: the classic, most dense area
   - Brera: upscale, refined cocktail bars
   - Isola: trendy, independent spots
   - Porta Romana / Fondazza: emerging area
   - Centro / Duomo: hotel bars and classics
3. How to explore: tips for a cocktail bar crawl evening
4. Natural mention of Milano Cocktail Days: "il festival che ogni anno trasforma questi quartieri in un unico grande cocktail bar diffuso" with link to homepage
5. CTA to join the waitlist

SEO requirements:
- "cocktail Milano" in H1 and 4–5 times naturally
- "bar Milano", "aperitivo Milano", "cocktail bar Milano 2027" as secondary keywords
- Meta description suggestion at the end (155 chars)

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

1. Create src/content/config.ts defining a "blog" content collection:
   - Fields: title (string), description (string), pubDate (date), slug (string), draft (boolean, default false)

2. Create src/pages/blog/index.astro:
   - Lists all non-draft blog posts in reverse chronological order
   - Uses BaseLayout with title "Blog | Milano Cocktail Days 2027"
   - Simple, clean design matching the existing dark aesthetic (--bg, --gold, --cream tokens)
   - Shows: post title, date, description, link to full post

3. Create src/pages/blog/[slug].astro:
   - Dynamic route for individual posts
   - Uses BaseLayout with the post's title and description
   - Renders the MDX/Markdown content

4. Create src/content/blog/cocktail-bar-navigli.md as a placeholder post:
   - title: "I migliori cocktail bar dei Navigli a Milano"
   - description: "Guida ai cocktail bar dei Navigli, il quartiere più vivace di Milano per la cultura del cocktail."
   - pubDate: today's date
   - draft: false
   - Body: first 2 paragraphs of placeholder content (150 words)

5. Add "Blog" link to src/components/Header.astro navigation (both IT and EN).

6. Run: npm run build — confirm no errors and /blog/ is in sitemap-0.xml.
Show all files created or modified.
```

</details>

---

### ⬜ Profili social con nome esatto "Milano Cocktail Days"
🔴 `SOCIAL` · *Da fare*

Instagram, Facebook, LinkedIn. Nome identico su tutte le piattaforme = segnale entità AI.

---

### ⬜ Aggiorna link social reali in Footer e Contatti
🟡 `CODE` · *Da fare*

Footer.astro e contatti.astro hanno href="#" placeholder. Sostituire con URL reali.

<details>
<summary>📋 Prompt Claude Code</summary>

```
I'm working on an Astro 6 site for Milano Cocktail Days (https://milanococktaildays.it).
The social media links in the footer and contacts page have placeholder href="#".

I have these real social profiles:
- Instagram: https://instagram.com/[INSERISCI_HANDLE]
- Facebook: https://facebook.com/[INSERISCI_HANDLE]
- LinkedIn: https://linkedin.com/company/[INSERISCI_HANDLE]

Please:
1. Open src/components/Footer.astro — find social links and replace href="#" with real URLs.
2. Open src/pages/contatti.astro — find social links and replace href="#" with real URLs.
3. Add rel="noopener noreferrer" target="_blank" to all external social links if missing.
4. Run: npm run build — confirm no errors.
Show all files modified.
```

</details>

---

### ⬜ UTM parameters su link social → sito
🟡 `ANALYTICS` · *Da fare*

?utm_source=instagram&utm_medium=social&utm_campaign=lancio in tutti i link bio → homepage.

---

## 🛠 Tutti i Tool Utili

| Tool | Tipo | Descrizione | Stato |
|------|------|-------------|-------|
| 🔍 **Google Search Console** | SEO · Indexing | Query, impressioni, errori crawl, Core Web Vitals reali. | 🟢 Attivo |
| 📊 **Google Analytics 4** | Analytics | Traffico, conversioni, source/medium, comportamento utenti. | 🟡 Da configurare |
| 🏷️ **Google Tag Manager** | Tag Management | GTM-KRJ9XDPV attivo. Gestisce GA4, Pixel, dataLayer events. | 🟢 Attivo |
| 📘 **Meta Pixel / Events Mgr** | Marketing · Retargeting | Traccia iscrizioni, viewcontent, crea audience per ads. | 🟡 Da configurare |
| ⚡ **Vercel Analytics** | Web Vitals | LCP, CLS, FID da utenti reali. Gratis su piano Hobby. | 🟡 Da attivare |
| 🚀 **PageSpeed Insights** | Performance | Lighthouse score. Attuale 62/100. Target ≥90 dopo fix immagini. | 🟢 Pronto |
| 🍪 **iubenda Cookie Solution** | GDPR · Compliance | Blocca GTM/Pixel fino a consenso. Site ID da configurare. | 🔴 ID mancante |
| ✅ **Rich Results Test** | Structured Data | Valida JSON-LD Event e FAQPage. Usalo dopo ogni modifica schema. | 🟢 Pronto |
| 🔎 **Perplexity AI** | GEO Monitor | Test visibilità AI. Cerca "Milano Cocktail Days 2027" dopo 14gg. | 🔴 In attesa |
| 🗺️ **Google Business Profile** | GEO · Local | Segnale primario Gemini per eventi locali. Crea subito. | 🔴 Da creare |
| 📋 **Wikidata** | GEO · AI Entities | ChatGPT e Gemini leggono Wikidata. Crea scheda entità MCD. | 🔴 Da creare |
| 🎟️ **Eventbrite** | GEO · Listing | Fonte evento citata dai modelli AI per eventi italiani. | 🔴 Da creare |

---

## 📅 Timeline — Quando Aspettarsi Risultati

### Questa settimana
- iubenda Site ID reale
- Meta Pixel in GTM
- GA4 setup + tag GTM
- Fix immagini hero (WebP)
- Google Business Profile

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

