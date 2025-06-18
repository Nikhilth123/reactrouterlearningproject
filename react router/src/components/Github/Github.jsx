import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
//     const [data,setData]=useState({})
//    useEffect(()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then((res)=>res.json())
//     .then((res)=>setData(res))
//    },[])
  return (
    <div className='bg-gray-600 p-4 text-white text-3xl'>
        Githubfollowers:{data.followers}
        <img src={data.avatar_url} alt='github profile avatar'></img>
        </div>
  )
}

export default Github
export const useloader=async()=>{
                const res=await fetch('https://api.github.com/users/hiteshchoudhary')
              return res.json();
              
}
