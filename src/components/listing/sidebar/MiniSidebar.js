import React, { useState } from 'react';
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';
import SearchBar from './SearchBar';
import SignOut from './SignOut';

const MiniSidebar = ({className}) => {
    const [open,setOpen] = useState(false)
    const toggleSidebar =()=>{
      setOpen(prev=>!prev)
    }
  return (
    <div>
      <aside
        className={`${className} h-full ${open ? "w-[290px]" : "w-[106px]"}`}
      >
        <div
          className={` h-full top-0 left-0 overflow-y-scroll bg-d-dark-blue ${
            open ? "w-[290px]" : "w-[86px]"
          }`}
        >
          <BurgerIcon onClick={toggleSidebar} mini={!open} />
          <SearchBar mini={!open} />
          <Menu mini={!open} />
          <SignOut mini={!open} />
        </div>
      </aside>
    </div>
  );
};

export default MiniSidebar;
