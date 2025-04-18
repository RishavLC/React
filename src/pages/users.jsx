import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Menu, Button, Modal, Form, Input, notification } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useGlobalState } from '../provider/GlobalStateContext';

const Users = () => {
  const { data, setData } = useGlobalState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [form] = Form.useForm();



useEffect(() => {
    if (data.length === 0) {
      fetch('https://fakestoreapi.com/users/')
        .then((res) => res.json())
        .then((apiData) => {
          const formattedData = apiData.map((item, index) => ({
            ...item,
            key: index + '_' + item.id,
          }));
          setData(formattedData);
        });
    }
  }, [data, setData]);

  const showUpdateModal = (user) => {
    setCurrentUser(user);
    form.setFieldsValue({
      username: user.username,
      email: user.email
    });
    setIsModalOpen(true);
  };

  
  const handleUpdate = (values) => {
    fetch(`https://fakestoreapi.com/users/${currentUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...currentUser,
        username: values.username,
        password: values.password,
        email: values.email
      })
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        setData((prev) =>
          prev.map((user) =>
            user.id === updatedUser.id ? { ...user, ...updatedUser } : user
          )
        );
        notification.success({ message: 'User updated successfully!' });
        setIsModalOpen(false);
      })
      .catch(() =>
        notification.error({ message: 'Failed to update user!' })
      );
  };

  
  const handleDelete = (id) => {// delectingg
    fetch(`https://fakestoreapi.com/users/${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then(() => {
        setData((prev) => prev.filter((user) => user.id !== id));
        notification.success({ message: 'User deleted successfully!' });
      })
      .catch(() =>
        notification.error({ message: 'Failed to delete user!' })
      );
  };

  const columns = [
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Password', dataIndex: 'password', key: 'password' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="update" onClick={() => showUpdateModal(record)}>
                Update
              </Menu.Item>
              <Menu.Item
                key="delete"
                danger
                onClick={() => handleDelete(record.id)}
              >
                Delete
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      )
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>User's Credential</h1>
      <Table
        dataSource={data.map((item, index) => ({ ...item, key: index }))}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />

      
      <Modal //form using for updating data
        title="Update User"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleUpdate}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter username' }]}
          >
            <Input />
          </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter email' },
              { type: 'email', message: 'Invalid email format' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Users;




// import React, { useEffect } from 'react';
// import { Table } from 'antd';
// import "antd/dist/reset.css";
// import { useGlobalState } from '../provider/GlobalStateContext';


// function Users(){
// const {data,setData} = useGlobalState([])  

// useEffect(() => {
//     fetch('https://fakestoreapi.com/users/')
//     .then((res) => res.json())
//     .then((responsedata) =>setData(responsedata));
//     },[setData])
//     const columns = [
//         { title: 'Username', dataIndex: 'username' ,key:'username' },
//         { title: 'Password',dataIndex: 'password' ,key:'password' },
//         { title:"Email" , dataIndex:"email", key: "email"}
//     ]
//     return(
//         <div>
//         <h1>User's Credential</h1>
//         <Table dataSource={data.map((item,index)=> ({...item, key:index}))} columns={columns}  pagination={{ pageSize: 5 }}/>;
//         </div>
//     );
// }
// export default Users;