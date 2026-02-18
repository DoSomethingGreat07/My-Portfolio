"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Server, Database, Brain, Cloud } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Adaptive LLM Evaluation & Self-Optimizing Agents",
        technologies: ["LangGraph", "DSPy", "vLLM", "TruLens", "Guardrails AI", "FastAPI", "Prometheus", "Docker", "AWS"],
        description: [
            "Built an adaptive LLM orchestration framework using LangGraph and DSPy to dynamically route queries across multiple foundation models, improving response quality consistency by 27%.",
            "Implemented self-refinement pipelines with TruLens for hallucination detection and automated response scoring, reducing factual error rates by 32% while preserving end-to-end latency.",
            "Established LLMOps pipelines with vLLM and async FastAPI, integrating Prometheus/Grafana for token and latency monitoring, reducing inference costs by 24%."
        ],
        icon: Brain,
        demoLink: "#",
        githubLink: "#"
    },
    {
        title: "Financial Portfolio Automation using RAG & LLMs",
        technologies: ["Python", "PyTorch", "LangChain", "FAISS", "LoRA", "FastAPI", "Docker", "AWS", "React.js"],
        description: [
            "Developed an AI-powered system to streamline financial account management and portfolio rebalancing for clients, integrating LLMs and RAG pipelines for context-aware recommendations.",
            "Implemented a Retrieval-Augmented Generation pipeline using LangChain with FAISS vector database to retrieve financial statements and ETF/mutual fund data.",
            "Integrated LoRA adapters on DistilBERT for specialized financial text understanding, achieving 95% accuracy in extracting actionable insights.",
            "Deployed APIs using FastAPI and Docker for inference and connected real-time front-end dashboards built with React.js, reducing processing time by 60%."
        ],
        icon: Brain,
        demoLink: "#",
        githubLink: "#"
    },
    {
        title: "Large Language Model Fine-Tuning & Inference",
        technologies: ["PyTorch", "Hugging Face", "LoRA", "vLLM", "FastAPI", "Docker", "Kubernetes", "AWS EC2/EKS"],
        description: [
            "Fine-tuned an open-source LLaMA-8B quantized model on domain-specific financial datasets to generate high-quality financial insights.",
            "Conducted hyperparameter tuning with learning rate scheduling and batch size optimization, along with RLHF-inspired reward modeling.",
            "Deployed inference using vLLM on AWS EC2 GPU cluster, integrated with FastAPI, Docker, and Kubernetes, enabling sub-200ms token latency."
        ],
        icon: Server,
        demoLink: "#",
        githubLink: "#"
    },
    {
        title: "End-to-End MLOps Pipeline for Financial AI",
        technologies: ["PyTorch", "Kubeflow", "Airflow", "MLflow", "vLLM", "Triton", "Docker", "Kubernetes", "AWS"],
        description: [
            "Built a full MLOps and LLMOps infrastructure to streamline training, deployment, monitoring, and versioning of ML and LLM models.",
            "Developed a reproducible pipeline using Kubeflow and Airflow for data ingestion, preprocessing, training, and model versioning.",
            "Integrated MLflow for experiment tracking and automated deployment to Kubernetes clusters with Docker containers.",
            "Orchestrated high-performance LLM inference with vLLM and Triton, achieving 30% cost reduction."
        ],
        icon: Cloud,
        demoLink: "#",
        githubLink: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Showcasing advanced capabilities in GenAI, Large Language Models, and MLOps infrastructure.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300 shadow-sm"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-secondary text-primary">
                                            <project.icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-foreground border border-border">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {project.description.map((desc, i) => (
                                            <li key={i} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                                                <span className="text-primary mt-1.5">•</span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-4">
                                        <Link
                                            href={project.demoLink}
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            View Demo
                                        </Link>
                                        <Link
                                            href={project.githubLink}
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
                                        >
                                            <Github size={18} />
                                            GitHub View
                                        </Link>
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
