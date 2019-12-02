import axios from 'axios'

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api',
  params: {
    teste: 'ok',
  },
})
api.interceptors.request.use(config => {
  return {
    ...config,
    params: {
      testing: 456,
      lorem: 789,
    },
  }
})

export default api
