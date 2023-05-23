import { Module } from '../components'

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
    <section className='container'>
      <Module title='Sách bán chạy' data={data} />
      <Module title='Sách nổi bật' data={data} />
      <Module title='Sách mới' data={data} />
    </section>
  )
}
