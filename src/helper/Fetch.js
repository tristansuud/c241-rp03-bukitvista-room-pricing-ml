import Axios from "axios";

const Http = Axios.create({
  baseURL: "http://localhost:3077",
  timeout: 1000,
});

Http.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
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