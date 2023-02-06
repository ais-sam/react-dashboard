import React from 'react'
import LoginForm from '../components/login/LoginForm'
import Navbar from '../components/navbar/Navbar'

const Login = () => {
  return (
    <div className='flex flex-col h-screen gap-14' >
        <Navbar/>
        <main className='flex items-center justify-center h-full'>
          <LoginForm/>
        </main>
    </div>
  )
}

export default Login