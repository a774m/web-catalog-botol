"use client";
import Image from "next/image";
import b1logo from '@/assets/b1logo.png';
import b2logo from '@/assets/b2logo.png';
import b3logo from '@/assets/b3logo.png';
import b4logo from '@/assets/b4logo.png';
import b5logo from '@/assets/b5logo.png';
import b6logo from '@/assets/b6logo.png';
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-5 bg-white">
      <div className="">
      <div className="flex overflow-hidden md:[mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]">
        <motion.div
          className="flex gap-9  flex-none -mt-2 md:h-[200px] h-[80px] w-auto pr-9"
          animate={{ 
          translateX: "-50%"
          }}
          transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear", 
          repeatType: "loop"
          }}
          >
          <Image src={b1logo} alt="Logo 1" className="logo-ticker-image" />
          <Image src={b2logo} alt="Logo 2" className="logo-ticker-image" />
          <Image src={b3logo} alt="Logo 3" className="logo-ticker-image" />
          <Image src={b4logo} alt="Logo 4" className="logo-ticker-image" />
          <Image src={b5logo} alt="Logo 5" className="logo-ticker-image" />
          <Image src={b6logo} alt="Logo 6" className="logo-ticker-image" />

          {/*second image */}
           <Image src={b1logo} alt="Logo 1" className="logo-ticker-image" />
          <Image src={b2logo} alt="Logo 2" className="logo-ticker-image" />
          <Image src={b3logo} alt="Logo 3" className="logo-ticker-image" />
          <Image src={b4logo} alt="Logo 4" className="logo-ticker-image" />
          <Image src={b5logo} alt="Logo 5" className="logo-ticker-image" />
          <Image src={b6logo} alt="Logo 6" className="logo-ticker-image" />

        </motion.div>
        </div>
      </div>
    </div>
  );
};
