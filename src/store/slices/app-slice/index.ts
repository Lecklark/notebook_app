import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { AppState, LoginPayload } from './types';

const initialState: AppState = {
  accessToken: '',
  refreshToken: '',
  isAuth: false,
};

export const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isAuth = true;
    },
    logout: () => initialState,
  },
});

export const { login, logout } = appSlice.actions;
export const appReducer = appSlice.reducer;
