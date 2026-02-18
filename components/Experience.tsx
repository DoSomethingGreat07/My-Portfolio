"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experience = [
    {
        role: "Graduate Research Assistant",
        company: "University of Illinois at Chicago",
        period: "June 2025 – Present",
        location: "Chicago, IL",
        description: [
            "Designed multimodal RAG systems combining transformer-based LLaMA models with Vision Transformers for text-image reasoning, integrating FAISS similarity indexing and Weaviate to retrieve structured and unstructured data, improving contextual response quality by 30% across domain-specific research benchmarks.",
            "Enhanced model efficiency through LoRA fine-tuning and alignment strategies while optimizing inference via mixed precision, KV-caching, dynamic batching, parallelism, flashAttention and controlled decoding; leveraged Optuna for hyperparameter tuning, balancing latency, throughput, and relevance.",
            "Deployed GPU-accelerated LLM pipelines on AWS using Docker and Kubernetes, implementing CUDA-based optimizations, memory management, token-level monitoring, and retrieval latency tracking to support scalable experimentation and real-time performance visibility."
        ]
    },
    {
        role: "Software Engineer — Machine Learning Engineer",
        company: "Deloitte",
        period: "Sep 2022 - Jul 2024",
        location: "Hyderabad, India",
        description: [
            "Built enterprise GenAI assistants using RAG over financial statements and external market APIs, integrating LangChain with vector databases to automate advisor workflows, reducing manual analysis time by 40%. Implemented response evaluation using answer relevance, groundedness, and hallucination checks.",
            "Enhanced personalization by adapting transformer-based foundation models via LoRA/QLoRA and supervised fine-tuning, applying few-shot, role prompting, and controlled decoding (temperature, top-k/top-p). Improved recommendation relevance by 25% while monitoring token usage and optimizing inference costs.",
            "Deployed scalable GenAI services on AWS Bedrock and SageMaker with provisioned throughput models, orchestrated via FastAPI and Lambda. Integrated structured RAG pipelines with database and API sources, implementing cost monitoring and latency tracking dashboards to maintain 99.9% uptime."
        ]
    },
    {
        role: "Software Engineer Intern — Machine Learning Engineer",
        company: "Deloitte",
        period: "May 2022 - Aug 2022",
        location: "Hyderabad, India",
        description: [
            "Built credit risk ML pipelines using ETL, feature engineering, and XGBoost/Random Forest with 5-fold CV (AUC 0.86), improving loan approval accuracy by 18%; extended to hybrid investment recommendations with collaborative filtering and content-based models, increasing CTR by 15%.",
            "Completed the platform with fraud detection using Isolation Forest and Gradient Boosting (ROC-AUC, recall), reducing false positives by 25%; automated pipelines with scikit-learn and Docker, deploying FastAPI REST services on AWS Lambda for real-time transaction monitoring."
        ]
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

                                        <ul className={`space-y-2 text-muted-foreground text-sm list-disc list-inside inline-block text-left`}>
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
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
