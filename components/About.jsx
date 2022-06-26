import React from 'react'
import { getAuthors } from '../services'
import { SocialIcon } from 'react-social-icons';

const About = ({ name, bio }) => {
  return (
    <div className="mb-8 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-400 p-8 pb-12 shadow-lg">
      <div className="flex-col w-full items-center">
        <h1 className="flex items-center justify-center text-xl font-bold border-b pb-4 mb-5">
        { name }
        </h1>
        <p className="mb-8 text-center text-lg font-normal text-gray-700 dark:text-gray-400">
        { bio }
        </p>
        <div className='space-x-3 flex items-center justify-center'>
          <SocialIcon className='transition duration-100 hover:scale-105' url="https://twitter.com/lolluri" network='twitter'/>
          <SocialIcon className='transition duration-100 hover:scale-105' url="https://www.linkedin.com/in/leutrim-o/" />
          <SocialIcon className='transition duration-100 hover:scale-105' url="" network='facebook'/>
        </div>
      </div> 
    </div>
  )
}

export default About

// export async function getStaticProps() {
//   const data = await getAuthors() || []
//   console.log(data)
//   return {
//     props: {
//       post: data,
//     },
//   }
// }

