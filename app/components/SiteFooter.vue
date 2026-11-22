<template>
  <footer class="bg-brand text-sm text-white">
    <div class="mx-auto grid max-w-5xl gap-6 px-4 py-8 md:grid-cols-3">
      <div>
        <p class="font-semibold">{{ site.shortName }}</p>
        <p>{{ site.street }}<br>{{ site.zip }} {{ site.city }}</p>
      </div>
      <div>
        <p><a :href="site.phoneHref" class="hover:text-sun">{{ site.phone }}</a></p>
        <p><a :href="`mailto:${site.email}`" class="hover:text-sun">{{ site.email }}</a></p>
        <p>
          <a :href="site.facebook" target="_blank" rel="noopener noreferrer" class="hover:text-sun">Facebook</a>
        </p>
      </div>
      <div class="md:text-right">
        <p><NuxtLink to="/impressum" class="hover:text-sun">Impressum</NuxtLink></p>
        <p><NuxtLink to="/datenschutz" class="hover:text-sun">Datenschutz</NuxtLink></p>
      </div>
    </div>
  </footer>
</template>
