import { callApi } from '../_util'

const axios = callApi('https://tpdoc.cn')
const axios_php = callApi('https://tpdoc.cn', 'php')
const axios2 = callApi('http://tpdoc.cn:3001')
const api = callApi('http://apicloud.mob.com')

export function getList () {
  return axios2.get('/xuanku/searchUser')
}

// 上传裁剪后的base64图片流
export function uploadBase64Img (data) {
  return axios_php.post(`/api/common/base64_change`, data)
}

// 更新用户信息接口
export function updateUser (data) {
  return axios2.post(`/xuanku/updateUser`, data)
}

// 用户注册
export function addUser (data) {
  return axios2.post(`/xuanku/addUser`, data)
}

// 获取用户信息接口
export function getChallengeList (para) {
  if (para) {
    return axios2.get(`/xuanku/getChallengeList?${para}`)
  } else {
    return axios2.get(`/xuanku/getChallengeList`)
  }

}


