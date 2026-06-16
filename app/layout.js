import {Josefin_Sans} from "next/font/google"
import Header from "./_components/Header"

import "@/app/_styles/globals.css"
import ReservationContextProvider from "./_components/ReservationContextProvider"


const josefin=Josefin_Sans({
  subsets:["latin"],
  display:"swap"
})
export const metadata = {
  title: {
    template:"%s /The Wild Oasis",
    default:"Welcome / The Wild Oasis"
  },
    description:
    "Luxurious room hotel, located in the heart of the Afghanistan Dolomites, surrounded by beautiful mountains and dark forests",
}

export default function RootLayout({ children }) {
  return (
  <html lang="en" style={{fontFamily:josefin.style.fontFamily}}>
      <body className={`antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1 md:px-8 px-4 md:py-12 py-6 grid">
        <main className="  w-full max-w-7xl min-w-[260px] mx-auto ">
          <ReservationContextProvider>
           {children}
          </ReservationContextProvider>
        </main>
      </div>
    </body>
  </html>
  )
}
