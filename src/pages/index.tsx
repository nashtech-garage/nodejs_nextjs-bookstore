import { Module, Book } from '../components'

export default function Home() {
  const data = [
    {
      imageURL: 'images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: 'images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: 'images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: 'images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: 'images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: 'images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: 'images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: 'images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
  ]

  return (
    <>
      <Module title='Sách bán chạy'>
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
      </Module>
      <Module title='Sách nổi bật'>
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
      </Module>
    </>
  )
}
