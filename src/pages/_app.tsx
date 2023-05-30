import '@/styles/global.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from '../components'
import { NextComponentType, NextPageContext } from 'next/types'

type CustomAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    title?: string
  }
}

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  const title = Component.title ? `Book Store | ${Component.title}` : 'Book Store'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
