"use client"
import { useState } from "react";
import Link from "next/link";
import { bottles } from "@/lib/bottle";




export const BottleGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(bottles.map((b) => b.volume)));

  // Filter botol berdasarkan kategori yang dipilih
  const filteredBottles =
    selectedCategory === null
      ? bottles
      : bottles.filter((b) => b.volume === selectedCategory);

  return (
    <div className="bg-[#e7f1ed] border-2 border-black md:pt-20 pt-10 space-y-10">
      <div className="container">
      {/* Tombol Filter */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-1 rounded-full text-sm font-medium border ${
            selectedCategory === null
              ? "bg-teal-600 text-white"
              : "bg-white text-teal-700"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium border ${
              selectedCategory === cat
                ? "bg-teal-600 text-white"
                : "bg-white text-teal-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Galeri Botol */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 w-full">
        {filteredBottles.map((bottle, idx) => (
          <Link href={`/catalog/${bottle.slug}`} key={idx}>
            <div
              className="bg-gray-50 rounded-3xl border-2 border-black shadow-sm relative aspect-square flex flex-col p-4 hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={typeof bottle.image === 'string' ? bottle.image : bottle.image.src}
                  alt={bottle.name}
                  className="absolute h-full w-auto object-contain p-2"
                />
              </div>
            </div>

            <div className="mt-4 text-center mb-10">
              <h2 className="text-sm font-semibold text-black hover:underline">
                {bottle.name}
              </h2>
              <p className="text-xs text-gray-500">{bottle.cap}</p>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="text-xs border border-gray-300 rounded-full px-2 py-0.5 text-gray-600">
                  {bottle.volume}
                </span>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full border border-black bg-gray-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};
