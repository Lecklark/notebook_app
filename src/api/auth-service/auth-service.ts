import { apiUnprotect } from '@/api';

import {
  LoginResponse,
  LoginUser,
  RefreshTokens,
  RefreshTokensResponse,
  RegisterUser,
  RegistrationResponse,
} from './types';

class AuthService {
  registerUser: RegisterUser = async ({ email, password }) => {
    const { data } = await apiUnprotect.post<RegistrationResponse>(`/user/registration`, {
      email,
      password,
    });
    return data;
  };

  loginUser: LoginUser = async ({ email, password }) => {
    const { data } = await apiUnprotect.post<LoginResponse>(`/user/login`, {
      email,
      password,
    });
    return data;
  };

  refreshTokens: RefreshTokens = async ({ refreshToken }) => {
    const { data } = await apiUnprotect.post<RefreshTokensResponse>(`/user/refresh`, {
      refreshToken,
    });
    return data;
  };
}

export const authService = new AuthService();
