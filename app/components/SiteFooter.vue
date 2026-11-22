<template>
  <footer class="border-t border-neutral-200 bg-neutral-50 text-sm">
    <div class="mx-auto grid max-w-5xl gap-6 px-4 py-8 md:grid-cols-3">
      <div>
        <p class="font-semibold">{{ site.name }}</p>
        <p>{{ site.street }}<br>{{ site.zip }} {{ site.city }}</p>
      </div>
      <div>
        <p><a :href="site.phoneHref" class="hover:text-brand">{{ site.phone }}</a></p>
        <p><a :href="`mailto:${site.email}`" class="hover:text-brand">{{ site.email }}</a></p>
        <p>
          <a :href="site.facebook" target="_blank" rel="noopener noreferrer" class="hover:text-brand">Facebook</a>
        </p>
      </div>
      <div class="md:text-right">
        <p><NuxtLink to="/impressum" class="hover:text-brand">Impressum</NuxtLink></p>
        <p><NuxtLink to="/datenschutz" class="hover:text-brand">Datenschutz</NuxtLink></p>
      </div>
    </div>
  </footer>
</template>
