import {
  BASE_URL,
  COOKIES,
  ERROR_MESSAGES,
  PREFIX,
  VERSION,
} from "@/constants";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Cookie from "js-cookie";

const APIGateway = axios.create({
  baseURL: `${BASE_URL}${PREFIX}${VERSION}`,
  timeout: 30000,
  timeoutErrorMessage: ERROR_MESSAGES.TIME_OUT,
});

APIGateway.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    const token = Cookie.get(COOKIES.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

APIGateway.interceptors.response.use(
  function (response: AxiosResponse<any>) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default APIGateway;
