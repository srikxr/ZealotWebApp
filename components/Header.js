import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header classname="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <h1 className='text-black font-inter'>
                AfterAware
            </h1>
    </header>
  )
}

export default Header