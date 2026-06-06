import Image from "next/image";
import p1 from "@/assets/p1.png";


export const Label = () => {
    return (
   <div className="min-h-screen bg-[#e7f1ed] p-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  
  <div className="bg-white rounded-2xl order-1 md:order-2 overflow-x-auto">
  <Image src={p1} alt="Bottle 1" className="md:h-[600px] h-[400] min-w-full p-7 object-contain snap-center" />
  </div>
  <div className="order-2 md:order-1">

    <div>
      <div>
  <div className="text-sm text-gray-500 mb-4">
    <a href="/" className="text-blue-600 hover:underline">Home</a>
    {' > '}
    <a href="/catalog" className="text-blue-600 hover:underline">Sparkling</a>
    {' > '}
    <span className="text-gray-700">Spumante Airone</span>
  </div>
</div>


      <h1 className="text-4xl font-bold text-gray-800 mb-6">Spumante Jam Horizon</h1>

      <div className="space-y-4 text-gray-700">
        
        <div className="flex gap-x-36 border-b border-gray-300 py-2">
          <span className="font-medium">Capacity</span>
          <span className="bg-blue-950 text-white px-4 py-1 rounded-full">750</span>
        </div>

        
        <div className="flex justify-between border-b border-gray-300 py-2">
          <span className="font-medium">Color</span>
          <span className="w-5 h-5 rounded-full bg-[#3b3a2d] inline-block"></span>
        </div>

              
        <div className="flex gap-x-40 border-b border-gray-300 py-1">
          <span className="font-medium">Section</span>
          <span className="font-bold text-2xl font-mono">Round</span>
        </div>
        
                
        <div className="flex gap-x-40 border-b border-gray-300 py-1">
          <span className="font-medium">Section</span>
          <span className="font-bold text-2xl font-mono">Round</span>
        </div>

        
                
        <div className="flex gap-x-40 border-b border-gray-300 py-1">
          <span className="font-medium">Section</span>
          <span className="font-bold text-2xl font-mono">Round</span>
        </div>

        
        <div className="flex gap-x-36 border-b border-gray-300 py-1">
          <span className="font-medium">Diameter</span>
          <span className="font-bold text-2xl font-mono">92,4 / 84,4 mm</span>
        </div>

        
        <div className="flex gap-x-40 border-b border-gray-300 py-1">
          <span className="font-medium">Section</span>
          <span className="font-bold text-2xl font-mono">Round</span>
        </div>
        
        <div className="flex justify-between border-b border-gray-300 py-1">
          <span className="font-medium">Collection</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>


    );
    }
