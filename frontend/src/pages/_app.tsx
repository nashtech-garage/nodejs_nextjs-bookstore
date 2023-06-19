import '@/styles/global.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { useAuth, ComponentMetaData, useMetadata } from '@/hooks'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

type CustomAppProps = AppProps & {
  Component: ComponentMetaData
}

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  const { isLoading, user, onLogout } = useAuth()
  const { title, Layout } = useMetadata(Component)

  if (isLoading) {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div className='container-loading'>
          <Spin indicator={<LoadingOutlined />} />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout user={user} onLogout={onLogout}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
