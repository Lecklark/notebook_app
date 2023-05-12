import { ReactNode } from 'react';

import { AllModals, ModalsProps } from '@/types';

export type OpenModalButtonProps = {
  children: ReactNode;
  modal: AllModals;
  modalProps?: ModalsProps;
};
