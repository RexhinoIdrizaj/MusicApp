import axios, { AxiosResponse } from "axios";
import Constants from "expo-constants";


const BASE_URL = Constants.manifest?.extra?.baseUrl;

const instance = axios.create({
  baseURL: BASE_URL,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;
