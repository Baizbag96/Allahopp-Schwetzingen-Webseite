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
npm run generate   # Ausgabe: .output/public
npx serve .output/public   # lokal testen (Redirects/Header greifen nur beim Hoster)
```

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

- `main` ist immer deploybar – Netlify baut jeden Push auf `main` automatisch.
- Neue Arbeit in Feature-Branches (`feature/…`), Merge per Pull Request.
- Pull Requests bekommen bei Netlify automatisch eine Vorschau-URL.

## Sicherheit

- CSP wird von `nuxt-security` als `<meta>`-Tag mit Script-Hashes erzeugt (siehe `nuxt.config.ts`).
- Keine externen Fonts, kein eingebettetes Google Maps, keine Cookies.
- Secrets nur als Umgebungsvariablen bei Netlify, nie im Repo.
