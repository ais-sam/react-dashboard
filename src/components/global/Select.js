import React from 'react'

const Select = ({label,className,placeholder}) => {
  return (
    <div className={`${className} relative`}>
      <label>
        <span className="text-d-ft-black md:text-d-text-black capitalize font-semibold md:font-medium text-[13px]">
          {label}
        </span>
        <span className="text-sm text-[#B5B5B5] absolute w-full top-[42px] left-1/2 -translate-x-[70px]">{placeholder}</span>
        <select className="relative bg-transparent w-full p-2 rounded border border-d-fb-gray mt-[6px]">
        </select>{" "}
      </label>
    </div>
  );
}

export default Select