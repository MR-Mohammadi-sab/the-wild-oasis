"use client"
import Link from 'next/link'
import  { useEffect, useState } from 'react'
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function MobileNavigation() {
    const [show , setShow]=useState(false)
    useEffect(()=>{
      document.addEventListener("scroll",()=>setShow(false))
     return ()=> document.removeEventListener("scroll",()=>setShow(false))
    },[])
  return (
    <div className='flex justify-center items-center  md:hidden'>
    {!show &&<button className=' pt-2 pr-2' onClick={()=>setShow(true)} >
        <Bars3Icon className="w-8 h-8" />
        </button>}
   

        {show && <nav className="flex justify-center items-center   z-10000 text-xl  bg-black/40   md:hidden absolute right-0 top-0 pr-5 pt-6 p-4">
      <ul className="flex flex-col justify-center gap-4  items-start">
        <li> <button onClick={()=>setShow(false)} ><XMarkIcon className="w-6 h-6" /></button></li>
        <li>
          <Link href="/rooms" className="hover:text-accent-400 transition-colors">
            Rooms
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>}
    </div>
  )
}
