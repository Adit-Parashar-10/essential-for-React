import React, { useRef, useState } from 'react'
import {useForm} from 'react-hook-form'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {

  useForm


  const [val, setval] = useState({name:"  ", age:""});

  const name = useRef(null);
  const age = useRef(null);

  const handleSubmit = (event)=> {
    event.preventDefault();
  }

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
     <input ref={age} type="text" placeholder='age' name="" id="" />
     
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