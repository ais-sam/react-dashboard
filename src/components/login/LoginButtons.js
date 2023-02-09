import React from 'react'
import Button from '../global/Button'
import { useNavigate } from 'react-router-dom'
const LoginButtons = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-6 md:gap-3 mt-8'>
          <Button onClick={()=>navigate('register')} className='bg-d-black w-full py-3' text="sign up"/>
          <Button onClick={()=>navigate('admin')} className="bg-d-blue block w-full py-3" text="log in"/>
    </div>
  )
}

export default LoginButtons