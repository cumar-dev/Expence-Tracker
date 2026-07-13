import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import LogOut from './Components/Auth/LogOut'
import DashboardLayout from './Layout/DashboardLayout'
function App() {
 

  return (
    <>
     <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/logout' element={<LogOut />}/>
      <Route path='/dashboard' element={<DashboardLayout/>}/>
     </Routes>
    </>
  )
}

export default App
