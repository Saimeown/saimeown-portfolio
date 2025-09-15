import ToothTrackrVideo from '../assets/toothtrackr.mp4'
import TometouVideo from '../assets/tometou.mp4'
import KibblerVideo from '../assets/kibbler.mp4'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
    const titleReveal = useRevealOnScroll({ delay: 200 });
    const project1VideoReveal = useRevealOnScroll({ delay: 300 });
    const project1TextReveal = useRevealOnScroll({ delay: 500 });
    const project2VideoReveal = useRevealOnScroll({ delay: 300 });
    const project2TextReveal = useRevealOnScroll({ delay: 500 });
    const project3VideoReveal = useRevealOnScroll({ delay: 300 });
    const project3TextReveal = useRevealOnScroll({ delay: 500 });

    return (
        <section className="bg-black relative w-full min-h-screen py-20" data-section="projects">
            <div className="w-full mx-auto px-4 md:px-8 lg:px-20 xl:px-60">
                <h2
                    ref={titleReveal.ref}
                    className={`mt-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-sora font-bold text-center mb-20 lg:mb-32 reveal-fade-up ${titleReveal.isRevealed ? 'revealed' : ''}`}
                >
                    <span className="font-light">my </span>
                    Projects
                </h2>

                <div className="space-y-20 lg:space-y-32">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div
                            ref={project1VideoReveal.ref}
                            className={`w-full lg:w-1/2 reveal-fade-left ${project1VideoReveal.isRevealed ? 'revealed' : ''}`}
                        >
                            <div className="tooltip">
                                <a
                                    href="https://github.com/saimeown/toothtrackr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <video
                                    src={ToothTrackrVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
                                />
                                </a>
                                
                                <span className="tooltip-text"><FiGithub className="w-8 h-8" /></span>
                            </div>
                        </div>

                        <div
                            ref={project1TextReveal.ref}
                            className={`w-full lg:w-1/2 text-center lg:text-left reveal-fade-right ${project1TextReveal.isRevealed ? 'revealed' : ''}`}
                        >
                            <h3 className="text-white font-sora font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4" id="projects-toothtrackr">
                                ToothTrackr
                            </h3>
                            <p className="text-white/80 font-sora font-medium text-lg sm:text-xl lg:text-2xl mb-6">
                                Dental Clinic Management System
                            </p>
                            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                                ToothTrackr is a smart dental clinic management system designed to simplify and streamline patient and dentist interactions. It provides an intuitive calendar-based appointment booking system, allowing patients to easily schedule, confirm, or cancel appointments while giving dentists a clear overview of their daily and weekly schedules.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="tooltip">
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        className="inline-flex items-center gap-3 text-white font-sora font-extrabold"
                                    >
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <span className="tooltip-text font-sora">Not Live</span>
                                </div>
                                <a
                                    href="https://github.com/saimeown/toothtrackr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
                                >
                                    <FiGithub className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                        <div
                            ref={project2VideoReveal.ref}
                            className={`w-full lg:w-1/2 reveal-fade-right ${project2VideoReveal.isRevealed ? 'revealed' : ''}`}
                        >
                            <div className="tooltip">
                                <a
                                    href="https://github.com/saimeown/tometou"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <video
                                        src={TometouVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
                                    />
                                </a>
                                <span className="tooltip-text"><FiGithub className="w-8 h-8" /></span>
                            </div>
                        </div>

                        <div
                            ref={project2TextReveal.ref}
                            className={`w-full lg:w-1/2 text-center lg:text-left reveal-fade-left ${project2TextReveal.isRevealed ? 'revealed' : ''}`}
                        >
                            <h3 className="text-white font-sora font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4">
                                Tometou
                            </h3>
                            <p className="text-white/80 font-sora font-medium text-lg sm:text-xl lg:text-2xl mb-6">
                                Anonymous Message Collection Platform
                            </p>
                            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                                Tometou is an anonymous message collection platform that allows users to submit messages without revealing their identities. It aims to create a safe space for sharing thoughts and feelings without the fear of judgment.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="tooltip">
                                    <a
                                        href="/tometou"
                                        onClick={(e) => e.preventDefault()}
                                        className="inline-flex items-center gap-3 text-white font-sora font-extrabold"
                                    >
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <span className="tooltip-text">Not Live</span>
                                </div>
                                <a
                                    href="https://github.com/saimeown/tometou"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
                                >
                                    <FiGithub className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div
                            ref={project3VideoReveal.ref}
                            className={`w-full lg:w-1/2 reveal-fade-left ${project3VideoReveal.isRevealed ? 'revealed' : ''}`}
                        >
                            <div className="tooltip">
                                <a
                                    href="https://github.com/saimeown/kibbler"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <video
                                    src={KibblerVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
                                />
                                </a>
                                
                                <span className="tooltip-text"><FiGithub className="w-8 h-8" /></span>
                            </div>
                        </div>

                        <div
                            ref={project3TextReveal.ref}
                            className={`w-full lg:w-1/2 text-center lg:text-left reveal-fade-right ${project3TextReveal.isRevealed ? 'revealed' : ''}`}
                        >
                            <h3 className="text-white font-sora font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4">
                                Kibbler
                            </h3>
                            <p className="text-white/80 font-sora font-medium text-lg sm:text-xl lg:text-2xl mb-6">
                                Kibbler Smart Feeder Web Application
                            </p>
                            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                                Kibbler is a web application designed to work with the Kibbler Smart Feeder, allowing users to monitor and control their Kibbler feeding settings remotely. The app provides real-time updates and notifications, ensuring that pets are fed precisely, even when their owners are away.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="tooltip">
                                    <a
                                        href="/kibbler"
                                        onClick={(e) => e.preventDefault()}
                                        className="inline-flex items-center gap-3 text-white font-sora font-extrabold"
                                    >
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <span className="tooltip-text">Not Live</span>
                                </div>
                                <a
                                    href="https://github.com/saimeown/kibbler"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
                                >
                                    <FiGithub className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projects
