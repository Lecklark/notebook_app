import { ReactNode } from 'react';

export type FormWrapperProps = {
  title?: string;
  formComponent: ReactNode;
  linkText?: string;
  linkHref?: string;
};
