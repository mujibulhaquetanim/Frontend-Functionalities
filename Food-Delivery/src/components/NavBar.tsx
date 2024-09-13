import React from 'react'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-3 px-4 shadow-md">
        <h1 className='text-2xl font-bold text-orange-500'>YumDispatch</h1>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='flex gap-5 text-2xl'>
            <h1>🔎</h1>
            <h1>🛒</h1>
        </div>
        <button className='bg-orange-500 hover:bg-orange-700 py-2 px-4 rounded'>Sign In</button>
    </nav>
  )
}
