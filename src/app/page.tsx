import Header from "@/sections/Home/Header";
import { Hero } from "@/sections/Home/Hero";
import { LogoTicker} from "@/sections/Home/LogoTicker";
import { ProductShowcase } from "@/sections/Home/ProductShowcase";
import { ProductSlider } from "@/sections/Home/ProductSlider";
import { ImageSection } from "@/sections/Home/Image";
import { VideoProduct } from "@/sections/Home/VideoProduct";
import { Footer } from "@/sections/Home/Footer";
import Navbar from "@/sections/Home/Navbar"



export default function Home() {
  return <>
  <Navbar /> 
  <Hero/>
  <LogoTicker/>
  <ProductShowcase/>
  <ProductSlider/>
  <ImageSection/>
  <VideoProduct/>
  <Footer/>
  
  </>;

}


