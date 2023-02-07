import React from 'react'

const Select = ({label,className}) => {
  return (
    <div className={className}>
      <label>
        <span className="d-ft-black capitalize font-semibold text-[13px]">
          {label}
        </span>
        <select name="cars" id="cars" className="bg-transparent w-full p-2 rounded border border-d-fb-gray mt-2">
        </select>{" "}
      </label>
    </div>
  );
}

export default Select