import React from 'react'
import Form from './Form'
import FormDescription from './FormDescription'

const PersonalInfoForm = () => {
  return (
    <div className='md:mx-3 max-w-4xl mt-16 md:mt-0  md:flex md:border md:border-d-fb-gray md:rounded-[20px]'>
        <FormDescription step={1}/>
        <Form step={1}/>
    </div>
  )
}

export default PersonalInfoForm