import React, { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Routing from "./utils/Routing";


const App = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Nav/>
      <Routing/>
    </>
  );
};

export default App;

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
