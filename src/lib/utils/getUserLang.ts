import { AllLocales, LOCALES } from '@/lib/i18n';

export const getUserLang = () => {
  const userLang = navigator.language;
  let hasTranslation = false;

  Object.entries(LOCALES).forEach(([key, value]) => {
    if (value === userLang) {
      hasTranslation = true;
    }
  });

  const translation = hasTranslation ? (userLang as AllLocales) : LOCALES.ENGLISH;

  return translation;
};
