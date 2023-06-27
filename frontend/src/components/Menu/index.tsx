import { Menu as MenuAntd } from 'antd'
import type { MenuProps as MenuAntdProps } from 'antd/es/menu'
import { useRouter } from 'next/router'

import styles from './index.module.scss'
import { CategoryModel } from '@/models'

type MenuItem = Required<MenuAntdProps>['items'][number]

export type MenuProps = {
  children?: React.ReactNode
  items: CategoryModel[]
}

export function Menu({ children, items }: MenuProps) {
  const router = useRouter()

  function getItem(label: React.ReactNode, key?: React.Key | null): MenuItem {
    return {
      key,
      label,
    } as MenuItem
  }

  const menuItems: MenuItem[] = items.map((item) => getItem(item.name, item.id))

  const onClickItem = (info: any) => {
    router.push(`/categories/${info.key}/1`, undefined, { scroll: false })
  }
  return (
    <div className={styles.menu}>
      <MenuAntd
        className={styles.navigation}
        defaultSelectedKeys={[router.query.id as string]}
        items={menuItems}
        onClick={onClickItem}
      />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
