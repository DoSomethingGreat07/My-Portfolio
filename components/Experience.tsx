"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    location: string;
}

const experience: ExperienceItem[] = [
    {
        role: "Software Engineer",
        company: "University of Illinois Chicago",
        period: "June 2025 – Present",
        location: "Chicago, IL"
    },
    {
        role: "Software Engineer II",
        company: "Deloitte",
        period: "June 2023 – Jul 2024",
        location: "Hyderabad, India"
    },
    {
        role: "Software Engineer I",
        company: "Deloitte",
        period: "September 2022 – May 2023",
        location: "Hyderabad, India"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">My <span className="text-gradient">Experience</span></h2>
                    <p className="text-muted-foreground">My professional journey in software and AI development.</p>
                </motion.div>
 
                <div className="max-w-4xl mx-auto">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0 mb-12 last:mb-0 group"
                        >
                            {/* Timeline Line */}
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border group-last:bottom-auto group-last:h-full md:-translate-x-1/2" />
 
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 z-10 box-content border-4 border-background" />
 
                            <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 md:text-right" /> {/* Spacer */}
 
                                <div className="flex-1 relative">
                                    <div className={`md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                                        <h4 className="text-xl text-primary mb-2 font-medium">{exp.company}</h4>
 
                                        <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 md:justify-${index % 2 === 0 ? 'start' : 'end'}`}>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
