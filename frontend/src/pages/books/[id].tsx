import { Button, Spin } from 'antd'
import styles from './[id].module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import { LoadingOutlined } from '@ant-design/icons'

import { AxiosResponse, axiosServer } from '@/utils'
import { BookModel } from '@/models'
import { useRouter } from 'next/router'

BookDetail.title = 'Book Detail'

export type BookDetailProps = {
  book: BookModel
}

export default function BookDetail({ book }: BookDetailProps) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className='container-loading'>
        <Spin indicator={<LoadingOutlined />} />
      </div>
    )
  }

  return (
    <div className={styles.book_details}>
      <div className={styles.left_content}>
        <img src={`${process.env.NEXT_PUBLIC_AWS_S3_URL}/${book.imagePath}`} />
        <div>
          <div className={styles.sale_price}>{book.salePrice} ₫</div>
          <div className={styles.price}>{book.price} ₫</div>
          <Button className={styles.button} block>
            Mua ngay
          </Button>
        </div>
      </div>

      <section className={styles.right_content}>
        <h1>{book.name}</h1>
        <p>
          Tác giả : <b>{book.author}</b>
        </p>
        <p>{book.description}</p>
      </section>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response: AxiosResponse<BookModel[]> = await axiosServer('/api/books')

    if (!response.data) {
      return { paths: [], fallback: true }
    }

    const paths = response.data.map((value) => ({
      params: { id: `${value.id}` },
    }))
    return { paths, fallback: true }
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response: AxiosResponse = await axiosServer.get(
    `/api/books/${params?.id}`
  )
  return {
    props: {
      book: response.data,
    },
    revalidate: 10,
  }
}
