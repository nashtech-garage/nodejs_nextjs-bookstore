import { LayoutDashboard } from '@/components'
import Head from 'next/head'

import styles from './index.module.scss'
import { useAuth } from '@/hooks'

Dashboard.layout = LayoutDashboard

export default function Dashboard() {
  const { user } = useAuth({ revalidateOnMount: false })

  return (
    <>
      <Head>
        <title>Book Store | Dashboard</title>
      </Head>
      <div className={styles.dashboard}>
        <p>
          Email: <b>{user?.email}</b>
        </p>
        <p>
          Họ Tên: <b>{user?.fullName}</b>
        </p>
        <p>
          Số điện thoại: <b>{user?.phone}</b>
        </p>
        <p>
          Địa chi: <b>{user?.address}</b>
        </p>
      </div>
    </>
  )
}
