import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-gradient-to-t from-gray-700 to-stone-900 min-h-screen tracking-wider">
      <div className=" flex top-0 p-5  font-bold  justify-end  ">
        <nav className="space-x-5">
          
            <a className="text-white bg-black p-2 rounded-3xl text-shadow-[10px_10px_60px_white] hover:bg-white hover:text-black   ">Login</a>
          
            <a className="text-white bg-black p-2 rounded-3xl text-shadow-[10px_10px_60px_white]  hover:bg-white hover:text-black  ">Sign-In</a>
         
        </nav>

        
      </div>
      <div className="flex top-0  justify-start text-white">
        <h1>TO - DO - REACT</h1>

      </div>
    </div>
  );
}
