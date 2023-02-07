import React from 'react'
import danemark from "../../assets/icons/danemark.png"

const Input = ({label,type,className}) => {
  switch (type) {
    case "tel":
      return (
        <div>
          <span className=" d-text-black capitalize font-medium text-[13px] ">{label}</span>

        <div className={`flex flex-wrap items-center justify-between ${className} mt-2`}>
            <div className='p-2 bg-transparent rounded border border-d-fb-gray flex items-center gap-2 '>
                <img src={danemark} alt="danemark" className='w-6'/>
                <span className='hidden md:flex text-sm px-2'>44-</span>
                &#9660;
            </div>

            <input type={type} className="p-2 rounded border border-d-fb-gray"/>
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
            <input type={type} className="w-full p-2 rounded border border-d-fb-gray mt-2"/>
          </label>
        </div>
      );
      break;
  }

}

export default Input