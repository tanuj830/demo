import React,{useState, useEffect} from 'react'
import axios from 'axios'

import Link from 'next/link'

const Hero = () => {

  const [data, setData] = useState([])
  const links = [
    {
      name:"Orders Processed",
      number: "1.5M",
      img:"https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-80e57f8/wp-content/uploads/2020/07/group-26@2x.png"
    },
    {
      name:"Customer Reviews",
      number: "60K",
      img:"https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-80e57f8/wp-content/uploads/2020/07/group-230-copy@2x.png"
    },
    {
      name:"Monthly Transactions",
      number: "230K",
      img:"https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-80e57f8/wp-content/uploads/2020/07/group-61@2x.png"
    },
  ]
  return (
    <>
    <div  className='mb-10  flex items-center justify-center'>
        <img data-aos="fade-up"  className=' w-[60%] ' src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-80e57f8/wp-content/uploads/2020/07/group-58@2x.png" />
    </div>

    <div className='mb-20 md:px-[14rem] px-[1rem]'>
      <h2 className='text-4xl font-bold md:p-10 tracking-wide '>
      We’ve Helped Over <span className='text-[#ff7402] '>9 Multi-Million Dollar</span> Food Startups In The
Last Six Years And The Numbers Speak Themselves
      </h2>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10'>
        {
          links.map(link=>(
            <div data-aos="fade-left" className='flex items-center p-3 gap-4 hover:bg-yellow-50 border-2 tracking-wider'>
              <div>
                <img className='w-20' src={link.img} alt="" />
              </div>
              <div className='flex flex-col  justify-center'>
                <div className='text-3xl font-bold'>
                  {link.number}
                </div>
                <div className='uppercase text-sm'>
                  {link.name}
                </div>
              </div>
        </div>
          ))
        }
      </div>
    </div>

    <section className=' mb-20 md:mx-[14rem] mx-[1rem] md:bg-black tracking-wide'>
      <div className='md:relative'>
        <img className='md:inline hidden' src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-80e57f8/wp-content/uploads/2020/07/group-12.png" alt="" />

        <div data-aos="fade-left" className='md:absolute md:top-20 text-white bg-black md:bg-transparent p-4 md:p-0 md:right-10'>
          <div className=''>
            <h3 className='text-2xl font-bold '>We’ve Created Some Of ‘The Most <br /> Downloaded’ Apps In The Region</h3>
            <small className='uppercase '> Explore Their Journey To Success With Code Brew</small>
            <div className='my-6'>
            <Link className=' bg-[#ff7402] px-4 py-3 font-semibold rounded-md hover:shadow-lg hover:shadow-white ' href="/">Explore Menu</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero
// #e3342f