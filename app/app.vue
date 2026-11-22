<script setup lang="ts">
// Canonical-URL: sagt Google, welche Adresse die "richtige" ist –
// z. B. /alla-hopp statt /alla-hopp?page_id=73 (nach Weiterleitung alter Links)
const route = useRoute()
useHead({
  link: [
    {
      rel: 'canonical',
      href: computed(() => `https://allahopp-schwetzingen.de${route.path}`),
    },
  ],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
