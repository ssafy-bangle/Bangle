import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

function apiInstance() {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN + 'api',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  client.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      const token = 'Bearer ' + localStorage.getItem('accessToken');
      const Config: InternalAxiosRequestConfig = {
        ...config,
        // @ts-ignore
        headers: {
          ...config.headers,
          Authorization: token,
        },
      };
      return Config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  return client;
}

export default apiInstance;
