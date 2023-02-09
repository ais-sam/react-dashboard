import React from 'react'
import Button from '../global/Button'

const Buttons = () => {
  return (
    <div className='flex gap-3'>
        <Button className='bg-transparent text-d-black hidden md:block' text="sign in"/>
        <Button className='bg-d-black hidden lg:block' text="sign up"/>
    </div>
  )
}

export default Buttons