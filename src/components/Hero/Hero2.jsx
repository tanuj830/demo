import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Hero3 from '../Hero/Hero3'
import Link from 'next/link'

const Hero = () => {

  const [data, setData] = useState([])

  return (
  <div>
      <div  
     className=' px-4  overflow-hidden bg-black   text-white h-[100vh]'>
        <h2 data-aos="fade-up" className=' mt-6 text-4xl  font-extrabold'>New Chicken Wings from <span className='text-black brightness-200'>DOSE OF BHABHAR</span></h2>
        <h2 data-aos="fade-up" className='text-lg font-semibold mt-2 text-slate-600'>Lip-smacking Chilli & Lemon flavour</h2>
        <img data-aos="fade-up"
     className='mt-10 rounded-lg' src="https://media.istockphoto.com/id/1369101558/photo/plate-of-barbecue-chicken-wings-top-view.jpg?b=1&s=170667a&w=0&k=20&c=9BhxIf2TRPfy4rIfy_7tuO5SS9B0YDq4xfw8uysHrwY=" alt="" />
        <p data-aos="fade-up" className='text-lg mt-4 hover:underline hover:text-blue-600'>Explore our menu</p>
    </div>

  </div>
  )
}

export default Hero