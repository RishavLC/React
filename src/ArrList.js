import React, { useState } from 'react';

function ArrList(){
    const [arr, setArr] = useState([]);
    const [input, setInput] = useState("");
  
    const arr_set = () =>{
        setArr([...arr, input]);
        setInput("");
    }
    return (
        <div>
            Array: <input type="text" value={input} onChange={(e) => setInput(e.target.value)} ></input>
            <button onClick={arr_set}>Add</button>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
            </ul>
        </div>
    )
  } ;  
  
  export default ArrList;
  