import React from 'react'
import { getPostDetails, getPosts } from '../services'

const About = ({ author}) => {
  console.log(author)
  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <div className="mb-8 flex-col w-full items-center">
        <h1 className="flex items-center justify-center text-xl font-bold">
        {author.name}
        </h1>
        <p className="mb-8 text-center text-lg font-normal text-gray-700">
          {author.bio}
        </p>
      </div> 
    </div>
  )
}

export default About
