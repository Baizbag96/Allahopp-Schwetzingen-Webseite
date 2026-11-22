<template>
  <div class="flex min-h-screen flex-col bg-white text-neutral-800">
    <SiteHeader />
    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
