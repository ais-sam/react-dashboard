import React, { useState } from 'react';
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';
import SearchBar from './SearchBar';
import SignOut from './SignOut';

const Sidebar = () => {
  const [open,setOpen] = useState(true)
  const toggleSidebar =()=>{
    setOpen(prev=>!prev)
  }
  return (
    <aside className={`kkk h-full ${open ? "w-[290px]" : "w-[106px]"}`}>
      <div className={`fixed h-full top-0 left-0 overflow-y-scroll bg-d-dark-blue ${open ? "w-[290px]" : "w-[106px]"}`}>
          <BurgerIcon onClick = {toggleSidebar} mini={!open}/>
          <SearchBar mini={!open}/>
          <Menu mini={!open}/>
          <SignOut mini={!open}/>
      </div>
    </aside>
  );
}

export default Sidebar
