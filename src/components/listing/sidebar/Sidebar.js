import React, { useState } from 'react';
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';
import SearchBar from './SearchBar';
import SignOut from './SignOut';

const Sidebar = ({className}) => {
  const [open,setOpen] = useState(true)
  const toggleSidebar =()=>{
    setOpen(prev=>!prev)
  }
  return (
    // <aside className={`${className} h-full ${open ? "w-[290px]" : "w-[106px]"}`}>
    <aside className={`${className}  w-72 min-h-full`}>
      {/* <div className={`fixed h-full top-0 left-0 overflow-y-scroll bg-d-dark-blue ${open ? "w-[290px]" : "w-[106px]"}`}> */}
      <div className={` h-full top-0 left-0 overflow-y-scroll bg-d-dark-blue `}>
          <BurgerIcon onClick = {toggleSidebar} mini={!open}/>
          <SearchBar mini={!open}/>
          <div className='flex flex-col justify-between h-full'>
            <Menu mini={!open}/>
            <SignOut mini={!open}/>
          </div>
      </div>
    </aside>
  );
}

export default Sidebar
