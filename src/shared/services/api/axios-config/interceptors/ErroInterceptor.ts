import {AxiosError} from 'axios'

//! para tratamentos de erro 
export const erroInterceptor = (error: AxiosError) => {
    if(error.message === 'Network Erro') {
        return Promise.reject(new Error('Erro de conexão.'))
    }

    if(error.response?.status === 401) {
        // return Promise.reject(new Error('Erro de conexão.'))
        // apenas como exemplo autentificação
    }

    return Promise.reject(error)
    //!  Promise.reject(error), ignora tudo caso não de erro
}
 