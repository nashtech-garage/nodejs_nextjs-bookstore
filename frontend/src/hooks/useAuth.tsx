import useSWR, { SWRConfiguration } from 'swr'
import { axios, AxiosResponse } from '@/utils'
import { UserModel } from '@/models'

export const useAuth = (options?: SWRConfiguration) => {
  const { data, isLoading, mutate } = useSWR<UserModel>(
    '/api/auth/profile',
    (url) => axios.post(url).then((res) => res.data),
    {
      ...options,
      errorRetryCount: 0,
      revalidateOnFocus: false,
    }
  )

  const onLogin = async (
    email: string,
    password: string
  ): Promise<AxiosResponse> => {
    const response: AxiosResponse = await axios.post('/api/auth/login', {
      email,
      password,
    })
    await mutate()
    return response
  }

  const onLogout = async () => {
    await axios.post('/api/auth/logout')
    await mutate(undefined, { revalidate: false })
  }

  const onRegister = async (
    email: string,
    password: string,
    fullName: string,
    phone: string,
    address: string
  ) => {
    const response: AxiosResponse = await axios.post('/api/auth/register', {
      email,
      password,
      fullName,
      phone,
      address,
    })
    return response
  }

  return { user: data, isLoading, mutate, onLogin, onLogout, onRegister }
}
