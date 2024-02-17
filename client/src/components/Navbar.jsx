/** @format */

import { Input } from "antd";
import { TiMessages } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/logo.png";

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

        <div className='icons flex gap-4'>
          <TiMessages className=' text-4xl text-white' />
          <IoMdNotifications className=' text-4xl text-white' />
          <FaUserCircle className=' text-4xl text-white' />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
