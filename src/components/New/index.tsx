import styles from './index.module.scss'

export type NewProps = {
  imageURL: string
  title: string
  description: string
}

export function New({ imageURL, title, description }: NewProps) {
  return (
    <div className={styles.tin_tuc_item}>
      <div className={styles.class_hinh_tin_tuc}>
        <img src={imageURL} alt='' />
      </div>
      <div className={styles.thong_tin_tin_tuc}>
        <div className={styles.title_tin_tuc}>
          <a href='#'>{title}</a>
        </div>
        <div>{description}</div>
      </div>
    </div>
  )
}
