import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../../types";

interface AppState {
    token: string;
    isAuth: boolean;
}

const initialState: AppState = {
    token: "",
    isAuth: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isAuth = true;
        },
        logout: () => initialState
    }
})

export const {login, logout} = appSlice.actions;

export const isAuthInState = (state: RootState) => state.app.isAuth

const appReducer = appSlice.reducer;
export default appReducer