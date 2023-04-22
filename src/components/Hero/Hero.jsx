import React,{useState, useEffect} from 'react'
import axios from 'axios'

import Link from 'next/link'

const Hero = () => {

  const [data, setData] = useState([])

  return (
    <div  className=' px-4 py-20 tracking-widest   text-white h-[100vh] w-[100%]  bg-no-repeat' style={{backgroundImage:"url(https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600)"}}>
        <div className='flex items-center justify-center flex-col '>
        <div>
        <h2 className='text-4xl  font-extrabold'>A TASTE OF BHABHAR</h2>
        </div>
        </div>
        <div>
        <small className='font-bold'>By DOSE OF BHABHAR</small>
        </div>
        <h2 className='text-lg font-semibold mt-20 '>Only takeways are available </h2>
        {/* <img  className='mt-10 rounded-lg ' src="https://media.istockphoto.com/id/1369101558/photo/plate-of-barbecue-chicken-wings-top-view.jpg?b=1&s=170667a&w=0&k=20&c=9BhxIf2TRPfy4rIfy_7tuO5SS9B0YDq4xfw8uysHrwY=" alt="" /> */}
        <p className='text-lg underline hover:text-blue-600'>Explore our menu</p>
    </div>
  )
}

export default Hero
// #e3342f