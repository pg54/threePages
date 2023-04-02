import axios from "axios";
import router from "../router";

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // 如果有令牌，则在每个请求的头部添加令牌
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if ( response.status === 400 || response.data.result === '2009') { 
      // 如果返回的状态码是 2009，说明令牌过期了
      // 清除令牌并跳转到登录页面
      localStorage.removeItem('token')
      router.push('/login');
    }
    // 直接返回 response.data
    return response.data
  },
  (error) => {
    // 处理错误
    const { status } = error.response
    if (status === 400 || status === 401) {
      // 如果返回的状态码是 400 或 401，说明令牌过期了
      localStorage.removeItem('token');
      router.push('/login');
    }
    return Promise.reject(error)
  }
)

export default instance;
