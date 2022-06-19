import axios from 'axios'

import { responseInterceptor } from './interceptors'
import { erroInterceptor } from './interceptors'

const Api = axios.create({
  baseURL: 'http://localhost:3333',
})

Api.interceptors.response.use(
  response => responseInterceptor,
  error => erroInterceptor
)

export { Api }
//! deixa a api disponivel para toda aplicação
