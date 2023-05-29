import { Book, Menu, Module } from '@/components'
import { Pagination } from 'antd'

export default function Category() {
  const data = [
    {
      imageURL: '/images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: '/images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: '/images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: '/images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: '/images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: '/images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: '/images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
    {
      imageURL: '/images/sach/con_cho_nho_bia_thuong_bia_1.jpg',
      name: 'Con Chó Nhỏ Mang Giỏ Hoa Hồng (Phiên Bản Đặc Biệt - Bìa Cứng)',
      author: 'Nguyễn Nhật Ánh',
      salePrice: 139000,
      price: 159000,
    },
  ]

  return (
    <>
      <Menu>
        <Module>
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
