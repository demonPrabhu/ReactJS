import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    // const url = 'https://api.github.com/users/hiteshchoudhary';
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    //     .catch((error) => alert(error))
    // }, [])

    const data = useLoaderData()

  return (
    <div className='bg-gray-700 p-4 text-white text-center text-2xl sm:text-7xl'>
        Github: {data.followers}
        <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

export const githubDataLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}