import Link from "next/link";
import Image from "next/image";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session=await auth()

  
  return (
    <nav className="z-10 text-xl hidden md:block">
      <ul className="flex gap-12 items-center">
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
          {session?.user?.image ?
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-4 flex-row-reverse"
          >
            <Image  src={session?.user?.image } alt={session?.user?.name} className="rounded-full w-8 h-8 "
            referrerPolicy="no-referrer"
            height={32}
            width={32}
            />
            <span>Guest area</span>
          </Link>
          :<Link
          href="/account"
          className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>}
        </li>
      </ul>
    </nav>
  );
}
