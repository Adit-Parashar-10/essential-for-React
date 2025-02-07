import React from 'react'

function Card({values}) {
  const {img,name,pro} = values
  const data = [
    
  ]


  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-32 bg-sky-400'>
        <img className='w-full h-full object-cover' src={img} alt="" />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{pro}</h5>
        <button onClick={()=>alert("adding as a friend")} className={`px-3 py-1 mt-4 text-white bg-blue-500 font-semibold rounded-md m-3`}>
        Add friend
      </button>
      </div>
      
    </div>
  )
}



export default Card