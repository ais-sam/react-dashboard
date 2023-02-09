import React from 'react'
import Input from '../global/Input'
import Select from '../global/Select'

const FormInputs = ({step}) => {
    if (step == 1) {
        return (
            <div className='flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row md:gap-6'>
              <Input type="text" label="first name"/>
              <Input type="text" label="last name"/>
            </div>
            <Input type="email" label="email"/>
            <Input type="tel" label="phone number"/>
          </div>
        )
    }
  return (
    <div className='flex flex-col gap-6'>
    <div className='flex flex-col md:flex-row md:gap-6'>
      <Input className="md:flex-1" type="text" label="organization name"/>
      <Select className="md:flex-1" label="last country"/>
    </div>
      <Input type="email" label="Proffesional Email"/>
      <Input type="text" label="Address"/>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
        <Select className="" label="city"/>
        <Select className="" label="state"/>
        <Input type="text" label="zip code" className=""/>
      </div>
    </div>
  )
}

export default FormInputs