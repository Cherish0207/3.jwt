import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : '/'
})
instance.interceptors.request.use((config) => {
  console.log(1);
  return config
})

instance.interceptors.request.use((config) => {
  console.log(2);
  return config
})

export default instance