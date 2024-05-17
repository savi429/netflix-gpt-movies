import axios from "axios";
import { error } from "console";
// import { setupCache } from "axios-cache-adapter";

// const cache = setupCache({ maxAge: 15 * 60 * 1000 }); // 15 minutes

let instance = axios.create({
  baseURL: "https://basedomain.com/api/",
  timeout: 10000,
  //   adapter: cache.adapter,
});

const cache = {};
instance.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    const cachedResponse = cache[config.url];
    if (cachedResponse) {
      return Promise.resolve(cachedResponse);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.respose.use(
  function (response) {
    const config = response.config;
    cache[config.url] = response;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const http = instance;
