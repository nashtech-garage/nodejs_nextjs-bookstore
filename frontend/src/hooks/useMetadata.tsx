import { NextComponentType, NextPageContext } from 'next'

import { LayoutDefault } from '@/components'

export type ComponentMetaData = NextComponentType<NextPageContext, any, any> & {
  title?: string
  layout?: ({ children }: { children: React.ReactNode }) => JSX.Element
}

export const useMetadata = (Component: ComponentMetaData) => {
  const title = Component.title
    ? `Book Store | ${Component.title}`
    : 'Book Store'

  const Layout = Component.layout ? Component.layout : LayoutDefault

  return { title, Layout }
}
