import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
    children,
    variant = 'primary',
    className = "",
    href,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200";

    const variants = {
        primary: "bg-black text-white dark:bg-white dark:text-black shadow-premium hover:shadow-premium-hover",
        secondary: "bg-white text-black border border-gray-200 dark:bg-[#111] dark:text-white dark:border-gray-700 shadow-sm",
        ghost: "bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#111]",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    const motionProps = {
        whileHover: { y: -2, scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring", stiffness: 400, damping: 10 }
    };

    if (href) {
        return (
            <motion.a 
                href={href} 
                className={combinedClassName} 
                {...motionProps}
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button 
            className={combinedClassName} 
            {...motionProps}
            {...props}
        >
            {children}
        </motion.button>
    );
};
