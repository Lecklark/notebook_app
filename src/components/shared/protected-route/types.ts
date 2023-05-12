export type ProtectedRouteProps = {
  children: JSX.Element;
  type: 'for-auth' | 'non-auth';
  redirectLink: string;
};
