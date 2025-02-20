import React, { useRef, useState } from 'react'
import {useForm} from 'react-hook-form'
import Cards from './components/Cards'
import Card from './components/Card'
import Form from './components/Form'

const App = () => {

  const {register, handleSubmit} = useForm();


  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <Link to="/">home</Link> 
      <Link to="/user">user</Link> 
      <Link to="/about">about</Link> 
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