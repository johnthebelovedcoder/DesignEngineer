import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Section } from '../components/Layout';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { projects } from '../data/content';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Layout as LayoutIcon, Target, Zap, Briefcase, Rocket, ArrowUpRight } from 'lucide-react';

const CaseStudyPage = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return <div className="min-h-screen flex items-center justify-center dark:bg-[#0A0A0A] dark:text-white">Project not found</div>;

    const { metadata, caseStudy } = project;

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white dark:bg-[#0A0A0A] dark:text-white"
        >
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-20 bg-gray-50 dark:bg-[#111] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[100px]" />
                </div>
                
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <Link to="/" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-accent transition-colors uppercase tracking-widest">
                                <ArrowLeft size={16} />
                                Back to work
                            </Link>
                            <span className="w-12 h-[1px] bg-gray-300 dark:bg-gray-700" />
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] text-accent border border-accent/30 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
                            <div>
                                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter dark:text-white uppercase italic">
                                    {project.title.split(' ').map((word, i) => (
                                        <span key={i} className={i % 2 === 1 ? "text-accent block" : "block"}>{word}</span>
                                    ))}
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 lg:justify-end">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Button className="px-8 py-4 bg-black dark:bg-white dark:text-black hover:scale-105 transition-transform uppercase font-bold tracking-widest text-xs">
                                        View Source Code
                                        <Rocket className="ml-2 w-4 h-4" />
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-200 dark:border-gray-800">
                            <div>
                                <span className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Partner / Client</span>
                                <span className="text-lg font-bold text-black dark:text-white italic">{metadata?.client || "Self-Initiated"}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Industry Vertical</span>
                                <span className="text-lg font-bold text-black dark:text-white italic">{metadata?.industry || "SaaS"}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Strategic Goal</span>
                                <span className="text-lg font-bold text-black dark:text-white italic">{metadata?.type || "Engineering"}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Project Timeline</span>
                                <span className="text-lg font-bold text-black dark:text-white italic">{metadata?.year || "2024"}</span>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </header>

            {/* Hero Section (Image or Live Embedding) */}
            <Section className="py-0 -mt-10 mb-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#222] aspect-video bg-gray-100 dark:bg-[#111]"
                    >
                        {project.liveLink ? (
                            <iframe 
                                src={project.liveLink} 
                                title={`Live preview of ${project.title}`}
                                className="w-full h-full border-none"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                loading="lazy"
                            />
                        ) : (
                            <img 
                                src={`${import.meta.env.BASE_URL}${project.image}`} 
                                alt={project.title} 
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                            />
                        )}
                    </motion.div>
                </Container>
            </Section>

            {/* Content Header (Strategy & Goals) */}
            <Section className="pt-0">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <div className="p-8 bg-gray-50 dark:bg-[#111] rounded-3xl border border-gray-100 dark:border-gray-800">
                                <h2 className="text-2xl font-black mb-8 italic uppercase tracking-tighter dark:text-white">Executive Context</h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-lg">
                                    {caseStudy?.overview || project.description}
                                </p>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                            <Target className="text-accent w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Primary Objective</span>
                                            <span className="text-sm font-bold dark:text-white leading-snug">{caseStudy?.goal}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                                            <LayoutIcon className="text-red-500 w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Critical Challenge</span>
                                            <span className="text-sm font-bold dark:text-white leading-snug">{caseStudy?.challenge}</span>
                                        </div>
                                    </div>
                                    {caseStudy?.strategy && (
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                                                <Briefcase className="text-green-500 w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Core Strategy</span>
                                                <span className="text-sm font-bold dark:text-white leading-snug">{caseStudy.strategy}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8 space-y-32 py-8">
                            {caseStudy?.sections.map((section, idx) => (
                                <section key={idx} className="relative group">
                                    <div className="absolute -left-12 top-0 text-[120px] font-black text-gray-100 dark:text-[#111] select-none pointer-events-none opacity-50 group-hover:text-accent/10 transition-colors">
                                        0{idx + 1}
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-black mb-8 italic uppercase tracking-tighter dark:text-white">
                                            {section.title}
                                        </h3>
                                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {section.list && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                                {section.list.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-4 p-5 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-accent/30 transition-all hover:shadow-lg">
                                                        <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                                                        <span className="text-gray-700 dark:text-gray-300 font-bold text-sm uppercase tracking-tight">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.impact && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                className="p-10 bg-black dark:bg-[#111] rounded-[2rem] text-white shadow-2xl relative overflow-hidden"
                                            >
                                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -translate-y-32 translate-x-32 blur-[80px]" />
                                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                                                        <Zap className="text-black fill-black w-5 h-5" />
                                                    </div>
                                                    <span className="text-xs uppercase tracking-[0.3em] font-black text-gray-400">Engineering Impact</span>
                                                </div>
                                                <h4 className="text-4xl font-black mb-4 uppercase italic leading-tight tracking-tighter relative z-10">{section.impact.metric}</h4>
                                                <p className="text-gray-400 text-lg leading-relaxed relative z-10">{section.impact.description}</p>
                                            </motion.div>
                                        )}
                                    </div>
                                </section>
                            ))}
                            {/* Project Gallery */}
                            {project.gallery && project.gallery.length > 1 && (
                                <div className="relative pt-20">
                                    <h3 className="text-3xl font-black mb-8 italic uppercase tracking-tighter dark:text-white flex items-center gap-4">
                                        <span className="text-accent opacity-30 text-5xl not-italic">/</span>
                                        System Gallery
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {project.gallery.map((img, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                className="rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl aspect-video bg-gray-50 dark:bg-[#111]"
                                            >
                                                <img 
                                                    src={`${import.meta.env.BASE_URL}${img}`} 
                                                    alt={`${project.title} screen ${i + 1}`}
                                                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Next Project */}
            {project.id < projects.length && (
                <section className="py-32 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-[#0C0C0C]">
                    <Container>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-10 px-6 py-2 border border-gray-200 dark:border-gray-800 rounded-full">Next Case Study</span>
                            <h2 className="text-5xl md:text-8xl font-black mb-12 italic uppercase tracking-tighter dark:text-white leading-[0.85]">
                                {projects[project.id].title.split(' ').map((word, i) => (
                                    <span key={i} className={i % 2 === 1 ? "text-accent" : ""}> {word} </span>
                                ))}
                            </h2>
                            <Link to={`/project/${project.id + 1}`}>
                                <Button className="group uppercase px-12 py-5 bg-black dark:bg-white dark:text-black border-none text-sm font-black tracking-widest hover:scale-105 transition-transform">
                                    Analyze Project
                                    <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </section>
            )}

            {project.id === projects.length && (
                <section className="py-32 border-t border-gray-100 dark:border-gray-800 bg-black dark:bg-[#111] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full opacity-30">
                         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent blur-[150px]" />
                    </div>
                    <Container className="relative z-10">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-10">End of Portfolio</span>
                            <h2 className="text-5xl md:text-7xl font-black mb-12 italic uppercase tracking-tighter leading-tight max-w-4xl">Ready to engineer high-performance systems?</h2>
                            <Link to="/">
                                <Button className="group uppercase px-12 py-5 bg-white text-black hover:bg-gray-100 border-none text-sm font-black tracking-widest">
                                    <ArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" />
                                    Return to Overview
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </section>
            )}

            <Footer />
        </motion.div>
    );
};

export default CaseStudyPage;
