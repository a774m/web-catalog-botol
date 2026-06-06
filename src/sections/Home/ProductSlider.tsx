'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import bottle1 from '@/assets/b1logo.png';
import bottle2 from '@/assets/b2logo.png';
import bottle3 from '@/assets/b4logo.png';
import bottle4 from '@/assets/b3logo.png';
import bottle5 from '@/assets/b5logo.png';

const bottles = [
  { src: bottle1, label: 'Tumbler', count: 71 },
  { src: bottle2, label: 'Tumbler', count: 25 },
  { src: bottle3, label: 'Tumbler', count: 46 },
  { src: bottle4, label: 'Tumbler', count: 12 },
  { src: bottle5, label: 'Tumbler', count: 18 },
];

export const ProductSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Tambahkan efek untuk membuat scroll wheel menggeser horizontal
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // cegah scroll vertikal
        slider.scrollLeft += e.deltaY; // ubah jadi scroll horizontal
      }
    };

    slider.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      slider.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <section className="bg-[##e7f1ed] border-2 border-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-bla">
          Bottles with <br /> stories to tell
        </h2>

        <div className="md:flex-row flex-col flex gap-6">
          {/* Arrows */}
          <div className="md:mt-auto flex mt-0 ml-0 gap-3">
            <button
              onClick={scrollLeft}
              className="w-14 h-14 rounded-full bg-white text-black border-2 border-black flex items-center justify-center hover:bg-black hover:text-white hover:scale-110 transition cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="w-14 h-14 rounded-full bg-white text-black border-2 border-black flex items-center justify-center hover:bg-black hover:text-white hover:scale-110 transition cursor-pointer"
            >
              →
            </button>
          </div>

          {/* Bottle Cards */}
          <div className="w-full overflow-hidden">
            <div
              ref={sliderRef}
              className="flex gap-6 md:flex-row flex-nowrap overflow-x-auto scroll-smooth hide-scrollbar mask-fade-x pl-16 pr-[50px]"
            >
              {bottles.map((bottle, i) => (
                <Link
                  href="/catalog"
                  key={i}
                  className="bg-gray-50 border-2 border-black p-6 rounded-[30px] w-[260px] h-80 flex-shrink-0 flex flex-col items-center justify-center shadow transition hover:scale-95 cursor-pointer snap-center"
                >
                  <Image
                    src={bottle.src}
                    alt={bottle.label}
                    width={100}
                    height={200}
                  />
                  <div className="text-black text-2xl font-semibold mt-4 flex items-center gap-1">
                    {bottle.label}
                    <span className="text-black text-sm font-medium">
                      {bottle.count}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
