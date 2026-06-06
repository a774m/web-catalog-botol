import Image from "next/image";
import Logo from "@/assets/prolog.png"

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 md:text-left mb-4 md:mb-0 flex-row">
            <Image className="rounded" src={Logo} alt="Logo" width={50} height={50} />
            <p className="text-sm">© 2025 botolcatalog.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms of Service</a>
            <a href="#" className="text-sm hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
};
