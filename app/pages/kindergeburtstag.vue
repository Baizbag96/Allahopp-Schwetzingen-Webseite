<script setup lang="ts">
useSeoMeta({
  title: 'Kindergeburtstag',
  description: 'Kindergeburtstag feiern bei alla hopp! Schwetzingen – Angebot und Reservierung.',
})
</script>

<template>
  <section class="space-y-4">
    <h1 class="text-3xl font-bold text-brand">Kindergeburtstag</h1>
    <!-- TODO: Angebot und Details von /?page_id=4606 der alten Seite übernehmen -->
    <p>Inhalt folgt.</p>
    <p>
      Reservierungen per E-Mail an
      <a :href="`mailto:${site.email}`" class="text-brand underline">{{ site.email }}</a>
      oder telefonisch unter
      <a :href="site.phoneHref" class="text-brand underline">{{ site.phone }}</a>.
    </p>
  </section>
</template>
