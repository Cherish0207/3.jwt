import http from '../lib/http'
export const getTest = () => {
  http.interceptors.request.use(config => {
    console.log(config);
    console.log(3);
    return config;
  });
  return http({
    url: '/test'
  })
}
export const getTest1 = () => {
  return http({
    url: '/test1'
  })
}