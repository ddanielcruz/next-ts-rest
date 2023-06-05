// Create a client for react-query with type-safety and autocompletion
import { initQueryClient } from '@ts-rest/react-query'

import { api } from '@/contract'

export const client = initQueryClient(api, {
  baseUrl: 'http://localhost:3000/api',
  baseHeaders: {}
})
