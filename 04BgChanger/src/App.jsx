import { useState } from 'react'

import ColorBar from './Components/ColorBar'

function App() {
  const [bgColor, SetbgColor]=useState("blue")
  const ColorHandelar=(col)=>{
    console.log("Function called with color :- "+col);
   SetbgColor(col);   
  }

  return (
   <>
   <div className={`body w-full h-screen bgColor bg-${bgColor}-500`} >
   <ColorBar setBG={ColorHandelar}/>
   </div>
   </>
  )
}

export default App
