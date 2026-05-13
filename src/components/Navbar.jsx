import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About', sectionId: 'about' },
    { label: 'Work', sectionId: 'work' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Contact', sectionId: 'contact' },
];

export const Navbar = () => {
    const { dark, toggle } = useDarkMode();
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            setMobileOpen(false);
            navigate('/', { state: { scrollToSection: sectionId } });
            return;
        }

        const target = document.getElementById(sectionId);
        if (!target) return;

        // Offset prevents fixed navbar from overlapping section titles.
        const navOffset = 96;
        const sectionTop = target.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-lg font-bold tracking-tight dark:text-white transition-colors"
                >
                    Portfolio
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.sectionId}
                            type="button"
                            onClick={() => scrollToSection(link.sectionId)}
                            className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                    <a
                        href="mailto:timilehinoripeloye@gmail.com?subject=Resume%20Request%20-%20Timilehin%20Oripeloye"
                        className="text-sm font-semibold text-white bg-black dark:bg-white dark:text-black px-4 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                        Request Resume (PDF)
                    </a>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    {/* Dark mode toggle */}
                    <button
                        onClick={toggle}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {dark ? (
                            <Sun className="w-5 h-5 text-gray-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-600" />
                        )}
                    </button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="w-5 h-5 dark:text-white" />
                        ) : (
                            <Menu className="w-5 h-5 dark:text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white dark:bg-[#0A0A0A] border-t border-gray-100 dark:border-gray-800">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.sectionId}
                                type="button"
                                onClick={() => scrollToSection(link.sectionId)}
                                className="text-base font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors py-2"
                            >
                                {link.label}
                            </button>
                        ))}
                        <a
                            href="mailto:timilehinoripeloye@gmail.com?subject=Resume%20Request%20-%20Timilehin%20Oripeloye"
                            className="text-base font-semibold text-center text-white bg-black dark:bg-white dark:text-black px-4 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors mt-2"
                        >
                            Request Resume (PDF)
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
