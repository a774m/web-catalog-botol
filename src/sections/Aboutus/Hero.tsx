import React from 'react';
import Image from 'next/image';
import post from '@/assets/model1.png'
import poster from '@/assets/poster.png';

export const Hero = () => {
  return (
    <div className="bg-gray-200 min-h-screen px-6 py-12">
      <div className="container">
        {/* Heading */}
        <div className="text-7xl font-extrabold leading-tight space-y-2 mb-12">
          <div className="text-blue-800">About</div>
          <div className="text-blue-600">Us</div>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
          {/* Kotak Gambar */}
          <div className="bg-white border-2 border-black rounded-2xl w-full md:w-[700px] h-[200px] md:h-[300px] p-4 flex items-center justify-center relative">
            <Image
              src={post}
              alt="Bottle"
              className="h-32 md:h-48 object-contain"
            />
          </div>

          {/* Teks di kanan */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="font-bold text-2xl text-gray-800">Ganti Botol Sekali Pakai dengan Tumbler Reusable</h2>
            <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-10">
              Kurangi penggunaan botol plastik sekali pakai dan beralihlah ke tumbler ramah lingkungan ini. .
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
          {/* Kolom teks – bawah di mobile, kiri di desktop */}
          <div className="order-1 md:order-0 px-0 md:flex-1">
            <h2 className="font-bold text-2xl text-gray-800">Produk Kami</h2>
            <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-10">
              Kami adalah brand yang lahir dari keinginan untuk menghadirkan produk tumbler berkualitas tinggi yang fungsional, stylish, dan ramah lingkungan. 
              Dengan fokus pada desain minimalis dan material food grade yang aman, kami percaya bahwa setiap orang berhak memiliki produk yang tidak hanya nyaman digunakan, tetapi juga mendukung gaya hidup sehat dan berkelanjutan.
            </p>
          </div>

          {/* Kolom gambar – atas di mobile, kanan di desktop */}
          <div className="order-0 md:order-1 w-full md:w-[300px] flex justify-center">
            <div className="bg-white border-2 border-black rounded-lg w-full max-w-[300px] aspect-[1/1] p-4 flex items-center justify-center relative">
              <Image
                src={poster}
                alt="Bottle"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
