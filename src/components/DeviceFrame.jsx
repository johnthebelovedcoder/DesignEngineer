import React from 'react';
import { motion } from 'framer-motion';

export const DeviceFrame = ({ children, type = 'browser', className = '' }) => {
    if (type === 'mobile') {
        return (
            <div className={`relative mx-auto border-[8px] border-black rounded-[2.5rem] shadow-2xl overflow-hidden bg-black ${className}`} style={{ aspectRatio: '9/19.5' }}>
                {/* Speaker/Notch Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-10 h-1 bg-gray-800 rounded-full" />
                </div>

                {/* Screen Content */}
                <div className="w-full h-full relative z-10 rounded-[2rem] overflow-hidden bg-white">
                    {children}
                </div>

                {/* Reflection/Glint */}
                <div className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-white/5 to-transparent opacity-50" />
            </div>
        );
    }

    // Default: Browser Frame
    return (
        <div className={`relative rounded-xl overflow-hidden shadow-premium border border-gray-200 bg-white group/frame ${className}`}>
            {/* Browser Header */}
            <div className="h-8 bg-gray-100/80 backdrop-blur-sm border-b border-gray-200 flex items-center px-4 gap-1.5 relative z-20">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                {/* URL Bar Hint */}
                <div className="mx-auto w-1/3 h-4 bg-white/50 rounded-md border border-gray-200/50" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 pointer-events-none z-30 shadow-inner-glow rounded-xl" />
        </div>
    );
};
