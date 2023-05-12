import { useMutation } from '@tanstack/react-query';

import { AuthUser } from '@/types';

import { authService } from './auth-service';

export function useLogin() {
  return useMutation((data: AuthUser) => authService.loginUser(data));
}

export function useRegistration() {
  return useMutation((data: AuthUser) => authService.registerUser(data));
}
