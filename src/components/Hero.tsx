"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const roles = [
    "AI/ML Engineer",
    "Software Engineer"
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timer = setTimeout(() => {
            setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

            <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <p className="text-primary font-medium mb-4 tracking-wide">HELLO, I&apos;M</p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Nikhil <span className="text-gradient">Juluri</span>
                    </h1>

                    <div className="h-10 mb-6">
                        <span className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                            I am {text.match(/^[AEIOU]/i) || text.startsWith("AI") ? "an" : "a"} <span className="text-white">{text}</span>
                            <span className="animate-blink">|</span>
                        </span>
                    </div>

                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
                        Master&apos;s student in Computer Science at UIC specializing in Machine Learning, NLP, and Inference Optimizations.
                        Passionate about building scalable RAG pipelines, GenAI applications, and LLM workflows.
                        Former Software Developer at Deloitte with 2+ years of experience delivering enterprise solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="/Resume_Nikhil_ML_Engineer.pdf" download>
                            <Button variant="primary" size="lg">
                                <Download className="mr-2 h-5 w-5" />
                                Download Resume
                            </Button>
                        </a>

                        <a href="https://github.com/DoSomethingGreat07" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg">
                                <Github className="mr-2 h-5 w-5" />
                                View GitHub
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-primary/30 p-2 relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl -z-10" />
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-secondary">
                            <Image
                                src="/latest_image.jpg"
                                alt="Nikhil Juluri"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
                onClick={() => document.getElementById('statistics')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <span className="text-sm uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}
