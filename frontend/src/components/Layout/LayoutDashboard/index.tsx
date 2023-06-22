import { Menu } from 'antd'
import type { MenuProps } from 'antd/es/menu'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import styles from './index.module.scss'
import { UserModel } from '@/models'

type MenuItem = Required<MenuProps>['items'][number]

export type LayoutDashboardProps = {
  children?: React.ReactNode
  user: UserModel
}

export function LayoutDashboard({ children, user }: LayoutDashboardProps) {
  const router = useRouter()

  // Authentication && Authorization
  useEffect(() => {
    if (!user || !['CUSTOMER', 'EMPLOYER', 'ADMIN'].includes(user.role)) {
      router.push('/')
    }
  }, [user])
  if (!user) return null

  const items: MenuItem[] = [
    { key: '', label: 'Tài Khoản' },
    { key: '/', label: 'Quay lại' },
  ]

  const onClickItem = (info: any) => {
    router.push(`${info.key}`, undefined, { scroll: false })
  }

  return (
    <div className={styles.layout_dashboard}>
      <Menu
        className={styles.navigation}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme='dark'
        items={items}
        onClick={onClickItem}
      />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
