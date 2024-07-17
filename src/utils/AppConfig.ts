import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefix = 'as-needed';

export const AppConfig = {
  name: 'Tigerhall',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
