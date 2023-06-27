import { useRouter } from 'next/router'

import styles from './index.module.scss'
import { Badge, Dropdown, MenuProps } from 'antd'
import Link from 'next/link'

type HeaderPros = {
  email?: string
  onLogout?: () => Promise<void>
}

export default function Header({ email, onLogout }: HeaderPros) {
  const router = useRouter()

  const itemsDropdown: MenuProps['items'] = [
    {
      key: '1',
      label: <Link href={'/dashboard'}>Cài đặt</Link>,
    },
    {
      key: '2',
      danger: true,
      onClick: async () => {
        onLogout && (await onLogout())
      },
      label: <span>Đăng xuất</span>,
    },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.slider}>
        <img src='/images/slide_banner/slide_1.jpg' />
      </div>
      <nav className={styles.navigation}>
        <div className={`${styles.logo} ${styles.item_nav}`}>
          <img src='/images/logo.png' />
          <h3 className={styles.slogan}>Bookstore</h3>
        </div>
        <div className={`${styles.menu} ${styles.item_nav}`}>
          <div
            className={`${styles.item_menu} ${
              router.pathname === '/' ? `${styles.active}` : ''
            }`}
            onClick={() => router.push('/', undefined, { scroll: false })}
          >
            Trang chủ
          </div>

          <div
            className={`${styles.item_menu} ${
              router.pathname === '/categories/[id]/[page]' ? `${styles.active}` : ''
            }`}
            onClick={() =>
              router.push('/categories/1/1', undefined, { scroll: false })
            }
          >
            Danh mục sách
          </div>
          <div
            className={`${styles.item_menu} ${
              router.pathname === '/news' ? `${styles.active}` : ''
            }`}
            onClick={() => router.push('/news', undefined, { scroll: false })}
          >
            Tin tức
          </div>
          <div
            className={`${styles.item_menu} ${
              router.pathname === '/about' ? `${styles.active}` : ''
            }`}
            onClick={() => router.push('/about', undefined, { scroll: false })}
          >
            Liên Hệ
          </div>
        </div>
        <div className={`${styles.form_dang_nhap_gio_hang} ${styles.item_nav}`}>
          {!email ? (
            <div
              className={styles.item_menu}
              onClick={() =>
                router.push('/login', undefined, { scroll: false })
              }
            >
              Đăng Nhập
            </div>
          ) : (
            <Dropdown menu={{ items: itemsDropdown }} placement='bottom' arrow>
              <div className={styles.item_menu}>vtanh1905@gmail.com</div>
            </Dropdown>
          )}
          <div className={styles.gio_hang}>
            <Badge count={5}>
              <img src='/images/cart.png' />
            </Badge>
          </div>
        </div>
        <div style={{ clear: 'both' }} />
      </nav>
    </header>
  )
}
