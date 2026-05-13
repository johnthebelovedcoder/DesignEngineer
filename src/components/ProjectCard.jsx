import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                to={`/project/${project.id}`}
                className="group relative block py-20 border-b border-gray-100 dark:border-gray-900 last:border-none transition-all duration-500"
            >
                {/* Hover Background Reveal */}
                <div className="absolute inset-x-[-40px] inset-y-4 bg-gray-50/50 dark:bg-white/5 scale-x-95 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 rounded-3xl -z-10" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex flex-wrap gap-3">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span key={tag} className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 dark:text-gray-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {project.liveLink && (
                                <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                                    <Zap size={8} className="fill-accent" />
                                    Live
                                </span>
                            )}
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-black leading-tight text-black dark:text-white group-hover:translate-x-4 transition-transform duration-500 italic uppercase tracking-tighter">
                            {project.title}
                        </h3>
                        
                        <p className="text-gray-500 dark:text-gray-400 mt-6 text-xl leading-relaxed max-w-3xl group-hover:translate-x-4 transition-transform duration-500 delay-75">
                            {project.description}
                        </p>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex items-center gap-6">
                         <div className="hidden md:block h-[1px] w-12 bg-gray-200 dark:bg-gray-800 group-hover:w-24 group-hover:bg-accent transition-all duration-500" />
                         <div className="relative w-16 h-16 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 group-hover:bg-black dark:group-hover:bg-white group-hover:border-transparent transition-all duration-500 overflow-hidden">
                            <motion.div 
                                className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                            />
                            <ArrowUpRight className="relative z-10 w-6 h-6 text-gray-400 group-hover:text-white dark:group-hover:text-black group-hover:rotate-45 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
