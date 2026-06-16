// import {unstable_noStore as noStore} from "next/cache"
import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList({filter}) {
  // noStore()
  const cabins = await getCabins()
  if(!cabins.length) return null;

  let displayRooms;
  
  if(filter==="all") displayRooms=cabins;
  
  if(filter==="small") displayRooms=cabins.filter(cabin=>cabin.maxCapacity <= 3)
  
  if(filter==="medium") displayRooms=cabins.filter(cabin=>cabin.maxCapacity >= 4 && cabin.maxCapacity <=7)
  
  if(filter==="large") displayRooms=cabins.filter(cabin=>cabin.maxCapacity  >=8)
  return (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayRooms.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
  )
}
