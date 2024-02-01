import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <>
      <div className='bg-white w-4/5 mx-auto h-max'> 
        
        
        <img src="/src/img/logo.JPG" className='h-auto max-w-[200px] mx-auto'/>
        <br></br>
        <h1 className='font-bebas text-blue-300 text-6xl text-center'>Contact Dayton Swish</h1>
        <br></br>
        <br></br>

        <form className='font-bebas text-blue-950 text-2xl text-left mx-40'>
          <label>Name: </label>
          <input className='w-1/2 rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-5' type="text" name="user_name" />
          <br></br>
          <br></br>
          <label>Email: </label>
          <input className='w-1/2 rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-5' type="email" name="user_name" />
          <br></br>
          <br></br>
          <label>Subject: </label>
          <input className='w-1/2 rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-2' type="subject" name="user_name" />
          <br></br>
          <br></br>
          <textarea className='w-4/5 h-96 rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-2xl mx-20' name="message" />
          <br></br>
          <br></br>
          <button className="rounded bg-blue-950 text-blue-300 px-7 py-1 mx-20">Send Email </button>
          
        </form>
        <br></br>
        <br></br>
        
    </div>
  
  </>
    
  )
}

export default ContactUs