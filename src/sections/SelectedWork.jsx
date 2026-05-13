import React from 'react';
import { Container, Section } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/content';

const SelectedWork = () => {
    return (
        <Section id="work" className="bg-white dark:bg-[#0A0A0A] py-32">
            <Container>
                <div className="mb-24">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase dark:text-white tracking-tighter">Selected Case Studies</h2>
                    <div className="h-1.5 w-24 bg-accent"></div>
                </div>
                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default SelectedWork;
