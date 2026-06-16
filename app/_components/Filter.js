"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


export default function Filter() {
    const searchParams=useSearchParams()
    const router=useRouter()
    const pathname=usePathname()
    const activeFilter=searchParams?.get("capacity") ?? "all"
    // function handleFilter(filter){
    // // console.log(searchParams)
    // router.replace(`/rooms?capacity=${filter}`);
        
    // }
    function handleFilter(filter){
      const params=new URLSearchParams(searchParams)
      params.set("capacity",filter)
      router.replace(`${pathname}?${params.toString()}`,{scroll:false});   
    }
  return (
    <div className="flex border border-primary-800 ">
        <button className={`px-5 py-2  hover:bg-primary-900 ${activeFilter === 'all' ? 'bg-primary-900' : ''}`} onClick={() => handleFilter('all')}>All</button>
        <button className={`px-5 py-2  hover:bg-primary-900 ${activeFilter === 'small' ? 'bg-primary-900' : ''}`} onClick={() => handleFilter('small')}>1&mdash;3</button>
        <button className={`px-5 py-2  hover:bg-primary-900 ${activeFilter === 'medium' ? 'bg-primary-900' : ''}`} onClick={() => handleFilter('medium')}>4&mdash;7</button>
        <button className={`px-5 py-2  hover:bg-primary-900 ${activeFilter === 'large' ? 'bg-primary-900' : ''}`} onClick={() => handleFilter('large')}>8&mdash;12</button>    
    </div>
  )
}
