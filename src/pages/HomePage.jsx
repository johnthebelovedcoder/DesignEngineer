import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import SelectedWork from '../sections/SelectedWork';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.state?.scrollToSection;
        if (!sectionId) return;

        const target = document.getElementById(sectionId);
        if (!target) return;

        const navOffset = 96;
        const sectionTop = target.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }, [location.state]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white dark:bg-[#0A0A0A] text-black dark:text-white scroll-smooth"
        >
            <Navbar />
            <Hero />
            <About />
            <SelectedWork />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
        </motion.div>
    );
};

export default HomePage;
