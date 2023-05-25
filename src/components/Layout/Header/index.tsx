import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header>
      <div className='slider'>
        <img src='images/slide_banner/slide_1.jpg' />
      </div>
      <nav className='navigation'>
        <div className='logo item_nav'>
          <img src='images/logo.png' />
          <h3 className='slogan'>Bookstore</h3>
        </div>
        <div className='menu item_nav'>
          <div
            className={`item_menu ${router.pathname === '/' ? 'active' : ''}`}
            onClick={() => router.push('/', undefined, { scroll: false })}
          >
            Trang chủ
          </div>

          <div
            className={`item_menu ${router.pathname === '/category' ? 'active' : ''}`}
            onClick={() =>
              router.push('/category', undefined, { scroll: false })
            }
          >
            Danh mục sách
          </div>
          <div
            className={`item_menu ${router.pathname === '/news' ? 'active' : ''}`}
            onClick={() => router.push('/news', undefined, { scroll: false })}
          >
            Tin tức
          </div>
          <div
            className={`item_menu ${router.pathname === '/about' ? 'active' : ''}`}
            onClick={() => router.push('/about', undefined, { scroll: false })}
          >
            Liên hệ
          </div>
        </div>
        <div className='form_dang_nhap_gio_hang item_nav'>
          <div className='gio_hang'>
            <img src='images/cart.png' />
          </div>
          <div>
            <span /> Đăng nhập
          </div>
        </div>
        <div style={{ clear: 'both' }} />
      </nav>
    </header>
  )
}
