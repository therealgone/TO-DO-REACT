import Image from "next/image";
import StarField from "./componets/StarField";
export default function Home() {
  return (
    <div className="bg-black min-h-screen max-h-screen w-screen max-w-screen overflow-x-hidden overflow-y-hidden relative">
      <StarField />
      <div className="relative z-10">
        <div className="fixed p-5 text-white flex justify-start font-bold text-shadow-[0_0_20px_white] tracking-widest text-2xl ">
          <h1>TO - DO - REACT</h1>
        </div>
        <div className="absolute p-7 font-bold w-full z-30">
          
            <nav className="space-x-5 right-5 absolute  ">
              <a
                className="text-black bg-white p-3 rounded-3xl shadow-[0_0_10px_white] transition-all duration-300 ease-in-out 
                 hover:bg-white/10 hover:text-white hover:backdrop-blur-md hover:border hover:border-white/40"
              >
                Login
              </a>
              <a
                className="text-black bg-white p-3 rounded-3xl shadow-[0_0_10px_white] transition-all duration-300 ease-in-out 
                 hover:bg-white/10 hover:text-white hover:backdrop-blur-md hover:border hover:border-white/40"
              >
                Sign-In
              </a>
            </nav>
          
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white text-center -translate-y-16 z-10  ">
          <h1 className="text-5xl font-bold tracking-wider text-white text-glow mb-5">
            Welcome
          </h1>
          <h3 className="font-bold tracking-wider text-white text-glow mb-5">
            Stay focused and crush your daily goals with this simple To-Do app
          </h3>
          <h3 className="font-bold tracking-wider text-white text-glow mb-5">
            Organize your tasks, save notes, and track your progress — all in
            one place
          </h3>
          <h3 className="font-bold tracking-wider text-white text-glow mb-5">
            No distractions, just productivity
          </h3>
        </div>
      </div>
      <div className="bottom-0 fixed mb-10 text-center items-center w-full space-x-4 flex justify-center opacity-60 z-20">
        <a
          href="https://github.com/therealgone"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:scale-110 hover:drop-shadow-[0_0_80px_white] hover:border-white hover:rounded-full hover:bg-white"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-8 h-8  "
          />
        </a>

        <h1 className="text-white text-glow">
          Developed By Jeevan Baabu Murugan
        </h1>
        <a
          href="https://www.linkedin.com/in/jeevan-baabu-97a19125b/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:scale-110 hover:drop-shadow-[0_0_80px_white] hover:border hover:rounded hover:bg-white "
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="w-8 h-8   "
          />
        </a>
      </div>
    </div>
  );
}
