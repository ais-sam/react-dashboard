import React from 'react'
import Button from '../global/Button'
import { useNavigate } from 'react-router-dom'


const FormButtons = ({step}) => {
    const navigate = useNavigate()
    
    const goToNextStep = ()=>{
        step === 1 ? navigate('account-information') : navigate('/register/success')
    }
    const goToPreviousStep = ()=>{
        navigate(-1)
    }

  return (
    <div className='flex flex-wrap md:justify-end gap-4 mt-32 md:mt-16'>
        <Button onClick={goToPreviousStep} className='flex-1 md:flex-grow-0 border border-d-back-black md:border-none text-d-back-black' text="back"/>
        <Button onClick={goToNextStep} className="bg-d-blue flex-1 md:flex-grow-0 md:flex-auto" text="next step"/>
    </div>
  )
}

export default FormButtons