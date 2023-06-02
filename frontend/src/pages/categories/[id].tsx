import { Book, BookProps, Menu, Module } from '@/components'
import { Pagination } from 'antd'

import { mockCategoriesData, mockBooksData } from '../../mocks'

export type CategoryProps = {
  books: BookProps[]
}

Category.title = 'Category'

export default function Category({ books }: CategoryProps) {
  return (
    <>
      <Menu>
        <Module>
          {books.map((book, index) => (
            <Book
              key={index}
              imageURL={book.imageURL}
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
        defaultCurrent={1}
        total={50}
        pageSize={6}
      />
    </>
  )
}

export async function getStaticPaths() {
  const paths = mockCategoriesData.map((value) => ({
    params: { id: value.id },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const books = mockBooksData[Number(params.id) - 1]

  return {
    props: {
      books,
    },
  }
}
