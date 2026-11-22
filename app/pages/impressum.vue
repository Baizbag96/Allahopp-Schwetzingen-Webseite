<script setup lang="ts">
useSeoMeta({ title: 'Impressum', robots: 'noindex, follow' })
</script>

<template>
  <article class="prose-text max-w-3xl">
    <h1 class="mb-4 text-3xl font-bold text-brand">Impressum</h1>

    <h2>Angaben gemäß § 5 DDG</h2>
    <p>
      {{ site.shortName }}<br>
      Inhaber: {{ site.owner }}<br>
      {{ site.street }}<br>
      {{ site.zip }} {{ site.city }}
    </p>

    <h2>Kontakt</h2>
    <p>
      Telefon: <a :href="site.phoneHref">{{ site.phone }}</a><br>
      E-Mail: <a :href="`mailto:${site.email}`">{{ site.email }}</a>
    </p>

    <!-- TODO: Falls vorhanden, Umsatzsteuer-Identifikationsnummer nach § 27a UStG ergänzen:
    <h2>Umsatzsteuer-ID</h2>
    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE…</p>
    -->

    <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
    <p>
      {{ site.owner }}<br>
      {{ site.street }}, {{ site.zip }} {{ site.city }}
    </p>

    <h2>Verbraucherstreitbeilegung</h2>
    <p>
      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teilzunehmen.
    </p>

    <h2>Hinweis zur alla hopp! Anlage</h2>
    <p>
      Die alla hopp! Bewegungs- und Begegnungsanlage ist ein Projekt der Dietmar Hopp Stiftung. Diese Website
      gehört zur dort ansässigen Gastronomie, die eigenständig betrieben wird.
    </p>
  </article>
</template>
