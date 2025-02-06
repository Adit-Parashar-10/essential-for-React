import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMt_kSL3s1phTYoFvQG6tdWiuWJ_2KZqhYEQ&s",
      name: "Amazon Basics",
      description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consectetur natus accusamus odit placeat corrupti ratione! Pariatur omnis molestiae explicabo et, a sequi?",
      instock:true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoZDq40i6vix8yfH7VGmMg112z72s_X6I9Q&s",
      name: "Apple",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consectetur natus accusamus odit placeat corrupti ratione! Pariatur omnis molestiae explicabo et, a sequi?",
        instock:false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVG-tC00LcPnlXaz1LGE00a_yhPyqqDRIM2Q&s",
      name: "Daily objects",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consectetur natus accusamus odit placeat corrupti ratione! Pariatur omnis molestiae explicabo et, a sequi?",
      intock:true,  
    },

  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-5">
      {data.map((elem, idx) => (
        <div
          key={idx}
          className="w-52 bg-white rounded-md overflow-hidden shadow-md"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img className="w-full h-full object-cover" src={elem.image} alt={elem.name} />
          </div>
          <div className="px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-2 text-gray-600">{elem.description}</p>
            <button className={`px-4 py-1 ${elem.instock ?  'bg-blue-600' : 'bg-red-600'} text-xs rounded-lg text-zinc-200 mt-3`}>
              {elem.instock ? "in stock" : "out of stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
