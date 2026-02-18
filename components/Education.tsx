"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
    {
        degree: "Master of Science in Computer Science",
        school: "University of Illinois Chicago",
        period: "Aug 2024 – May 2026 (Expected)",
        gpa: "3.8",
        coursework: "Cloud Computing, Algorithms, DBMS, Big Data Mining, Text Mining, ML on Graphs, Deep Learning with NLP"
    },
    {
        degree: "Bachelor of Engineering in Electronics and Communication",
        school: "Chaitanya Bharathi Institute of Technology",
        period: "Aug 2018 – June 2022",
        location: "Hyderabad, India",
        focus: "Computer Networking, Operating Systems, AI and Machine Learning"
    }
];

export default function Education() {
    return (
        <section id="education" className="py-20 bg-secondary/10 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">My <span className="text-gradient">Education</span></h2>
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <GraduationCap size={100} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row justify-between md:items-start mb-4 gap-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{edu.school}</h3>
                                        <h4 className="text-lg text-muted-foreground">{edu.degree}</h4>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} />
                                        {edu.period}
                                    </div>
                                </div>

                                {edu.gpa && (
                                    <div className="mb-2">
                                        <span className="text-sm font-bold text-white">GPA: </span>
                                        <span className="text-sm text-muted-foreground">{edu.gpa}</span>
                                    </div>
                                )}

                                {edu.coursework && (
                                    <div>
                                        <span className="text-sm font-bold text-white">Coursework: </span>
                                        <span className="text-sm text-muted-foreground">{edu.coursework}</span>
                                    </div>
                                )}
                                {edu.focus && (
                                    <div>
                                        <span className="text-sm font-bold text-white">Focus: </span>
                                        <span className="text-sm text-muted-foreground">{edu.focus}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
