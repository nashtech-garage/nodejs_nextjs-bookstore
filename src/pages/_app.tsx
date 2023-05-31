import '@/styles/global.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { NextComponentType, NextPageContext } from 'next/types'

import { LayoutDefault } from '@/components'

type CustomAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    title?: string,
    layout?: ({ children }: { children: React.ReactNode }) => JSX.Element,
  }
}

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  const title = Component.title ? `Book Store | ${Component.title}` : 'Book Store'
  
  const Layout = Component.layout ? Component.layout  : LayoutDefault;

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
