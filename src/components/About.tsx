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
                                I&apos;m <span className="text-white font-medium">Nikhil Juluri</span>, an AI/ML Engineer currently pursuing my Master&apos;s in Computer Science at the
                                University of Illinois Chicago (GPA: 3.8). with a strong foundation in Electronics and Communication from CBIT, Hyderabad.
                                I&apos;ve spent over 2 years as a Software Engineer at Deloitte, building scalable AI systems and optimized financial workflows.
                            </p>

                            <p>
                                My passion lies in building intelligent systems that can understand and process information at scale.
                                As a Graduate Research Assistant at UIC, I&apos;m focused on developing
                                <span className="text-white font-medium"> RAG pipelines</span> and
                                <span className="text-white font-medium"> LLM inference workflows</span> using PyTorch and Hugging Face Transformers.
                            </p>

                            <div className="pl-4 border-l-2 border-primary/50 my-6">
                                <p className="text-white font-medium mb-2">I specialize in:</p>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Large Language Models (LLMs) & RAG</li>
                                    <li>Deep Learning & Natural Language Processing (NLP)</li>
                                    <li>Data Engineering & Scalable ML Pipelines</li>
                                    <li>MLOps & Infrastructure (AWS, Docker, Kubernetes)</li>
                                </ul>
                            </div>

                            <p>
                                I&apos;m experienced in fine-tuning models (LoRA/QLoRA), optimizing inference with vLLM, and managing end-to-end ML lifecycles
                                with MLflow and Ray Tune. I&apos;m driven by the challenge of translating complex research into production-ready solutions that
                                deliver real-world value.
                            </p>
                        </div>

                        <div className="mt-8">
                            <a href="/Resume_Nikhil_ML_Engineer.pdf" download>
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
