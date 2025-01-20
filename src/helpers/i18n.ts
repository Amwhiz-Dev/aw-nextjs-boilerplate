import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // load translations using http (like fetching from public folder)
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng: 'en',
    lng: 'en', // default language
    supportedLngs: ['en', 'fr', 'ar'], // supported languages
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // path to translation files
    },
    ns: ['common'], // specify namespaces (use 'common' instead of 'translation')
    defaultNS: 'common', // set default namespace
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false, // to prevent the need for wrapping everything in Suspense
    },
  });

export default i18n;