// displaying data in table and filtering according to the given years
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import "antd/dist/reset.css";
function Apple(){
const [data,setData] = useState([])
const [filterYear, setFilterYear] = useState('')
useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(response => response.json())
    .then(responsedata =>setData(responsedata.data))
    .catch(error => console.log('Error'))
    },[data])
    console.log('data:',data)
    const columns = [
        { title: 'Nation', dataIndex: 'Nation' ,key:'Nation' },
        { title: 'Population',dataIndex: 'Population' ,key:'Population' },
        { title:"Year" , dataIndex:"Year", key: "Year"}
    ]
    const filteredData = data.filter(item => item.Year.includes(filterYear));

  return (
    <div>
        <h1>US Data</h1>
        <input type="text" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}/>
        {filteredData.length > 0 ? (
          <Table dataSource={filteredData.map((item, index) => ({ ...item, key: index }))} columns={columns}/>
          ) : ( <p>No data found for that year.</p>)}
    </div>
  );
}
export default Apple;


// // displaying data in table using antdesign codes
// import React, { useState, useEffect } from 'react';
// import { Table } from 'antd';
// import "antd/dist/reset.css";
// function Apple(){
// const [data,setData] = useState([])
// useEffect(() => {
//     fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     .then(response => response.json())
//     .then(responsedata =>setData(responsedata.data))
//     .catch(error => console.log('Error'))
//     },[])
//     const columns = [
//         { title: 'Nation', dataIndex: 'Nation' ,key:'NAtion' },
//         { title: 'Population',dataIndex: 'Population' ,key:'Population' },
//         { title:"Year" , dataIndex:"Year", key: "Year"}
//     ]
//     return(
//         <div>   
//         <h1>US Data</h1>
//         <Table dataSource={data.map((item,index)=> ({...item, key:index}))} columns={columns}/>;
//         </div>
//     );
// }
// export default Apple;




// // displaying data in table
// import React, { useState, useEffect } from 'react';
// function Apple(){
// const [data,setData] = useState([])
// useEffect(() => {
//     fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     .then(response => response.json())
//     .then(responsedata =>setData(responsedata.data))
//     .catch(error => console.log('Error'))
//     },[])
//     if (data.length === 0) {
//         return <h2>Loading...</h2>;
//       }
//     // const result = data.data[0]
//     // console.log("Result:",result)
//     return(
//         <div>   
//         <h1>US Data</h1>
//         <table border={1}>
//             <thead>
//             <tr>
//             <th style={style.th}>Nation</th>
//             <th style={style.th}>Population</th>
//             <th style={style.th}>Year</th>
//             </tr>
//             </thead>
//             {data.map((item,index) => (
//                 <tr key={index}>
//                 <td>{item.Nation}</td>
//                 <td>{item.Population}</td>
//                 <td>{item.Year}</td>
//                 </tr>
//         ))}
//         </table>
//         </div>
//     );
//     const style = ()=>{

//     }
// }
// export default Apple;




// showing all data in browser
// // import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// function Apple(){
// const [data,setData] = useState([])
// useEffect(() => {
//     fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     // axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     .then(response => response.json())
//     .then(responsedata =>setData(responsedata.data))
//     .catch(error => console.log('Error'))
//     },[])
//     if (data.length === 0) {
//         return <h2>Loading...</h2>;
//       }
//     // const result = data.data[0]
//     // console.log("Result:",result)
//     return(
//         <div>   
//         {/* <h1>US Data</h1> */}
//         {data.map((item,index) => (
//             <div key={index}>
//                 <h2>{item.Nation}</h2>
//                 <h2>{item.Population}</h2>
//                 <h2>{item.Year}</h2>
//             </div>
//         ))}

//         </div>
//     );
// }
// export default Apple;


// just display data in browser
// import React, { useState, useEffect } from 'react';
// function Apple(){
// const [data,setData] = useState(null)
// useEffect(() => {
//     fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     .then(response => response.json())
//     .then(data => setData(data))
//     .catch(error => console.log('Error'))
//     },[])
//     if (!data || !data.data || data.data.length === 0) {
//         return <h2>Loading...</h2>;
//       }
//     const result = data.data[0]
//     console.log("Result:",result)
//     return(
//         <div>   
//         <h1>US Data</h1>
//         <h2>{result.Nation}</h2>
//         <h2>{result.Population}</h2>
//         <h2>{result.Year}</h2>
//         </div>
//     )
// }
// export default Apple;