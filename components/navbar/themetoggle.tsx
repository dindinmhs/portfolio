"use client"
import { useState, useEffect } from 'react';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';
import { useAnimate, motion } from 'framer-motion';
import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';


export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const switchAnimate = async () => {
    animate(scope.current, {display : "block", opacity : 1})
    await animate("#day", {y : 0}, {duration : 0.5, type : "spring"})
    await animate(scope.current, {display : "none"})
    animate(scope.current, {opacity : 0})
    animate("#day", {y : "80%"})
  }

  const handleToggle = () => {
    document.body.style.overflow = 'hidden';
    setDarkMode(!darkMode);
    switchAnimate()
    setTimeout(()=>{
      document.body.style.overflow = 'visible';
    },900)
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className='md:p-3 hover-nav mx-1'
      >
        {darkMode ? <MdDarkMode size={25}/> : <MdWbSunny size={25}/>}
      </button>
      <motion.div 
          ref={scope} 
          initial={{display : "none", opacity : 0}}
          style={darkMode ? { background : "black" } : { background : "white" }}
          className="right-0 left-0 h-[100vh] translate-y-[46%] fixed z-50">
              <motion.div 
                id='day'
                initial={{y : "80%"}}
                className='flex justify-center items-center h-full'
                >
                {darkMode? <FaMoon size={300} color='grey'/> : <IoSunny size={300} color='orange'/>}
              </motion.div>
      </motion.div>
    </>
  );
};
