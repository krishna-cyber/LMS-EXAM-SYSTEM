/** @format */

import React from "react";
import { Card, Input, Button, ConfigProvider } from "antd";
import { FaRegUserCircle } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import imageUrl from "../assets/logo.png";

const Login = () => {
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
        <Card
          className=' w-[30%] border-2 border-solid border-black p-5 bg-[#F5F5F5]'
          title={
            <>
              <div className=' flex justify-center items-center flex-col'>
                <img src={imageUrl} alt='logo' className='w-13 h-13 mx-auto' />
                <h2 className=' text-[#BC6C25]'>Omshree Language Center</h2>
              </div>
            </>
          }>
          <div className=' flex justify-center items-center flex-col gap-3'>
            <Input
              size='large'
              placeholder='Username'
              prefix={<FaRegUserCircle />}
            />
            <Input.Password
              size='large'
              placeholder='Password'
              prefix={<IoKeySharp />}
            />
            <Button
              type='primary'
              shape='round'
              size={"large"}
              className=' w-full  text-white font-bold text-lg  '>
              Login
            </Button>
          </div>
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default Login;
