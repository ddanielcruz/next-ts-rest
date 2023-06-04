import { initQueryClient } from '@ts-rest/react-query'
import { api } from './contract'

console.log(process.env)
export const client = initQueryClient(api, {
  baseUrl: 'http://localhost:3000/api',
  baseHeaders: {}
})
