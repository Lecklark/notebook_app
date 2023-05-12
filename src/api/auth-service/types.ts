import { AuthUser } from '@/types';

export type TokensResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RegistrationResponse = TokensResponse;
export type LoginResponse = TokensResponse;
export type RefreshTokensResponse = TokensResponse;

export type RegistrationPayload = AuthUser;
export type LoginPayload = AuthUser;

export type RefreshPayload = {
  refreshToken: string;
};

export type RegisterUser = (
  payload: RegistrationPayload,
) => Promise<RegistrationResponse>;
export type LoginUser = (payload: LoginPayload) => Promise<LoginResponse>;
export type RefreshTokens = (payload: RefreshPayload) => Promise<RefreshTokensResponse>;
