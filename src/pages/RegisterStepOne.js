import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RegistrationForm from '../components/register/RegistrationForm'
import SuccessfulSubscriptionCard from '../components/register/SuccessfulSubscriptionCard'

const RegisterStepOne = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <div className='flex items-center justify-center h-full'>
        <RegistrationForm step="one"/>
      </div>
    </div>
  )
}

export default RegisterStepOne