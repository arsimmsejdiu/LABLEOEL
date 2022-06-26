import React from 'react'
import { Header } from '.'

const Layout = ({ children }) => {
  return (
    <div
      className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r pb-10 dark:from-gray-900 dark:to-gray-700"
    >
      <Header />
      {children}
    </div>
  )
}

export default Layout
