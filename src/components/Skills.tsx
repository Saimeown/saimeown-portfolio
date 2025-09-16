import Background from "../assets/skills-bg.svg"
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiPhp,
    SiPython,
    SiFirebase,
    SiMysql,
    SiGit,
    SiNotion,
    SiCanva,
    SiGithub,
    SiWebstorm,
    SiExpo,
    SiArduino,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiAndroidstudio
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const Skills = () => {
    const titleReveal = useRevealOnScroll({ delay: 200 });
    const carousel1Reveal = useRevealOnScroll({ delay: 400 });
    const carousel2Reveal = useRevealOnScroll({ delay: 600 });

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center" data-section="skills">
            {/* Background Image */}
            <img
                src={Background}
                alt="Skills Background"
                className="absolute top-0 left-0 w-full min-h-full object-cover z-0"
            />

            {/* Content Container */}
            <div className="relative z-10 w-full mx-auto px-4 md:px-8 lg:px-20 xl:px-60">
                <h2 
                    ref={titleReveal.ref}
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-sora font-bold text-center mb-12 sm:mb-16 md:mb-20 mt-60 sm:mt-70 md:mt-80 reveal-fade-up ${titleReveal.isRevealed ? 'revealed' : ''}`}
                >
                    <span className="font-light">my </span>
                    Tools
                </h2>
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    {/* First Carousel - Left to Right */}
                    <div 
                        ref={carousel1Reveal.ref}
                        className={`relative overflow-hidden reveal-fade-left ${carousel1Reveal.isRevealed ? 'revealed' : ''}`} 
                    >
                        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 animate-carousel-right">
                            {[...Array(2)].flatMap(() => [
                                { icon: SiJavascript, name: "JavaScript" },
                                { icon: SiTypescript, name: "TypeScript" },
                                { icon: SiReact, name: "React" },
                                { icon: SiTailwindcss, name: "TailWind" },
                                { icon: SiPhp, name: "PHP" },
                                { icon: SiPython, name: "Python" },
                                { icon: SiFirebase, name: "Firebase" },
                                { icon: SiMysql, name: "MySQL" },
                                { icon: SiGit, name: "Git" },
                                { icon: VscCode, name: "VS Code" }
                            ]).map(({ icon: Icon, name }, index) => (
                                <div
                                    key={`carousel1-${index}`}
                                    className="flex-shrink-0 w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-60 lg:h-60 bg-transparent border-2 border-white rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center text-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group"
                                >
                                    <Icon className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-1 sm:mb-2 text-white group-hover:text-black" />
                                    <h3 id="skills-carousel-1" className="text-white group-hover:text-black font-sora font-semibold text-xs sm:text-sm">{name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Carousel - Right to Left */}
                    <div 
                        ref={carousel2Reveal.ref}
                        className={`relative overflow-hidden reveal-fade-right ${carousel2Reveal.isRevealed ? 'revealed' : ''}`}
                    >
                        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 animate-carousel-left">
                            {[...Array(2)].flatMap(() => [
                                { icon: SiNotion, name: "Notion" },
                                { icon: SiCanva, name: "Canva" },
                                { icon: SiGithub, name: "GitHub" },
                                { icon: SiWebstorm, name: "WebStorm" },
                                { icon: SiExpo, name: "Expo" },
                                { icon: SiArduino, name: "Arduino IDE" },
                                { icon: SiHtml5, name: "HTML" },
                                { icon: SiCss3, name: "CSS" },
                                { icon: SiNodedotjs, name: "Node.js" },
                                { icon: SiAndroidstudio, name: "Android Studio" }
                            ]).map(({ icon: Icon, name }, index) => (
                                <div
                                    key={`carousel2-${index}`}
                                    className="flex-shrink-0 w-40 h-40 xs:w-44 xs:h-44 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-transparent border-2 border-white rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center text-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group"
                                >
                                    <Icon className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-1 sm:mb-2 text-white group-hover:text-black" />
                                    <h3 className="text-white group-hover:text-black font-sora font-semibold text-xs sm:text-sm">{name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills