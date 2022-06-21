import axios from 'axios';
import { getAccessToken } from 'axios-jwt';

export const BASE_URL = 'https://redlion-api.herokuapp.com';

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