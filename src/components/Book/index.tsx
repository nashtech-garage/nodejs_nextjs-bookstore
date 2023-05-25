export type BookProps = {
  imageURL: string
  name: string
  author: string
  salePrice: number
  price: number
}

export function Book({ imageURL, name, author, salePrice, price }: BookProps) {
  return (
    <div className='item_thong_tin_sach'>
      <div className='hinh_sach'>
        <img src={imageURL} />
      </div>
      <div className='ten_sach'>{name}</div>
      <div className='tac_gia'>{author}</div>
      <div className='don_gia'>{salePrice} ₫</div>
      <div className='gia_bia'>{price} ₫</div>
      <div className='btn_mua_ngay'>Mua ngay</div>
    </div>
  )
}
