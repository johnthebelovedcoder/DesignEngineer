import React from 'react';
import { Container, Section } from '../components/Layout';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const Contact = () => {
    const socials = [
        { name: 'LinkedIn', icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/oripeloye-timilehin-6a2835156/', handle: 'oripeloye-timilehin' },
        { name: 'GitHub', icon: <ArrowUpRight size={20} />, link: `https://${personalInfo.github}`, handle: personalInfo.github },
        { name: 'WhatsApp', icon: <ArrowUpRight size={20} />, link: 'https://wa.me/2349055380387', handle: '+234 905 538 0387' },
        { name: 'Email', icon: <Mail size={20} />, link: 'mailto:timilehinoripeloye@gmail.com', handle: 'timilehinoripeloye@gmail.com' },
    ];

    return (
        <Section id="contact" className="bg-gray-50 dark:bg-[#111]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white">Let's build something intentional.</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                            If you are building a thoughtful product, I would love to hear about it.
                        </p>

                        <div className="space-y-6">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    className="flex items-center justify-between p-4 bg-white dark:bg-[#0A0A0A] rounded-xl border border-gray-100 dark:border-gray-800 group hover:border-accent transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-[#111] rounded-lg group-hover:text-accent transition-colors">
                                            {social.icon}
                                        </div>
                                        <div>
                                            <span className="block text-sm font-bold text-gray-400 uppercase tracking-tighter">{social.name}</span>
                                            <span className="block text-lg font-medium dark:text-white">{social.handle}</span>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="text-gray-300 group-hover:text-accent transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-[#0A0A0A] p-8 md:p-12 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-premium"
                    >
                        <form
                            className="space-y-6"
                            action="https://formsubmit.co/timilehinoripeloye@gmail.com"
                            method="POST"
                        >
                            {/* FormSubmit config */}
                            <input type="hidden" name="_subject" value="New portfolio contact form submission" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <div className="space-y-2">
                                <label htmlFor="contact-name" className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full p-4 bg-gray-50 dark:bg-[#111] border border-transparent rounded-xl focus:bg-white dark:focus:bg-[#111] focus:border-accent outline-none transition-all text-black dark:text-white placeholder:text-gray-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contact-email" className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full p-4 bg-gray-50 dark:bg-[#111] border border-transparent rounded-xl focus:bg-white dark:focus:bg-[#111] focus:border-accent outline-none transition-all text-black dark:text-white placeholder:text-gray-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contact-message" className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full p-4 bg-gray-50 dark:bg-[#111] border border-transparent rounded-xl focus:bg-white dark:focus:bg-[#111] focus:border-accent outline-none transition-all resize-none text-black dark:text-white placeholder:text-gray-400"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg active:scale-[0.98]">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;
