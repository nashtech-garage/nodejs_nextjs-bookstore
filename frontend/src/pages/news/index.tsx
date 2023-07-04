import { mockNewsData } from '@/mocks'
import { Module, New, NewProps } from '@/components'
import Head from 'next/head'

export type NewsProps = {
  news: NewProps[]
}

export default function News({ news }: NewsProps) {
  return (
    <>
      <Head>
        <title>Book Store | News</title>
        <meta
          name='description'
          content='Stay updated with the latest news and trends in the world of bookstore ecommerce. Our news page brings you insightful articles, industry updates, and interviews with experts. Discover the future of online bookstores and stay ahead in the ever-evolving digital marketplace.'
        />
      </Head>
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
    </>
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
