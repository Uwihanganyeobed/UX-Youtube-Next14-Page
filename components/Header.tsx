import Link from 'next/link';
import React from 'react';
import { FaBars, FaSearch, FaMicrophone, FaVideo, FaTh, FaBell } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-14">
      <div className="flex items-center pl-6">
        <Link href='/'>
        <FaBars className="h-7 mx-4 text-gray-700" />
        </Link>
        <Link href='/'>
        <img src="https://i.imgur.com/EIrHodL.jpg" alt="YouTube Logo" className="h-14" />
        </Link>
      </div>
      <div className="flex items-center flex-grow max-w-lg mx-6">
        <input 
          type="text" 
          placeholder="Search"
          className="w-full h-9 border border-gray-300 px-4 shadow-inner"
        />
        <button className="flex justify-center items-center h-9 w-16 border-l-0 border border-gray-300 bg-white">
          <FaSearch className="h-6 text-gray-700" />
        </button>
        <button className="ml-2 h-9 w-9 bg-gray-200 rounded-full flex justify-center items-center">
          <FaMicrophone className="h-6 text-gray-700" />
        </button>
      </div>
      <div className="flex items-center space-x-6 pr-6">
        <div className="relative group">
          <FaVideo className="h-7 text-gray-700 cursor-pointer" />
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 text-xs bg-gray-700 text-white p-1 rounded">Create</span>
        </div>
        <FaTh className="h-7 text-gray-700 cursor-pointer" />
        <div className="relative">
          <FaBell className="h-7 text-gray-700 cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>
        <img src="https://i.imgur.com/8h8FIqj.jpg" alt="User Profile" className="h-8 rounded-xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
