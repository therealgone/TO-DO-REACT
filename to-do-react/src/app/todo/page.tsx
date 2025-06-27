"use client";
import { useState } from "react";

export default function Todo() {
  const [input, SetInput] = useState("");
  const [todo, SetTodo] = useState<string[]>([]);

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetInput(e.target.value);
  };

  const Enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      AddTodo();
    }
  };

  const handelDelete = (index: number) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    SetTodo(updatedTodos);
  };

  const AddTodo = () => {
    if (input.trim() === "") return;
    SetTodo([...todo, input]);
    SetInput("");
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-y-auto relative">
      
      {/* Top Header */}
      <div className="fixed top-0 left-0 w-full z-20 p-5 flex justify-between items-center bg-black bg-opacity-80">
        <h1 className="text-2xl font-bold tracking-widest text-shadow-[0_0_20px_white]">
          TO - DO - REACT
        </h1>
        <nav className="space-x-5">
          <a
            href="#"
            className="text-black bg-white px-4 py-2 rounded-3xl shadow-[0_0_10px_white] transition-all duration-300 ease-in-out 
              hover:bg-white/10 hover:text-white hover:backdrop-blur-md hover:border hover:border-white/40"
          >
            Back
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="pt-[100px] flex flex-col items-center justify-start gap-6 px-4">
        
        {/* Input & Button */}
        <div className="flex flex-row items-center gap-4 w-full max-w-md">
          <input
            placeholder="Enter a Task"
            type="text"
            value={input}
            onChange={handelInputChange}
            onKeyDown={Enter}
            className="flex-1 px-4 py-2 rounded-xl bg-transparent text-white placeholder-white ring-2 ring-white shadow-[0_0_10px] text-center"
          />
          <button
            onClick={AddTodo}
            className="text-black bg-white px-4 py-2 rounded-3xl shadow-[0_0_10px_white] transition-all duration-300 ease-in-out 
              hover:bg-white/10 hover:text-white hover:backdrop-blur-md hover:border hover:border-white/40"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="w-full max-w-md flex flex-col items-center gap-3">
          {todo.map((todo, index) => (
            <li
              key={index}
              className="w-full bg-white text-black px-4 py-3 rounded-xl shadow-md flex justify-between items-center"
            >
              <span className="break-words max-w-[70%]">{todo}</span>
              <button
                onClick={() => handelDelete(index)}
                className="ml-4 text-black bg-red-400 px-3 py-1 rounded-xl shadow-md hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
