import axios from 'axios';
import { setAuthTokens, clearAuthTokens, getAccessToken } from 'axios-jwt';
import { axiosInstance, BASE_URL } from './api.service';

export const login = async (params) => {
  const response = await axios.post(BASE_URL + '/auth/login', params)

  localStorage.setItem("user", JSON.stringify(response.data));

  // save token to storage
  setAuthTokens({
    accessToken: response.headers.authorization.split(' ')[1],
  });

  return response.data;
}

export const logout = () => {
  localStorage.removeItem("user");
  clearAuthTokens();
}

export const getAuthUser = async () => {
  const user = await axiosInstance.get('/auth/me');

  localStorage.setItem("user", JSON.stringify(user));

  return user;
}

export const register = async (params) => {
  const response = await axiosInstance.post('/auth/register', params);
  return response;
}
