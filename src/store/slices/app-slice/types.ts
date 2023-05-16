import { AllLocales } from '@/lib/i18n';

export interface AppState {
  accessToken: string;
  refreshToken: string;
  isAuth: boolean;
  lang: AllLocales;
}

export type LoginPayload = Pick<AppState, 'accessToken' | 'refreshToken'>;
export type ChangeLangPayload = AllLocales;
