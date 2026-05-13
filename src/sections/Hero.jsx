import React from 'react';
import { Container, Section } from '../components/Layout';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const Hero = () => {
    return (
        <Section id="hero" className="flex items-center min-h-[80vh]">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-6 italic">
                        {personalInfo.title}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] uppercase italic dark:text-white">
                        {personalInfo.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed italic">
                        I design user experiences and ship them to production across web and mobile.
                        <span className="text-black dark:text-white font-medium not-italic block mt-2">5+ years blending product design, design systems, and frontend engineering.</span>
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button href="#work">
                            View Work
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="secondary" href="#experience">
                            View Experience
                        </Button>
                        <Button variant="secondary" href="#contact">
                            Contact Me
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default Hero;
