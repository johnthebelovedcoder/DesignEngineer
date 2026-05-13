import React from 'react';
import { Container, Section } from '../components/Layout';
import { experience } from '../data/content';
import { TimelineItem } from '../components/TimelineItem';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <Section id="experience" className="bg-white dark:bg-[#0A0A0A]">
            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4 italic uppercase dark:text-white">Experience</h2>
                    <div className="h-1 w-12 bg-black dark:bg-white"></div>
                </div>
                <div className="max-w-3xl">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TimelineItem
                                {...item}
                                isLast={index === experience.length - 1}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Experience;
