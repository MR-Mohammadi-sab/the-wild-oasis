import { useContext } from "react"
import { ReservationContext } from "./ReservationContextProvider"


export function useReservation(){
  const context=useContext(ReservationContext)
  if(context===undefined) throw new Error("use the context out side of provider")
    return context
}
