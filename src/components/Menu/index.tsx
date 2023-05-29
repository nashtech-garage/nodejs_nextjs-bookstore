import { Menu as MenuAntd } from 'antd'
import type { MenuProps as MenuAntdProps } from 'antd/es/menu'

import styles from './styles.module.scss'
import { useRouter } from 'next/router'

type MenuItem = Required<MenuAntdProps>['items'][number]

export type MenuProps = {
  children?: React.ReactNode
}

export function Menu({ children }: MenuProps) {
  const router = useRouter()

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

  const onClickItem = (info: any) => {
    router.push(`/categories/${info.key}`, undefined, { scroll: false })
  }

  return (
    <div className={styles.menu}>
      <MenuAntd
        className={styles.navigation}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={items}
        onClick={onClickItem}
      />
      <div className={styles.content}>{children}</div>
    </div>
  )
}