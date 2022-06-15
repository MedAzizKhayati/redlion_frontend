import axios from 'axios';
import { getAccessToken } from 'axios-jwt';

export const BASE_URL = 'http://51.13.117.106:80';

export const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

axiosInstance.interceptors.response.use(response => response.data);