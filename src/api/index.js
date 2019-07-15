import axios from 'axios'

import { URL, HTTP_OK } from './config'

axios.defaults.timeout = 10000
axios.defaults.baseURL = URL
// 发送请求与数据返回之前 检测一下
axios.interceptors.response.use((res) => {
  // 请求成功但是 状态码错误
  if (res.data.code !== HTTP_OK) {
    window.alert('网络错误')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  // 请求未成功
  window.alert('网络错误')
  return Promise.reject(error)
})

function fetchGet(url ,param = '') {
  return new Promise((resolve,reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}
export const getBanner = fetchGet('/banner')
export const getPlayList = fetchGet('/personalized')
export function getPlayDetail(id){
  console.log(id)
  return fetchGet('/playlist/detail', {id: id})
}