import '@/styles/global.scss'
import { AppProps } from 'next/app'

import { useAuth } from '@/hooks'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { LayoutDefault } from '@/components'

type CustomAppProps = AppProps & {
  Component: React.Component & {
    layout: ({ children }: { children: React.ReactNode }) => JSX.Element
  }
}

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  const { isLoading, user, onLogout } = useAuth()
  const Layout = Component.layout ? Component.layout : LayoutDefault

  if (isLoading) {
    return (
      <div className='container-loading'>
        <Spin indicator={<LoadingOutlined />} />
      </div>
    )
  }

  return (
    <Layout user={user} onLogout={onLogout}>
      <Component {...pageProps} />
    </Layout>
  )
}
