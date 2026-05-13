import React from 'react';
import { Container } from '../components/Layout';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0A0A0A]">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <span className="block text-xl font-bold mb-1 dark:text-white">Timilehin Oripeloye</span>
                        <span className="text-sm text-gray-400">© {currentYear} — Design Engineer (Web & Mobile)</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400 font-medium">
                        {/* Performance Badge */}
                        <div className="flex items-center gap-3 px-3 py-1 bg-gray-50 dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/10">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] uppercase tracking-tighter text-gray-500">System Status: Optimal</span>
                            </div>
                            <div className="w-px h-3 bg-gray-200 dark:bg-white/10"></div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-[10px] uppercase tracking-tighter text-gray-500">Lighthouse: 98/100</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span>Built with React + Vite + Tailwind</span>
                            <div className="w-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Back to top</a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
