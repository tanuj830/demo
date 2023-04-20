import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
const index = () => {
  const router = useRouter()
  
  const [data, setData] = React.useState({})

useEffect(() => {
  if(router.query.data !== undefined)
  {
    setData(JSON.parse(router.query.data))
    console.log(data)
  }
}, [])


  return (
    <div>
      <div>
        <h3>{data.tourname}</h3>
      </div>
    </div>
  )
}

export default index