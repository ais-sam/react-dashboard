import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div>
      <ul className='flex items-center gap-3 text-base text-dt-gray'>
        <li><Link to="/" className='text-d-black'>Become an admin</Link></li>
        <li><Link to="/">offers</Link></li>
        <li><Link to="/">Interpretation</Link></li>
        <li><Link to="/">Get Quotes</Link></li>
      </ul>
    </div>
  )
}

export default Links