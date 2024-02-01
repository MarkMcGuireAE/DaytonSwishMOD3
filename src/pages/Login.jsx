import axios from 'axios'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

let emptyForm = { 
    username: '',
    password: ''
}

function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post('http://localhost:5000/auth/login', form)
            const token = response.data.token

            console.log(token)

            if (!token) {
                setForm(emptyForm)
                return
            } 

            localStorage.setItem("token", token)

            const userResponse = await axios.get('http://localhost:5000/api/users', { 
                headers: {
                    Authorization: token
                }
            })

            setUser(userResponse.data)
    
            navigate('/profile')

        } catch(err) {
            console.log(err.response.data.error)
            alert(err.response.data.error)
        }
    }

    return ( 
        < div className='bg-white w-4/5 mx-auto h-screen'>
            <h1 className='font-bebas text-blue-300 text-8xl text-center'>Login</h1>
            <form className='font-bebas text-blue-950 text-2xl text-center' onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input 
                className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto'
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto'
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button className="rounded bg-blue-950 text-blue-300 px-7 py-1 ">Submit</button>
            </form>
        </div>
     );
}

export default Login;