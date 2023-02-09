import React from 'react'
import account from "../../assets/icons/account.png"
import personal from "../../assets/icons/personal.png"
import AccountSelection from './AccountSelection'
import FormButtons from './FormButtons'
import FormInputs from './FormInputs'
import Progress from './Progress'



const Form = ({step}) => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    if (step==1) {
        return (
        <div className=' p-4 md:p-12'>
            {/* icon */}
            <div className='relative mb-3 w-fit mx-auto md:hidden'>
                <img src={personal}/>
            </div>

            {/* Step title */}
            <h1 className='text-center md:text-start d-text-black font-semibold md:font-normal text-[22px] md:text-xl mb-6 md:mb-10'>Personal information</h1>
  
            <Progress mobile={true} step={1}/>

            <form onSubmit={handleSubmit}>
                <FormInputs step={1}/>
                <FormButtons step={1}/>
            </form>
        </div>
        )
    }
  return (
    <div className='p-4 mt-32 md:mt-0 md:p-12'>
        {/* icon */}
        <div className='relative mb-3 w-fit mx-auto md:hidden'>
            <img src={account}/>
        </div>

        {/* Step title */}
        <h1 className='text-center md:text-start d-text-black font-semibold md:font-normal text-[22px] md:text-xl mb-6 md:mb-10'>Account information</h1>

        <AccountSelection/>

        <Progress mobile={true} step={2}/>

        <form onSubmit={handleSubmit}>
            <FormInputs step={2}/>
            <FormButtons step={2}/>
        </form>
    </div>
  )
}

export default Form