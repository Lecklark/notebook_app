import {store} from "../store";

export interface IContact {
    id?: number,
    fullname: string;
    email: string;
    phone: string;
    address: string;
}

export interface IUser {
    id?: string;
    username: string;
    password: string;
    comments?: IContact[];
}

export interface FormikInputProps {
    name: string;
    id?: string,
    label?: string,
}

export type apiResponseMessage = {
    message: string;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch