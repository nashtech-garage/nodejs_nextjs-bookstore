import { GetStaticPaths, GetStaticProps } from 'next'
import { Pagination } from 'antd'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'

import { Book, Menu, Module } from '@/components'
import {
  axiosServer,
  AxiosResponse,
  PaginationData,
  axiosClient,
} from '@/utils'
import { BookModel, CategoryModel } from '@/models'

export type CategoryProps = {
  books: PaginationData<BookModel>
}

export default function Category({ books }: CategoryProps) {
  const router = useRouter()
  const { id, page } = router.query
  const { data: menuItems } = useSWR<CategoryModel[]>(
    '/api/categories',
    (url: string) => axiosClient.get(url).then((res) => res.data),
    {
      errorRetryCount: 0,
      revalidateOnFocus: false,
    }
  )

  return (
    <>
      <Head>
        <title>Book Store | Category</title>
        <meta
          name='description'
          content='Explore our diverse collection of books at our category page. Discover a wide range of genres, including fiction, non-fiction, romance, mystery, science fiction, and more. Browse through curated lists, bestsellers, and new releases. Find your next captivating read and immerse yourself in the world of literature at our bookstore ecommerce platform.'
        />
      </Head>
      <Menu items={menuItems ?? []}>
        <Module>
          {books.items.map((book: BookModel) => (
            <Book
              key={book.id}
              id={book.id}
              imageURL={`${process.env.NEXT_PUBLIC_AWS_S3_URL}/${book.imagePath}`}
              name={book.name}
              author={book.author}
              price={book.price}
              salePrice={book.salePrice}
            />
          ))}
        </Module>
      </Menu>
      <Pagination
        style={{ textAlign: 'center' }}
        defaultCurrent={Number(page)}
        total={books.total}
        pageSize={8}
        onChange={(pageIndex: number) => {
          router.push(
            {
              pathname: router.pathname,
              query: {
                id,
                page: pageIndex,
              },
            },
            undefined,
            { scroll: false }
          )
        }}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response: AxiosResponse<CategoryModel[]> = await axiosServer(
      '/api/categories'
    )

    if (!response.data) {
      return { paths: [], fallback: 'blocking' }
    }

    const paths = response.data.map((value) => ({
      params: { id: `${value.id}`, page: '1' },
    }))
    return { paths, fallback: 'blocking' }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const response: AxiosResponse<PaginationData<BookModel>> = await axiosServer(
    `/api/categories/${params.id}?page=${params.page}`
  )
  return {
    props: {
      books: response.data,
    },
    revalidate: 10,
  }
}
