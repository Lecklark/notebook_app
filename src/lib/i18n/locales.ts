export enum LOCALES {
  RUSSIAN = 'ru-RU',
  ENGLISH = 'en-EN',
}

export type AllLocales = keyof Record<LOCALES, string>;
