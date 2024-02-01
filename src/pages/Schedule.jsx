import React from 'react'


const Schedule = () => {
  
  
  


  return (
    <div className='bg-white w-4/5 mx-auto'> 
        
        
        <img src="/src/img/logo.JPG" className='h-auto max-w-[200px] mx-auto'/>
        <br></br>
        <h1 className='font-bebas text-blue-950 text-3xl text-center'>2023/2024 Winter Basketball Season</h1>
        <h1 className='text-center'>(All home games are played at: 3701 Salem Ave)</h1>
        <br></br>
        <div className="bg-blue-950 w-3/5 mx-auto rounded">
        <div className=" flex justify-around items-center font-bebas text-white text-3xl">
          <button>2nd Grade</button>
          <button>4th Grade</button>
          <button>5th Grade</button>
          <button>6th Grade</button>
        </div>
        </div>
        <br></br>
        <br></br>
        <h1 className='font-bebas text-blue-300 text-3xl text-center'>2nd Grade Team</h1>
        <p className='text-center'>Current Record: 4-4</p>
        <br></br>
        <br></br>
        <div className='grid grid-cols-4'>
          <p className='col-start-2'>Saturday, January, 6th, 2024 @ Dayton Airmen </p>
          <p className='text-green-500 col-start-4'>W 18-8</p>
          <p className='col-start-2'>700 S James H McGee Blvd </p>
        </div>
        <br></br>
        <br></br>
        <div className='grid grid-cols-4'>
          <p className='col-start-2'>Saturday, January, 13th, 2024 vs. Wilmington</p>
          <p className='col-start-4'>3:40 PM</p>
        </div>
        <br></br>
        <br></br>
        <div className='grid grid-cols-4'>
          <p className='col-start-2'>Sunday, January, 14th, 2024 @ South Dayton Knights </p>
          <p className='col-start-4'>12:20 PM</p>
          <p className='col-start-2'>1200 W Dorothy Ln, Kettering, OH </p>
        </div>
        <br></br>
        <br></br>
        <div className='grid grid-cols-4'>
          <p className='col-start-2'>Sunday, January, 14th, 2024 @ Centerville Hustle </p>
          <p className='col-start-4'>3:45 PM</p>
          <p className='col-start-2'>195 N Johanna Dr, Centerville, OH </p>
        </div>
        <br></br>
        <br></br>
        <div className='grid grid-cols-4'>
          <p className='col-start-2'>Saturday, January, 27th, 2024 vs. Huber Heights</p>
          <p className='col-start-4'>10:00 AM</p>
        </div>
        <br></br>
        <br></br>
        <div className='grid grid-cols-4'>
          <p className='col-start-2'>Sunday, January, 28th, 2024 vs. Gem City Heat</p>
          <p className='col-start-4'>10:00 AM</p>
        </div>
        <br></br>
        <br></br>
       
        
    </div>
  )
}

export default Schedule