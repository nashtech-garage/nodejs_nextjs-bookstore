export type NewProps = {
  imageURL: string
  title: string
  description: string
}

export function New({ imageURL, title, description }: NewProps) {
  return (
    <div className='tin_tuc_item'>
      <div className='class_hinh_tin_tuc'>
        <img src={imageURL} alt='' />
      </div>
      <div className='thong_tin_tin_tuc'>
        <div className='title_tin_tuc'>
          <a href='#'>{title}</a>
        </div>
        <div>{description}</div>
      </div>
    </div>
  )
}
