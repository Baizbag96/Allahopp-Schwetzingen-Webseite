<script setup lang="ts">
useSeoMeta({
  title: 'Öffnungszeiten',
  description: 'Öffnungszeiten von alla hopp! Schwetzingen: Saison März bis November, Mo–Sa 11:30–19:00, So & Feiertage 10:00–19:00 Uhr.',
})
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold text-brand">Öffnungszeiten</h1>
    <OpeningHours />
    <p>
      Bei schlechtem Wetter kann es zu Änderungen kommen. Diese geben wir über Google und
      <a :href="site.facebook" target="_blank" rel="noopener noreferrer" class="text-brand underline">Facebook</a>
      bekannt.
    </p>
  </section>
</template>
