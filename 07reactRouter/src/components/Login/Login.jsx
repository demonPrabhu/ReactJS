import React, { useContext, useState } from 'react'
import UserContext from '../../Context/UserContext';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload 
        console.log("Username:", username); 
        console.log("Password:", password); 

        setUser({username,password});

        // Here you would send credentials to your backend API
        // Reset all inputs in the form 
        // form.reset();
        setUsername('')
        setPassword('')
    }
  return (
    <div className='bg-gray-700 text-white flex flex-col justify-center items-center w-full h-screen'>
        Login to New World!

        <div className='bg-gray-500 m-4 p-5 rounded-xl shadow'>
            <form onSubmit={handleSubmit} className='grid grid-cols-1'>
                <input className='p-2 m-1 rounded-xl border' type="text" placeholder='Username' value={username} 
                onChange={(e)=>setUsername(e.target.value)}
                />
                <input className='p-2 m-1 rounded-xl border' type="password" name="" placeholder='Password' value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                <button type="submit"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >Log In</button>
            </form>
        </div>
        </div>
  )
}

export default Login