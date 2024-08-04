import React from 'react';
import Sidebar from './Sidebar';
import Dashinfo from './Dashinfo';
import DashCursosCard from './DashCursosCard'; // Correção: nome do componente em maiúscula

function Fronted() {




  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col h-screen w-screen bg-gray-100 text-gray-800 md:p-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
        </div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">GRADE DE CURSOS <span className='bg-orange-600  text-white'>FRONT END</span></h2>
           
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashCursosCard
            thumbnailUrl={'https://i.postimg.cc/28pCwY08/image.png'}
              videoTitle={'CURSO COMPLET HTML5 E CSS3'}
              videoId={'WI4Whv1bkQRrGTES&amp;list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n'} 
            />
             <DashCursosCard
              videoTitle={'CURSO JAVASCRIPT COMPLETO'}
              thumbnailUrl={'https://i.postimg.cc/Z5w83wJZ/image.png'}
              videoId={'B6dhmpoNtehJCUDh&amp;list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw'} 
            />
              <DashCursosCard
              videoTitle={'Curso React Hora de Codar'}
              thumbnailUrl={'https://i.postimg.cc/tJdPg5BK/image.png'}
              videoId={'wz0PmcdrgD9Nnzf5&amp;list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO'} 
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fronted;
