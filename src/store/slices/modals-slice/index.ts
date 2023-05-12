import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModalsState, OpenModalPayload } from './types';

const initialState: ModalsState = {
  openedModal: null,
  modalProps: null,
};

export const modalsSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    openModal: (state, action: PayloadAction<OpenModalPayload>) => {
      state.openedModal = action.payload.modal;
      state.modalProps = action.payload.props;
    },
    closeModal: () => initialState,
  },
});

export const { reducer: modalsReducer, actions: modalsActions } = modalsSlice;
