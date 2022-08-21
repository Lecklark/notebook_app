import axios, {AxiosRequestConfig} from "axios";
import {BASE_API_URL} from "../constants";
import {store} from "../store";

export const apiUnprotect = axios.create({
    baseURL: BASE_API_URL,
});

export const api = axios.create({
    baseURL: BASE_API_URL,
});

api.interceptors.request.use(function (config:AxiosRequestConfig) {
    const state = store.getState();
    if (state.app.token!=="") {
        config.headers!.authorization = 'Bearer ' + state.app.token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});