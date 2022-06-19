import axios from 'axios'

import { responseInterceptor, erroInterceptor } from './interceptors'
import { Environment } from './../../../environment/index'

const Api = axios.create({
  baseURL: Environment.URL_BASE,
})

Api.interceptors.response.use(
  response => responseInterceptor(response),
  error => erroInterceptor(error)
)

export { Api }
//! deixa a api disponivel para toda aplicação
