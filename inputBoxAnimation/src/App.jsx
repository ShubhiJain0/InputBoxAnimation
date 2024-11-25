import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {motion} from 'framer-motion'

function App() {
const [focus , setFocus] =useState(true);  
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-black">
        <div className="bg-gray-300 w-[60%] h-[10%] flex justify-center items-center relative">
          <input
            type="text"
            className="w-[80%] px-4 py-2 rounded-full border border-blue-400 outline-none placeholder:text-gray-600"
            placeholder={focus? "typing..." : ""}
            onFocus={()=>{setFocus(false)}}
            onBlur={()=>{setFocus(true)}}
          />
          {focus && <motion.div className="w-[40%] h-6 mt-1  bg-white absolute  top-1/3 left-16 ml-1 rounded-r-full border-l-2 border-l-gray-500"
          initial={{x : 0}}
          animate={{x:'30%'}}
          transition={{duration: 4, repeat:Infinity , repeatType : 'loop'}}
          ></motion.div>}
        </div>
      </div>
    </>
  );
}

export default App
