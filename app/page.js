import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";
export default function Home() {
  return (
    <section className="mt-24">
      <Image src={bg} alt="Mountains and forests with two cabins" fill className="object-cover object-top" placeholder="blur" quality={80} />

      <div className="relative z-10 text-center">
        <h1 className="md:text-6xl text-4xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/rooms"
          className="bg-accent-500 sm:px-8 sm:py-6 px-4 py-4 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury rooms
        </Link>
      </div>
    </section>
  );
}


