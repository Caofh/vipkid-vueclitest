import { callApi, createFormData } from '../_util'
import axios from 'axios'

// const axios1 = callApi('https://tpdoc.cn')
// const axios2 = callApi('http://tpdoc.cn:3001')
// const api = callApi('http://apicloud.mob.com')

const api_kid = callApi('http://gateway-dev.sayabc.com:8000')
// const qiniuBase64 = callApi('http://upload.qiniu.com/putb64/-1/key')

// 获取七牛token接口
export function getToken (para) {
  return api_kid.get(`/uploader-dev-9098/api/v1/qiniu/upload/token?${para}`)
}




// 七牛直传文件
export function uploadFile(data) {
  return axios.post('https://up.qbox.me', createFormData(data))
}


// 上传七牛base64图片接口
export function uploadImg64 (data) {
  const url = `http://upload.qiniu.com/putb64/-1/key/${data.path}`

  let obj = {}
  obj = axios.create({
    // baseURL: url,
    timeout: 10000,
    headers: {
      'Content-Type': data.contentType,
      'Authorization': data.authorization,
    }
  })

  obj.interceptors.request.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })

  obj.interceptors.response.use(res => {
    return res.data
  }, err => {

    const error = err
    return Promise.reject(error)

  })

  return obj.post( url,  data.dataURL)

}


