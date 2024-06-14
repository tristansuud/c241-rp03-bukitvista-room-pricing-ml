const Axios = require("axios");

const HttpML = Axios.create({
  baseURL: "https://c241-rp03-bukitvista-room-pricing-ml-a4zfow4vpq-et.a.run.app/",
  timeout: 10000,
});

HttpML.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

HttpML.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

module.exports = HttpML;

