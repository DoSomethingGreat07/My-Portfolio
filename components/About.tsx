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
                                Hi, I&apos;m <span className="text-white font-medium">Nikhil Juluri</span>, an AI and Machine Learning Engineer currently pursuing my Master&apos;s in Computer Science at the University of Illinois Chicago, where I maintain a GPA of 3.8. I completed my undergraduate studies in Electronics and Communication Engineering at CBIT in Hyderabad, which gave me a strong foundation in systems thinking and problem solving. Before returning to academia, I spent over three and a half years at Deloitte as a Software Engineer, working on production-grade platforms in the financial domain and building cloud-based systems that supported real business operations.
                            </p>

                            <p>
                                During my time at Deloitte, I worked across backend engineering, cloud infrastructure, and applied machine learning. I helped develop scalable microservices, APIs, and data-driven applications, and contributed to AI-powered workflows that combined natural language processing with recommendation systems. Alongside this, I gained strong enterprise experience integrating Salesforce platforms and delivering secure, reliable solutions for clients. These experiences shaped my interest in building intelligent systems that move beyond prototypes and operate reliably in real-world environments.
                            </p>

                            <p>
                                I now focus my work on <span className="text-white font-medium">Generative AI</span> and <span className="text-white font-medium">large language models</span> as a Graduate Research Assistant at UIC. My research centers on retrieval-augmented generation pipelines and efficient LLM inference using PyTorch and Hugging Face Transformers. I spend much of my time experimenting with model fine-tuning, optimizing inference performance, and building reproducible pipelines that take models from experimentation to deployment. I enjoy working at the intersection of research and engineering, where ideas turn into usable systems.
                            </p>

                            <p>
                                I specialize in <span className="text-white font-medium">multimodal retrieval systems</span> and <span className="text-white font-medium">agent-based workflows</span>, large language model inference optimization, parameter-efficient fine-tuning with LoRA and QLoRA, and building end-to-end MLOps pipelines using AWS, Docker, and Kubernetes. I am driven by the challenge of translating complex research into production-ready solutions, and I enjoy creating scalable AI systems that deliver meaningful impact through thoughtful design, careful evaluation, and continuous learning.
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
