import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/sitemap', 'nuxt-security'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: 'https://www.allahopp-schwetzingen.de',
    name: 'alla hopp! Schwetzingen',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      titleTemplate: '%s · alla hopp! Schwetzingen',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#e2001a' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Statische Seite: alle Routen beim `nuxt generate` vorrendern
  nitro: {
    prerender: {
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
