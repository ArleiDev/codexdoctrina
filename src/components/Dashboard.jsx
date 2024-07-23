import React from 'react';
import Sidebar from './Sidebar';
import Dashinfo from './Dashinfo';
import DashCursosCard from './DashCursosCard'; // Correção: nome do componente em maiúscula

function Dashboard() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col h-screen w-screen bg-gray-100 text-gray-800 md:p-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Dashinfo
            textoPrincipal='Meus Cursos '
            quantidade='12'
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Meus Cursos Destaques</h2>
            <a href="#" className="text-orange-500 hover:underline">
              Ver todos
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashCursosCard
              videoTitle={'Criado SAAS PARA VENDER'}
              videoId={'IZafvubDZxw?si=LTBNppF1326R7BLX'} // Correção: URL de vídeo do YouTube incorporado
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
