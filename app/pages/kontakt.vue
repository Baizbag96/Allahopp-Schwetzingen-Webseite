<script setup lang="ts">
useSeoMeta({
  title: 'Kontakt',
  description: 'Kontakt zu alla hopp! Schwetzingen – Hockenheimer Landstraße 7, 68723 Schwetzingen, Telefon 06202 9546252.',
})
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold text-brand">Kontakt</h1>

    <address class="space-y-3 not-italic">
      <p>
        <span class="font-semibold">{{ site.shortName }}</span><br>
        {{ site.street }}<br>
        {{ site.zip }} {{ site.city }}
      </p>
      <p>
        Telefon: <a :href="site.phoneHref" class="text-brand underline">{{ site.phone }}</a><br>
        Mobil: <a :href="site.mobileHref" class="text-brand underline">{{ site.mobile }}</a><br>
        E-Mail: <a :href="`mailto:${site.email}`" class="text-brand underline">{{ site.email }}</a>
      </p>
      <p>
        <a :href="site.facebook" target="_blank" rel="noopener noreferrer" class="text-brand underline">alla hopp Schwetzingen auf Facebook</a>
      </p>
    </address>

    <!-- Kein eingebettetes Google Maps (DSGVO) – nur ein Link -->
    <a
      :href="site.mapsUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark"
    >
      Route in Google Maps öffnen
    </a>
  </section>
</template>
