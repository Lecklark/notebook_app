import { RootState } from '../types';

// app-slice
export const isAuthInState = (state: RootState) => state.app.isAuth;
