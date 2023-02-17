import React from 'react'
import Divider from '../login/Divider'
import Description from './Description'
import Progress from './Progress'


const FormDescription = ({step}) => {
    if (step === 1) {
        return (
            <div className='basis-2/5 hidden md:flex md:flex-col md:items-center md:py-12 md:px-8 border-r border-r-d-fb-gray '>
              <Progress step={1}/>
              <Divider horizontal={true}/>        
              <Description step={1}/>
              <Divider horizontal={true} end={true}/>   
            </div>
          )
    }
  return (
    <div className='md:py-12  basis-3/5 hidden md:flex md:flex-col md:items-center md:py- md:px-8 border-r border-r-d-fb-gray '>
      <Progress step={2}/>
      <Divider className="mt-10" horizontal={true}/> 
      <Description step={2}/>
      <span className={`w-8 h-1 bg-d-fd2-gray rounded block mt-64 `}></span>
    </div>
  )
}

export default FormDescription