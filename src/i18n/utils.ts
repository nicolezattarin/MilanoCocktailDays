export type Lang = 'it' | 'en';

export function getLang(pathname: string): Lang {
  return pathname.startsWith('/en') ? 'en' : 'it';
}

// Pages that have EN equivalents
const IT_TO_EN: Record<string, string> = {
  '/':                  '/en/',
  '/festival':          '/en/festival/',
  '/festival/':         '/en/festival/',
  '/sponsor':           '/en/sponsor/',
  '/sponsor/':          '/en/sponsor/',
  '/contatti':          '/en/contatti/',
  '/contatti/':         '/en/contatti/',
  '/grazie':            '/en/grazie/',
  '/grazie/':           '/en/grazie/',
  '/grazie-partner':    '/en/grazie-partner/',
  '/grazie-partner/':   '/en/grazie-partner/',
};

const EN_TO_IT: Record<string, string> = {
  '/en':                '/',
  '/en/':               '/',
  '/en/festival':       '/festival/',
  '/en/festival/':      '/festival/',
  '/en/sponsor':        '/sponsor/',
  '/en/sponsor/':       '/sponsor/',
  '/en/contatti':       '/contatti/',
  '/en/contatti/':      '/contatti/',
  '/en/grazie':         '/grazie/',
  '/en/grazie/':        '/grazie/',
  '/en/grazie-partner': '/grazie-partner/',
  '/en/grazie-partner/':'/grazie-partner/',
};

export function getAlternateUrl(pathname: string): string {
  if (pathname.startsWith('/en')) {
    return EN_TO_IT[pathname] ?? '/';
  }
  return IT_TO_EN[pathname] ?? '/en/';
}
