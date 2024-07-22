"use client"
import { Nav } from "@/components/navbar/nav";
import { Homepage } from "@/components/home/home";
import { useEffect, useState } from "react";


export default function Home() {
  const [imageURL, setImageURL] = useState<string[] | undefined>()
  useEffect(()=>{
    const fetchImage = async () => {
      try {
        const res = await fetch('/api/getskills')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json()
        setImageURL(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchImage()
  },[])
  useEffect(()=>{
    console.log(imageURL)
  },[imageURL])
  return (
    <>
      <Nav/>
      <Homepage/>
      
    </>
  );
}
