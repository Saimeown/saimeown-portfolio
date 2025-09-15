import Background from '../assets/contact-bg.svg';
import Talk from '../assets/talk.svg';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formReveal = useRevealOnScroll({ delay: 200 });
    const titleReveal = useRevealOnScroll({ delay: 300 });
    const descriptionReveal = useRevealOnScroll({ delay: 400 });
    const contactDetailsReveal = useRevealOnScroll({ delay: 500 });

    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields (Name, Email, and Message)');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Check if EmailJS is configured
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey ||
                serviceId === 'your_service_id_here' ||
                templateId === 'your_template_id_here' ||
                publicKey === 'your_public_key_here') {

                // EmailJS not configured - simulate success for testing
                console.log('EmailJS not configured. Form data:', formData);
                alert(`EmailJS not configured yet!\n\nForm would send:\nName: ${formData.name}\nEmail: ${formData.email}\nWebsite: ${formData.website}\nMessage: ${formData.message}`);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', website: '', message: '' });
                return;
            }

            // EmailJS configuration - using environment variables
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current!,
                publicKey
            );

            console.log('Email sent successfully:', result.text);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', website: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center py-20" data-section="contact">
            <img
                src={Background}
                alt="Contact Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 w-full mx-auto px-4 md:px-8 lg:px-20 xl:px-60">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Form - Left Side */}
                    <div
                        ref={formReveal.ref}
                        className={`w-full lg:w-1/2 reveal-fade-left ${formReveal.isRevealed ? 'revealed' : ''}`}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your name"
                                required
                                className="font-sora w-[80%] px-6 py-4 bg-white backdrop-blur-sm border-2 border-black rounded-xl text-black placeholder-black focus:border-black focus:outline-none"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                                className="font-sora w-[80%] px-6 py-4 bg-white backdrop-blur-sm border-2 border-black rounded-xl text-black placeholder-black focus:border-black focus:outline-none"
                            />

                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                placeholder="Your website (if exists)"
                                className="font-sora w-[80%] px-6 py-4 bg-white backdrop-blur-sm border-2 border-black rounded-xl text-black placeholder-black focus:border-black focus:outline-none"
                            />

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="How can I help?*"
                                rows={5}
                                required
                                className="font-sora w-[80%] px-6 py-4 bg-white backdrop-blur-sm border-2 border-black rounded-xl text-black placeholder-black resize-none focus:border-black focus:outline-none"
                            ></textarea>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="text-black-600 font-sora font-semibold">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="text-black-600 font-sora font-semibold">
                                    Failed to send message. Please try again or contact me directly.
                                </div>
                            )}

                            {/* Buttons Row */}
                            <div className="flex items-center gap-4 pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-8 py-3 rounded-xl font-sora font-semibold transition-colors duration-300 ${isSubmitting
                                            ? 'bg-gray-400 text-white cursor-not-allowed'
                                            : 'bg-black text-white hover:bg-black/80'
                                        }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Get in touch'}
                                </button>

                                {/* Social Links */}
                                <div className="flex gap-3">
                                    <a href="https://www.facebook.com/saigtrs/" className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/saimese._/" className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                                        </svg>
                                    </a>
                                    <a href="https://x.com/saimeown" className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a href="https://discord.com/users/1085116349858197524" className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info - Right Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div
                            ref={titleReveal.ref}
                            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight reveal-fade-right ${titleReveal.isRevealed ? 'revealed' : ''}`}
                        >
                            <div className="flex items-center whitespace-nowrap sm:whitespace-normal">
                                <span className="font-sora font-extrabold mr-2">Let’s</span>
                                <img src={Talk} alt="Talk" className="h-12 mb-1 mr-3 inline-block mx-2" />
                                <span className="font-sora font-extrabold">for</span>
                            </div>
                            <div className="whitespace-nowrap sm:whitespace-normal">
                                <span className="font-sora font-extrabold">Something Special</span>
                            </div>
                        </div>


                        <div
                            ref={descriptionReveal.ref}
                            className={`text-sm sm:text-base md:text-lg lg:text-xl text-black/70 mb-8 leading-relaxed reveal-fade-right ${descriptionReveal.isRevealed ? 'revealed' : ''}`}
                        >
                            <p>I seek to push the limits of creativity to create high-engaging,<br></br> user-friendly, and memorable interactive experiences.</p>
                        </div>

                        {/* Contact Details */}
                        <div
                            ref={contactDetailsReveal.ref}
                            className={`space-y-4 reveal-fade-right ${contactDetailsReveal.isRevealed ? 'revealed' : ''}`}
                        >
                            <div className="text-black font-sora">
                                <a href="mailto:simonbriangarcia@gmail.com" className="text-lg sm:text-xl md:text-2xl font-semibold hover:text-black/70 transition-colors duration-300">
                                    simonbriangarcia@gmail.com
                                </a>
                            </div>
                            <div className="text-black font-sora">
                                <a href="tel:+639753750845" className="text-lg sm:text-xl md:text-2xl font-semibold hover:text-black/70 transition-colors duration-300">
                                    +63 975 375 0845
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
