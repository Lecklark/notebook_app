import { InputProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type FormikInputProps = InputProps & {
  name: string;
  label?: string;
  rightElement?: ReactNode;
};
