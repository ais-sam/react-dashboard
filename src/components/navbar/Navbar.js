import React from 'react'
import Buttons from './Buttons'
import Links from './Links'
import Logo from './Logo'

const Navbar = () => {
  return (
    <>
      <div className="border-b border-b-db-gray">
        <div className="hidden lg:container md:flex items-center justify-between py-5">
          <div className="flex gap-10 items-center">
            <Logo />
            <Links />
          </div>
          <Buttons />
        </div>
      </div>
      <span className="mt-4 mr-10 md:hidden w-4 h-4 bg-[#98989870] rounded-full flex items-center justify-center text-white ml-auto">
        x
      </span>
    </>
  );
}

export default Navbar