import { bottleDetails } from "@/lib/botol";
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Image from "next/image";
import Navbar from "@/sections/Home/Navbar";
import Link from "next/link";
import { Footer } from "@/sections/Home/Footer";

interface Props {
  params: { slug: string };
}

export default function BottleDetail({ params }: Props) {
  const bottle = bottleDetails.find((b) => b.slug === params.slug);

  if (!bottle) return notFound();

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="min-h-screen bg-[#e7f1ed] p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Gambar botol */}
            <div className="bg-gray-50 border-2 border-black rounded-2xl order-1 md:order-2 overflow-hidden relative aspect-square">
              <div className=" w-full px-6 flex items-center justify-center">
                <Image
                  src={bottle.image}
                  alt={bottle.name}
                  className="object-contain w-auto h-[450px] p-2 py-6"
                />
              </div>
            </div>

            {/* Info detail */}
            <div className="order-2 md:order-1">
              <div className="text-sm text-gray-500 mb-4">
                <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                {" > "}
                <Link href="/catalog" className="text-blue-600 hover:underline">Catalog</Link>
                {" > "}
                <span className="text-gray-700">{bottle.name}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-800 mb-6">{bottle.name}</h1>

              <div className="space-y-4 text-gray-700 pb-48">
                <div className="flex justify-between border-b border-gray-300 py-2">
                  <span className="font-medium">Name</span>
                  <span className="bg-blue-950 text-white px-4 py-1 rounded-full">
                    {bottle.name}
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-300 py-2">
                  <span className="font-medium">Color</span>
                  <span
                    className="w-5 h-5 rounded-full border border-gray-400"
                    style={{ backgroundColor: bottle.color }}
                  />
                </div>

                <div className="flex justify-between border-b border-gray-300 py-2">
                  <span className="font-medium">Cap</span>
                  <span>{bottle.cap}</span>
                </div>

                <div className="flex justify-between border-b border-gray-300 py-2">
                  <span className="font-medium">Material</span>
                  <span>{bottle.Material}</span>
                </div>

                <div className="flex justify-between border-b border-gray-300 py-2">
                  <span className="font-medium">Volume</span>
                  <span>{bottle.Volume}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
