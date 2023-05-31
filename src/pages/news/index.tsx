import { mockNewsData } from '@/mocks'
import { Module, New, NewProps } from '@/components'

export type NewsProps = {
  news: NewProps[]
}

News.title = 'News'

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

export async function getStaticProps() {
  const news = mockNewsData

  return {
    props: {
      news,
    },
  }
}
