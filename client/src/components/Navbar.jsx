/** @format */

import { Input, Dropdown, Avatar } from "antd";
import { TiMessages } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const items = [
  {
    icon: <FaUserCircle />,
    size: "large",
    onClick: () => console.log("Profile"),
    label: "Profile",
    key: "1",
  },
  {
    icon: <SlLogout />,
    onClick: () => console.log("Logout"),
    size: "large",
    label: "Logout",

    key: "2",
  },
];

const { Search } = Input;
const Navbar = () => {
  return (
    <>
      <nav className=' w-full  p-1  flex items-center justify-around  '>
        <div className='branding flex gap-3 text-white items-center'>
          <img className=' h-12 w-12' src={Logo} alt='logo' />
          <div className=' flex flex-col'>
            <span className=' text-lg font-bold uppercase'>Om Shree </span>
            <span className=' text-lg font-semibold'>Language Center</span>
          </div>
        </div>

        <Search
          className=' w-[30%]'
          size='large'
          allowClear
          placeholder='Search...'
          onSearch={(value) => console.log(value)}
        />

        <div className='icons flex items-center gap-4'>
          <TiMessages className=' text-4xl text-white' />
          <IoMdNotifications className=' text-4xl text-white' />
          <Dropdown menu={{ items }} placement='bottom' arrow>
            <div onClick={(e) => e.preventDefault()}>
              <Avatar
                size='large'
                src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                icon={<FaUserCircle className=' text-4xl text-white' />}
              />
            </div>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
