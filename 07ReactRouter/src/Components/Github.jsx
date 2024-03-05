import React from "react";
import { useEffect, useState } from "react";


function Github() {
  const [data, setData] = useState([]);
  const[prev,setPrev]=useState(1)
  const [account, setAccount] = useState("hiteshchoudhary");
  useEffect(() => {
    fetch(`https://api.github.com/users/${account}`)
    .then(res=>res.json())
    .then(res=>setData(res))
  }, []);
  return (
    <div className="max-w-[800px] w-[90%] mx-auto text-center p-4 bg-slate-600 text-white">
      <div className="box flex gap-4 justify-between items-center">
        <h1 className="font-bold uppercase ">GitHub Info</h1>
        <div className="serach flex gap-4 ">
          <input
            type="search"
            name=""
            id=""
            className="outline-none rounded-xl px-2 py-1 text-black "
            placeholder="Search GitHub"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <button
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-1 lg:py-2 mr-2 focus:outline-none"
            onClick={(last) =>setPrev(last+1) }
          >
            Search
          </button>
        </div>
      </div>
      <div className="accinfo m-4 flex items-center gap-4 overflow-hidden  mx-auto bg-slate-200 shadow-xl rounded-lg">
        <div className="image w-[30%]">
          <img className="" src={data?.avatar_url} alt="" />
        </div>
        <div className="info  text-black w-[70%]">
          <h1 className="text-xl uppercase font-bold">
            <span>Name : </span>
            {data.name}
          </h1>
          <p className="bio">{data?.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Github;
