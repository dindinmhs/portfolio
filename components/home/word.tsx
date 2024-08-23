"use client"
import { useEffect, useRef, useState } from "react";
import { Ubuntu_Mono } from "next/font/google";

const ubuntu_mono = Ubuntu_Mono({ subsets: ["latin"], weight : "700" });

export const Word = () => {
    let jobIdx = 0
    const job = ["Student", "Programmer", "Developer", "Engineer"]
    const charRandom = "!@#$%^&*():{};|,.<>/?"
    const intervalRef = useRef<any>(null)
    const [ number, setNumber ] = useState(0)
    const [ text, setText ] = useState(job[jobIdx])

    const scramble = () => {
        let pos = 0
        intervalRef.current = setInterval(() => {
            const scrambled = job[jobIdx].split("")
              .map((char, index) => {
                if (pos / 2 > index) {
                  return char;
                }
      
                const randomCharIndex = Math.floor(Math.random() * charRandom.length);
                const randomChar = charRandom[randomCharIndex];
      
                return randomChar;
              })
              .join("");

              setText(scrambled);
              pos++;
        
              if (pos >= job[jobIdx].length * 4) {
                jobIdx++
                if (jobIdx >= job.length) {
                    jobIdx = 0
                }
                setNumber(jobIdx)
                pos = 0
                stopScramble();
              } 
            },100)
    }

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setText(text);
      };
    useEffect(()=>{
        scramble()
    },[])
    return (
        <div className="text-2xl md:text-4xl">
            <h3>Hi i&apos;m</h3>
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-l from-purple-600 to-pink-600 mask">Dindin Imanudin</h2>
            <h3>I&apos;m a <span className={`${ubuntu_mono.className} ${
                    number === 0 ? "text-purple-500" :
                    number === 1 ? "text-pink-500" :
                    number === 2 ? "text-green-500" :
                    "text-sky-500" 
                }`}>{text}</span></h3>
        </div>
    )
};
