import React from 'react'

const Input = ({label,type,className}) => {
  return (
    <div className={className}>
        <label>
            <span className="d-ft-black capitalize">{label}</span>
            <input type={type} className='w-full block p-2 rounded border border-d-fb-gray'/>
        </label>
    </div>
  )
}

export default Input