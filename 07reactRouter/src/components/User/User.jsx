import React, { useContext } from 'react'
import { useParams } from 'react-router'
import UserContext from '../../Context/UserContext';

function User() {
    const {userId} = useParams();

    const {user} = useContext(UserContext);

    if(!user) return(
         <div className='bg-orange-600 flex justify-center items-center text-center h-screen w-full'>
      <div className='font-bold text-3xl sm:text-7xl container'>
        User: {userId}
        Username: Not Logged in
    </div>
    </div>
    ) 

  return (
    <div className='bg-orange-600 flex justify-center items-center text-center h-screen w-full'>
      <div className='font-bold text-3xl sm:text-7xl container'>
        User: {userId}
        Username: {user.username}
    </div>
    </div>
  )
}

export default User