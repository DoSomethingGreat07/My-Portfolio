"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Server, Database, Brain, Cloud, Layers, Terminal } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "TrustLayer – Trust-Aware RAG Research Assistant",
        technologies: ["Python", "Streamlit", "LangChain", "ChromaDB", "BM25", "Sentence Transformers", "OpenAI API"],
        description: [
            "Built a trust-aware research assistant for local research-paper corpora by engineering an end-to-end RAG pipeline that indexes 5,000+ evidence chunks with Chroma vector search.",
            "Improved answer reliability by implementing hybrid and corrective retrieval, combining dense embeddings with BM25 sparse search and cross-encoder reranking.",
            "Increased transparency and reduced unsupported responses by 40% through verification-based abstention and an interactive dashboard for evidence visualization."
        ],
        icon: Brain,
        demoLink: "https://trustlayer.netlify.app/",
        githubLink: "https://github.com/DoSomethingGreat07/TrustLayer"
    },
    {
        title: "BugOrbit – Graph-Powered Incident Intelligence",
        technologies: ["React", "TypeScript", "FastAPI", "Neo4j", "RocketRide", "Observability"],
        description: [
            "Designed and built a graph-powered incident intelligence platform that transforms raw production telemetry into structured incidents and root-cause analysis.",
            "Engineered a FastAPI and Neo4j pipeline to normalize noisy observability payloads and persist service dependencies as a live graph with <200 ms ingestion latency.",
            "Developed an interactive React dashboard for live incident monitoring and dependency-graph exploration, reducing mean investigation time by 30%."
        ],
        icon: Server,
        demoLink: "https://bugorbit.netlify.app/",
        githubLink: "https://github.com/DoSomethingGreat07/BugOrbit"
    },
    {
        title: "GraphRAG for Multi-Hop Question Answering",
        technologies: ["Python", "PyTorch Geometric", "Sentence Transformers", "Streamlit", "OpenAI API"],
        description: [
            "Built an end-to-end GraphRAG system for multi-hop QA, indexing 10,000 examples into 263,113 text chunks with dense retrieval and hybrid graph construction.",
            "Designed a hybrid graph-retrieval pipeline with query-aware GraphSAGE and PCST-based evidence selection to improve multi-document reasoning.",
            "Achieved significant performance gains over dense baselines, outperforming in downstream answer quality across evaluation sets."
        ],
        icon: Layers,
        demoLink: "https://graph-rag.netlify.app/",
        githubLink: "https://github.com/DoSomethingGreat07/GraphRAG"
    },
    {
        title: "PulseGrid (Kairos) – Real-Time Disaster Response Optimization",
        technologies: ["Neo4j", "Python", "FastAPI", "WebSockets", "Graph Algorithms", "Maps API"],
        description: [
            "Designed a real-time graph-based decision-making system on Neo4j for resource dispatch and routing during disasters, facilitating sub-100ms updates.",
            "Implemented multi-step routing using Priority Queues, Dijkstra’s, Yen’s K-shortest path, and Gale-Shapley algorithms for optimal responder matching.",
            "Decreased responder deployment time by 45-50% while providing real-time route animations and ETA tracking via sub-1 second instructions."
        ],
        icon: Cloud,
        demoLink: "https://pulsegrid.netlify.app/",
        githubLink: "https://github.com/DoSomethingGreat07/Kairos"
    },
    {
        title: "High-Performance LLM Inference Framework",
        technologies: ["Python", "PyTorch", "vLLM", "CUDA", "Performance Tuning"],
        description: [
            "Built a high-performance LLM inference framework improving token generation throughput by 30-45% and reducing latency by 25% through optimized dynamic batching.",
            "Designed benchmarking pipelines to analyze latency distribution (p50/p95), throughput, and GPU memory utilization across multiple model configurations.",
            "Enabled systematic performance tuning and identification of inference bottlenecks under concurrent workloads using vLLM and CUDA."
        ],
        icon: Terminal,
        demoLink: "#",
        githubLink: "https://github.com/DoSomethingGreat07/My-Portfolio"
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
