import React from 'react'
import danemark from "../../assets/icons/danemark.png"

const Input = ({label,type,className}) => {
  switch (type) {
    case "tel":
      return (
        <div>
          <span className=" d-text-black capitalize font-normal text-[13px]">{label}</span>

        <div className={`flex flex-wrap items-center justify-between ${className}`}>
            <div className='p-2 bg-transparent rounded border border-d-fb-gray flex items-center gap-2 '>
                <img src={danemark} alt="danemark" className='w-6'/>
                &#9660;
            </div>

            <input type={type} className="p-2 w-64 rounded border border-d-fb-gray"/>
        </div>
        </div>
      ); 
    default:
      return (
        <div className={className}>
          <label>
            <span className="d-ft-black capitalize font-semibold text-[13px]">
              {label}
            </span>
            <input type={type} className="w-full p-2 rounded border border-d-fb-gray"/>
          </label>
        </div>
      );
      break;
  }

}

export default Input