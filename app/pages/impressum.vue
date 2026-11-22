<script setup lang="ts">
useSeoMeta({ title: 'Impressum', robots: 'noindex, follow' })
</script>

<template>
  <section class="space-y-4">
    <h1 class="text-3xl font-bold text-brand">Impressum</h1>
    <!-- TODO: Vollständiges Impressum nach § 5 DDG (Name, Rechtsform, USt-IdNr. usw.) -->
    <h2 class="text-xl font-semibold">Angaben gemäß § 5 DDG</h2>
    <p>
      {{ site.name }}<br>
      Inhaber: {{ site.owner }}<br>
      {{ site.street }}<br>
      {{ site.zip }} {{ site.city }}
    </p>
    <h2 class="text-xl font-semibold">Kontakt</h2>
    <p>
      Telefon: {{ site.phone }}<br>
      E-Mail: {{ site.email }}
    </p>
  </section>
</template>
