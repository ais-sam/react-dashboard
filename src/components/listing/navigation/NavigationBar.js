import React from 'react';
import arrow from "../../../assets/icons/admin-arrow.png";
import Avatar from './Avatar';
import Bell from './Bell';
import NavigationButtons from './NavigationButtons';
import NavigationLinks from './NavigationLinks';
const NavigationBar = () => {
  return (
    <div className='pt-6 px-4 text-d-admin-blue'>
      <div className='flex items-center justify-between mb-8'>
        <h2 className='text-2xl '>Humane Resources / <span className='font-semibold'>Admin Users</span></h2>
        <NavigationButtons/>
      </div>
      <NavigationLinks/>
    </div>
  )
}

export default NavigationBar