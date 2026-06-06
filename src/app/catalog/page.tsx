import { Hero } from "@/sections/Catalog/Hero";
import { BottleGallery } from "@/sections/Catalog/BottleGallery";
import Navbar from "@/sections/Home/Navbar";
import { Footer } from "@/sections/Home/Footer";


export default function Catalog() {
  return (
    <>
      <Navbar />
      <Hero />
      <BottleGallery />
      <Footer />
    
    </>
  );
}