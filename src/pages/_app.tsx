import './styles.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from '../components'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Book Store</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
