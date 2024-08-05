import About from "@/components/About";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";


import { FloatingNav } from "@/components/ui/floating-navbar";



import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaSquarePen } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center 
    flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems ={[
            {name: 'Home', link: '/', icon: <FaHome/>},
            {name: 'About Me', link: '#about', icon: <IoPerson/>},
            {name: 'I miei progetti', link: '/', icon: <FaSquarePen/>}
          ]}
        />
        
        
        <Hero />
        <About />
        <Grid />
      </div>
    </main>
  );
}
