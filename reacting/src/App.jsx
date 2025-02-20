import React, { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import User from "./components/User";
import About from "./components/About";

const App = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element ={<Home/>}  />
        <Route path="/about" element ={<About/>}  />
        <Route path="/user" element ={<User/>}  />
      </Routes>

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
