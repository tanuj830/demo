import React from 'react'
import {AiOutlineContacts, AiOutlineHome} from 'react-icons/ai'
import {BsPeople} from 'react-icons/bs'
import {CgMenuBoxed} from 'react-icons/cg'
import Link from 'next/link'
const mobileNav = () => {
  return (
    <div className=' bg-white z-[100] border-t-2 w-full py-2'>
        <div className='flex items-center justify-around text-slate-400'>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-2xl'><AiOutlineHome/></span>
                <Link href="/" className='text-sm'>Home</Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-2xl'><CgMenuBoxed/></span>
                <Link href="/" className='text-sm'>Menu</Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-2xl bg-transparent'><BsPeople/></span>
                <Link href="/" className='text-sm'>About</Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-2xl'><AiOutlineContacts/></span>
                <Link href="/" className='text-sm'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default mobileNav