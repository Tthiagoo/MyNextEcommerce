import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3004'
})
export const apiStrapi = axios.create({
  baseURL: 'http://localhost:1337/'
})
