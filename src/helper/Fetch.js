import Axios, { AxiosRequestConfig } from "axios";

const Http = Axios.create({
  baseURL: "http://localhost:5502",
  timeout: 1000,
});

Http.interceptors.request.use(
  async (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

Http.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Http;