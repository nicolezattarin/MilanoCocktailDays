# Milan Cocktail Days 2027 — Site

Sito statico Astro 6. Deploy target: `https://milancocktaildays.it`

## Comandi

```bash
npm run dev      # dev server → localhost:4321
npm run build    # build → dist/
npm run preview  # preview build locale
```

---

## Cose da fare post-deploy

Queste task richiedono account esterni o un dominio live.
Completale nell'ordine indicato.

---

### 1. Dominio + DNS

- Acquista `milancocktaildays.it` (es. Namecheap, Aruba, Register.it)
- Configura DNS verso il provider di deploy (Vercel/Netlify)
- Verifica HTTPS attivo prima di fare qualsiasi altra cosa

---

### 2. Deploy

Consigliato: **Vercel** (zero config per Astro statico)

```bash
npm i -g vercel
vercel --prod
```

Oppure Netlify: collega il repo GitHub, build command `npm run build`, publish dir `dist`.

---

### 3. OG image reale

`public/og-default.svg` è un placeholder.
Facebook e Twitter non renderizzano SVG — serve un JPG.

- Crea `public/og-default.jpg` 1200×630px con il design MCW
- Testa su [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug) dopo deploy

---

### 4. Apple Touch Icon

`public/apple-touch-icon.png` non esiste ancora.

- Crea un PNG 180×180px (logo MCW su sfondo `#1A1410`)
- Salvalo in `public/apple-touch-icon.png`

---

### 5. Google Search Console

1. Vai su [search.google.com/search-console](https://search.google.com/search-console)
2. Aggiungi proprietà → tipo URL → `https://milancocktaildays.it`
3. Scegli verifica via meta tag → copia il codice `content="XXXX"`
4. **Dimmi il codice** — lo inserisco in `BaseLayout.astro` in 30 secondi:
   ```html
   <meta name="google-site-verification" content="XXXX" />
   ```
5. Dopo verifica → Sitemaps → incolla:
   ```
   https://milancocktaildays.it/sitemap-index.xml
   ```

---

### 6. iubenda Cookie Solution

1. Crea account su [iubenda.com](https://www.iubenda.com)
2. Crea **Privacy Policy** — includi: Google Analytics, Facebook Pixel, GTM, Tally.so
3. Crea **Cookie Policy** collegata alla Privacy Policy
4. Attiva **Cookie Solution** → GDPR + CCPA → lingua: italiano
5. Nel pannello CS → Integrations → Google Tag Manager → attiva blocco automatico GTM
6. Copia: **Site ID** e **Cookie Policy ID**
7. **Dimmi i due ID** — decommentarò i placeholder in `BaseLayout.astro` e aggiornerò gli href in `Footer.astro`

Ref config: `src/config/iubenda.config.js`

---

### 7. Google Tag Manager

1. Crea account su [tagmanager.google.com](https://tagmanager.google.com)
2. Nuovo container → nome: `MCW` → tipo: Web
3. Copia il container ID (formato `GTM-XXXXXXX`)
4. **Dimmi l'ID** — sostituirò `INSERIRE_GTM_ID` in `BaseLayout.astro`
5. Configura tag GA4 e Pixel dentro GTM seguendo `src/config/gtm.config.js`

**Ordine critico:** iubenda deve essere attivo PRIMA di GTM.
GTM non si attiva finché iubenda non ha ricevuto il consenso.

---

### 8. Google Analytics 4

1. Crea proprietà GA4 su [analytics.google.com](https://analytics.google.com)
2. Copia Measurement ID (formato `G-XXXXXXXXXX`)
3. **Non** inserirlo direttamente nel codice — va dentro GTM come Tag GA4 Configuration
4. Trigger: Consent Initialization + `analytics_storage = granted`

---

### 9. Facebook Pixel

1. Crea Pixel su [business.facebook.com](https://business.facebook.com) → Events Manager
2. Copia Pixel ID (numerico)
3. **Non** inserirlo nel codice — va dentro GTM come Custom HTML tag
4. Trigger: Consent Initialization + `ad_storage = granted`

---

### 10. Tally.so — Form iscrizione

1. Crea account su [tally.so](https://tally.so)
2. Crea form con campi: Nome, Email, Tipo pass (Festival/VIP), Messaggio
3. Copia lo snippet embed
4. In `src/pages/contatti.astro` — sostituisci il blocco `<!-- Sostituire con embed Tally.so -->` con lo snippet
5. **Oppure dimmi il Form ID** — integro io

---

### 11. Link social reali

In `src/pages/contatti.astro` e `src/components/Footer.astro` ci sono link `href="#"` placeholder.

Sostituisci con gli URL reali:
- Instagram: `https://instagram.com/milancocktailweek`
- LinkedIn: `https://linkedin.com/company/milancocktailweek`

**Dimmi gli handle** — li aggiorno io.

---

### 12. Variabili ambiente

```bash
cp .env.example .env
# popola .env con i valori reali — NON committare
```

---

### 13. Lighthouse audit

Solo eseguibile su sito live. Dopo deploy:

```bash
npx lighthouse https://milancocktaildays.it --output html --view
```

Oppure Chrome DevTools → Lighthouse tab → target 90+ su tutte le categorie.

---

### 14. Contenuto reale (quando disponibile)

| File | Cosa aggiornare |
|------|----------------|
| `src/pages/bars.astro` | Bar partner reali (nome, immagine, quartiere) |
| `src/pages/programma.astro` | Date, venue, orari delle 10 serate |
| `src/pages/festival.astro` | Immagine placeholder nella sezione cos'è MCW |
| `src/pages/contatti.astro` | Prezzi Pass Festival e Pass VIP |
| `src/components/Footer.astro` | Sponsor / partner logistici |

---

## Come riportarmi le modifiche esterne

Quando hai completato una task esterna (hai un ID, un URL, un codice), dimmi esattamente così:

> "Ho il GTM ID: `GTM-XXXXXXX`"
> "Ho il Site ID iubenda: `1234567` e Cookie Policy ID: `89012345`"
> "Ho il codice GSC: `abc123xyz`"
> "L'handle Instagram è `@milancocktailweek`"

Inserisco io le modifiche nel codice — non serve che tu tocchi i file.

---

## Struttura file rilevante

```
src/
  layouts/
    BaseLayout.astro        ← SEO, tracking slots, skip link
  components/
    Header.astro            ← nav + hamburger CSS-only
    Footer.astro            ← link legali iubenda
    CtaBanner.astro         ← banner CTA riutilizzabile
    TbaBox.astro            ← box TBA con mcw-bracket
    SectionHero.astro       ← hero interno pagine
    StatGrid.astro          ← griglia statistiche
    TickerBand.astro        ← ticker infinito CSS-only
  pages/
    index.astro             ← homepage (pageType="event")
    festival.astro          ← cos'è MCW, come funziona
    bars.astro              ← bar partner
    programma.astro         ← 10 serate
    contatti.astro          ← pass + form iscrizione
  styles/
    global.css              ← design system tokens MCW
  config/
    iubenda.config.js       ← ref config iubenda
    gtm.config.js           ← ref setup GTM
  scripts/
    tracking.js             ← dataLayer events reference

public/
  robots.txt
  sitemap-index.xml         ← generato da build
  favicon.svg
  og-default.svg            ← placeholder: sostituire con .jpg reale
```
