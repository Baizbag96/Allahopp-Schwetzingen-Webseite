# alla hopp! Schwetzingen – Website

Website von **alla hopp! Schwetzingen** (Imbiss & Café an der alla-hopp-Spielplatzanlage).
Gebaut mit [Nuxt 4](https://nuxt.com) und Tailwind CSS 4, statisch generiert und gehostet auf Netlify.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
```

## Statischer Build

```bash
npm run generate        # Ausgabe: .output/public
npm run preview         # statischen Build lokal ansehen: http://localhost:4173
npm run build:preview   # beides nacheinander
```

Redirects und Header (`_redirects`, `_headers`) greifen nur beim Hoster, nicht lokal.

## Per Klick in VS Code

Ordner `VueJS-Project` in VS Code öffnen, dann:

- **Ausführen und Debuggen** (Strg+Umschalt+D) → oben Konfiguration wählen → ▶ (oder F5)
  - ▶ Dev-Server starten – öffnet den Browser automatisch
  - 🔨 Build (statisch generieren)
  - 👀 Build + Vorschau
- **Strg+Umschalt+B** startet direkt den Build
- Alle Tasks: Strg+Umschalt+P → „Tasks: Run Task“

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `app/pages/` | Seiten (Dateiname = URL) |
| `app/components/` | Header, Footer, Öffnungszeiten |
| `app/utils/site.ts` | Stammdaten: Adresse, Telefon, Öffnungszeiten, Navigation |
| `public/karten/` | Speise- und Getränkekarte als PDF |
| `public/_redirects` | 301-Weiterleitungen der alten WordPress-URLs |
| `public/_headers` | Sicherheits-Header |
| `netlify.toml` | Build-Konfiguration für Netlify |

## Workflow

- Es wird direkt auf `main` gearbeitet.
- Netlify baut jeden Push auf `main` automatisch – vorher lokal `npm run generate` prüfen.

## Sicherheit

- CSP wird von `nuxt-security` als `<meta>`-Tag mit Script-Hashes erzeugt (siehe `nuxt.config.ts`).
- Keine externen Fonts, kein eingebettetes Google Maps, keine Cookies.
- Secrets nur als Umgebungsvariablen bei Netlify, nie im Repo.
