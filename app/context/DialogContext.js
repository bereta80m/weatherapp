"use client"
import { createContext,useContext, useEffect, useState } from "react";

const DialogContext = createContext({})




function DialogProvider({children}) {
    const [IsDialogOpen, setIsDialogOpen] = useState(false)
    
    const HandleClose = ()=>{
      setIsDialogOpen(false)
    }

    useEffect(() => {
        const HandleClickOutside = (e)=>{
            if (IsDialogOpen && e.target.classList.contains("HomeSite")) {
                setIsDialogOpen(false)
            }
        }
        window.addEventListener("click",HandleClickOutside)
        return()=>{
            window.removeEventListener("click",HandleClickOutside)
        }
    }, [IsDialogOpen,HandleClose])

  return (
    <DialogContext.Provider value={{Hello:"Hello Dialog",IsDialogOpen,setIsDialogOpen,HandleClose}}>
      {children}
    </DialogContext.Provider>
  )
}

export default DialogProvider

export const UseDialog = () => useContext(DialogContext)
    
    
