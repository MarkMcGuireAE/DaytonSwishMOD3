import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import RegForm from './regForm'

import axios from "axios"



const Registration = () => {
  let [regs, setRegs] = useState([]);
   let [firstName, setFirstName] = useState ("");
     let [lastName, setLastName] = useState ("");
     let [dob, setDob] = useState ("");
     let [skillLevel, setSkillLevel] = useState ("");
     let [parent, setParent] = useState ("");
     let [cell, setCell] = useState ("");
     let [email, setEmail] = useState ("");
     let [interest, setInterest] = useState(false)
     let [eContactCell, setEContactCell] = useState ("");
     let [eContactRel, setEContactRel] = useState ("")
     let [eContactName, setEContactName] = useState ("");
     let [release, setRelease] = useState (false);

     console.log(regs)
     useEffect(() => {

      const getData = async () => {

      try {
        const response = await axios.get("http://localhost:5000/api/regs")
        console.log(response)
        setRegs(response.data)

      } catch (err) {
        console.error(err)
      }
    }
    getData()

     }, [] )

     async function addToList(e) {
        
      
      try {
  
 
        let reg = {
          firstName: firstName, 
          lastName: lastName, 
          dob: dob,
          skillLevel: skillLevel,
          parent: parent, 
          cell: cell,
          email: email, 
          interest: interest,
          eContactCell: eContactCell, 
          eContactName: eContactName,
          eContactRel: eContactRel,
          release : release
        };

        if (interest === "on") {
          interest = true
        } else {
          interest = false
        }

        
        if (release === "on") {
          release = true
        } else {
          release = false
        }

        console.log (interest)
        console.log (release)
    
        // OPTION 1: use fetch for "create" route
  
        // const response = await fetch('/api/todos', {
        //   method: 'POST',
        //   body: JSON.stringify(todo),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
    
        // const newTodo = await response.json()
  
        // OPTION 2: use axios
  
        const response = await axios.post("http://localhost:5000/api/regs", reg)
  
        setRegs([...reg, response.data]);

        setFirstName("")
        setLastName("")
        setDob("")
        setSkillLevel("")
        setParent("")
        setCell("")
        setEmail("")
        setInterest(false)
        setEContactName("")
        setEContactCell("")
        setEContactRel("")
        setRelease(false)
  
      } catch(err) {
        console.log(err)
      }
    }
  
   
  
    async function deleteTodo(id) {
  
      try {
  
         // OPTION 1: use fetch for "delete" route
  
        // await fetch(`/api/todos/${id}`, {
        //   method: 'DELETE'
        // })
  
         // OPTION 2: use axios
  
         await axios.delete(`/api/todos/${id}`)
  
        let newTodos = todos.filter((todo) => todo._id !== id);
        setTodos(newTodos);
  
      } catch(err) {
        console.log(err)
      }
      
    }
    function handleChangeF (event) {
      setFirstName(event.target.value)
    }
    function handleChangeL (event) {
      setLastName(event.target.value)
    }
    function handleChangeD (event) {
      setDob(event.target.value)
    }
    function handleChangeS (event) {
      setSkillLevel(event.target.value)
    }
    function handleChangeP (event) {
      setParent(event.target.value)
    }
    function handleChangeC (event) {
      setCell(event.target.value)
    }
    function handleChangeI (event) {
      setInterest(event.target.checked)
    }
    function handleChangeE (event) {
      setEmail(event.target.value)
    }
    function handleChangeEN (event) {
      setEContactName(event.target.value)
    }
    function handleChangeER (event) {
      setEContactRel(event.target.value)
    }
    function handleChangeEC (event) {
      setEContactCell(event.target.value)
    }
    function handleChangeR (event) {
      setRelease(event.target.checked)
    }
  
  
    async function completeTodo(id) {
  
      try {
  
        let newTodos = [...todos]
        let todo = newTodos.find(t => t._id === id)
        todo.completed = !todo.completed
      
          // OPTION 1: use fetch for "update" route
  
        // await fetch(`/api/todos/${id}`, {
        //   method: 'PUT',
        //   body: JSON.stringify(todo),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
  
        // OPTION 2: use axios
  
        await axios.put(`/api/todos/${id}`, todo)
  
        setTodos(newTodos);
        
      } catch(err) {
        console.log(err)
      }
    }



  return (
    
      <div className='bg-white w-4/5 mx-auto'>

      <h1 className='font-bebas text-blue-300 text-5xl text-left'>Registered Players</h1>
        <ol>
          <li>
          {regs.map((person) => {

            
            return <Link to={`/pages/Registration/${person._id}`} key={person._id} person={person}>
              <h1 className='font-bebas text-blue-950 text-4xl text-left' >{person.firstName} {person.lastName}</h1>
              </Link>
            

          })}
          </li>
        </ol> 
        <br></br>
        <br></br>
        
        
       
        <h1 className='font-bebas text-blue-300 text-5xl text-left'>Register New Player</h1>
        <br></br>
        <br></br>
        <form>
            <div className='font-bebas text-blue-950 text-2xl text-left'>
          <h3 className='text-5xl'>Player Information</h3>
            
            <br></br>
        First Name : 
          <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={firstName} onChange={handleChangeF}/>
            <br></br>
            <br></br>
        Last Name :
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={lastName} onChange={handleChangeL}/>
            <br></br>
            <br></br>
        Date of Birth :
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={dob} onChange={handleChangeD}/>
            <br></br>
            <br></br>
        Skill Level :  
          <select id="skills" name="skills" value={skillLevel} onChange={handleChangeS}>
            <option value="1">1 (Beginner) </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 (Advanced)</option>
          </select>
          <br></br>
          <br></br>
          <br></br>

          <h3 className='text-5xl'>Parent Information</h3>
            
            <br></br>
            <label htmlFor="pname">Parent Name :</label>
            <input id="pname"className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={parent} onChange={handleChangeP}/>
            <br></br>
            <br></br>

          Phone Number :
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={cell} onChange={handleChangeC}/>
            <br></br>
            <br></br>
          Email :
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={email} onChange={handleChangeE}/>
            <br></br>
            <br></br>
          Interested in Volunteering?
            <input className="w-4 h-4 mx-2"type="checkbox" checked={interest} onChange={handleChangeI}></input>
            <br></br>
            <br></br>
            <br></br>

            <h3 className='text-5xl'>Emergency Contact Information</h3>
            
            <br></br>
          Name:
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={eContactName} onChange={handleChangeEN}/>
            <br></br>
            <br></br>
          Relationship:
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={eContactRel} onChange={handleChangeER}/>
            <br></br>
            <br></br>
          Phone Number:
            <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' value={eContactCell} onChange={handleChangeEC}/>
            <br></br>
            <br></br>
            <br></br>
          <h3 className='text-5xl'>Release of Liability</h3>
          <br></br>
          <input className="w-4 h-4 mx-2"type="checkbox" checked={release} onChange={handleChangeR}></input>
          <label>I agree with the terms and conditions</label>
          <br></br>
          <br></br>
          <br></br>


          


            <button className="rounded bg-blue-950 text-blue-300 px-7 py-1 "onClick={addToList}>Submit</button>
            </div>
        </form>
        
        
    </div>
  )
}

export default Registration