import React, { useRef, useState } from 'react'
import {useForm} from 'react-hook-form'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {

  useForm


  const [val, setval] = useState({name:""});

  const name = useRef(null);
  const age = useRef(null);

  const handleSubmit = (event)=> {
    event.preventDefault();
  }


  // const data = [
  //   {name:"John", pro:"painter", img:"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend:false},
  //   {name:"Amit", pro:"artist", img:"https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",friend:false },
  //   {name:"Rahul", pro:"faltu", img:"https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",friend:false},
  //   {name:"Sumit", pro:"coder", img:"https://plus.unsplash.com/premium_photo-1676391019683-f94cdf1a1078?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",friend:false},
    
  // ]

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
  

  return (
    <div className='p-4'>
     <form action="" onChange={(event)=>setval({...val, name:event.target.value})}>
     <input ref={name} type="text" placeholder='name' />
     <input ref={age} type="text" placeholder='age' /> 
     
     <input type="submit"  />
     </form>
    </div>
  )
}

export default App



// <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
//      {realdata.map((item,idx) => (
//       <Card key={idx} handleClick={handleFriendsButton}  values={item}/>
//      ))}