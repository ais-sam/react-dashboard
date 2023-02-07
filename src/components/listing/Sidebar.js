import React from 'react'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import burger from "../../assets/icons/burger.png"
import { HiOutlineSearch } from "react-icons/hi";
import Menu from '../sidebar/Menu';
import MenuItem from '../sidebar/MenuItem';
import SignOut from './SignOut';

const Sidebar = () => {
  return (
    <div className=" w-[290px]  h-full  ">
      {/* Burger icon */}
      <div className=' fixed w-[290px] h-full top-0 left-0 overflow-y-scroll bg-d-dark-blue'>

      
      <div className="border-b-[0.1px]  border-b-gray-600 px-5 py-4">
        <button>
          <img src={burger} className="w-10" />
        </button>
      </div>

      {/* Search bar */}
      <div className="px-6 py-4 relative">
        <input
          type="text"
          className="bg-d-side-gray max-w-full outline-none p-2 px-3 rounded-[4px] placeholder:text-d-side-p-gray placeholder:text-sm placeholder:ml-2"
          placeholder="Search ..."
        />
        <HiOutlineSearch className="text-md text-d-side-p-gray absolute top-[38px] -translate-y-1/2 right-10" />
      </div>

      {/* Menu */}
      <Menu />
      {/* Sign out */}
      <SignOut/>
    </div>
    </div>
  );
}

export default Sidebar