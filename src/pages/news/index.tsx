import { Module, New, NewProps } from '../../components'

export default function News() {
  const data: NewProps[] = [
    {
      imageURL: 'images/tin_tuc/body-Chi-la-2973-1434334206.jpg',
      title: `Grégoire Delacourt và triết lý 'Hạnh phúc không thể mua bằng tiền'`,
      description: `Với ngôn ngữ trần thuật lôi cuốn, Grégoire Delacourt đem đến cho người
      đọc câu chuyện ý nghĩa về giá trị của hạnh phúc.`,
    },
    {
      imageURL: 'images/tin_tuc/body-Chi-la-2973-1434334206.jpg',
      title: `Grégoire Delacourt và triết lý 'Hạnh phúc không thể mua bằng tiền'`,
      description: `Với ngôn ngữ trần thuật lôi cuốn, Grégoire Delacourt đem đến cho người
      đọc câu chuyện ý nghĩa về giá trị của hạnh phúc.`,
    },
    {
      imageURL: 'images/tin_tuc/body-Chi-la-2973-1434334206.jpg',
      title: `Grégoire Delacourt và triết lý 'Hạnh phúc không thể mua bằng tiền'`,
      description: `Với ngôn ngữ trần thuật lôi cuốn, Grégoire Delacourt đem đến cho người
      đọc câu chuyện ý nghĩa về giá trị của hạnh phúc.`,
    },
    {
      imageURL: 'images/tin_tuc/body-Chi-la-2973-1434334206.jpg',
      title: `Grégoire Delacourt và triết lý 'Hạnh phúc không thể mua bằng tiền'`,
      description: `Với ngôn ngữ trần thuật lôi cuốn, Grégoire Delacourt đem đến cho người
      đọc câu chuyện ý nghĩa về giá trị của hạnh phúc.`,
    },
    {
      imageURL: 'images/tin_tuc/body-Chi-la-2973-1434334206.jpg',
      title: `Grégoire Delacourt và triết lý 'Hạnh phúc không thể mua bằng tiền'`,
      description: `Với ngôn ngữ trần thuật lôi cuốn, Grégoire Delacourt đem đến cho người
      đọc câu chuyện ý nghĩa về giá trị của hạnh phúc.`,
    },
    {
      imageURL: 'images/tin_tuc/body-Chi-la-2973-1434334206.jpg',
      title: `Grégoire Delacourt và triết lý 'Hạnh phúc không thể mua bằng tiền'`,
      description: `Với ngôn ngữ trần thuật lôi cuốn, Grégoire Delacourt đem đến cho người
      đọc câu chuyện ý nghĩa về giá trị của hạnh phúc.`,
    },
  ]

  return (
    <Module title='Sách bán chạy'>
      {data.map((value, index) => (
        <New
          key={index}
          imageURL={value.imageURL}
          title={value.title}
          description={value.description}
        />
      ))}
    </Module>
  )
}
