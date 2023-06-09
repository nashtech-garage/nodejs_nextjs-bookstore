import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './index.module.scss'

export type BookProps = {
  id: number
  imageURL: string
  name: string
  author: string
  salePrice: number
  price: number
}

export function Book({
  id,
  imageURL,
  name,
  author,
  salePrice,
  price,
}: BookProps) {
  const router = useRouter()
  return (
    <div
      className={styles.item_thong_tin_sach}
      onClick={() => router.push(`/books/${id}`, undefined, { scroll: false })}
    >
      <div className={styles.hinh_sach}>
        <Image src={imageURL} alt='' fill />
      </div>
      <div className={styles.ten_sach}>{name}</div>
      <div className={styles.tac_gia}>{author}</div>
      <div className={styles.don_gia}>{salePrice} ₫</div>
      <div className={styles.gia_bia}>{price} ₫</div>
      <div className={styles.btn_mua_ngay}>Mua ngay</div>
    </div>
  )
}
