import axios from "axios";

class FetchData {
  constructor() {
    this.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/"; // 请求路径
    this.timeout = 3000; // 设置超时时间
  }

  setInterceptor(instance) {
    // 设置拦截器
    instance.interceptors.request.use(
      config => {
        // config.headers.a = 1
        config.headers.Authorization = `${localStorage.getItem("token")}`;
        return config; // 增加token
      },
      err => {
        Promise.reject(err);
      }
    );

    instance.interceptors.response.use(
      res => res.data,
      err => {
        Promise.reject(err);
      }
    );
  }
  // 用户请求设置的方法
  // 每次请求返回一个新的实例，保证拦截器不会被复用
  request(request) {
    const instance = axios.create();
    const config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...request
    }; // 合并配置
    this.setInterceptor(instance);
    return instance(config);
  }
}

export default new FetchData();
