import React from 'react'
import { useState , createContext , useEffect } from 'react';

export const AppContext = createContext() ;

export default function AppProvider({children}) {
    
  const [ toastState , setToastState ] = useState({message:"" , isShow : false}) ;
  useEffect( () => {
    const timeoutId = setTimeout( ()=>{
      toastState.isShow && setToastState(
        (prev) => ({...prev,isShow:false}) 
        ) ;
    } , 2500 ) ;
    return () => clearTimeout(timeoutId) ;
  } ,[toastState.isShow])

    const value = { 
        toastState ,
        setToastState
   }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
