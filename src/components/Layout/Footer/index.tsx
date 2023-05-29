import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <div>© Copyright Công ty bán sách online Hùng Nguyễn</div>
        <div>Thiết kế bởi: Hùng Nguyễn</div>
        <div>21/4/20 Đường số 14, Quận Bình Tân - SĐT: 0906338519</div>
      </div>
      <div className={styles.footer_right}>
        <div className={styles.img_chung_nhan}>
          <img src='images/seal-ecommerce.png' alt='' />
        </div>
      </div>
    </footer>
  )
}
