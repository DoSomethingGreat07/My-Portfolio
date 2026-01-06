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
            "LLM & RAG Development: Working on building RAG pipelines and LLM inference workflows using PyTorch and Hugging Face Transformers - mostly experimented with LLaMA and DistilBERT models. Set up vector databases like FAISS and Weaviate to handle the retrieval part. Tried out supervised fine-tuning and some RLHF-based alignment techniques on domain-specific datasets to make the inference faster and more memory-efficient. Spent a lot of time with Ray Tune doing hyperparameter tuning, playing around with learning rates, batch sizes, and attention parameters until we got better performance.",
            "Data Processing & EDA: Put together scalable AI/ML pipelines that covered the whole process - data ingestion, ETL, exploratory analysis, and feature engineering. Used Pandas, NumPy, and scikit-learn pretty heavily for all of this. Made sure we had good data quality throughout and kept everything version-controlled so the experiments could be reproduced easily. This was really important for making our ML work research-ready.",
            "Deployment & MLOps: Got hands-on experience packaging and deploying models with Docker and Kubernetes on AWS. Set up basic monitoring and logging for our experimental inference workflows so we could see how things were running in real-time. This made it a lot easier to catch issues early and iterate quickly during development."
        ]
    },
    {
        role: "Software Engineer | ML & LLM Inference, GenAI Systems",
        company: "Deloitte",
        period: "Sep 2022 - Jul 2024",
        location: "Hyderabad, India",
        description: [
            "Built AI-powered financial account systems using RAG pipelines, LLM inference, vector databases, LangChain, and LangGraph, deploying FastAPI microservices with Docker and Kubernetes on AWS (Lambda, EC2, S3) for real-time queries across millions of accounts.",
            "Optimized payment workflows with Node.js, TypeScript, and Apex, reducing processing time by 60%, helping a client with a $50,000 Flex Account achieve $10,000 turnover growth.",
            "Fine-tuned transformer models using LoRA/QLoRA with MLflow experiment tracking and Optuna hyperparameter optimization, cutting inference latency by 25%. Integrated vLLM for high-throughput serving with optimized GPU utilization, quantization, and KV caching.",
            "Built RESTful and GraphQL APIs via AWS API Gateway and FastAPI Lambda that improved data accuracy by 40% and reduced support tickets by 30%, helping families track 529 plans and reach $20,000 annual savings goals.",
            "Led data migrations using SOQL, Data Loader, and ETL pipelines with PyTorch, NumPy, Pandas, and scikit-learn for ML validation, achieving 98% accuracy while reducing manual work by 30% and migrating $5M in legacy plans.",
            "Established MLOps with MLflow for model lifecycle management and built CI/CD pipelines for automated deployment and monitoring with FastAPI. Implemented continuous retraining, logging, and rollback systems maintaining 99.9% uptime."
        ]
    },
    {
        role: "Software Engineer Intern | AI/ML & LLM Systems",
        company: "Deloitte",
        period: "Jun 2022 - Aug 2022",
        location: "Hyderabad, India",
        description: [
            "Conducted exploratory data analysis on financial datasets using Pandas, NumPy, and Matplotlib to uncover portfolio trends and anomalies. Built Python ML pipelines with PyTorch and scikit-learn for predictive analytics and recommendation tasks.",
            "Developed proof-of-concept LLM prototypes using DistilBERT and LLaMA for small-scale RAG retrieval pipelines that provided AI-powered insights into account workflows.",
            "Created React.js and LWC dashboards to visualize ML insights and portfolio recommendations for end users. Integrated RESTful APIs with AWS Lambda and API Gateway to connect ML pipelines with dashboards.",
            "Implemented ETL pipelines to clean, preprocess, and transform financial datasets, achieving around 95% data accuracy. Packaged experiments in Docker containers for reproducibility and shared cloud deployment across the team."
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
