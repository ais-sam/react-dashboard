import React from 'react'
import Form from './Form'
import FormDescription from './FormDescription'

const AccountInfoFormCard = () => {
  return (
    <div className=' max-w-4xl md:mt-48  md:flex md:border md:border-d-fb-gray md:rounded-[20px]'>
      <FormDescription step={2}/>
      <Form step={2}/>
    </div>
  )
}

export default AccountInfoFormCard