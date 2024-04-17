import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image 
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Kokousta"
          className="max-sm:size-10"
        />
        <p className="text-[24px] text-white font-bold max-sm:hidden">Kokousta</p>
      </Link>
      <div className="flex-between gap-5">
        {/* clerk user management*/}
        <SignedIn>
          <UserButton/>
        </SignedIn>
        
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar