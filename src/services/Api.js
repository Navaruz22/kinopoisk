import axios from "axios";
import { API_KEY } from "../constants/constants";

const instance = axios.create({
  baseURL: "https://api.kinopoisk.dev",
  headers: {
    "Content-type": "application/json",
  },
  params: {
    token: API_KEY,
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
