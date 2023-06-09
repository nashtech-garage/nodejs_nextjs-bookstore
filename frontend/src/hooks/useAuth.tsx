import useSWR from 'swr'
import { axios, AxiosResponse } from '@/utils'

export const useAuth = () => {
  const { data, isLoading, mutate } = useSWR(
    '/api/auth/profile',
    (url) => axios.post(url).then((res) => res.data),
    {
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
    await mutate(null, { revalidate: false })
  }

  return { user: data, isLoading, mutate, onLogin, onLogout }
}
