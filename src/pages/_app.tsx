import './styles.css'
import { AppProps } from 'next/app'

import { Layout } from '../components'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
