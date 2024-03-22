// Followig is the prompt used to create the code
// create a react component with following features:

// using antd form and form submission button
// the form has fields for first name, last name, username, email, password, confirm password and user type - username or email.
// using axios to send post request with the data received from the form

import './AppAnt.css';

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Radio, Typography } from 'antd';

// const RegisterForm = () => {
const App = () => {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(null);
  const { Text } = Typography;
  const { Title } = Typography;
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleFinish = (values) => {
    setIsSubmitted(true);
    axios.post('http://localhost:8000/api/mymodels/', values)
      .then((response) => {
        console.log('Success:', response.data);
        setIsSubmitted(true);
        setMessage('Successful!')
        setMessageType('success')
      })
      .catch((error) => {
        console.error('Error:', error.response);
        setIsSubmitted(false);
        setMessage('Submission failed! Choose a different Username and Email')
        setMessageType('danger')
      });
  };

  return (
    // <div className="App">
    <Form
      form={form}
      onFinish={handleFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      
    >
      {/* <Text level={3}  */}
      <Title level={3} 
      style={{ textAlign: 'center'}}
      >
      Register Yourself!!!!
      </Title>
      {/* </Text> */}

      <Form.Item
        name="first_name"
        label="First Name"
        rules={[{ required: true, message: 'Please input your first name' }]}
      >
        <Input />
      </Form.Item>
       <Form.Item
        name="last_name"
        label="Last Name"
        rules={[{ required: true, message: 'Please input your last name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please input your username' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: 'email', message: 'Please input a valid email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input.Password />
      </Form.Item>
       <Form.Item
        name="confirm_password"
        label="Confirm Password"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password' },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('Passwords do not match');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="user_type"
        label="Login with:"
        rules={[{ required: true, message: 'Please select a login type' }]}
      >
         {/* <Input type="radio">
          <Input.Option value="username">Username</Input.Option>
          <Input.Option value="email">Email</Input.Option>
        </Input>  */}
          {/* <Radio.Group onChange={onChange} value={value}> */}
          <Radio.Group >
            <Radio value="username">Username</Radio>
            <Radio value="email">Email</Radio>
          </Radio.Group>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" >
          Register
        </Button>
      </Form.Item> 

      {/* <div align="center">
        //Ternary operator used twice
      {isSubmitted == true ? <Text type="success" key={1}>Successful!</Text> 
      : isSubmitted == false ? <Text  type="danger" key={2} >Submission failed! Choose a different Username or Email.</Text > : <Text ></Text>}
      </div> */}


      <div align="center">
      <Text type={messageType} >{message}</Text>
      </div>
    </Form>
  );
};

// export default RegisterForm;
export default App;