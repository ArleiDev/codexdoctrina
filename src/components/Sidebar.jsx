import React, { useState } from 'react';
import { FaHome, FaCode, FaServer, FaCloud, FaSignOutAlt, FaBars, FaArrowLeft } from 'react-icons/fa';
import { BsServer } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";


import { auth } from '../services/firebaseConfig';

const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Usuário deslogado com sucesso');
    } catch (error) {
      console.error('Erro ao deslogar:', error);
    }
  };

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`max-h-screen bg-orange-900 text-white flex flex-col transition-width duration-300 ${isExpanded ? 'w-64' : 'w-16 items-center '}`}>
      {/* Logo */}
      <div className={`p-4 flex items-center justify-center bg-orange-800 transition-all duration-300 ${isExpanded ? 'h-24' : 'h-16 items-center'}`}>
        {isExpanded ? (
          <img className="rounded-full p-2 w-26 h-100" src="https://i.postimg.cc/RFhxJHhh/CODEX-DOCTRINA.png" alt="logo" />
        ) : (
          <img className="rounded-full w-8 h-8 object-cover " src="https://i.postimg.cc/hjhv2xNk/CODEX-DOCTRINA-2.png" alt="logo minimizada" />
        )}
      </div>

      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="p-4 border-orange-700 border-2 rounded-xl mt-10 "
      >
        {isExpanded ? <FaArrowLeft /> : <FaBars />}
      </button>

      {/* Menu Items */}
      <nav className="flex-1 mt-6 ">
        <ul>
          <Link to='/Home'><li className=" transition all flex items-center p-4 hover:bg-orange-700 cursor-pointer">
            <FaHome className="mr-3" />
            {isExpanded && <span>Home</span>}
          </li></Link>
          <Link to='/cursos/frontend'><li className="flex items-center p-4 hover:bg-orange-700 cursor-pointer">
            <IoCodeSlashSharp className="mr-3" />
            {isExpanded && <span>Front End</span>}
          </li></Link>
          <Link to='/cursos/backend'><li className="flex items-center p-4 hover:bg-orange-700 cursor-pointer">
            <BsServer className="mr-3" />
            {isExpanded && <span>Back End</span>}
          </li></Link>
          <Link to='/cursos/mobile'>
          <li className="flex items-center p-4 hover:bg-orange-700 cursor-pointer">
            <FaMobileScreen  className="mr-3" />
            {isExpanded && <span>Mobile</span>}
          </li></Link>
          
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 mt-auto bg-orange-800 hover:bg-orange-700 cursor-pointer">
        <button
        type='button'
        onClick={handleLogout}
        className="flex items-center w-full text-left">
          <FaSignOutAlt className="mr-3" />
          {isExpanded && <span>Logout</span>}
        </button>
      
      </div>
      {isExpanded && <p className='text-orange-400 px-10'>By @Arleijunioo</p>}
     
    </div>
  );
};

export default Sidebar;
