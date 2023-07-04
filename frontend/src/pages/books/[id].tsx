import { Button, Spin } from 'antd'
import styles from './[id].module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import { LoadingOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { AxiosResponse, axiosServer } from '@/utils'
import { BookModel } from '@/models'

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
    <>
      <Head>
        <title>Book Store | Book Detail</title>
        <meta
          name='description'
          content='Delve into the captivating details of this book on our ecommerce platform. Discover a compelling story filled with rich characters, engaging plot twists, and thought-provoking themes. Read reviews, explore author biographies, and find related titles. Purchase this book and embark on a literary journey that will captivate your imagination.'
        />
      </Head>
      <div className={styles.book_details}>
        <div className={styles.left_content}>
          <div className={styles.image}>
            <Image
              src={`${process.env.NEXT_PUBLIC_AWS_S3_URL}/${book.imagePath}`}
              alt=''
              fill
            />
          </div>
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
    </>
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
