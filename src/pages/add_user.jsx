import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useGlobalState } from "../provider/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const { data, setData } = useGlobalState([]);
  const navigate = useNavigate();

  const onFinish = (values) => {
    const newUser = {
      id: Date.now(), // Unique local ID
      username: values.username,
      password: values.password,
      email: values.email,
    };

    // Add to global state
    setData([...data, newUser]);

    // Success Notification
    notification.success({
      message: "User Added",
      description: `Welcome, ${values.username}`,
    });

    // Redirect to /users
    navigate("/users");
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({
      message: "Form Incomplete",
      description: "Please fill all required fields correctly",
    });
  };

  return (
    <>
      <h1>Register User</h1>
      <Form
        name="add_user"
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
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUser;
