// src/components/Sidebar.js
import React from 'react';
import { FaHome, FaCode, FaServer, FaCloud, FaSignOutAlt  } from 'react-icons/fa';
import { BsServer } from "react-icons/bs";
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
  return (
    <div className="w-64 h-screen bg-orange-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center bg-orange-800">
       <img className='rounded-full p-5' src="https://i.postimg.cc/RFhxJHhh/CODEX-DOCTRINA.png" alt="logo" />
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-6">
        <ul>
          <li className="flex items-center p-4 hover:bg-orange-700 cursor-pointer">
            <FaHome className="mr-3" />
            <span>Front End</span>
          </li>
          <li className="flex items-center p-4 hover:bg-orange-700 cursor-pointer">
            <BsServer className="mr-3" />
            <span>Back End</span>
          </li>
          <li className="flex items-center p-4 hover:bg-orange-700 cursor-pointer">
            <FaServer className="mr-3" />
            <span>DevOps</span>
          </li>
          <li className="flex items-center p-4 hover:bg-orange-700 cursor-pointer">
            <FaCloud className="mr-3" />
            <span>Cloud Computing</span>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 mt-auto bg-orange-800 hover:bg-orange-700 cursor-pointer">
        <button
        type='button'
        onClick={handleLogout}
        className="flex items-center w-full text-left">
          <FaSignOutAlt className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
