import React from 'react'
import MenuItem from './MenuItem'
import { menu } from '../../../constants'

const Menu = ({mini}) => {
  return (
    <div className='px-6 py-4 flex flex-col justify-between h-full'>
        <div className='mb-10'>
            {menu.filter(el=>el.arrow).map(el=><MenuItem key={el.id} {...el} mini={mini}/>)}
        </div>
        <div>
            {menu.filter(el=>!el.arrow).map(el=><MenuItem key={el.id} {...el} mini={mini}/>)}
        </div>
    </div>
  )
}

export default Menu