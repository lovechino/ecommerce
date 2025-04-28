import { BsArrowRight } from "react-icons/bs";
import HeroImage from "@/public/Image/photo-1-1704475091233873391731.webp"
import Image from "next/image";
const Hero = ()=>{
    return(
        <section className="bg-gray-50 py-16 relative overflow-hidden">
      {/* Banner giảm giá */}
      {/* <div className="absolute top-6 left-6 bg-purple-200 text-purple-700 text-xs font-semibold py-1 px-2 rounded-full z-10">
        Sale 70%
      </div> */}

      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
        {/* Nội dung bên trái */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            An Industrial Take on Streetwear
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Anyone can beat you but no one can beat your outfit as long as you wear Dina outfits.
          </p>
          <button className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-center md:justify-start space-x-2">
            <BsArrowRight />
            <span>Start Shopping</span>
          </button>
          {/* Logo các tạp chí */}
          {/* <div className="mt-8 flex justify-center md:justify-start space-x-4 opacity-75">
            <img src={BazaarLogo} alt="Bazaar" className="h-6 grayscale" />
            <img src={BustleLogo} alt="Bustle" className="h-6 grayscale" />
            <img src={VersaceLogo} alt="Versace" className="h-6 grayscale" />
            <img src={InstyleLogo} alt="Instyle" className="h-6 grayscale" />
          </div> */}
        </div>

        {/* Hình ảnh bên phải */}
        <div className="md:w-1/2">
          
          <Image src={HeroImage} alt="Streetwear Outfit" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
    )
}

export default Hero;