import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RegistrationForm from '../components/register/RegistrationForm'
import SuccessfulSubscriptionCard from '../components/register/SuccessfulSubscriptionCard'

const RegisterStepTwo = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <div className='flex items-center justify-center h-full'>
        <RegistrationForm step="two"/>
      </div>
    </div>
  )
}

export default RegisterStepTwo