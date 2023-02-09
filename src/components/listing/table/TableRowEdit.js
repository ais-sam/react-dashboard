import React from 'react'
import Input from '../../global/Input'
import danemark from "../../../assets/icons/danemark.png"
import { MdOutlineArrowDropDown } from "react-icons/md";


const TableRowEdit = ({user}) => {
  return (
    <tr className='flex absolute bottom-0 left-0 bg-[#F1F2F459] border-l-2 border-l-d-light-blue py-3 h-[177.5px]'>
        <div className='px-8 border-red-600 border'>
            <span className='block text-xs text-d-text-black mb-1'>First Name</span>
            <input type='text' className=' border rounded-[4px] p-3 text-mont text-xs text-d-dark-blue focus:outline-d-light-blue' value="Fath Allah"/>
        </div>
        {/* <div className='px-8 border-red-600 border'>
            <span className='block text-xs text-d-text-black mb-1'>User Role</span>
            <input type='text' className=' p-3 text-mont text-xs text-d-dark-blue focus:outline-d-light-blue' value="HR Manager"/>
        </div>
        <div className='px-8 border-red-600 border'>
            <span className='block text-xs text-d-text-black mb-1'>Email</span>
            <input type='text' className=' p-3 text-mont text-xs text-d-dark-blue focus:outline-d-light-blue' value="Vitolkermail@mail.com"/>
        </div> */}
        <div className='px-8 border-red-600 border'>
            <span className='block text-xs text-d-text-black mb-1'>Phone Number</span>
            <div className={`flex items-center gap-2  mt-1`}>
            <div className=' bg-white p-2 rounded border border-d-fb-gray flex items-center gap-1'>
                <img src={danemark} alt="danemark" className='w-4'/>
                <span className={`flex text-[13px] text-[#B5B5B5]`}>44-</span>
                <MdOutlineArrowDropDown className='text-sm border'/>
            </div>

            <input type="text" value="562 3252 235" className="w-40 outline-none p-2 text-[13px] text-mont rounded border border-d-fb-gray"/>
        </div>
        </div>
        <div className='px-8 border-red-600 border'>
            <span className='block text-xs text-d-text-black mb-1'>Status</span>
            <input type='text' className=' p-3 text-mont text-xs text-d-dark-blue focus:outline-d-light-blue' value="Fath Allah"/>
        </div>
    </tr>
  )
}

export default TableRowEdit