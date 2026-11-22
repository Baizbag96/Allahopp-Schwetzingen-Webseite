<script setup lang="ts">
useSeoMeta({
  title: 'Kontakt',
  description: 'Kontakt zu alla hopp! Schwetzingen – Adresse, Telefon und E-Mail.',
})
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold text-brand">Kontakt</h1>
    <address class="not-italic">
      <p class="font-semibold">{{ site.name }}</p>
      <p>{{ site.street }}<br>{{ site.zip }} {{ site.city }}</p>
      <p class="mt-3">Telefon: <a :href="site.phoneHref" class="text-brand underline">{{ site.phone }}</a></p>
      <p>E-Mail: <a :href="`mailto:${site.email}`" class="text-brand underline">{{ site.email }}</a></p>
    </address>

    <!-- Kein eingebettetes Google Maps (DSGVO) – nur ein Link -->
    <a
      :href="site.mapsUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block rounded bg-brand px-4 py-2 font-semibold text-white hover:bg-brand-dark"
    >
      Route in Google Maps öffnen
    </a>
  </section>
</template>
