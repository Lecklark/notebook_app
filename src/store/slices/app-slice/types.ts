export interface AppState {
  accessToken: string;
  refreshToken: string;
  isAuth: boolean;
}

export type LoginPayload = Omit<AppState, 'isAuth'>;
