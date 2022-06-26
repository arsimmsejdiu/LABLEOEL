import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { getCategories } from '../services'
import Button from './Button'

const Header = () => {
  const [categories, setCategories] = useState([])
  const { theme, systemTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <Button
          className="bg-gray-200 dark:bg-gray-600"
          onClick={() => setTheme('light')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      )
    } else {
      return (
        <Button className="bg-gray-200" onClick={() => setTheme('dark')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      )
    }
  }

  return (
    <div className="container mx-auto mb-8 px-8">
      <div className="inline-block w-full border-b border-blue-400 py-5 dark:border-gray-500">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-2xl font-bold text-white dark:text-gray-400">
              LABLEOEL
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents justify-between">
          <div className='flex items-center justify-center space-x-5 float-right'>
            {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold dark:text-gray-400 text-white transition duration-75 hover:text-pink-500 hover:underline md:float-right">
                {category.name}
              </span>
              
            </Link>
          ))}
          {renderThemeChanger()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
