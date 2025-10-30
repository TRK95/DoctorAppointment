import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Doctors from './pages/Doctors.jsx'
import Appointment from './pages/Appointment.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navbar />
       <Routes>
           <Route path ='/'element={<Home/>} />
           <Route path ='/doctors'element={<Doctors/>} />
           <Route path ='/doctors/:speciality'element={<Doctors/>} />
           <Route path ='/login'element={<Login/>} />
           <Route path ='/about'element={<About/>} />
           <Route path ='/contact'element={<Contact/>} />
           <Route path ='/my-profile'element={<MyProfile/>} />
           <Route path ='/my-appointment'element={<MyAppointment/>} />
           <Route path ='/appointment/:docId'element={<Appointment/>} />
       </Routes>
    </div>
  )
}
export default App