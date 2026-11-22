// Zentrale Stammdaten – an einer Stelle pflegen, überall verwenden.
export const site = {
  name: 'alla hopp! Schwetzingen',
  shortName: 'Bistro & Café alla hopp Schwetzingen',
  owner: 'Ismail Miran',
  street: 'Hockenheimer Landstraße 7',
  zip: '68723',
  city: 'Schwetzingen',
  phone: '06202 9546252',
  phoneHref: 'tel:+4962029546252',
  mobile: '0176 34393203',
  mobileHref: 'tel:+4917634393203',
  email: 'info@allahopp-schwetzingen.de',
  facebook: 'https://www.facebook.com/allahoppschwetzingen/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Hockenheimer+Landstra%C3%9Fe+7+68723+Schwetzingen',
  weatherUrl: 'https://www.wetter.com/deutschland/schwetzingen/DE0009726.html',
  season: 'März bis November',
  openingHours: [
    { days: 'Montag – Samstag', time: '11:30 – 19:00 Uhr' },
    { days: 'Sonntag & Feiertage', time: '10:00 – 19:00 Uhr' },
  ],
  files: {
    speisen: '/karten/speisen.pdf',
    getraenke: '/karten/getraenke.pdf',
    geburtstagFlyer: '/karten/geburtstag-flyer.pdf',
  },
} as const

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'alla Hopp', to: '/alla-hopp' },
  { label: 'Kindergeburtstag', to: '/kindergeburtstag' },
  { label: 'Öffnungszeiten', to: '/oeffnungszeiten' },
  { label: 'Kontakt', to: '/kontakt' },
] as const
