import React, { useEffect } from 'react';
import { Table } from 'antd';
import "antd/dist/reset.css";
import { useGlobalState } from '../provider/GlobalStateContext';


function Users(){

const {data,setData} = useGlobalState([])  
// const { name, setName } = useGlobalState(); 



useEffect(() => {
    fetch('https://fakestoreapi.com/users/')
    .then((res) => res.json())
    .then((responsedata) =>setData(responsedata));
    },[setData])
    const columns = [
        { title: 'Username', dataIndex: 'username' ,key:'username' },
        { title: 'Password',dataIndex: 'password' ,key:'password' },
        { title:"Email" , dataIndex:"email", key: "email"}
    ]
    return(
        <div>
        {/* <h1>{name}</h1> globalstate   */}
        <h1>User's Credential</h1>
        <Table dataSource={data.map((item,index)=> ({...item, key:index}))} columns={columns}  pagination={{ pageSize: 5 }}/>;
        </div>
    );
}
export default Users;