import React, { useRef, useState } from 'react'
import {useForm} from 'react-hook-form'
import Navbar from './components/Cards'
import Card from './components/Card'
import Form from './components/Form'

const App = () => {

  const {register, handleSubmit} = useForm();


  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center'>
      <div className='container mx-auto'>
        <Cards/>
        <Form/>
      </div>
    </div>
  )
}

export default App



// <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
//      {realdata.map((item,idx) => (
//       <Card key={idx} handleClick={handleFriendsButton}  values={item}/>
//      ))}

  // const [realdata , setRealData] = useState(data)
  // const handleFriendsButton = () => {
  //   setRealData( (previous)=> {
  //     return previous.map( (item,index)=>{
  //       if(index === 2){
  //         return {...item, friend: !item.friend}
  //       }
  //       return item;
  //     })
  //   })
  // }