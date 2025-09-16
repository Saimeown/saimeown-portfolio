import Logo from "../assets/logo.svg";
import ResumeFile from "../assets/saimeown.pdf";
import { FiDownload } from "react-icons/fi";
import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = currentScrollY + 100; 
      
      // Get all section elements
      const sectionElements = sections.map(section => {
        if (section === 'about') {
          // For "About Me", we check if we're in the Hero section
          return document.querySelector('main > div:first-child') || document.querySelector('[data-section="hero"]');
        }
        return document.querySelector(`[data-section="${section}"]`) || document.querySelector(`#${section}`);
      }).filter(Boolean);

      // Find which section is currently in view
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && (element as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else if (sectionId === 'skills') {
      const element = document.getElementById('skills-carousel-1');
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        const elementCenter = elementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        window.scrollTo({
          top: elementCenter,
          behavior: 'smooth'
        });
      }
    } else if (sectionId === 'projects') {
      const element = document.getElementById('projects-toothtrackr');
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        const elementCenter = elementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        window.scrollTo({
          top: elementCenter,
          behavior: 'smooth'
        });
      }
    } else {
      const element = document.querySelector(`[data-section="${sectionId}"]`);
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop - 80; 
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = ResumeFile;
    link.download = 'Saimeown_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative top-0 left-0 right-0 z-[9999] w-full h-16 mt-10 bg-transparent flex items-center">
      <div className="w-full px-4 md:px-6 lg:px-12 xl:px-20 2xl:px-60 flex flex-row items-center justify-between">
        {/* branding */}
        <div className="flex flex-row items-center space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-6 group cursor-pointer">
          <img src={Logo} alt="Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
          <p className="text-black font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-cherry-bomb-one transition-all duration-300 group-hover:text-black-700 group-hover:scale-105">Saimeown</p>
        </div>
        
        {/* nav links */}
        <div className="hidden md:flex flex-row items-center space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-4 2xl:space-x-8 font-fredoka">
          <button onClick={() => scrollToSection('about')} className={`relative text-black font-medium text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap transition-all duration-300 px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 py-2 group ${activeSection === 'about' ? 'active' : ''}`}>
            About Me
            <span className={`absolute inset-0 border-2 border-black rounded-lg transition-all duration-300 ${activeSection === 'about' ? 'opacity-100 scale-100' : 'border-transparent group-hover:border-black opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
          </button>
          <button onClick={() => scrollToSection('skills')} className={`relative text-black font-medium text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap transition-all duration-300 px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 py-2 group ${activeSection === 'skills' ? 'active' : ''}`}>
            Skills
            <span className={`absolute inset-0 border-2 border-black rounded-lg transition-all duration-300 ${activeSection === 'skills' ? 'opacity-100 scale-100' : 'border-transparent group-hover:border-black opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
          </button>
          <button onClick={() => scrollToSection('projects')} className={`relative text-black font-medium text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap transition-all duration-300 px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 py-2 group ${activeSection === 'projects' ? 'active' : ''}`}>
            Projects
            <span className={`absolute inset-0 border-2 border-black rounded-lg transition-all duration-300 ${activeSection === 'projects' ? 'opacity-100 scale-100' : 'border-transparent group-hover:border-black opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
          </button>
          <button onClick={() => scrollToSection('contact')} className={`relative text-black font-medium text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap transition-all duration-300 px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 py-2 group ${activeSection === 'contact' ? 'active' : ''}`}>
            Contact
            <span className={`absolute inset-0 border-2 border-black rounded-lg transition-all duration-300 ${activeSection === 'contact' ? 'opacity-100 scale-100' : 'border-transparent group-hover:border-black opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
          </button>
        </div>
        {/* resume button */}
        <button 
          onClick={handleResumeDownload}
          className="flex flex-row items-center bg-white text-black border-2 border-black px-2 py-1 sm:px-3 sm:py-1 md:px-4 lg:px-6 xl:px-8 2xl:px-9 md:py-2 lg:py-3 xl:py-4 rounded-xl transition-all duration-300 hover:bg-black hover:text-white font-cherry-bomb-one font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
          <FiDownload className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-1 sm:ml-2" />
        </button>
      </div>
    </div>
  )
}
export default Header