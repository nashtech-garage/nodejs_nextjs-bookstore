import { Button } from 'antd'
import Image from 'next/image'

import styles from './[id].module.scss'

BookDetail.title = 'Book Detail'

export default function BookDetail() {
  return (
    <div className={styles.book_details}>
      <div className={styles.left_content}>
        <img src='/images/sach/con_cho_nho_bia_thuong_bia_1.jpg' />
        <div>
          <div className={styles.sale_price}>15000 ₫</div>
          <div className={styles.price}>13000 ₫</div>
          <Button className={styles.button} block>
            Mua ngay
          </Button>
        </div>
      </div>

      <section className={styles.right_content}>
        <h1>Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)</h1>
        <p>
          Tác giả : <b>Nguyễn Nhật Ánh</b>
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </section>
    </div>
  )
}
