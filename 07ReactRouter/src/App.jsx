import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'


function App() {
 
  return (
    <>
     <Header />
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
