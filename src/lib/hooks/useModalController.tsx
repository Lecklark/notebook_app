import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalIsOpenedInState } from '@/store/selectors';
import { closeModal, openModal } from '@/store/slices/modals-slice';
import { AllModals, ModalsProps } from '@/types';

export const useModalController = (modal: AllModals, modalProps?: ModalsProps) => {
  const isOpen = useAppSelector(modalIsOpenedInState(modal));
  const dispatch = useAppDispatch();

  const close = useCallback(() => {
    dispatch(closeModal());
  }, []);

  const open = useCallback(() => {
    dispatch(openModal({ modal, props: modalProps }));
  }, [modal, modalProps]);

  const api: [boolean, () => void, () => void] = [isOpen, open, close];

  return api;
};
