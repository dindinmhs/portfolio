"use client"
import { Nav } from "@/components/navbar/nav";
import { Homepage } from "@/components/home/home";
import { useEffect, useState } from "react";
import { About } from "@/components/about/about";
import { Project } from "@/components/project/project";


export default function Home() {
  return (
    <>
      <Nav/>
        <Homepage/>
      <div className="max-w-[70rem] mx-auto px-6">
        <About/>
        <Project/>
      </div>
    </>
  );
}
