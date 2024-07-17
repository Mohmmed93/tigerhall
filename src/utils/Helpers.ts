import { AppConfig } from './AppConfig';

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_TIGER_HALL_CONTENT_URL) {
    return process.env.NEXT_PUBLIC_TIGER_HALL_CONTENT_URL;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === AppConfig.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};
