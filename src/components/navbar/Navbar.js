import React from 'react'
import Buttons from './Buttons'
import Links from './Links'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='border-b border-b-db-gray'>
      <div className='hidden lg:container lg:flex items-center justify-between py-5'>
        <div className='flex gap-8 items-center'>
          <Logo/>
          <Links/>
        </div>
        <Buttons/>
      </div>
    </div>
  )
}

export default Navbar