/** @format */

import React, { useEffect } from "react";
import {
  Card,
  ConfigProvider,
  Select,
  Avatar,
  Button,
  Form,
  Input,
} from "antd";
import { FaRegUserCircle } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import imageUrl from "../assets/logo.png";
import { useSelector } from "react-redux";
import { userLogin } from "../features/auth/authActions";
import { useDispatch } from "react-redux";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = ({ email, password, role }) => {
    console.log("Success:", { email, password, role });
    dispatch(userLogin({ email, password, role }));
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#BC6C25",
          borderRadius: 4,

          // Alias Token
          colorBgContainer: "WHITE",
        },
      }}>
      <div className=' h-screen w-screen flex justify-center items-center bg-[#FEFAE0]'>
        <Form
          className=' w-full flex justify-center items-center flex-col gap-5'
          name='basic'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Card
            className=' w-[30%] border-2 border-solid border-black p-5 bg-[#F5F5F5]'
            title={
              <>
                <div className=' flex justify-center items-center flex-col'>
                  <Avatar src={imageUrl} size={200} />
                  <h2 className=' text-[#BC6C25]'>Omshree Language Center</h2>
                </div>
              </>
            }>
            <div className=' flex justify-center items-center flex-col gap-3'>
              <Form.Item
                label='Role'
                name='role'
                initialValue={"admin"}
                rules={[
                  {
                    required: true,
                    message: "Please select your role!",
                  },
                ]}
                className=' w-full'>
                <Select
                  size={"large"}
                  defaultValue={"admin"}
                  style={{
                    width: 200,
                  }}
                  options={
                    [
                      { value: "admin", label: "Admin", selected: true },
                      { value: "user", label: "User" },
                    ] // roles
                  }
                />
              </Form.Item>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                  {
                    type: "email",
                    message: "Please input valid email",
                  },
                ]}
                hasFeedback
                className=' w-full'>
                <Input
                  size='large'
                  placeholder='Username'
                  allowClear
                  prefix={<FaRegUserCircle />}
                />
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                className=' w-full'>
                <Input.Password
                  size='large'
                  placeholder='Password'
                  prefix={<IoKeySharp />}
                />
              </Form.Item>
              <Button
                htmlType='submit'
                type='primary'
                shape='round'
                size={"large"}
                className=' w-full  text-white font-bold text-lg  '>
                Login
              </Button>
            </div>
          </Card>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default Login;
