import { createContext, useContext, useState, } from "react";


export const ListingContext = createContext()

export const ListingContextProvider = ({children}) => {
    const [open, setOpen] = useState(false)
    const [action, setAction] = useState('')
   
    const value = {
        open, setOpen,
        action, setAction
    }
  
    return (
      <ListingContext.Provider value={value}>
          {children}
      </ListingContext.Provider>
    )
  }


export const useListing = ()=>{
    const context = useContext(ListingContext)

    if (context === undefined) {
      throw new Error("useListing must be used within ListingContext")
  }
    return context
}
