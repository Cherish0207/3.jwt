import http from '../lib/http'
export const getTest = () => {
  return http.request({
    url: '/test'
  })
}
export const getTest1 = () => {
  return http.request({
    url: '/test1'
  })
}