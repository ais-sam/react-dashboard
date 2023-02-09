import React from 'react'
import PersonalInfoFormCard from '../components/register/PersonalInfoFormCard'

const RegisterStepOne = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex items-center justify-center h-full'>
        <PersonalInfoFormCard/>
      </div>
    </div>
  )
}

export default RegisterStepOne