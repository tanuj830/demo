import React from 'react'
import {AiOutlineContacts, AiOutlineHome} from 'react-icons/ai'
import {BsPeople} from 'react-icons/bs'
import {CgMenuBoxed} from 'react-icons/cg'
import Link from 'next/link'
const mobileNav = () => {

    const [isActive, setIsActive] = React.useState(0)

    const links = [
        {
            "name": "home",
            "icon": <AiOutlineHome/>
        },
        {
            "name": "menu",
            "icon": <CgMenuBoxed/>
        },
        {
            "name": "about",
            "icon": <BsPeople/>
        },
        {
            "name": "contact",
            "icon": <AiOutlineContacts/>
        },
    ]

    const handleClick = (ind) =>{
        setIsActive(ind)
    }
  return (
    <div className=' bg-white border-t-2 w-full py-2'>
        <div className='flex items-center justify-around text-slate-400'>
           {
            links.map((link, ind)=>(
                <div onClick={ind=>handleClick(ind)} className='flex flex-col items-center justify-center'>
                {
                    isActive === ind ? <div className='text-2xl text-black'>{link.icon}</div>: <div className='text-2xl'>{link.icon}</div>
                }
                <Link href={"/" +(link.name !== "home" ? link.name: "/")} className='text-sm'>{link.name}</Link>
            </div>
            ))
           }
        </div>
    </div>
  )
}

export default mobileNav