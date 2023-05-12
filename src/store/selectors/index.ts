import { createSelector } from 'reselect';

import { AllModals } from '@/types';

import { RootState } from '../types';

// app-slice
export const isAuthInState = (state: RootState) => state.app.isAuth;

// modals-slice
export const openedModalInState = (state: RootState) => state.modals.openedModal;
export const modalIsOpenedInState = (awaitedModal: AllModals) =>
  createSelector(openedModalInState, (currentModal) => currentModal === awaitedModal);
export const modalPropsInState = (state: RootState) => state.modals.modalProps;
