import AxiosStatic from 'axios'

export interface AxiosResponse<T = unknown> {
  message: string
  data?: T
}

export const axios = AxiosStatic.create({})

axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error.response.data)
  }
)
