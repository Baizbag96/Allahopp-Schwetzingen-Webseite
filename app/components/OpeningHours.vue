<template>
  <div>
    <p class="mb-2 text-sm text-neutral-600">Saison: {{ site.season }}</p>
    <table class="w-full max-w-md">
      <tbody>
        <tr v-for="row in site.openingHours" :key="row.days" class="border-b border-neutral-200">
          <th scope="row" class="py-2 pr-4 text-left font-medium">{{ row.days }}</th>
          <td class="py-2">{{ row.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
