import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.png'
function Logo() {
  return (
    <Link href="/" className="flex flex-col sm:flex-row items-center md:gap-4 gap-2 z-10 ">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <div className="md:w-14 md:h-14 w-10 h-10 relative">
        <Image src={logo}  alt="The Wild Oasis logo" fill quality={100} />
      </div>
      <span className="md:text-xl text-lg font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
