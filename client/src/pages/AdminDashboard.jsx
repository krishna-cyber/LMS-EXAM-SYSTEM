/** @format */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { PiStudent } from "react-icons/pi";
import { SiMicrosoftexcel } from "react-icons/si";
import { MdDashboardCustomize } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { Layout, Menu, Button, theme, ConfigProvider } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
const { Header, Sider, Content } = Layout;
const AdminDashboard = () => {
  const Navigate = useNavigate();
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
            className=' p-2 text-lg text-[#BC6C25] bg-[#FFF9CF] '
            theme='dark'
            mode='inline'
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <MdDashboardCustomize />,
                label: "Dashboard",
                onClick: () => {
                  Navigate("/admin/dashboard");
                },
              },
              {
                key: "2",
                icon: <PiStudent />,
                label: "Add Student",
                onClick: () => {
                  Navigate("/admin/add-student");
                },
              },
              {
                key: "3",
                icon: <CiBoxList />,
                label: "Student List",
                onClick: () => {
                  Navigate("/admin/Student-list");
                },
              },
              {
                key: "4",
                icon: <SiMicrosoftexcel />,
                label: "Student Results",
                onClick: () => {
                  Navigate("/admin/student-results");
                },
              },
              {
                key: "5",
                icon: <PiExam />,
                label: "Add Exam",
                onClick: () => {
                  Navigate("/admin/add-exam");
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
export default AdminDashboard;
