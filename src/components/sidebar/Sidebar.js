import React, { useState } from 'react'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import burger from "../../assets/icons/burger.png"
import { HiOutlineSearch } from "react-icons/hi";
import Menu from './Menu';
import MenuItem from './MenuItem';
import SignOut from './SignOut';
import SearchBar from './SearchBar';
import BurgerIcon from './BurgerIcon';

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
{/* <div className="border-b-[0.1px]  border-b-gray-600 px-5 py-4">
  <button>
    <img src={burger} className="w-10" />
  </button>
</div> */}