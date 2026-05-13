import React from 'react';

export const TimelineItem = ({ role, company, period, location, type, summary, bullets, impact, isLast }) => {
    return (
        <div className="relative pl-8 pb-12 last:pb-0">
            {!isLast && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 ml-[3px]"></div>
            )}
            <div className="absolute left-0 top-[6px] w-[7px] h-[7px] bg-black dark:bg-white rounded-full"></div>

            <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        {period}
                    </span>
                    {location && (
                        <>
                            <span className="text-gray-300 dark:text-gray-700">|</span>
                            <span className="text-xs text-gray-400">{location}</span>
                        </>
                    )}
                </div>
                <h3 className="text-xl font-bold mb-1 dark:text-white">{role}</h3>
                <p className="text-sm font-semibold text-accent mb-3">{company}</p>
                {summary && (
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 max-w-2xl italic">
                        {summary}
                    </p>
                )}
                {bullets && bullets.length > 0 && (
                    <ul className="space-y-2 max-w-2xl">
                        {bullets.map((bullet, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2">
                                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {impact && !bullets && (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                        {impact}
                    </p>
                )}
            </div>
        </div>
    );
};
