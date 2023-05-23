import { Book, BookProps } from '../Book'

export type ModuleProps = {
  title: string
  data: BookProps[]
}

export function Module({ title, data }: ModuleProps) {
  return (
    <div className='module'>
      <div className='tieu_de_module'>{title}</div>
      <div className='noi_dung_module'>
        {data.map((book, index) => (
          <Book
            key={index}
            imageURL={book.imageURL}
            name={book.name}
            author={book.author}
            price={book.price}
            salePrice={book.salePrice}
          />
        ))}
        <div style={{ clear: 'both' }} />
      </div>
    </div>
  )
}
