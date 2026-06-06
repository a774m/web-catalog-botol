import gogreen from "@/assets/go green.jpg"
"use client";
import ArrowIcon from "@/assets/arrow-right.svg"; // pastikan ini didukung
import mocImage from "@/assets/tabung.png";
import metalImage from "@/assets/metal.png";
import bubble2Image from "@/assets/bubble2.png";
import Image from "next/image";
import { motion,useScroll,useTransform,useMotionValueEvent } from "framer-motion";
import { useRef } from "react";


export const ImageSection = () => {
  const heroref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroref} className="pt-8 pb-20 md:pt-5 md:pb-20 bg-[radial-gradient(ellipse_120%_100%_at_bottom_center,#58b7f6_0%,#a6dbf7_50%,#eaf8ff_100%)]
       overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-blue-900 to-blue-400 text-transparent bg-clip-text mt-6">
              go green with your botol
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tighter mt-6">
              
            </p>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={mocImage}
              alt="moc image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 rounded-lg bottom-0"
            />
            <motion.img
              src={metalImage.src}
              width={220}
              height={220}
              alt="metal image"
              className="hidden md:block -top-5 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={bubble2Image.src}
              width={150}
              height={150}
              alt="bubble2 image"
              className="hidden md:block -bottom-14 -right-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

