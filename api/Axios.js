import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BASEURL;

export const Axios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
});

Axios.interceptors.request.use(function (config) {
  const accessToken = sessionStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }
  return config;
});

Axios.interceptors.response.use(function (res) {
  return res;
});
