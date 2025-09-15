
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="w-full bg-black py-8">
      <div className="w-full px-4 md:px-8 lg:px-20 xl:px-60 flex flex-row items-center justify-between">
        {/* branding */}
        <div className="flex flex-row items-center space-x-3 md:space-x-6 group cursor-pointer">
          <img src={Logo} alt="Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
          <p className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl font-bagel-fat-one transition-all duration-300 group-hover:text-gray-300 group-hover:scale-105">Saimeown</p>
        </div>
        
        {/* copyright */}
        <div className="text-white font-sora font-extrabold text-sm sm:text-base md:text-lg">
          2020-2025
        </div>
      </div>
    </section>
  )
}

export default Footer
