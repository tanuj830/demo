import React,{useState, useEffect} from 'react'
import axios from 'axios'

import Link from 'next/link'

const Hero = () => {

  const [data, setData] = useState([])

  return (
    <div className=' px-4   text-slate-700 h-[100vh]'>
        <h2 className=' mt-6 text-4xl  font-extrabold'>New Chicken Wings from <span className='text-black brightness-200'>DOSE OF BHABHAR</span></h2>
        <h2 className='text-lg font-semibold mt-2 text-slate-600'>Lip-smacking Chilli & Lemon flavour</h2>
        <img className='mt-10 rounded-lg' src="https://media.istockphoto.com/id/1369101558/photo/plate-of-barbecue-chicken-wings-top-view.jpg?b=1&s=170667a&w=0&k=20&c=9BhxIf2TRPfy4rIfy_7tuO5SS9B0YDq4xfw8uysHrwY=" alt="" />
        <p className='text-lg mt-4 hover:underline hover:text-blue-600'>Explore our menu</p>
    </div>
  )
}

export default Hero