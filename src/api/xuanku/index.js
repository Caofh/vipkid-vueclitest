import { callApi } from '../_util'

const axios = callApi('https://tpdoc.cn')
const axios2 = callApi('http://tpdoc.cn:3001')
const api = callApi('http://apicloud.mob.com')

export function getList () {
  return axios2.get('/xuanku/searchUser')
}


