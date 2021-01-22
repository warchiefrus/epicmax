import axios from 'axios'

const API_BASE_URL = process.env.VUE_APP_API_URL

const service = axios.create({
  baseURL: API_BASE_URL
})

export default service
