import { useCallback, useEffect, useState ,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook used
  const passwordReff=useRef(null);

  const passwordGenerator = useCallback(() => {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);

      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed,setPassword]);


  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

 const  copyTOClipBoard=useCallback(()=>{
  passwordReff.current?.select();
  window.navigator.clipboard.writeText(password);
 },[password])
  return (
    <>
      <div className="container w-[600px]   bg-slate-700 text-cyan-50  p-2 rounded-lg shadow-xl sm:m-4 flex flex-col justify-center items-center">
        <div className="pass">
          <h2 className="text-center text-lg font-bold">Password Generator</h2>
        </div>
        <div className="box my-4 flex  justify-between">
          <input
            className="py-1 px-2 rounded-md rounded-r-none w-[400px] outline-none text-black"
            placeholder="Password"
            type="text"
            value={password}
            readOnly
            onChange={(e) => {
              e.target.value = password;
            }}
            ref={passwordReff}
          />
          <button className="py-1 px-2 rounded-md rounded-l-none bg-blue-700  uppercase font-bold"
          onClick={copyTOClipBoard}>
            Copy
          </button>
        </div>
        <div className="parameter flex justify-start gap-2 font-semibold">
          <input
            className="cursor-pointer"
            type="range"
            min={6}
            max={35}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length({length})</label>
          <input
            type="checkbox"
            defaultValue={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultValue={numAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
