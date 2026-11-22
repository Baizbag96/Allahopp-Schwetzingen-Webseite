import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Keine anonymen Nutzungsdaten an Nuxt senden (und keine Nachfrage beim Start)
  telemetry: false,

  modules: ['@nuxtjs/sitemap', 'nuxt-security'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: 'https://allahopp-schwetzingen.de',
    name: 'alla hopp! Schwetzingen',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      titleTemplate: '%s · alla hopp! Schwetzingen',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#00618a' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'apple-touch-icon', href: '/icon-192.png' },
      ],
    },
  },

  // Statische Seite: alle Routen beim `nuxt generate` vorrendern
  nitro: {
    // Festes Preset: Ausgabe immer nach .output/public – lokal wie auf Netlify.
    // (Ohne das erkennt Nitro Netlify und schreibt nach dist/.)
    preset: 'static',
    prerender: {
      // kontakt.html statt kontakt/index.html → Netlify liefert /kontakt direkt aus,
      // ohne Umleitung auf /kontakt/
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/'],
    },
  },

  // nuxt-security: Bei SSG wird die CSP als <meta>-Tag mit Hashes der
  // Inline-Scripts von Nuxt in jede Seite geschrieben. Die übrigen
  // HTTP-Header (HSTS, frame-ancestors, …) setzt der Hoster über public/_headers.
  security: {
    nonce: false,
    sri: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
    },
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'base-uri': ["'none'"],
        'object-src': ["'none'"],
        'img-src': ["'self'", 'data:'],
        'font-src': ["'self'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'script-src': ["'self'", "'strict-dynamic'"],
        'form-action': ["'self'"],
        'upgrade-insecure-requests': true,
      },
    },
  },
})
