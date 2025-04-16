import React from "react";
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useGlobalState } from "../provider/GlobalStateContext"; 

const Home = () => {
  const { name, setName } = useGlobalState(); 

  const onFinish = (values) => {
    console.log('Success:', values);
    setName(values.username); 
    notification.info({
      message: "Success",
      description: `Welcome, ${values.username}`,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    notification.error({
      message: "Failed",
      description: "Please fill all required fields",
    });
  };

  return (
    <>
      <h1>{name}</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
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
  
        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
  };

export default Home;




// import React from 'react';
// import { Card, Button, Row, Col, Typography } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';

// const { Title, Paragraph } = Typography;

// const services = [
//   {
//     title: 'Hii',
//     description: 'Sign in or register to manage your tax, benefits, and credits securely.',
//     link: '#',
//   },
//   {
//     title: 'Get access to your visa',
//     description: 'View and prove your immigration status online.',
//     link: '#',
//   },
//   {
//     title: 'Universal Credit account sign in',
//     description: 'Manage your Universal Credit account securely.',
//     link: '#',
//   },
//   {
//     title: 'Personal tax account sign in or set up',
//     description: 'Check your income tax, National Insurance, and tax code.',
//     link: '#',
//   },
//   {
//     title: 'Childcare account sign in or set up',
//     description: 'Apply for tax-free childcare and manage your account.',
//     link: '#',
//   },
//   {
//     title: 'Check your State Pension forecast',
//     description: 'Find out how much State Pension you could get.',
//     link: '#',
//   },
// ];

// const Home = () => {
//   return (
//     <div style={{ padding: '24px' }}>
//       <div
//         style={{
//           background: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1920px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg') center/cover`,
//           padding: '80px 24px',
//           color: '#fff',
//           textAlign: 'center',
//         }}
//       >
//         <Title style={{ color: '#000' }}>Just try new ui</Title>
//         <Paragraph style={{ color: '#000' }}>
//           my name is rishav shresthaa
//         </Paragraph>
//         <Button type="primary" icon={<SearchOutlined />}>Explore Services</Button>
//       </div>

//       <div style={{ padding: '40px 0' }}>
//         <Title level={2} style={{ textAlign: 'center' }}>React class training</Title>
//         <Paragraph style={{ textAlign: 'center', maxWidth: '700px', margin: 'auto' }}>
//           morning class training
//         </Paragraph>

//         <Row gutter={[16, 16]} style={{ marginTop: '32px' }}>
//           {services.map((service, index) => (
//             <Col xs={24} sm={12} md={8} key={index}>
//               <Card title={service.title} bordered={false} hoverable>
//                 <p>{service.description}</p>
//                 <Button type="link" href={service.link}>Read More</Button>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Home;
