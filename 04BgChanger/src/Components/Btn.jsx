import React from 'react'
const Btns = [
  {
    Name: "Yellow",
    col: "yellow",
    id: 6,
  },
  {
    Name: "Red",
    col: "red",
    id: 1,
  },
  {
    Name: "Blue",
    col: "blue",
    id: 2,
  },
  {
    Name: "Green",
    col: "green",
    id: 3,
  },
  {
    Name: "Gray",
    col: "gray",
    id: 4,
  },
  {
    Name: "Voilet",
    col: "violet",
    id: 5,
  },
];
function Btn({setBGG}) {
    
     return  Btns.map(({Name,col,id})=>{
           return (
             <button key={id}
               className={`bg-${col}-500 px-4 py-1 rounded-lg`}
               onClick={() => {
                 setBGG(col)
               }}
             >
               {Name}
             </button>
           )
        })
}

export default Btn