"use client";
import ArrowIcon from "@/assets/arrow-right.svg"; // pastikan ini didukung
import mocImage from "@/assets/mocbotol.png";
import metalImage from "@/assets/metal.png";
import bubble2Image from "@/assets/bubble2.png";
import Image from "next/image";
import { motion,useScroll,useTransform,useMotionValueEvent } from "framer-motion";
import { useRef } from "react";


export const Hero = () => {
  const heroref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroref} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#000092,#E0EEF3_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              BotolShop is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter stroke-black bg-gradient-to-b  from-white to-blue-500 text-transparent bg-clip-text mt-6">
              welcome to BotolShop
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tighter mt-6">
              get your bottle soon
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">get product</button>
              <button className="btn btn-text">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={mocImage.src}
              alt="moc image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 "
              animate={{
                translateY: [ -15, 10],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
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
