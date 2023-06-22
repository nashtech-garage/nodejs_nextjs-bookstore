import axios from 'axios'

export interface AxiosResponse<T = unknown> {
  message: string
  data?: T
}

// Axios for Client Side
export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE,
})

axiosClient.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error.response.data)
  }
)

// Axios for Server Side
// We must replace localhost to 127.0.0.1 
// https://stackoverflow.com/questions/75841179/nextjs-api-axios-nextauth-issue-axioserror-connect-econnrefused-13000
export const axiosServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE?.replace('localhost', '127.0.0.1'),
})

axiosServer.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosServer.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error.response.data)
  }
)
