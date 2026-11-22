<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
useSeoMeta({ title: 'Seite nicht gefunden', robots: 'noindex' })
</script>

<template>
  <NuxtLayout>
    <section class="space-y-4 text-center">
      <h1 class="text-3xl font-bold text-brand">{{ error.statusCode === 404 ? 'Seite nicht gefunden' : 'Fehler' }}</h1>
      <p>Die gewünschte Seite gibt es leider nicht (mehr).</p>
      <NuxtLink to="/" class="text-brand underline">Zur Startseite</NuxtLink>
    </section>
  </NuxtLayout>
</template>
