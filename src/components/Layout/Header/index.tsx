export default function Header() {
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
          <div className='item_menu active'>Trang chủ</div>
          <div className='item_menu'>Danh mục sách</div>
          <div className='item_menu'>Tin tức</div>
          <div className='item_menu'>Liên hệ</div>
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
