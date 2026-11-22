<script setup lang="ts">
useSeoMeta({ title: 'Datenschutz', robots: 'noindex, follow' })
</script>

<!--
  ENTWURF – vor dem Livegang prüfen:
  - Hoster bestätigen (aktuell Netlify) und AV-Vertrag (DPA) abschließen
  - Mail-Anbieter eintragen, sobald gebucht (z. B. mailbox.org) und AV-Vertrag abschließen
  - Bei Änderungen an der Technik (Kontaktformular, Karten, Videos) ergänzen
-->
<template>
  <article class="prose-text max-w-3xl">
    <h1 class="mb-4 text-3xl font-bold text-brand">Datenschutzerklärung</h1>

    <h2>1. Verantwortlicher</h2>
    <p>
      {{ site.shortName }}<br>
      Inhaber: {{ site.owner }}<br>
      {{ site.street }}, {{ site.zip }} {{ site.city }}<br>
      Telefon: {{ site.phone }}<br>
      E-Mail: <a :href="`mailto:${site.email}`">{{ site.email }}</a>
    </p>

    <h2>2. Allgemeines</h2>
    <p>
      Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website ist bewusst schlank gehalten: Wir setzen
      <strong>keine Cookies</strong>, verwenden <strong>keine Analyse- oder Tracking-Dienste</strong>, laden
      <strong>keine externen Schriftarten</strong> und binden <strong>keine Karten, Videos oder Social-Media-Plugins</strong>
      ein. Personenbezogene Daten werden nur in dem unten beschriebenen Umfang verarbeitet.
    </p>

    <h2>3. Hosting und Server-Logfiles</h2>
    <p>
      Diese Website wird bei Netlify, Inc. (USA) gehostet. Beim Aufruf der Website verarbeitet der Hoster
      automatisch Informationen, die Ihr Browser übermittelt (sog. Server-Logfiles):
    </p>
    <ul>
      <li>IP-Adresse</li>
      <li>Datum und Uhrzeit des Zugriffs</li>
      <li>aufgerufene Seite bzw. Datei</li>
      <li>Referrer-URL (zuvor besuchte Seite)</li>
      <li>verwendeter Browser und Betriebssystem</li>
    </ul>
    <p>
      Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in
      der sicheren und störungsfreien Bereitstellung der Website. Mit dem Hoster besteht ein Vertrag zur
      Auftragsverarbeitung nach Art. 28 DSGVO. Die Übermittlung in die USA erfolgt auf Grundlage des
      EU-US Data Privacy Framework bzw. von EU-Standardvertragsklauseln.
    </p>

    <h2>4. Kontakt per E-Mail oder Telefon</h2>
    <p>
      Wenn Sie uns per E-Mail oder Telefon kontaktieren (z. B. für eine Reservierung), verarbeiten wir Ihre Angaben
      (Name, Kontaktdaten, Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1
      lit. b DSGVO, soweit Ihre Anfrage mit einem Vertrag (z. B. einer Reservierung) zusammenhängt, ansonsten Art. 6
      Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind und keine gesetzlichen
      Aufbewahrungspflichten entgegenstehen.
    </p>

    <h2>5. Links zu anderen Websites</h2>
    <p>
      Unsere Website enthält Links zu externen Angeboten (z. B. Facebook, Google Maps, wetter.com). Diese Inhalte
      werden nicht eingebettet. Erst wenn Sie einen Link anklicken, verlassen Sie unsere Website, und es gelten die
      Datenschutzbestimmungen des jeweiligen Anbieters.
    </p>

    <h2>6. Ihre Rechte</h2>
    <p>Sie haben jederzeit das Recht auf:</p>
    <ul>
      <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
      <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
      <li>Löschung (Art. 17 DSGVO)</li>
      <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
      <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
      <li>Widerspruch gegen die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
    </ul>
    <p>Wenden Sie sich dazu einfach an die oben genannten Kontaktdaten.</p>

    <h2>7. Beschwerderecht bei der Aufsichtsbehörde</h2>
    <p>
      Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für uns ist der
      Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20,
      70173 Stuttgart.
    </p>

    <p class="mt-8 text-sm text-neutral-500">Stand: November 2026</p>
  </article>
</template>
