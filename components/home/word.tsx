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
    const [pos, setPos] = useState(0); // To keep track of the scrambling position

    const scramble = () => {
        intervalRef.current = setInterval(() => {
            let currentJob = job[jobIdxRef.current];
            const scrambled = currentJob.split("")
                .map((char, index) => {
                    if (pos / 2 > index) {
                        return char; // Keep correct characters in place
                    }

                    // Otherwise, replace with a random character
                    const randomCharIndex = Math.floor(Math.random() * charRandom.length);
                    const randomChar = charRandom[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled); // Update the displayed text
            setPos((prevPos) => prevPos + 1); // Increment position

            if (pos >= currentJob.length * 4) { // Once scrambling is done
                jobIdxRef.current = (jobIdxRef.current + 1) % job.length; // Move to the next job
                setNumber(jobIdxRef.current);
                setPos(0); // Reset position for the next job
                setText(job[jobIdxRef.current]); // Set the actual job name as the text
            }
        }, 100);
    };

    useEffect(() => {
        scramble(); // Start the scramble process on mount

        return () => {
            clearInterval(intervalRef.current); // Cleanup interval when component unmounts
        };
    }, [pos]); // Re-run the effect if pos changes

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


