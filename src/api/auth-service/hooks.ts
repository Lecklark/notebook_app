import { useMutation } from '@tanstack/react-query';

import { AuthUser } from '@/types';

import { loginUser, registerUser } from './auth-service';

export function useLogin() {
  return useMutation((data: AuthUser) => loginUser(data));
}

export function useRegistration() {
  return useMutation((data: AuthUser) => registerUser(data));
}
