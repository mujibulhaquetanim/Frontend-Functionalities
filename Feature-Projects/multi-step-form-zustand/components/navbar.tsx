import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <Link href={'/'} className="text-2xl font-bold flex justify-center items-center">
        Home
    </Link>
  )
}
