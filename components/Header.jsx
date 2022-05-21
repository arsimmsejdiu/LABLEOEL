import React, { useContext } from 'react'
import Link from 'next/link'
import { HiMenuAlt4 } from "react-icons/hi"

const categories = [
  {
    name: 'Azure DevOps',
    slug: 'azure-devops',
  },
  {
    name: 'Microsoft .NET',
    slug: 'microsoft-dotnet',
  },
  {
    name: 'SQL Server',
    slug: 'sql-server',
  },
  {
    name: 'Azure Functions',
    slug: 'azure-functions',
  },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-5">
      <div className="inline-block w-full border-b border-blue-400 py-5">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              LABLEOEL
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map(({ name, slug }) => (
            <Link key={slug} href={`/category/${slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {name}
              </span>
            </Link>
          ))}
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
