import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/oracle.png"
import burger from "../../assets/icons/black_burger.png"
const Logo = () => {
  return (
    <>
    <button className='hidden md:block lg:hidden ml-4'><img src={burger} className="w-12" alt=""/></button>
      <Link to="/"><img className='w-28 hidden md:block ' src={logo} alt="oracle"/></Link>
    </>
  )
}

export default Logo