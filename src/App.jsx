import { Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage"
import ContactUs from "./pages/ContactUs"
import Registration from "./components/Registration"
import Schedule from "./pages/Schedule"
import Show from "./pages/Show"
import Edit from "./pages/Edit"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function App() {


  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  async function getUser(token) {
      try {
          const response = await axios.get('http://localhost:5000/api/users', {
              headers: {
                  Authorization: token
              }
          })
          setUser(response.data)
      } catch(err) {
          console.log(err)
          localStorage.removeItem("token")
      }
      setIsLoading(false)
  }

  useEffect(() => {

      const token = localStorage.getItem("token")

      if (token) {
          // get user info
          getUser(token)
      } else {
          setIsLoading(false)
      }

  }, [])

  let loggedIn = user.username

  
  return (

    <div className="bg-blue-950">
      <Nav  username={user.username} setUser={setUser}/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/profile" element={<Profile username={user.username} email={user.email}/>} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register setUser={setUser} />} />
      <Route path="/pages/Registration" element={<Registration/>} />
      <Route path="/pages/Schedule" element={<Schedule/>} />
      <Route path="/pages/ContactUs" element={<ContactUs/>} />
      <Route path="/pages/Registration/:id" element={<Show/>} />
      <Route path="/pages/edit/:id" element={<Edit/>} />

    </Routes>
    <Footer/>
    </div>
  )
}

export default App
