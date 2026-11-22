<template>
  <div>
    <p class="mb-2 font-medium">Saisonbetrieb von {{ site.season }}</p>
    <table class="w-full max-w-md">
      <tbody>
        <tr v-for="row in site.openingHours" :key="row.days" class="border-b border-neutral-200">
          <th scope="row" class="py-2 pr-4 text-left font-medium">{{ row.days }}</th>
          <td class="py-2">{{ row.time }}</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-3 text-sm text-neutral-600">
      Bei schlechtem Wetter (z. B. Regen oder Sturm) können sich unsere Öffnungszeiten ändern.
      Aktuelle Infos gibt es bei Google und auf
      <a :href="site.facebook" target="_blank" rel="noopener noreferrer" class="text-brand underline">Facebook</a>.
    </p>
  </div>
</template>
