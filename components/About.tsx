"use client";

import React from "react";
import { motion } from "framer-motion";
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
                                I&apos;m a Computer Science graduate student at the <span className="text-white font-medium">University of Illinois Chicago</span>, focused on building scalable <span className="text-white font-medium">Full Stack and AI-powered applications</span>. My experience spans enterprise software development, backend systems, cloud deployment, and GenAI integrations across financial and research domains.
                            </p>

                            <p>
                                I work with technologies such as <span className="text-white font-medium">Java, Spring Boot, React, TypeScript, Python, FastAPI, Node.js, Express.js, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Azure, GCP, and CI/CD pipelines</span>. I also build AI-enabled systems using <span className="text-white font-medium">LangChain, LlamaIndex, RAG, OpenAI API, Claude API, vector embeddings, FAISS, Pinecone, Chroma DB, Hugging Face, and PyTorch</span>.
                            </p>

                            <p>
                                Previously, I worked at <span className="text-white font-medium">Deloitte</span> on full stack financial applications for clients including <span className="text-white font-medium">T. Rowe Price and Edward Jones</span>. At <span className="text-white font-medium">UIC</span>, I have worked on AI-driven research platforms that combine software engineering, data workflows, and machine learning to help users search, analyze, and interact with complex information more effectively.
                            </p>

                            <p>
                                I&apos;m looking for opportunities in <span className="text-white font-medium">Software Engineering, Full Stack Development, AI Engineering, and Full Stack AI Engineer</span> roles where I can build reliable, scalable, and intelligent products.
                            </p>
                        </div>


                    </div>
                </motion.div>
            </div>
        </section>
    );
}
