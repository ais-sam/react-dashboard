import React from 'react'
import Input from '../global/Input'
const LoginInputs = () => {
  return (
    <div className='flex flex-col gap-6'>
        <Input type="text" label="username"/>
        <Input type="password" label="password"/>
    </div>
  )
}

export default LoginInputs