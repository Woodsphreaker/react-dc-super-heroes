import axios from 'axios'

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api',
})

export default api
