import axios from 'axios';

const instance = axios.create();

// 请求拦截器
instance.interceptors.request.use(
  (config) =>
    // 在请求发送之前做一些处理，例如添加请求头等
    config,
  (error) => Promise.reject(error),
);

// 响应拦截器
instance.interceptors.response.use(
  (response) =>
    // 在接收到响应数据之前做一些处理，例如处理错误码等
    response.data,
  (error) => Promise.reject(error),
);

export default instance;
