/** @format */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { RxDashboard } from "react-icons/rx";
import { TbLamp2 } from "react-icons/tb";
import { GrResources } from "react-icons/gr";
import { MdOutlineVideocam } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { Layout, Menu, Button, theme, ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#606C38",
        },
        components: {
          Layout: {
            /* here is your component tokens */
            siderBg: "#FFF9CF",
          },
          Menu: {
            iconSize: "24px",
            // change active text color

            darkItemHoverColor: "#f2b988",
          },
        },
      }}>
      <Layout className=' h-screen w-screen'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='demo-logo-vertical' />

          <Menu
            className=' p-2 text-xl text-[#BC6C25] bg-[#FFF9CF] '
            theme='dark'
            mode='inline'
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <RxDashboard />,
                label: "Dashboard",
                onClick: () => {
                  console.log("clicked dashboard");
                },
              },
              {
                key: "2",
                icon: <TbLamp2 />,
                label: "Study ",
                onClick: () => {
                  console.log("clicked study");
                },
              },
              {
                key: "3",
                icon: <GrResources />,
                label: "Resources",
                onClick: () => {
                  console.log("clicked resources");
                },
              },
              {
                key: "4",
                icon: <PiExam />,
                label: "All Exams",
                onClick: () => {
                  console.log("clicked exam");
                },
              },
              {
                key: "5",
                icon: <MdOutlineVideocam className=' text-2xl' />,
                label: "Live Course",
                onClick: () => {
                  console.log("clicked live course");
                },
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "#BC6C25",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <div className=' flex w-full'>
              <Button
                type='text'
                icon={collapsed ? <IoMenuOutline /> : <IoMenuOutline />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  color: "white",
                  width: 64,
                  height: 64,
                }}
              />
              <Navbar />
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            content
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default Dashboard;
