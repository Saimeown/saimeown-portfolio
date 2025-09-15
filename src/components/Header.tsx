import Logo from "../assets/logo.svg";
import ResumeFile from "../assets/saimeown.pdf";
import { FiDownload } from "react-icons/fi";
import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Active section detection
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = currentScrollY + 100; // Offset for better detection
      
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
      // Scroll to the very bottom of the page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else if (sectionId === 'skills') {
      // Scroll to carousel 1 and center it vertically
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
      // Scroll to ToothTrackr text and center it vertically
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
        const offsetTop = (element as HTMLElement).offsetTop - 80; // Account for header height
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
    <div className="top-0 left-0 right-0 z-50 w-full h-16 mt-10 bg-transparent flex items-center">
      <div className="w-full px-4 md:px-8 lg:px-20 xl:px-60 flex flex-row items-center justify-between">
        {/* branding */}
        <div className="flex flex-row items-center space-x-3 md:space-x-6 group cursor-pointer">
          <img src={Logo} alt="Logo" className="h-10 sm:h-12 md:h-16 lg:h-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
          <p className="text-black font-semibold text-base sm:text-lg md:text-xl lg:text-3xl font-bagel-fat-one transition-all duration-300 group-hover:text-black-700 group-hover:scale-105">Saimeown</p>
        </div>
        
        {/* nav links */}
        <div className="hidden md:flex flex-row items-center space-x-4 lg:space-x-12 font-fredoka">
          <button onClick={() => scrollToSection('about')} className={`relative text-black font-medium text-lg lg:text-2xl transition-all duration-300 px-2 lg:px-4 py-2 group ${activeSection === 'about' ? 'active' : ''}`}>
            About Me
            <span className={`absolute inset-0 border-2 border-black rounded-lg transition-all duration-300 ${activeSection === 'about' ? 'opacity-100 scale-100' : 'border-transparent group-hover:border-black opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
          </button>
          <button onClick={() => scrollToSection('skills')} className={`relative text-black font-medium text-lg lg:text-2xl transition-all duration-300 px-2 lg:px-4 py-2 group ${activeSection === 'skills' ? 'active' : ''}`}>
            Skills
            <span className={`absolute inset-0 border-2 border-black rounded-lg transition-all duration-300 ${activeSection === 'skills' ? 'opacity-100 scale-100' : 'border-transparent group-hover:border-black opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
          </button>
          <button onClick={() => scrollToSection('projects')} className={`relative text-black font-medium text-lg lg:text-2xl transition-all duration-300 px-2 lg:px-4 py-2 group ${activeSection === 'projects' ? 'active' : ''}`}>
            Projects
            <span className={`absolute inset-0 border-2 border-black rounded-lg transition-all duration-300 ${activeSection === 'projects' ? 'opacity-100 scale-100' : 'border-transparent group-hover:border-black opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
          </button>
          <button onClick={() => scrollToSection('contact')} className={`relative text-black font-medium text-lg lg:text-2xl transition-all duration-300 px-2 lg:px-4 py-2 group ${activeSection === 'contact' ? 'active' : ''}`}>
            Contact
            <span className={`absolute inset-0 border-2 border-black rounded-lg transition-all duration-300 ${activeSection === 'contact' ? 'opacity-100 scale-100' : 'border-transparent group-hover:border-black opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
          </button>
        </div>
        {/* resume button */}
        <button 
          onClick={handleResumeDownload}
          className="flex flex-row items-center bg-white text-black border-2 border-black px-2 py-1 sm:px-3 sm:py-1 md:px-6 lg:px-9 md:py-2 lg:py-4 rounded-xl transition-all duration-300 hover:bg-black hover:text-white font-bagel-fat-one text-sm sm:text-base md:text-xl lg:text-2xl"
        >
          <span className="hidden sm:inline">Resume</span>
          <span className="sm:hidden">CV</span>
          <FiDownload className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-1 sm:ml-2" />
        </button>
        {/* mobile menu button - shown only on mobile */}
        <button className="md:hidden flex flex-col space-y-1 p-2 group transition-all duration-300 hover:scale-110" aria-label="Menu">
          <span className="w-5 h-0.5 bg-black transition-all duration-300 group-hover:translate-x-1"></span>
          <span className="w-5 h-0.5 bg-black transition-all duration-300"></span>
          <span className="w-5 h-0.5 bg-black transition-all duration-300 group-hover:-translate-x-1"></span>
        </button>
      </div>
    </div>
  )
}
export default Header