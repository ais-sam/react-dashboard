import React from 'react'
import danemark from "../../assets/icons/danemark.png"
import { MdOutlineArrowDropDown } from "react-icons/md";

const Input = ({label,type,className,value,admin}) => {
  const FOCUS_STYLE = (admin) =>{
    if (admin === "first") {
      return "focus: outline-[#00B5AD] outline-1"
    } else if(admin === "last"){
      return "focus: outline-d-light-blue outline-1"
    } else{
      return "focus: outline-none"
    }
  }
  switch (type) {
    case "tel":
      return (
        <div>
          <span className=" d-text-black capitalize font-medium text-[13px] ">{label}</span>

        <div className={`flex flex-wrap items-center justify-between ${className} mt-[6px]`}>
            <div className='p-2 bg-transparent rounded border border-d-fb-gray flex items-center gap-2 '>
                <img src={danemark} alt="danemark" className='w-6'/>
                <span className={`hidden md:flex text-sm px-2 ${admin && "text-[#B5B5B5]"}`}>44-</span>
                <MdOutlineArrowDropDown/>
            </div>

            <input type={type} value={value} className="outline-none p-2 rounded border border-d-fb-gray"/>
        </div>
        </div>
      ); 
    default:
      return (
        <div className={className}>
          <label>
            <span className="d-ft-black capitalize font-semibold md:font-medium text-[13px]">
              {label}
            </span>
            <input type={type} className={`px-2 w-full p-[3px] h-[41px] rounded border border-d-fb-gray mt-[6px] ${FOCUS_STYLE(admin)}`}/>
          </label>
        </div>
      );
      break;
  }

}

export default Input