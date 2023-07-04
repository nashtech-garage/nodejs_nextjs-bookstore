import Image from 'next/image'
import Head from 'next/head'
import styles from './index.module.scss'

export default function About() {
  return (
    <>
      <Head>
        <title>Book Store | About</title>
        <meta
          name='description'
          content='Learn more about our bookstore ecommerce platform. At our about page, discover our mission, vision, and commitment to bringing literature to readers worldwide. Explore our dedication to providing a seamless online shopping experience, our curated book selections, and our passion for promoting reading and literacy. Join us in our love for books and the joy of reading.'
        />
      </Head>
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
          <Image
            src={'/images/google-map.jpg'}
            width={400}
            height={600}
            alt=''
          />
        </div>
      </div>
    </>
  )
}
