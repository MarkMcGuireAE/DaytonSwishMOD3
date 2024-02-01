import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { baseURL } from '../App'

const Show = () => {
   const params = useParams()
    const {id} = params
    console.log(id)

    let [person, setPerson] = useState ([])

   useEffect(() => {

    const getData = async () => {
      try {
        // OPTION 1: use fetch for "index" route
        // const response = await fetch('https://localhost:5000/api/regs/:id')
        // const data = await response.json()

        // OPTION 2: use axios
        const response = await axios.get(baseURL + '/api/regs/' + id)
        console.log(response)
        setPerson(response.data)
      } catch(err) {
        console.error(err)
      }
    }

    getData()

  }, [])

  async function deletePerson(id) {
  
    try {

       // OPTION 1: use fetch for "delete" route

      // await fetch(`/api/todos/${id}`, {
      //   method: 'DELETE'
      // })

       // OPTION 2: use axios

       await axios.delete(baseURL + `/api/regs/${id}`)
       res.redirect("/pages/Registration")


    } catch(err) {
      console.log(err)
    }
    
  }

//   async function updatePerson(id) {
  
//     try {

//        // OPTION 1: use fetch for "delete" route

//       // await fetch(`/api/todos/${id}`, {
//       //   method: 'DELETE'
//       // })

//        // OPTION 2: use axios

//        await axios.patch(`http://localhost:5000/api/regs/${id}`)
    


//     } catch(err) {
//       console.log(err)
//     }
    
//   }


   

  return (
    <div className='bg-white w-4/5 mx-auto h-full font-bebas text-blue-950 text-3xl text-left'>
      <br></br>
      <h1 className='font-bebas text-blue-300 text-8xl text-center'> {person.firstName} {person.lastName} </h1>

      
<div className='flex justify-center'>
        <Link to={`/pages/edit/${person._id}`}>
          <button className="rounded bg-blue-950 text-blue-300 px-7 py-1 mx-2 " >Edit Player Information </button>
          </Link>
        <Link to={"/profile"} onClick={()=> deletePerson(person._id)}>
          < button className="rounded bg-blue-950 text-blue-300 px-7 py-1 mx-2">Delete Player </button>

          </Link>
        <br></br>
        <Link to={`/profile`}>
          <button className="rounded bg-blue-950 text-blue-300 px-7 py-1 mx-2 " >See Roster </button>
          </Link>
         
    </div>
    <br></br>
    <br></br>
    <div className='bg-white w-4/5 mx-auto'>
      <h1> DOB: {person.dob} </h1> 
        <br></br>
        <h1>Skill Level: {person.skillLevel} </h1>
        <br></br>
        <br></br>
        <h1 className='text-blue-300 text-5xl'>Parent Information  </h1>
        <br></br>
        <h1>Parent Name : {person.parent} </h1>
        <br></br>
        <h1>Parent Phone: {person.cell} </h1>
        <br></br>
       <h1> Parent Email: {person.email} </h1>
        <br></br>
        <h1>{person.interest ? "Willing to Volunteer : Yes" : "Willing to Volunteer : No" } </h1>
        <br></br>
        <br></br>
       < h1 className='text-blue-300 text-5xl'> Emergency Contact Information  </h1>
        <br></br>
        <h1>Emergency Contact Name: {person.eContactName} </h1>
        <br></br>
       <h1> Emergency Contact Phone: {person.eContactCell} </h1>
        <br></br>
        <h1>Emergency Contact Relationship: {person.eContactRel} </h1>
        <br></br>
       <h1> {person.release ? "Release of Liability Signed : Yes" : "Release of Liability Signed : No" } </h1>
        <br></br>
        <br></br>
        <br></br>

          <br></br>
          </div>
      
    </div>
  )
}

export default Show