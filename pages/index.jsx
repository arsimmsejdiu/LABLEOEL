import { FeaturedPosts } from '../sections'
import { PostCard, Categories, PostWidget, About } from '../components'
import { getAuthors, getPosts } from '../services'
import Head from 'next/head'

export default function Home({ posts }) {
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
              name="LABLEOEL"
              bio="Innovative Senior DevOps Engineer with a strong Linux background and 15+ years of experience designing, implementing, and managing cutting-edge deployment automation of cloud resources."
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
