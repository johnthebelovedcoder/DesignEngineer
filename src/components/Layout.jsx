import React from 'react';

export const Container = ({ children, className }) => {
    return (
        <div className={`max-w-7xl mx-auto px-6 sm:px-12 ${className || ""}`}>
            {children}
        </div>
    );
};

export const Section = ({ children, className, id }) => {
    return (
        <section id={id} className={`py-20 md:py-32 ${className || ""}`}>
            {children}
        </section>
    );
};
