/** @format */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { RxDashboard } from "react-icons/rx";
import { TbLamp2 } from "react-icons/tb";
import { GrResources } from "react-icons/gr";
import { GrChapterAdd } from "react-icons/gr";

import { PiExam } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { Layout, Menu, Button, theme, ConfigProvider } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
import { getCurrentUser } from "../features/auth/authActions";
const Dashboard = () => {
  // check the user is logged in or not and show login page if not logged in

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { error } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  if (error) {
    Navigate("/login");
  }
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
            className=' p-2 text-lg text-[#BC6C25] bg-[#FFF9CF] '
            theme='dark'
            mode='inline'
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <RxDashboard />,
                label: "Dashboard",
                onClick: () => {
                  Navigate("/dashboard");
                },
              },
              {
                key: "2",
                icon: <TbLamp2 />,
                label: "Study",
                onClick: () => {
                  Navigate("/study");
                },
              },
              {
                key: "3",
                icon: <GrResources />,
                label: "Resources",
                onClick: () => {
                  Navigate("/resources");
                },
              },
              {
                key: "4",
                icon: <PiExam />,
                label: "All Exams",
                onClick: () => {
                  Navigate("/exams");
                },
              },
              {
                key: "5",
                icon: <GrChapterAdd className=' text-2xl' />,
                label: "Chapter Test",
                onClick: () => {
                  Navigate("/chapter-test");
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
              padding: 20,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default Dashboard;
