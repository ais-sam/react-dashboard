import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useListing } from '../../../contexts/ListingContext';

const RowActionButton = ({type}) => {
    const {setOpen, setAction} = useListing()

    const addUser = ()=>{
        setOpen(true)
        setAction('add')
    }

    const deleteUser = ()=>{
        setOpen(true)
        setAction('delete')
    }

    if(type === 'edit'){
        return <button className='hover:text-d-light-blue'><FaRegEdit/></button>
        
    }else{
        return <button onClick={deleteUser} className='hover:text-d-red'><RiDeleteBinLine/></button>
    }
 
}

export default RowActionButton