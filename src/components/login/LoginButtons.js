import React from 'react'
import Button from '../global/Button'
import { useNavigate } from 'react-router-dom'
const LoginButtons = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-4 mt-8'>
          <Button onClick={()=>navigate('admin')} className="bg-d-blue block w-full" text="log in"/>
          <Button onClick={()=>navigate('register')} className='bg-d-black w-full' text="sign up"/>
    </div>
  )
}

export default LoginButtons