import Header from './Header'
import Footer from './Footer'

export type LayoutPros = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutPros) {
  return (
    <>
      <Header></Header>
      <main className='container'>{children}</main>
      <hr></hr>
      <Footer></Footer>
    </>
  )
}
