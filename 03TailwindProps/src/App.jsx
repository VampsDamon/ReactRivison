import { useState } from "react";

import "./App.css";
import Card from "./Components/Card";

function App() {
  
  return (
    <>
      <h1 className="bg-green-400 text-black py-2 px-6 rounded-xl mb-8">Hello</h1>
     <Card userName="Emma Watson" btnText="Click Me"/>
     <Card userName="Shofia Divine" />
    </>
  );
}

export default App;
