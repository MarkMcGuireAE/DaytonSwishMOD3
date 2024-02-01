import React from 'react'



const Homepage = () => {

 
    return (
    <div className='bg-white w-4/5 mx-auto h-max'> 
    <h1 className='text-blue-950 font-bebas text-9xl text-center'>Dayton Swish</h1>
    <h1 className='text-blue-950 font-bebas text-6xl text-center'>Youth Basketball</h1>
    <br></br>
    <br></br>
   
    <div className='grid grid-cols-3'>
      <div className='col-start-3 divide-y'>
    <h1 className='font-bebas text-blue-950 text-3xl mx-auto bg-blue-300 w-1/2 text-center rounded my-1 border-2 border-blue-950'>Upcoming Events</h1>
    <img src="https://i.imgur.com/nhVPJqv.jpeg" className='rounded mx-auto h-auto w-1/2' />
    <br></br>
    <img src="https://i.imgur.com/WntJUyu.jpeg" className='rounded mx-auto h-auto w-1/2' />
    <br></br>
    <img src="https://i.imgur.com/V6SjYqZ.jpeg" className='rounded mx-auto h-auto w-1/2' />
    <br></br>
    <img src="https://i.imgur.com/MdS11eK.jpeg" className='rounded mx-auto h-auto w-1/2' />
    {/* <div className='flex justify-end'>
    <div className='flex border-2 border-blue-950 justify-center rounded w-1/5 h-96 bg-white'>
      <div  className='border-blue-950 w-full h-10 bg-blue-300'>
      <h3 className='font-bebas text-white text-4xl text-center'>Announcements</h3>
      </div>
    </div>
    </div> */}
    </div>
    
    <div className='col-span-2 row-start-1 mx-20 text-center divide-y'>
     <div> 
    <img src="https://i.imgur.com/cx5MCrq.jpeg" className='rounded mx-auto h-auto w-3/5 border-4 border-blue-300' />
    <br></br>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, numquam perspiciatis unde reprehenderit eveniet similique reiciendis! Et at dolor praesentium, aut rerum atque cum corrupti nostrum ea, officiis explicabo sint?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus omnis, nesciunt sint ut dolores sed iure tempora ullam beatae ipsum similique cum nostrum amet eius voluptatibus assumenda nihil provident.</p>
    <br></br>
    </div>
    <div>
    <br></br>
    <br></br>
    <img src="https://i.imgur.com/6FUCELt.jpeg" className='rounded mx-auto h-auto w-3/5 border-4 border-blue-300' />
    <br></br>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, numquam perspiciatis unde reprehenderit eveniet similique reiciendis! Et at dolor praesentium, aut rerum atque cum corrupti nostrum ea, officiis explicabo sint?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus omnis, nesciunt sint ut dolores sed iure tempora ullam beatae ipsum similique cum nostrum amet eius voluptatibus assumenda nihil provident.</p>
    <br></br>
    </div>
    </div>
    </div>
    <br></br>
    <br></br>
   
    </div>
  )
}

export default Homepage
