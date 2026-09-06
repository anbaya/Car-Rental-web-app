export const defaultLocale = 'en';
export const locales = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof locales)[number];
