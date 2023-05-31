import { useEffect, useState } from 'react'
import { Module, Book } from '../components'

import { mockHotBooksData, mockFeatureBooksData } from '../mocks'

Home.title = 'Home'

export default function Home() {
  const [hotBooks, setHotBooks] = useState<any[]>([])
  const [featureBooks, setFeatureBooks] = useState<any[]>([])

  useEffect(() => {
    setHotBooks(mockHotBooksData)
  }, [])

  useEffect(() => {
    setFeatureBooks(mockFeatureBooksData)
  }, [])

  return (
    <>
      <Module title='Sách bán chạy'>
        {hotBooks.length !== 0 &&
          hotBooks.map((book: any, index) => (
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
      <Module title='Sách nổi bật'>
        {featureBooks.length !== 0 &&
          featureBooks.map((book: any, index) => (
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
    </>
  )
}
