import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  let messages;
  switch (locale) {
    case 'fr':
      messages = (await import('../../messages/fr.json')).default;
      break;
    case 'ar':
      messages = (await import('../../messages/ar.json')).default;
      break;
    case 'en':
    default:
      messages = (await import('../../messages/en.json')).default;
      break;
  }

  return {
    locale,
    messages
  };
});
