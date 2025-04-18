import React, { useState } from "react";
import {
  DashboardOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PhoneOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Button, Layout, Menu, theme } from "antd";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Data from "../pages/data";
import Users from "../pages/users";
import AddUser from "../pages/add_user";
import Dashboard from "../pages/dashboard";


const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: "/",
              icon: <DashboardOutlined />,
              label: <Link to="/">Dashboard</Link>,
            },
            {
              key: "/home",
              icon: <HomeOutlined />,
              label: <Link to="/home">Home</Link>,
            },
            {
              key: "/data",
              icon: <InfoCircleOutlined />,
              label: <Link to="/data">USA Data</Link>,
            },
            {
              key: "/users",
              icon: <UserOutlined />,
              label: <Link to="/users">User's Credential</Link>,
            },
            {
              key: "/contact",
              icon: <PhoneOutlined />,
              label: <Link to="/contact">Contact</Link>,
            },
            {
              key: "/about",
              icon: <InfoCircleOutlined />,
              label: <Link to="/about">About Us</Link>,
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "16px", width: 64, height: 64 }}
            />
            <Link to="/add_user">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ marginRight: 10 }}
              ></Button>
            </Link>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/data" element={<Data />} />
            <Route path="/users" element={<Users />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/add_user" element={<AddUser />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;

// light dark theme
// import React, { useState } from 'react';
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Button, Layout, Menu, Switch } from 'antd';
// import { Routes, Route, Link, useLocation } from 'react-router-dom';
// import Home from '../pages/home';
// import Contact from '../pages/contact';
// import About from '../pages/about';

// const { Header, Sider, Content } = Layout;

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [darkTheme, setDarkTheme] = useState(true);
//   const location = useLocation();

//   const toggleTheme = (checked) => {
//     console.log(`Switched to ${checked ? 'Dark' : 'Light'} Theme`);
//     setDarkTheme(checked);
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider
//         trigger={null}
//         collapsible
//         collapsed={collapsed}
//         theme={darkTheme ? 'dark' : 'light'}
//       >
//         <div
//           style={{
//             height: 32,
//             margin: 16,
//             background: darkTheme ? '#001529' : '#f0f0f0',
//             borderRadius: 6,
//           }}
//         />
//         <Menu
//           theme={darkTheme ? 'dark' : 'light'}
//           mode="inline"
//           selectedKeys={[location.pathname]}
//           items={[
//             {
//               key: '/',
//               icon: <UserOutlined />,
//               label: <Link to="/">Home</Link>,
//             },
//             {
//               key: '/contact',
//               icon: <VideoCameraOutlined />,
//               label: <Link to="/contact">Contact</Link>,
//             },
//             {
//               key: '/about',
//               icon: <UploadOutlined />,
//               label: <Link to="/about">About Us</Link>,
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: darkTheme ? '#001529' : '#fff',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             paddingRight: 20,
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//               color: darkTheme ? '#fff' : '#000',
//             }}
//           />
//           <Switch
//             checkedChildren="Dark"
//             unCheckedChildren="Light"
//             defaultChecked
//             onChange={toggleTheme}
//           />
//         </Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: darkTheme ? '#423256' : '#fff',
//             color: darkTheme ? '#fff' : '#000',
//             borderRadius: 8,
//           }}
//         >
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Sidebar;
