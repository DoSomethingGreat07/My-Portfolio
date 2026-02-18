"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
    "AWS Certified Generative AI Developer – Professional",
    "AWS Certified AI Practitioner",
    "Salesforce Certified AI Associate",
    "5x Salesforce Certified (Platform Developer, App Builder, etc.)",
    "Deloitte SPOT Award (Outstanding Contributions)",
    "AI and Machine Learning Internship - National Instruments & Cognibot"
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-secondary/20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Certifications & <span className="text-gradient">Awards</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-4 p-4 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/5 group"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Award size={24} />
                            </div>
                            <span className="font-medium text-muted-foreground group-hover:text-white transition-colors">
                                {cert}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
