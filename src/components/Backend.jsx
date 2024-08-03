import React from 'react';
import Sidebar from './Sidebar';
import Dashinfo from './Dashinfo';
import DashCursosCard from './DashCursosCard'; // Correção: nome do componente em maiúscula

function Backend() {




  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col h-screen w-screen bg-gray-100 text-gray-800 md:p-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
        </div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">GRADE DE CURSOS <span className='bg-orange-600 p-2 text-white'>BACK END</span></h2>
           
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashCursosCard
            thumbnailUrl={'https://i.postimg.cc/903ZfgZp/image.png'}
              videoTitle={'CURSO DE NODE JS'}
              videoId={'W703WSY3Hf8OxAjW&amp;list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B'} 
            />
             <DashCursosCard
              videoTitle={'API REST COM NODE E TYPESCRIPT'}
              thumbnailUrl={'https://i.postimg.cc/4x8ccxpn/image.png'}
              videoId={'U8gqELTtoAV8pJZd&amp;list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP'} 
            />
              <DashCursosCard
              videoTitle={'CURSO NODE + EXPRESS'}
              thumbnailUrl={'https://i.postimg.cc/nz3Nb7mp/image.png'}
              videoId={'Xqk7K9ztHke__vTA&amp;list=PLnex8IkmReXwCyR-cGkyy8tCVAW7fGZow'} 
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
