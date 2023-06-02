import Header from './Header'
import Footer from './Footer'

export type LayoutDefaultProps = {
  children: React.ReactNode
}

export function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <>
      <Header></Header>
      <main className='container'>{children}</main>
      <hr></hr>
      <Footer></Footer>
    </>
  )
}
