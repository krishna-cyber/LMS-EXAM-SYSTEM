/** @format */
import React, { useState } from "react";

import { RxDashboard } from "react-icons/rx";
import { TbLamp2 } from "react-icons/tb";
import { GrResources } from "react-icons/gr";
import { MdOutlineVideocam } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <RxDashboard />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <TbLamp2 />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <GrResources />,
              label: "nav 3",
            },
            {
              key: "3",
              icon: <MdOutlineVideocam />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}>
          <Button
            type='text'
            icon={collapsed ? <IoMenuOutline /> : <IoMenuOutline />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
