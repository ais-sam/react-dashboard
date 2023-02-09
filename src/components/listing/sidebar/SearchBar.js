import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import search from "../../../assets/icons/search.png"
const SearchBar = ({mini}) => {
    if (!mini) {
        return (
            <div className="px-6 py-4 relative">
                <input
                type="text"
                className="bg-d-side-gray max-w-full outline-none p-2 px-3 rounded-[4px] placeholder:text-d-side-p-gray placeholder:text-sm placeholder:ml-2"
                placeholder="Search ..."
                />
                <HiOutlineSearch className="text-md text-d-side-p-gray absolute top-[38px] -translate-y-1/2 right-10" />
            </div>
        )  
    }
    return (
        <div className="px-6 py-4 flex justify-center ">
            <img src={search} alt="" className='w-8'/>
        </div>
    )
}

export default SearchBar