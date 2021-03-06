import { FeaturedPosts } from '../sections'
import { PostCard, Categories, PostWidget, About } from '../components'
import { getPosts, getAuthors } from '../services'
import Head from 'next/head'
import { useEffect, useState } from 'react'


export default function Home({ posts }) {
  const [authors, setAuthors] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    getAuthors().then((newAuthor) => {
      setAuthors(newAuthor)
    })
    setMounted(true)
  }, [])

  console.log(authors);

  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>LABLEOEL - All Article about Devops</title>
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <About
              name={authors.name}
              bio={authors.bio}
            />
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
