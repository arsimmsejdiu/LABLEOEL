import React from 'react'

const About = ({ post }: any) => {
  // console.log(post)
  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <div className="mb-8 flex w-full items-center">
        <h1 className='flex items-center justify-center font-bold text-xl'>LABLEOEL</h1>
        {/* <div className="mr-8 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
            src={post.author.photo.url}
          />
          <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
            {post.author.name}
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default About
