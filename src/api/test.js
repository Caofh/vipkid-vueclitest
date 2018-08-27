import { callApi } from './_util'

const axios = callApi('https://tpdoc.cn')
const axios2 = callApi('http://tpdoc.cn:3001')
const api = callApi('http://apicloud.mob.com')

export function getList () {
  return axios.get('/api/person_page')
}


export function weatherInfo (para) {
  return axios2.get(`/getWeatherDetail?` + para)
}
