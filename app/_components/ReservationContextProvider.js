"use client"
import { createContext, useState } from "react"

export const ReservationContext=createContext()
const initialState={from:undefined,to:undefined}
export default function ReservationContextProvider({children}) {
  const [range,setRange]=useState(initialState)
  const resetRange=()=>setRange(initialState)
  return (
    <ReservationContext.Provider value={{range,setRange,resetRange}}>{children}</ReservationContext.Provider>
  )
}

