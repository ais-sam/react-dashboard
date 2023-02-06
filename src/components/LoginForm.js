import React from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'
import Button from './global/Button'
import google from "../assets/icons/google.png"
import linkedin from "../assets/icons/linkedin.png"
import windows from "../assets/icons/windows.png"

const LoginForm = () => {
  return (
    <div className='p-4 md:p-8 md:border md:border-db-gray md:rounded-[20px] mt-24 md:mt-40 max-w-[481px] mx-auto'>
      <form >
        <h1 className='text-center d-text-black font-semibold text-[28px] mb-8'>Log in</h1>
        {/* Inputs */}
        <div>
          <Input type="text" label="username"/>
          <Input type="password" label="password"/>
        </div>

        {/* Forgot password */}
        <div className='flex justify-between items-center text-sm mt-3'>
          <div>
            <label className='flex items-center gap-3'>
              <input type="checkbox" />
              <span >Remember me</span>
            </label>
          </div>
          <Link to="/" className='text-d-blue underline'>Forgot password</Link>
        </div>

        {/* Buttons */}
        <div className='flex flex-col gap-4 mt-8'>
          <Button className="bg-d-blue block w-full" text="log in"/>
          <Button className='bg-d-black w-full' text="sign up"/>
        </div>

        {/*devider*/}
        <div className='flex items-center gap-3 mt-8'>
          <span className='w-full h-[1px] bg-d-fd-gray translate-y-1'></span>
          <span className='text-d-or-black text-base'>Or</span>
          <span className='w-full h-[1px] bg-d-fd-gray translate-y-1'></span>
        </div>

        {/* Logos */}
        <div className='flex items-center justify-center gap-4 mt-8'>
          <button  className='p-4 md:px-6 md:py-4 shadow-logo rounded w-fit'>
            <img src={google} className="w-8" alt='google'/>
          </button>
          <button  className='p-4 md:px-6 md:py-4 shadow-logo rounded w-fit'>
            <img src={linkedin} className="w-8" alt='linkedin'/>
          </button>
          <button  className='p-4 md:px-6 md:py-4 shadow-logo rounded w-fit'>
            <img src={windows} className="w-8" alt='windows'/>
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm