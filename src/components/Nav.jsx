import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({username, setUser}) => {


const logout = () => {
  localStorage.removeItem("token")
  setUser({})
};

console.log(username)
  return (
    <div className="bg-blue-300 w-4/5 mx-auto">
      
        <div className="flex items-center font-bebas text-white text-3xl">
 <Link  to="/">
 <img src="https://i.imgur.com/JSyjGkx.png" className='h-auto max-w-[125px]'/>
        </Link>
       <Link  className="nav-item"  to="/">
            <h1 className="mx-5">Home</h1>
        </Link>
        <Link  className="mx-5" to="/pages/Schedule">
            <h1>Schedule</h1>
        </Link>
        <Link  className="mx-5"  to="/pages/ContactUs">
            <h1>Contact Us</h1>
        </Link>
        <Link  className="mx-5"  to="https://www.daytonmetro.org/">
            <h1>Dayton Metro League</h1>
        </Link>
        </div>
        <div className="flex justify-end items-center font-bebas text-blue-900 text-2xl">
        {username ? 
        <>
          <h1 className="mx-2">{username}:</h1>
          <h1 className="mx-2">
            <Link to="/profile">Profile</Link>
          </h1>
          <h1 className="mx-2" onClick={logout}>
            <Link to="/login">Logout</Link>
          </h1>
      
        </>
       : 
        <>
          <h1 className='mx-2'>
            <Link to="/login">Login</Link>
          </h1>
          <h1 className='mx-2'>
            <Link to="/register">Register</Link>
          </h1>
        </>
      }

      </div>


    </div>
  )
}

export default Nav