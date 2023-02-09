import React from 'react'

const Submenu = () => {
    // const [active,setActive] = useState()
  return (
    <ul className='ml-4 border-l-[0.5px] border-l-[#B1D9D9] font-mont text-xs text-[#D4D4D5]'>
        <li className=' -translate-x-[1px] py-1 my-1 pl-9 border-l-[2px] border-l-white text-white font-medium'>Admin Users</li>
        <li className=' -translate-x-[1px] py-1 my-1 pl-9 '>Manage Roles</li>
        <li className=' -translate-x-[1px] py-1 my-1 pl-9  '>Manage Zones</li>
    </ul>
  )
}

export default Submenu