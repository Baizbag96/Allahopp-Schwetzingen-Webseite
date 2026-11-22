<script setup lang="ts">
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => (open.value = false))
</script>

<template>
  <header class="border-b border-neutral-200 bg-white">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
      <NuxtLink to="/" class="text-xl font-bold text-brand">
        alla hopp! <span class="font-normal text-neutral-600">Schwetzingen</span>
      </NuxtLink>

      <button
        type="button"
        class="rounded p-2 md:hidden"
        :aria-expanded="open"
        aria-controls="hauptnavigation"
        @click="open = !open"
      >
        <span class="sr-only">Menü</span>
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path v-if="!open" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>

      <nav id="hauptnavigation" class="hidden md:block" aria-label="Hauptnavigation">
        <ul class="flex gap-6">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="hover:text-brand"
              active-class="text-brand font-semibold"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <nav v-if="open" class="border-t border-neutral-200 md:hidden" aria-label="Mobile Navigation">
      <ul class="flex flex-col px-4 py-2">
        <li v-for="item in navigation" :key="item.to">
          <NuxtLink :to="item.to" class="block py-2" active-class="text-brand font-semibold">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
