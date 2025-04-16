import React from 'react';
import { Form, Input, Button, Typography, notification } from 'antd';

const { Title } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    notification.success({
        message: 'Message Sent!',
        description: `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
        duration: 4,
      });
  };
  const onFinishFailed = ()=>{
    notification.error({
        message: 'Error',
        description: 'Please fill in all fields.',
        });
  };
  return (
    <>
      <Title level={3}>Contact Us</Title>
      <Form name="contact" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item name="message" label="Message" rules={[{ required: true }]}>
          <Input.TextArea placeholder="Write your message" rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Send</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Contact;
