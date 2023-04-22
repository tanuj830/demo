import React from 'react'
import PCNavbar from './PCNavbar'
import MobileNav from './MobileNav'
const Navbar = () => {
  return (
    <div>
          <div className='hidden w-full md:block'><PCNavbar/></div>
            <div className='block w-full md:hidden  fixed  bottom-0'  ><MobileNav/></div>
    </div>
  )
}

export default Navbar