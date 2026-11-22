<script setup lang="ts">
useSeoMeta({
  title: 'Öffnungszeiten',
  description:
    'Öffnungszeiten von alla hopp! Schwetzingen: Saisonbetrieb März bis November, Mo–Sa 11:30–19:00 Uhr, So & Feiertage 10:00–19:00 Uhr.',
})
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold text-brand">Öffnungszeiten</h1>
    <OpeningHours />
    <p>
      Die alla hopp Anlage selbst ist ganzjährig geöffnet – unabhängig von den Öffnungszeiten der Gastronomie.
    </p>
    <p>
      Für Geburtstagsreservierungen könnt Ihr Euch gerne bei uns melden oder
      <a :href="site.files.geburtstagFlyer" target="_blank" class="text-brand underline">unseren Flyer herunterladen</a>.
    </p>
    <p>
      <a :href="site.weatherUrl" target="_blank" rel="noopener noreferrer" class="text-brand underline">Wetter in Schwetzingen</a>
    </p>
  </section>
</template>
