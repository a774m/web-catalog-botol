'use client'
import Image from 'next/image';
import productImage from '@/assets/design.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import { motion,useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const showref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: showref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto text-center">
          <div className="flex justify-center">
            <div className="tag">custom your product</div>
          </div>

          <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-blue-500 text-transparent bg-clip-text mt-5">
            get your dreamed product
          </h1>

          <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Bawa gaya personalmu ke mana pun dengan tumbler stainless yang tidak hanya kuat dan tahan lama, 
            tapi juga bisa didesain sesuai karakter kamu.
          </p>
        </div>

        <div className="relative mt-10 flex justify-center">
          <Image src={productImage} alt="product image" />

          <motion.img
            src={pyramidImage.src}
            alt="pyramid product"
            width={262}
            height={262}
            className="absolute md:block hidden -right-36 -top-32"
            style={{
            translateY: translateY,
            }}            
          />

          <motion.img
            src={tubeImage.src}
            alt="tube product"
            width={262}
            height={248}
            className="hidden md:block absolute -bottom-7 -left-36"
            style={{
            translateY: translateY,
            }} 
          />
        </div>
      </div>
    </section>
  );
};
