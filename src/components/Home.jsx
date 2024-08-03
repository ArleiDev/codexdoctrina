import React from 'react';
import { FaBookBookmark } from "react-icons/fa6";

import Sidebar from './Sidebar';


function Dashboard() {
  return (
    <div className="flex">
    <Sidebar></Sidebar>
    <div className="flex flex-col md:flex-row h-screen w-screen bg-orange-50">
      <div className="flex-1 flex justify-center items-center">
        <img src={'https://i.postimg.cc/C1rbVLLW/business-3d-black-young-woman-in-glasses-sitting-and-drinking-coffee.png'} alt="Pessoa tomando café" className=" w-3/4 h-auto" />
      </div>
      <div className="flex-1 flex flex-col justify-center  p-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">Opa! Que Bom te ver aqui</h1>
        <p className="text-4xl text-orange-500 flex items-center ">Pegue seu café e vamos estudar. <br />Selecione a sua Categoria no Menu!  :D
      </p>
      
      <FaBookBookmark size={100} className=' text-orange-500 mt-10' />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
