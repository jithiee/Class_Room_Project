import { useState } from 'react'

import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
<<<<<<< Updated upstream
import Navbar from './components/Navbar'
=======
import Header from './components/Header';
>>>>>>> Stashed changes




function App() {
  const [count, setCount] = useState(0)

  return (
 
    <>
<<<<<<< Updated upstream
    <Navbar/>
    <Login/>
    <Register/>
=======


    <Routes>
       <Route   path='login/' element={<Login/>}  />
       <Route   path='register/' element={<Register/>}  />
       <Route   path='header/' element={<Header/>}  />

    </Routes>
  
  
  

>>>>>>> Stashed changes
    </>
  )
}

export default App
