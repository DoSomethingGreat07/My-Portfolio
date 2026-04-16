"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -skew-x-12 transform origin-top-right -z-10" />
            <div className="absolute bottom-0 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform rotate-6 translate-x-4 translate-y-4" />
                            <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl transform -rotate-3 -translate-x-4 -translate-y-4" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary shadow-2xl shadow-primary/20">
                                <Image
                                    src="/about.jpg"
                                    alt="About Me"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">
                            About <span className="text-gradient">Me</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Hi, I&apos;m <span className="text-white font-medium">Nikhil Juluri</span>, an AI and Machine Learning Engineer pursuing my Master&apos;s in Computer Science at the University of Illinois Chicago (GPA 3.8). I have a passion for building high-performance AI systems and scalable data pipelines. My journey started with a Bachelor&apos;s in Electronics and Communication from CBIT, Hyderabad, followed by over three and a half years at <span className="text-white font-medium">Deloitte</span>, where I delivered production-grade enterprise solutions in the financial domain.
                            </p>

                            <p>
                                Currently, as a Graduate Research Assistant at UIC, I develop memory-efficient Python pipelines using <span className="text-white font-medium">PyArrow</span> and multiprocessing, achieving a <span className="text-white font-medium">35% memory reduction</span> in large-scale data workflows. I recently worked as a Data Analyst at <span className="text-white font-medium">SodexoMagic</span>, where I optimized operational reporting by 40% and implemented private LLM workflows for audit-style validation with <span className="text-white font-medium">87% accuracy</span> detections.
                            </p>

                            <p>
                                I specialize in building <span className="text-white font-medium">Retrieval-Augmented Generation (RAG)</span> systems, graph-powered incident intelligence, and high-performance inference frameworks. I am particularly interested in the intersection of <span className="text-white font-medium">Graph Neural Networks</span> and <span className="text-white font-medium">Large Language Models</span>, having developed GraphRAG systems that outperform standard dense retrieval methods.
                            </p>

                            <p>
                                My technical toolkit includes <span className="text-white font-medium">PyTorch, LangChain, Neo4j, vLLM, and AWS</span>. I am driven by the challenge of translating complex research into production-ready solutions, whether it&apos;s optimizing token throughput for concurrent workloads or engineering trust-aware assistants for complex document corpora.
                            </p>
                        </div>

                        <div className="mt-8">
                            <a href="/Resume_Nikhil_Juluri.pdf" download>
                                <Button variant="secondary">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
