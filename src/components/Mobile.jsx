import React from 'react';
import Sidebar from './Sidebar';
import DashCursosCard from './DashCursosCard'; // Correção: nome do componente em maiúscula

function Devops() {




  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col h-screen w-screen bg-gray-100 text-gray-800 md:p-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
        </div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">GRADE DE CURSOS <span className='bg-orange-600 p-2 text-white'>Mobile</span></h2>
           
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashCursosCard
            thumbnailUrl={'https://i.postimg.cc/ZKx716zg/image.png'}
              videoTitle={'CURSO DE DESENVOLVIMENTO ANDROID COM JAVA'}
              videoId={'QKm-uc9v2KeMoMsq&amp;list=PLizN3WA8HR1zRVd-hATWHtEageHJ5XpCR'} 
            />
             <DashCursosCard
              videoTitle={'PRIMEIROS PASSOS NO REACT NATIVE'}
              thumbnailUrl={'https://i.ytimg.com/vi/Y8tP1jbRYHY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpeFLRVFqJ1xbIrQkIK7JhmYuajw'}
              videoId={'mkFrvkc1aU1LQd_t&amp;list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_'} 
            />
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devops;
