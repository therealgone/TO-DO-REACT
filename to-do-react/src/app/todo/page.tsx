"use client";
import { Span } from "next/dist/trace";
import { useState } from "react";

export default function Todo() {

  const [input, SetInput] = useState("")
  const [todo, SetTodo] = useState<string[]>([])

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetInput(e.target.value)
  }

  const Enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      AddTodo()
    }


  }


  const handelDelete = (index: number) => {
    const updatedTodos = todo.filter((_, i) => i !== index)
    SetTodo(updatedTodos)

  }

  const AddTodo = () => {
    if (input.trim() === "")
      return
    SetTodo([...todo, input])

    SetInput("")

  }


  return (

    <div className="bg-black min-h-screen max-h-screen w-screen max-w-screen overflow-x-hidden overflow-y-hidden relative text-white">

      <div className="relative z-10">
        <div className="fixed p-5 text-white flex justify-start font-bold text-shadow-[0_0_20px_white] tracking-widest text-2xl w-full left-0 top-0 z-20">
          <h1>TO - DO - REACT</h1>
        </div>
        <div className="absolute right-0  p-7 font-bold justify-end w-full z-20">
          
            <nav className="space-x-5 right-5 absolute">

              <a
                href="#"
                className="text-black bg-white p-3 rounded-3xl shadow-[0_0_10px_white] transition-all duration-300 ease-in-out 
                 hover:bg-white/10 hover:text-white hover:backdrop-blur-md hover:border hover:border-white/40"
              >
                Back
              </a>
            </nav>
           
           
            <div className="flex flex-row justify-center text-center items-center min-h-screen ">

              <input
                placeholder="Enter The Text"
                type="text"
                value={input}
                onChange={handelInputChange}
                onKeyDown={Enter}
                className="ring-2 ring-white shadow-[0_0_10px]  text-center space-x-2 mx-3  "
                

              ></input>
              <button
                onClick={AddTodo}
                className="text-black bg-white p-2 rounded-3xl shadow-[0_0_10px_white] transition-all duration-300 ease-in-out 
                 hover:bg-white/10 hover:text-white hover:backdrop-blur-md hover:border hover:border-white/40 space-x-2  "
              > Add
              </button>

              <ul className="text-white flex-col flex text-center items-center max-h-screen">
                {todo.map((todo, index) => (
                  <li className="text-white absolute text-center"
                    key={index}>
                    {todo}
                    <button className="text-black bg-white p-2 rounded-3xl shadow-[0_0_10px_white] transition-all duration-300 ease-in-out 
                 hover:bg-white/10 hover:text-white hover:backdrop-blur-md hover:border hover:border-white/40 space-x-2  " onClick={() => handelDelete(index)}>X</button>
                  </li>
                ))}

              </ul>


            </div>

          </div>
        </div>
      </div>


    
  );
}
