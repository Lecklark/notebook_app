import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/store/hooks';
import { isAuthInState } from '@/store/selectors';

import { ProtectedRouteProps } from './types';

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  type,
  redirectLink,
}) => {
  const isAuth = useAppSelector(isAuthInState);
  const needRedirect = type === 'for-auth' ? !isAuth : isAuth;

  if (needRedirect) {
    return <Navigate to={redirectLink} />;
  }

  return <>{children}</>;
};
