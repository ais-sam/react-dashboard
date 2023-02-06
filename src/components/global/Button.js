import React from 'react'

const Button = ({className,text}) => {
  return (
    <button className={`${className} px-6 py-[9px] text-sm rounded text-white capitalize`}>{text}</button>
  )
}

export default Button