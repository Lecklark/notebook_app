import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';

import { refreshTokens } from '@/api/auth-service';
import { BASE_API_URL } from '@/lib/constants';
import { store } from '@/store';
import { appActions } from '@/store/slices/app-slice';

export const apiUnprotect = axios.create({
  baseURL: BASE_API_URL,
});

export const apiProtected = axios.create({
  baseURL: BASE_API_URL,
});

const handleRequestFulfilled = (config: InternalAxiosRequestConfig) => {
  const state = store.getState();
  const token = state.app.accessToken;
  if (token) {
    config.headers.authorization = 'Bearer ' + token;
  }
  return config;
};

const handleRequestRejected = (error: AxiosError | Error) => Promise.reject(error);

const handleResponseFulfilled = (response: AxiosResponse) => response;

let isRetry = false;

const handleResponseRejected = async (error: AxiosError | Error) => {
  const dispatch = store.dispatch;
  try {
    if (!isAxiosError(error)) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !isRetry && originalRequest) {
      isRetry = true;
      const state = store.getState();
      const refreshToken = state.app.refreshToken;
      const tokens = await refreshTokens({ refreshToken });
      dispatch(appActions.login(tokens));
      isRetry = false;
      return apiProtected.request(originalRequest);
    }
  } catch (err) {
    isRetry = false;
    dispatch(appActions.logout());
  }
};

apiProtected.interceptors.request.use(handleRequestFulfilled, handleRequestRejected);
apiProtected.interceptors.response.use(handleResponseFulfilled, handleResponseRejected);
