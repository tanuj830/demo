import React from 'react'
import Link from 'next/link'
import {BsAirplaneEngines} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <div className='w-full'>
        <div className='relative'>
            <div className='absolute hover:shadow-2xl shadow-lg bg-gradient-to-tr from-violet-500 to-purple-500 text-white right-3 top-3 p-4 rounded-2xl'>
                    <h2 className='text-xl'>Corporate Office</h2>
                    <h3 className='text-sm text-justify'>Graphic Era (Deemed to be University), Clement Town, Dehradun, Uttrakhand – 248001</h3>
            </div>
        </div>
        <iframe className='w-full h-80'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.761594969285!2d77.99881481509468!3d30.2723732817999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bca3fc0ccf3%3A0xd19900de8c24dbee!2sGraphic%20Era%20Hill%20University!5e0!3m2!1sen!2sin!4v1674049856652!5m2!1sen!2sin" sizes="(max-width: 1200px) 100vw,
              (max-width: 1200px) 500vw,
              500vw" ></iframe>
    </div>
    <div className='xl:container bg-gradient-to-tr from-violet-500 to-purple-500 p-6 text-slate-300'>
      <div className=' flex items-center justify-between gap-32'>
        {/* section1 */}
        <div className='flex items-center justify-center'>
            <div>
            <Link className="text-3xl text-themecol flex items-center justify-center"  href="/">
              <BsAirplaneEngines/><span className="ml-2">ARTravells</span>
            </Link>
            <div className='flex flex-col'>
            <small className='font-semibold text-white'>Keep travelling all year round!</small>
             </div>
            </div>
        </div>
        {/* section2 */}
        <div className='flex items-center justify-center'>
          <div className='flex items-center justify-center gap-32'>
              <div className=''>
                <div ><h3 className='text-xl text-white'>Discover us</h3></div>
                <div className='flex  justify-center flex-col mt-2 '>
                  <Link className='hover:scale-110 hover:text-white' href="/about">About Us</Link>
                  <Link className='hover:scale-110 hover:text-white' href="/about">Our Team</Link>
                </div>
              </div>
              <div className=''>
                <div ><h3 className='text-xl text-white'>Support</h3></div>
                <div className='flex  justify-center flex-col mt-2 '>
                  <Link className='hover:scale-110 hover:text-white' href="/contact">Contact Us</Link>
                  <Link className='hover:scale-110 hover:text-white' href="/aboutus">How To Book</Link>
                </div>
              </div>
              <div className=''>
                <div ><h3 className='text-xl text-white'>Resources</h3></div>
                <div className='flex  justify-center flex-col mt-2 '>
                  <Link className='hover:scale-110 hover:text-white' href="/aboutus">Guest Reviews</Link>
                  <Link className='hover:scale-110 hover:text-white' href="/aboutus">Blog</Link>
                </div>
              </div>
          </div>
        </div>

      </div>
        {/* section3 */}
        <div className='text-justify w-full my-2'>
      <hr />
        <div className='mt-2'>
        <p className='font-semibold text-[13px] w-[60%] mt-2'>*Caution: Beware of Fake Promotions or Offers</p>
          <p className='text-[13px] w-[60%] mt-2'>*Please do not believe or engage with any promotional emails, SMS or Web-link which ask you to click on a link and fill . All ARTravellers authorized email communications are delivered from domain @artravellers.co.in.</p>
          <p className='text-[13px] w-[60%] mt-2'>*ARTravells bears no liability or responsibility whatsoever for any communication which is fraudulent or misleading in nature and not received from registered domain</p>
        </div>
        </div>
        {/* section4 */}
        <div className=' py-3'>
          <hr />
          <div className='my-2'>
              <h3 className='text-center text-[11px]'>© 2022-23 ARTravelles Pvt Ltd. All Rights Reserved.</h3>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default Footer