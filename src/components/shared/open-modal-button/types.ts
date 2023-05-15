import { ReactElement } from 'react';

import { AllModals, ModalsProps } from '@/types';

export type OpenModalButtonProps = {
  children: ReactElement;
  modal: AllModals;
  modalProps?: ModalsProps;
};
