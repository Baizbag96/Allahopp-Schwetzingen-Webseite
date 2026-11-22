<script setup lang="ts">
useSeoMeta({
  title: 'Imbiss & Café am Spielplatz',
  description:
    'alla hopp! Schwetzingen – Frühstück, Kaffee, Flammkuchen, Pizza, Eis und mehr direkt an der alla-hopp-Spielplatzanlage. Saison März bis November.',
})

// Strukturierte Daten für Google (Schema.org)
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: site.name,
        telephone: '+49 6202 9546252',
        email: site.email,
        url: 'https://www.allahopp-schwetzingen.de/',
        servesCuisine: ['Imbiss', 'Café'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.street,
          postalCode: site.zip,
          addressLocality: site.city,
          addressCountry: 'DE',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '11:30',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '10:00',
            closes: '19:00',
          },
        ],
        sameAs: [site.facebook],
      }),
    },
  ],
})
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold text-brand md:text-4xl">Willkommen bei alla hopp! Schwetzingen</h1>

    <!-- TODO: Begrüßungstext von der alten Startseite übernehmen -->
    <p class="text-lg">
      Frühstück, Smoothies, Kaffee aus der Rösterei Westhoff, Bio-Tees, Salate, Flammkuchen, Pizza,
      Currywurst, Eis und Slush – direkt an der alla-hopp-Spielplatzanlage.
    </p>

    <div class="flex flex-wrap gap-3">
      <a href="/karten/speisen.pdf" class="rounded bg-brand px-4 py-2 font-semibold text-white hover:bg-brand-dark">
        Speisekarte (PDF)
      </a>
      <a href="/karten/getraenke.pdf" class="rounded border border-brand px-4 py-2 font-semibold text-brand hover:bg-brand hover:text-white">
        Getränkekarte (PDF)
      </a>
    </div>

    <div class="rounded-lg bg-neutral-50 p-6">
      <h2 class="mb-3 text-xl font-semibold">Öffnungszeiten</h2>
      <OpeningHours />
    </div>
  </section>
</template>
