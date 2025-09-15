import { useState, useEffect } from 'react';
import { FiUser, FiCode, FiFolder, FiMail } from 'react-icons/fi';

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.querySelector('[data-section="about"]');
      
      // Show side nav when past the Hero section
      if (heroSection) {
        const heroBottom = (heroSection as HTMLElement).offsetTop + (heroSection as HTMLElement).offsetHeight;
        const shouldShow = currentScrollY > heroBottom - 200;
        
        if (shouldShow && !isVisible) {
          // Slide in
          setShouldRender(true);
          setAnimationClass('sidebar-slide-enter');
          // Use requestAnimationFrame to ensure the initial class is applied before the active class
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setAnimationClass('sidebar-slide-enter sidebar-slide-enter-active');
            });
          });
          setIsVisible(true);
        } else if (!shouldShow && isVisible) {
          // Slide out - don't change shouldRender immediately
          setAnimationClass('sidebar-slide-exit sidebar-slide-exit-active');
          setIsVisible(false);
          // Wait for animation to complete before unmounting
          setTimeout(() => {
            setShouldRender(false);
            setAnimationClass('');
          }, 350); // Slightly longer than animation duration to ensure completion
        }
      }

      // Active section detection
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = currentScrollY + 100;
      
      const sectionElements = sections.map(section => {
        return document.querySelector(`[data-section="${section}"]`);
      }).filter(Boolean);

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
  }, [isVisible]);

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
        const offsetTop = (element as HTMLElement).offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const navItems = [
    { id: 'about', icon: FiUser, label: 'About' },
    { id: 'skills', icon: FiCode, label: 'Skills' },
    { id: 'projects', icon: FiFolder, label: 'Projects' },
    { id: 'contact', icon: FiMail, label: 'Contact' }
  ];

  if (!shouldRender) return null;

  return (
    <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-40 ${animationClass}`}>
      <div className="bg-white border-2 border-black rounded-2xl p-3 shadow-lg">
        <div className="flex flex-col space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? 'bg-black text-white' 
                    : 'bg-transparent text-black hover:bg-black/10'
                }`}
                title={item.label}
              >
                <Icon className="w-6 h-6" />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-black text-white px-3 py-1 rounded-3xl border-2 border-white text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;