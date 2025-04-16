import { useState,useEffect } from "react";

// const NameArray = () => {
//     const [arr,setArr] = useState([]);    
//     const [input, setInput] = useState("");
//     const [filteredNames, setFilteredNames] = useState([]);
//     const myName = "rishav";
//     const arr_set = () =>{
//         setArr([...arr,input]);
//         setInput("")
//     } 
//     useEffect(() => {
//         const filtered = arr.filter((name) => name === myName);
//         setFilteredNames(filtered);
//         if (filtered.length>0) {
//             console.log('rishav is found')
//         };
//     },[arr]); 

//     return (
//         <div>
//             Name: <input type="text" value={input} onChange={(e) => setInput(e.target.value)} ></input>
//             <button onClick={arr_set}>Add</button>
//         <h2>My Names:</h2>
//         <ul>
//             {filteredNames.map((name, index) => (
//                 <li key={index}>{name}</li>
//         ))}
//         </ul>
//         </div>
//     );
// };

const NameArray = () => {
    const namesArray = ["ayush", "pratik", "lisa", "rishav", "kabsn", "risali", "beast", "lirisa"];
    const [selectname, setSelectname] = useState([]);
    const myName = "rishav"; 

    useEffect(() => {
        // const filtered = namesArray.filter((name) => name === myName);
        if (selectname === myName){
            console.log('rishav is found')
        }
        // setFilteredNames("filtered");
    },[selectname]); 

    return (
        <div>
        <h2>My Names:</h2>
        <ul>
            {namesArray.map((name, index) => (
                <li key={index} onClick={()=>setSelectname(name)}>
                    {name}
                </li>
        ))}
        </ul>
        <p> Selected name:{selectname}</p>
        </div>
    );
};

export default NameArray;


// function Counter(){
//     const [count, setCount] = useState(0)


//     useEffect(() =>{
//         console.log(`Count update : ${count}`)
//         return()=>{
//         console.log(`Count is here useEfect : ${count}`)

//         }
//     },[count])
//     return(
//         <div>
//             <h1>Counter :{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increase</button>
//             <button onClick={()=>setCount(count-1)}>Decrease</button>
//         </div>
//     )
//}
//export default Counter;