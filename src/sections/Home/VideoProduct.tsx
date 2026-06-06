import Image from "next/image";
import Link from "next/link";


export const VideoProduct = () => {
  return (
    <section className="bg-[#e7f1ed] py-16 border-2 border-black">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-blue-500 text-transparent bg-clip-text mt-5 pb-4">
            Bottles with <br /> exclusive design
        </h1>
        <div className="flex flex-col border-2 border-black md:flex-row bg-[#f8fbfa] rounded-[24px] overflow-hidden">
          {/* Left: Image */}
          <video autoPlay muted loop playsInline className="w-auto h-[500px] object-cover">
              <source src="/videos/v1.mp4" type="video/mp4" />
          </video>

          {/* Right: Text Content */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center text-[#2b4443]">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Stainless <br /> Exklusive Tumbler
            </h3>
            <p className="mb-6 text-sm md:text-base leading-relaxed text-[#4c6463]">
              Hadirkan gaya hidup ramah lingkungan dengan tumbler reusable ini, 
              pilihan bijak untuk bumi yang lebih baik.
              <br /><br />
              Tumbler ini bukan sekadar botol minum, tapi teman perjalanan yang menemani setiap langkahmu.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <Link href="/catalog" 
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black border border-black transition">
                Lihat selengkapnya →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
