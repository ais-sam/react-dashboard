import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/oracle.png"

const Logo = () => {
  return (
      <Link to="/"><img className='w-28' src={logo} alt="oracle"/></Link>
  )
}

export default Logo