import React from 'react'
import Divider from './Divider'
import ForgotPasswordSection from './ForgotPasswordSection'
import LoginButtons from './LoginButtons'
import LoginIcons from './LoginIcons'
import LoginInputs from './LoginInputs'

const LoginForm = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='p-4 md:p-16 md:py-14 md:my-20 md:border md:border-d-fb-gray md:rounded-[20px] max-w- max-w-md mx-auto'>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1 className='text-center d-text-black font-semibold text-[28px] mb-8'>Log in</h1>
        <LoginInputs/>
        <ForgotPasswordSection/>
        <LoginButtons />
        <Divider/>
        <LoginIcons/>
      </form>
    </div>
  )
}

export default LoginForm