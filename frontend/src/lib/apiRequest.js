import axios from "axios";

const apiRequest = axios.create({
  baseURL: '/api',
  withCredentials: false,
});

export default apiRequest;