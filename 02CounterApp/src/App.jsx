import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(5);
  let [msg,setMsg]=useState("");
  return (
    <>
      <h1 className="count">Count: {count}</h1>
      <p>{msg}</p>
      <button
        style={{ marginRight: "25px" }}
        onClick={() => {
          ++count;
          if(count>0){
            setMsg("");
          }
          setCount(count);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            count--;
            setCount(count);
          } else {
            setCount(0);
            setMsg("Count can't be negative")
          }
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
