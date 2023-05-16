import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUserLang } from '@/lib/utils';

import { AppState, ChangeLangPayload, LoginPayload } from './types';

const initialState: AppState = {
  accessToken: '',
  refreshToken: '',
  isAuth: false,
  lang: getUserLang(),
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
    changeLang: (state, action: PayloadAction<ChangeLangPayload>) => {
      state.lang = action.payload;
    },
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
