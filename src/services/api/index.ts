import { message } from "antd";
import axios from "axios";

const client = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getIdToken = () => localStorage.getItem("token") || "";

client.interceptors.request.use(
  (config) => {
    const token = getIdToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      message.error("Seu acesso expirou. Faça login.");
      localStorage.clear();
      setTimeout(() => window.location.reload(), 3000);
    }

    if (error.response?.status === 404 && !error.config?.skipNotFound) {
      message.error("Recurso não encontrado");
    } else if (error.response?.status >= 500) {
      message.error("Erro inesperado no servidor. Tente novamente mais tarde.");
    }

    return Promise.reject(error);
  },
);

export const get = (url: string, headers = {}): Promise<any> => client.get(url, headers);
export const post = (url: string, data: any, headers = {}): Promise<any> =>
  client.post(url, data, headers);
export const put = (url: string, data: any, headers = {}): Promise<any> =>
  client.put(url, data, headers);
export const remove = (url: string, data: any = undefined): Promise<any> =>
  client.delete(url, { data });

const httpService = {
  get,
  post,
  put,
  remove,
};

export default httpService;
