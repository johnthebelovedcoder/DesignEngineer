import React from 'react';
import { Container, Section } from '../components/Layout';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';


const About = () => {
    return (
        <Section id="about">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 italic uppercase dark:text-white">Professional Summary</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {personalInfo.summary}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I work where product design meets engineering. Instead of stopping at mockups, I build the interface, define reusable patterns, and collaborate closely with product teams from discovery to launch.
                        </p>
                        <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 mb-6">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Recruiter Snapshot</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                I design with product goals in mind and build with production quality in mind.
                                I am open to Design Engineer and Product Engineer roles across web and mobile teams.
                            </p>
                            <p className="text-xs text-gray-500 mt-3">
                                Core stack: React, Next.js, React Native, TypeScript, Design Systems, Accessibility, Performance Optimization
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-12 mt-10">
                            <div>
                                <span className="block text-3xl font-bold text-black dark:text-white italic">5+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-black dark:text-white italic">90+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider">Lighthouse Score</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-black dark:text-white italic">65%</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider">Bundle Reduction</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-black dark:bg-[#111] p-8 md:p-12 rounded-2xl text-white"
                    >
                        <h3 className="text-xl font-bold mb-6 italic uppercase">Industries & Reach</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                <span>Fintech</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                <span>Real Estate</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                <span>E-Commerce</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                <span>Travel & Web3</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                <span>Healthtech</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                <span>Logistics</span>
                            </li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-gray-800">
                            <p className="text-sm text-gray-400 mb-2">
                                <span className="text-white font-semibold">Markets:</span> Nigeria · Kenya · Guinea · Canada
                            </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-800">
                            <p className="text-sm text-gray-400 italic">
                                "Great product experiences come from clear design thinking and careful implementation."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default About;
