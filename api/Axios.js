import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BASEURL;

export const Axios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
  withCredential: true,
});

Axios.interceptors.request.use(function (config) {
  const accessToken = sessionStorage.getItem("accessToken");
  const cookie = sessionStorage.getItem("cookie");

  if (accessToken) {
    config.headers.Authorization = accessToken;
  }

  if (cookie) {
    config.headers.common["Set-Cookie"] = cookie;
  }

  return config;
});

Axios.interceptors.response.use(function (res) {
  return res;
});
