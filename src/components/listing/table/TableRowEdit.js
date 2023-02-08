import React from 'react'
import Input from '../../login/Input'

const TableRowEdit = ({user}) => {
  return (
    <tr className='w-full bg-[#F1F2F459] border-l-2 border-l-[#9BA1FF] py-3'>
        <div>
            <span className='block text-xs text-d-text-black'>First Name</span>
            <input type='text' value={user.fullName}/>
        </div>
    </tr>
  )
}

export default TableRowEdit