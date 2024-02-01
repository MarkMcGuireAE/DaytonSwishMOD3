import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RegForm from '../components/regForm'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();

    const params = useParams()
    const {id} = params
    console.log(id)
    
let [regs, setRegs] = useState([]);
let [person, setPerson] = useState([])
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

  useEffect(() => {

     const getData = async () => {
       try {
         // OPTION 1: use fetch for "index" route
         // const response = await fetch('https://localhost:5000/api/regs/:id')
         // const data = await response.json()
 
         // OPTION 2: use axios
         const response = await axios.get('http://localhost:5000/api/regs/' + id)
         console.log(response)
         setPerson(response.data)
         setFirstName(response.data.firstName)
         setLastName(response.data.lastName)
         setDob(response.data.dob)
         setSkillLevel(response.data.skillLevel)
         setParent(response.data.parent)
         setCell(response.data.cell)
         setEmail(response.data.email)
         setEContactCell(response.data.eContactCell)
         setEContactRel(response.data.eContactRel)
         setEContactName(response.data.eContactName)
         setRelease(response.data.release)
         setInterest(response.data.interest)

       } catch(err) {
         console.error(err)
       }
     }
 
     getData()
 
   }, [])
 
async function updatePerson(e) {
    e.preventDefault()

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

     

 try {

    // OPTION 1: use fetch for "delete" route

   // await fetch(`/api/todos/${id}`, {
   //   method: 'DELETE'
   // })

    // OPTION 2: use axios

    console.log("updating",reg.interest)
    await axios.put(`http://localhost:5000/api/regs/${id}`, reg )
    navigate(`/pages/Registration/${id}`)
 


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
        // console.log(event.target.checked)
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
  return (
    <div className='bg-white w-4/5 mx-auto h-full font-bebas text-blue-950 text-3xl text-left'>
      
        
        
       
        <br></br>
        <h1 className='font-bebas text-blue-300 text-8xl text-center'> Edit Player Registration </h1>
        <br></br>
        <br></br>
        <form className='mx-auto w-4/5'>
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


          


            <button className="rounded bg-blue-950 text-blue-300 px-7 py-1 "onClick={updatePerson}>Submit</button>
            </div>
        </form>
        
        </div>
  )
}

export default Edit