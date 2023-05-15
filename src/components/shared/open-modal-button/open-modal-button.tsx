import { cloneElement, FC } from 'react';

import { useModalController } from '@/lib/hooks';

import { OpenModalButtonProps } from './types';

export const OpenModalButton: FC<OpenModalButtonProps> = ({
  children,
  modal,
  modalProps,
}) => {
  const [, open] = useModalController(modal, modalProps);

  return cloneElement(children, {
    onClick: () => open(),
  });
};
