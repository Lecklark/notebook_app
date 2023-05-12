import { FC } from 'react';

import { useModalController } from '@/lib/hooks';

import { OpenModalButtonProps } from './types';

export const OpenModalButton: FC<OpenModalButtonProps> = ({
  children,
  modal,
  modalProps,
}) => {
  const [, open] = useModalController(modal, modalProps);

  return (
    <div onClick={open} role='button' tabIndex={0}>
      {children}
    </div>
  );
};
