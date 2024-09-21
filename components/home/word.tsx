"use client";
import { useEffect, useRef, useState } from "react";
import { Ubuntu_Mono } from "next/font/google";
import { Reveal } from "../reveal/reveal";

const ubuntu_mono = Ubuntu_Mono({ subsets: ["latin"], weight: "700" });

export const Word = () => {
    const jobIdxRef = useRef(0); 
    const job = ["Student", "Programmer", "Developer", "Engineer"];
    const charRandom = "!@#$%^&*():{};|,.<>/?";
    const intervalRef = useRef<any>(null);
    const [number, setNumber] = useState(0);
    const [text, setText] = useState(job[jobIdxRef.current]);
    const [pos, setPos] = useState(0); 

    const scramble = () => {
        intervalRef.current = setInterval(() => {
            let currentJob = job[jobIdxRef.current];
            const scrambled = currentJob.split("")
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
            setPos((prevPos) => prevPos + 1); 

            if (pos >= currentJob.length * 4) { 
                jobIdxRef.current = (jobIdxRef.current + 1) % job.length; 
                setNumber(jobIdxRef.current);
                setPos(0); 
                setText(job[jobIdxRef.current]); 
            }
        }, 100);
    };

    useEffect(() => {
        scramble(); 

        return () => {
            clearInterval(intervalRef.current); 
        };
    }, [pos]); 

    return (
        <div className="text-2xl md:text-4xl">
            <Reveal>
                <h3>Hi i&apos;m</h3>
            </Reveal>
            <Reveal>
                <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-l from-purple-600 to-pink-600 mask">
                    Dindin Imanudin
                </h2>
            </Reveal>
            <Reveal>
                <h3>
                    I&apos;m a{" "}
                    <span
                        className={`${ubuntu_mono.className} ${
                            number === 0
                                ? "text-purple-500"
                                : number === 1
                                ? "text-pink-500"
                                : number === 2
                                ? "text-green-500"
                                : "text-sky-500"
                        }`}
                    >
                        {text}
                    </span>
                </h3>
            </Reveal>
        </div>
    );
};


