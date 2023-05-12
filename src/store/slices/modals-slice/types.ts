import { AllModals, ModalsProps } from '@/types';

export interface ModalsState {
  openedModal: AllModals | null;
  modalProps: ModalsProps | null | undefined;
}

export type OpenModalPayload = { modal: AllModals; props?: ModalsProps };
