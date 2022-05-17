import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Categories, PostWidget, About } from '../components'

const posts = [
  {
    title: 'React testing',
    excert: 'Learn react testing',
  },
  {
    title: 'React with tailwind',
    excert: 'Learn react with tailwind',
  },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 px-5">
      <Head>
        <title>LABLEOEL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} title={post.title} excert={post.excert} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <About />
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
