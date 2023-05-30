import { Menu } from 'antd'
import type { MenuProps  } from 'antd/es/menu'
import { useRouter } from 'next/router'

import styles from './index.module.scss'

type MenuItem = Required<MenuProps>['items'][number]

export type LayoutDashboardProps = {
  children?: React.ReactNode
}

export function LayoutDashboard({ children }: LayoutDashboardProps) {
  const router = useRouter()

  function getItem(label: React.ReactNode, key?: React.Key | null): MenuItem {
    return {
      key,
      label,
    } as MenuItem
  }

  const items: MenuItem[] = [
    getItem('Tài Khoản', ''),
    getItem('Quay lại', '/'),
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
