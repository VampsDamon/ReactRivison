import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import conf from "./Conf/conf";

const  {appWriteURL}=conf
function App() {
  
  console.log(appWriteURL);
  return (
    <>
    <h1 className='bg-sky-500'>Blog Post Site</h1>
    </>
  )
}

export default App
