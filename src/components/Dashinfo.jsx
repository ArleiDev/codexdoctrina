import React from 'react'

function Dashinfo(props) {
  return (

     <div className="w-3/4 ">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{props.textoPrincipal}</h3>
            <div className="text-4xl font-bold">{props.quantidade}</div>
          </div>

    </div>
  )
}

export default Dashinfo