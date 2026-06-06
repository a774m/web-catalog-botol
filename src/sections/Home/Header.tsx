import ArrowRight from "@/assets/arrow-right.svg";
"use client";
import { useState } from "react";
import Logo from '@/assets/prolog.png';
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { motion, AnimatePresence } from "framer-motion";


export default function Header () {
  return(
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
           <Image className="rounded"src={Logo} alt="tumbler logo" width={40} height={40}/>
           <MenuIcon className="h-5 w-5 md:hidden"/>
           <nav className="hidden md:flex gap-6 text-black/60 items-center ">
                 <a href="Footer">Contact</a>
                 <a href="#">customers</a>
                 <a href="#">about</a>
                 <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black border border-black transition-colors duration-200
                 font-medium inline-flex align-items justify-center tracking-tighter">
                  <a href="catalog">get product</a>
                 </button>
            </nav>
          </div>
          </div>
          </div>
     </header>
  
  )}
