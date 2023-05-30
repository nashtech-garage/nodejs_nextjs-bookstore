import { mockNewsData } from '@/mocks'
import { Module, New, NewProps } from '@/components'

export type NewsProps = {
  news: NewProps[]
}

export default function News({ news }: NewsProps) {
  return (
    <Module>
      {news.map((value, index) => (
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

export async function getStaticProps({ params }: any) {
  const news = mockNewsData

  return {
    props: {
      news,
    },
  }
}
