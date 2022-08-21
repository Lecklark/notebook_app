import {apiUnprotect} from "../index";
import {apiResponseMessage, IUser} from "../../types";
import {AxiosError} from "axios";

type loginResponse = {
    token:string;
}

export const login = async ({username,password}:IUser) => {
    try{
        const {data}:{data:loginResponse} = await apiUnprotect.post('/api/auth/login',{username,password});
        return data
    } catch (e) {
        throw e
    }
}

export const registration = async ({username, password}: IUser) => {
    try {
        const {data}: { data: apiResponseMessage } = await apiUnprotect.post('/api/auth/registration', {username, password});
        return data
    } catch (e:unknown | AxiosError) {
        throw e
    }
};