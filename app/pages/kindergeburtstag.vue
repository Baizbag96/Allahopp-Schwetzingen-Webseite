<script setup lang="ts">
useSeoMeta({
  title: 'Kindergeburtstag',
  description:
    'Kindergeburtstag an der alla hopp! Anlage Schwetzingen feiern: Geburtstagspaket ab 7 Kindern mit Pizza oder Nuggets, Getränk und Eis – 149 € für 7 Kinder und 2 Begleitpersonen.',
})
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <h1 class="text-3xl font-bold text-brand">Kindergeburtstag feiern</h1>
      <p class="text-lg">
        Der nächste Kindergeburtstag Eures Sohnes oder Eurer Tochter steht an und Ihr sucht einen
        außergewöhnlichen, fröhlichen und kindgerechten Ort zum Feiern? Dann seid Ihr an der alla hopp Anlage
        Schwetzingen genau richtig.
      </p>
      <p>
        Hier können sich Eure kleinen Gäste so richtig austoben, klettern, balancieren und spielen. Langeweile
        kommt bei diesem riesigen Spielplatz sicher nicht auf. Und wenn die Geburtstagsgäste vom Toben so richtig
        hungrig sind, können sie sich bei einem leckeren Essen stärken.
      </p>
    </section>

    <section class="rounded-2xl border-2 border-green p-6 md:p-8">
      <h2 class="text-2xl font-semibold text-brand">Unser Geburtstagspaket ab 7 Kindern</h2>

      <h3 class="mt-5 font-semibold">Reservierte Tische</h3>
      <p>11:30 – 14:30 Uhr oder 15:30 – 18:30 Uhr</p>

      <h3 class="mt-5 font-semibold">Inklusive für jedes Kind</h3>
      <ul class="mt-1 list-disc space-y-1 pl-6">
        <li>1 Pizza Margherita oder 1 Pizza Salami, Penne-Nudeln oder 6er Chicken Nuggets mit Pommes (zur Wahl)</li>
        <li>1 Getränk 0,5 l (Cola, Fanta, Apfelschorle oder Wasser)</li>
        <li>1 Eis nach Wahl</li>
      </ul>

      <div class="mt-6 rounded-xl bg-brand-light p-4">
        <p class="text-xl font-bold text-brand">149,00 €</p>
        <p>für 7 Kinder + 2 Begleitpersonen, zzgl. 15,00 € für jede weitere Person</p>
      </div>

      <ul class="mt-6 list-disc space-y-1 pl-6">
        <li>Begleitpersonen haben freie Wahl bei der Speisenauswahl aus unserer <a :href="site.files.speisen" target="_blank" class="text-brand underline">Speisekarte</a>.</li>
        <li>Bei Allergien oder für Vegetarier einfach anfragen – auch hier haben wir passende Speisen.</li>
        <li>Alle nicht im Paket aufgeführten Produkte können gerne à la carte dazu bestellt werden.</li>
        <li>Deko und Geburtstagskuchen dürft Ihr gerne selbst mitbringen.</li>
        <li>Reservierungen für Kindergeburtstage sind nur von Montag bis Samstag möglich.</li>
      </ul>
    </section>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold text-brand">Reservierung</h2>
      <p>
        Reservierungsanfragen nehmen wir gerne per E-Mail an
        <a :href="`mailto:${site.email}?subject=Kindergeburtstag`" class="text-brand underline">{{ site.email }}</a>,
        telefonisch unter <a :href="site.phoneHref" class="text-brand underline">{{ site.phone }}</a>
        oder direkt am Kiosk auf der Anlage entgegen.
      </p>
      <p>Gerne könnt Ihr auch unser Anmeldeformular nutzen:</p>
      <a
        :href="site.files.geburtstagFlyer"
        target="_blank"
        class="inline-block rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark"
      >
        Flyer & Anmeldeformular (PDF)
      </a>
      <p class="pt-4">Wir freuen uns auf ein gelungenes Geburtstagsfest mit Euch!</p>
    </section>
  </div>
</template>
