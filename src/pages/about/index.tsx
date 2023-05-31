import Image from 'next/image'
import styles from './index.module.scss'

About.title = 'About'

export default function About() {
  return (
    <div className={styles.about}>
      <div>
        <h2>Thông tin</h2>
        <b>Công ty bán sách online Hùng Nguyễn</b>
        <p>
          Địa Chỉ:
          <b>
            123 Đường Trường Chinh, Phương 13, Quận Tân Bình, Thành Phố Hồ Chí
            Minh
          </b>
        </p>
        <p>
          Điện Thoại:
          <b>0999999999</b>
        </p>
      </div>

      <div>
        <Image src={'/images/google-map.jpg'} width={400} height={600} alt='' />
      </div>
    </div>
  )
}
