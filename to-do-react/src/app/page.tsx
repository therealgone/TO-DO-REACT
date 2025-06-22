import Image from "next/image";
import StarField from "./componets/StarField";
export default function Home() {
  return (
    
    <div className="bg-black min-h-screen tracking-widest  p-4">
     
      <div className="rounded-full backdrop-blur-3xl  ">
        <div className=" fixed p-5 text-white flex justify-start font-bold text-shadow-[0_0_20px_white] tracking-widest text-2xl">
          <h1>TO - DO - REACT</h1>
        </div>
        <div className=" flex top-0 p-7  font-bold justify-end space-x-3   ">
          <div className="">
            <nav className="space-x-5   ">
              <a className="text-white  bg-black p-3 rounded-3xl shadow-[0_0_10px_white] text-shadow-[10px_10px_60px_white] border p hover:bg-white hover:text-black   ">
                Login
              </a>

              <a className="text-white bg-black p-3 rounded-3xl shadow-[0_0_10px_white] text-shadow-[10px_10px_60px_white] border   hover:bg-white hover:text-black  ">
                Sign-In
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white ">Welcome</h1>
        </div>
      </div>
       <StarField />
    </div>
  );
}
