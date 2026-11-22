<script setup lang="ts">
useSeoMeta({
  title: 'Bistro & Café an der alla hopp! Anlage',
  description:
    'Bistro & Café an der alla hopp! Anlage Schwetzingen: Frühstück, Smoothies, Kaffee, Salate, Flammkuchen, Pizza, Currywurst und Eis. Saisonbetrieb März bis November.',
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
        logo: 'https://www.allahopp-schwetzingen.de/bilder/logo.png',
        servesCuisine: ['Imbiss', 'Café', 'Pizza', 'Flammkuchen'],
        menu: 'https://www.allahopp-schwetzingen.de/karten/speisen.pdf',
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
  <div class="space-y-10">
    <!-- Intro -->
    <section class="rounded-2xl bg-brand-light p-6 md:p-10">
      <h1 class="text-3xl font-bold text-brand md:text-4xl">Liebe alla hopp Besucher,</h1>
      <p class="mt-4 text-lg">
        unsere Außengastronomie haben wir im Februar 2020 an der alla hopp Anlage in Schwetzingen eröffnet.
        Wir möchten Euren Besuch etwas versüßen und entspannter gestalten. Also lasst Euren Picknickrucksack
        daheim und genießt unsere hausgemachten Speisen.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <a :href="site.files.speisen" target="_blank" class="rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark">
          Speisekarte (PDF)
        </a>
        <a :href="site.files.getraenke" target="_blank" class="rounded-lg bg-green px-5 py-3 font-semibold text-white hover:bg-green-dark">
          Getränkekarte (PDF)
        </a>
      </div>
    </section>

    <div class="grid gap-10 md:grid-cols-3">
      <div class="space-y-8 md:col-span-2">
        <section class="space-y-3">
          <h2 class="text-2xl font-semibold text-brand">Frühstück, Salate, Pizza & mehr</h2>
          <p>
            Startet mit einem kleinen Frühstück bei uns in den Tag: Von frisch aufgebackenen Brezeln über belegte
            Brötchen bis zum perfekten Frühstück mit Brötchen, Konfitüre, Nutella, Naturjoghurt mit frischem Obst
            und Eierspeisen wird alles angeboten. Neben gesunden Smoothies, verschiedenen Kaffeeangeboten, Bio-Tees
            und Softgetränken gibt es auch köstliche Salate, Flammkuchen, Pizza, Eis ohne Ende und mehr.
          </p>
          <p>
            Wir wollen alles ein bisschen leckerer machen, als man es im Durchschnitt kennt. Und wir finden: Es ist
            uns gelungen. Die Salate mit hausgemachten Dressings und frisch gebratenen Hähnchenstreifen. Die
            Smoothies mit echten Früchten – keine Konzentrate mit Eiswürfeln!
          </p>
          <p>
            Na gut, ein bisschen Sünde darf auch mal sein: Wir haben tolle Currywürste mit hausgemachter Currysauce
            und dazu Pommes Frites. Unsere Flammkuchen und Pizzen werden mit frischen Zutaten belegt, die Pizzasauce
            ist ebenfalls hausgemacht. Weil wir bei allem auf gute und frische Zutaten achten, müsst Ihr auch
            2–3 Minuten warten, bis Euer Essen fertig ist.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-2xl font-semibold text-brand">Getränke & Eis</h2>
          <p>
            Der Premium-Kaffee kommt von der Rösterei Westhoff, ebenso die verschiedenen Bio-Teesorten. Welde Bräu
            mit verschiedenen Bierprodukten und tolle Weine sind der ideale Begleiter zu den Speisen (natürlich nur
            für Erwachsene&nbsp;🙂). Für die Kleinen haben wir Capri-Sun, Durstlöscher und weitere
            Erfrischungsgetränke im Sortiment.
          </p>
          <p>
            Abgerundet wird das Angebot mit einer großen Auswahl an Eissorten – angefangen vom Pirulo über das
            KitKat- bis zum Milka-Eis, nicht zu vergessen das Slush-Eis.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-2xl font-semibold text-brand">Nachhaltiges Bio-Einweggeschirr</h2>
          <p>
            Der Nachhaltigkeit zuliebe haben wir uns für eine nicht ganz billige, aber absolut sinnvolle Lösung
            entschieden: Alles aus 100&nbsp;% nachwachsenden Rohstoffen sowie 100&nbsp;% biologisch abbau- und
            kompostierbar. Unsere Teller sind aus Palmblatt oder Zuckerrohr. Unsere Smoothie-Becher sehen aus wie
            herkömmliche Plastikbecher, sind aber aus PLA-Kunststoff. Nach rund 90 Tagen sind die meisten Produkte
            zersetzt und der Muttererde zurückgegeben.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-2xl font-semibold text-brand">Feiern bei uns</h2>
          <p>
            Gerne könnt Ihr für Eure Feier Tische bei uns unter den großen Sonnenschirmen reservieren. Die Tischdeko
            dürft Ihr gerne selbst mitbringen und alles für die Feier schön dekorieren. Für Kindergeburtstage haben
            wir ein
            <NuxtLink to="/kindergeburtstag" class="text-brand underline">separates Angebot</NuxtLink>
            erstellt – wir freuen uns auf Euren Besuch.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-2xl font-semibold text-brand">Eure Meinung zählt</h2>
          <p>
            Da wir alle nicht perfekt sind, haben wir eine Bitte: Sollte mal etwas nicht schmecken oder sonst etwas
            zu bemängeln sein, sagt uns gleich Bescheid oder schreibt eine E-Mail an
            <a :href="`mailto:${site.email}`" class="text-brand underline">{{ site.email }}</a>
            – nur so können wir „perfekter“ werden&nbsp;🙂.
          </p>
        </section>
      </div>

      <!-- Seitenleiste -->
      <aside class="space-y-6">
        <div class="rounded-2xl border-2 border-green p-6">
          <h2 class="mb-3 text-xl font-semibold text-brand">Öffnungszeiten</h2>
          <OpeningHours />
          <p class="mt-4 text-sm">
            <a :href="site.weatherUrl" target="_blank" rel="noopener noreferrer" class="text-brand underline">
              Wetter in Schwetzingen
            </a>
          </p>
        </div>
        <div class="rounded-2xl bg-sun/30 p-6">
          <h2 class="mb-2 text-xl font-semibold text-brand">Kindergeburtstag</h2>
          <p class="text-sm">Feiert den nächsten Geburtstag bei uns – mit Geburtstagspaket ab 7 Kindern.</p>
          <NuxtLink to="/kindergeburtstag" class="mt-3 inline-block font-semibold text-brand underline">
            Zum Angebot
          </NuxtLink>
        </div>
      </aside>
    </div>
  </div>
</template>
