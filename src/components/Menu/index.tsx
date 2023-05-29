import { Menu as MenuAntd } from 'antd'
import type { MenuProps } from 'antd/es/menu'

import styles from './styles.module.scss'

type MenuItem = Required<MenuProps>['items'][number]

export type MenuPros = {
  children?: React.ReactNode
}

export function Menu({ children }: MenuPros) {
  function getItem(label: React.ReactNode, key?: React.Key | null): MenuItem {
    return {
      key,
      label,
    } as MenuItem
  }

  const items: MenuItem[] = [
    getItem('Văn Học', '1'),
    getItem('Kinh Tế', '2'),
    getItem('Ngoại Ngữ', '3'),
    getItem('Thời trang', '4'),
    getItem('Tâm Lý', '5'),
    getItem('Thiếu Nhi', '6'),
  ]

  return (
    <div className={styles.menu}>
      <MenuAntd
        className={styles.navigation}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={items}
      />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
