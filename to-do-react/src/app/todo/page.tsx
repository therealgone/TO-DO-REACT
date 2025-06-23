"use client";
import { useState } from "react";

export default function Todo() {

  const [input, SetInput] = useState("")
  const [todo, SetTodo] = useState<string[]>([])

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetInput(e.target.value)
  }

  const Enter =(e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter"){
      AddTodo()
    }


  }

  const AddTodo = () => {
    if (input.trim() === "")
      return
    SetTodo([...todo, input])
    
    SetInput("")
   
  }

  return (
    <div className="bg-black min-h-screen text-white ">
      <input
        placeholder="enter the text"
        type="text"
        value={input}
        onChange={handelInputChange}
        onKeyDown={Enter}


      ></input>

      <button
        onClick={AddTodo}
        
      > add</button>

      <ul className="text-white">
        {todo.map((todo, index) => (
        <li className="text-white">
          {todo}
        </li>
        ))}

      </ul>


    </div>
  );
}
