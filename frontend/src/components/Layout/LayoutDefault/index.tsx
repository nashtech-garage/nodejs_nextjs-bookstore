import Header from './Header'
import Footer from './Footer'

import { UserModel } from '@/models'

export type LayoutDefaultProps = {
  children: React.ReactNode
  user?: UserModel
  onLogout?: () => Promise<void>
}

export function LayoutDefault({
  children,
  user,
  onLogout,
}: LayoutDefaultProps) {
  return (
    <>
      <Header email={user?.email} onLogout={onLogout}></Header>
      <main className='container'>{children}</main>
      <hr></hr>
      <Footer></Footer>
    </>
  )
}
