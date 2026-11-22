// Zentrale Stammdaten – an einer Stelle pflegen, überall verwenden.
export const site = {
  name: 'alla hopp! Schwetzingen',
  owner: 'Ismail', // TODO: vollständiger Name für Impressum
  street: 'Hockenheimer Landstraße 7',
  zip: '68723',
  city: 'Schwetzingen',
  phone: '06202 9546252',
  phoneHref: 'tel:+4962029546252',
  email: 'info@allahopp-schwetzingen.de',
  facebook: 'https://www.facebook.com/allahoppschwetzingen/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Hockenheimer+Landstra%C3%9Fe+7+68723+Schwetzingen',
  season: 'März bis November',
  openingHours: [
    { days: 'Montag – Samstag', time: '11:30 – 19:00 Uhr' },
    { days: 'Sonntag & Feiertage', time: '10:00 – 19:00 Uhr' },
  ],
} as const

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'alla Hopp', to: '/alla-hopp' },
  { label: 'Kindergeburtstag', to: '/kindergeburtstag' },
  { label: 'Öffnungszeiten', to: '/oeffnungszeiten' },
  { label: 'Kontakt', to: '/kontakt' },
] as const
