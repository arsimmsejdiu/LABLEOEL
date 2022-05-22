import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { HiMenuAlt4 } from 'react-icons/hi'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className="container mx-auto mb-8 px-8">
      <div className="inline-block w-full border-b border-blue-400 py-5">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              LABLEOEL
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer transition duration-75 hover:text-pink-500 hover:underline align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
          {/* <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
            <HiMenuAlt4
              fontSize={28}
              className="cursor-pointer text-white md:hidden"
            />
          </span> */}
        </div>
      </div>
    </div>
  )
}

export default Header
