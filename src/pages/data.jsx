import React, { useEffect } from 'react';
import { Table } from 'antd';
import "antd/dist/reset.css";
import { useGlobalState } from '../provider/GlobalStateContext';


function Data(){

const {data,setData} = useGlobalState([])  
const { name, setName } = useGlobalState(); 



useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then((res) => res.json())
    .then((responsedata) =>setData(responsedata.data));
    },[setData])
    const columns = [
        { title: 'Nation', dataIndex: 'Nation' ,key:'Nation' },
        { title: 'Population',dataIndex: 'Population' ,key:'Population' },
        { title:"Year" , dataIndex:"Year", key: "Year"}
    ]
    return(
        <div>
        <h1>{name}</h1>   
        <h1>US Data</h1>
        <Table dataSource={data.map((item,index)=> ({...item, key:index}))} columns={columns}/>;
        </div>
    );
}
export default Data;