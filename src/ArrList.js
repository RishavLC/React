import React, { useState } from 'react';

function ArrList(){
    const [arr, setArr] = useState([]);//state banako
    const [input, setInput] = useState("");//state banako
  
    const arr_set = () =>{
        setArr([...arr, input]);
        setInput("");
    }
    // const delete_arr = (i) => {
    //     setArr([index]);
    // }
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
  