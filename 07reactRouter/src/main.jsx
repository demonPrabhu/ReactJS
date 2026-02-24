import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter ,createRoutesFromElements, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubDataLoader} from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'

// ✅ Import your UserContextProvider
import UserContextProvider from './Context/UserContextProvider.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element= {<Home />} />
      <Route path='about' element= { <About /> } />
      <Route path='contact' element = {<Contact />} />
      <Route path='user/' element = {<User />} >
      <Route path=':userId' element = {<User />} />
      </Route>
      <Route loader={githubDataLoader} path='github' element={<Github />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<div className='text-red-500 text-center'> 404:Not Found </div>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    {/* ✅ Wrap the router in your context provider */} 
    <UserContextProvider> 
      <RouterProvider router={router} /> 
    </UserContextProvider> 
    </StrictMode>,
)
