"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experience = [
    {
        role: "Graduate Research Assistant",
        company: "University of Illinois Chicago",
        period: "June 2025 – Present",
        location: "Chicago, IL",
        description: [
            "Developed memory-efficient Python pipelines using PyArrow and multiprocessing for ingesting multi-gigabyte transaction-style and financial telemetry flat files; achieved a memory reduction of 35% and an ingestion throughput increase of 40%.",
            "Developed private LLM workflows with GPT and Llama models for code translation and audit-style validation; achieved an accuracy increase of 87% for anomaly detection and a 2x reduction in debugging times.",
            "Implemented MLOps pipelines with MLflow for deployment on AWS SageMaker and Google Vertex AI for traceable and compliant model deployments; achieved a 30% reduction in release turnaround times."
        ]
    },
    {
        role: "Data Analyst",
        company: "SodexoMagic",
        period: "Sep 2024 – May 2026",
        location: "Chicago, IL",
        description: [
            "Created interactive dashboards in Power BI and Tableau linked to SQL databases for operational KPIs, resulting in a 40% reduction in reporting time and faster decision-making processes.",
            "Executed data preprocessing operations on structured SQL and NoSQL (JSON) data sources using Python and Pandas, transforming unstructured data into structured datasets for repeated analysis.",
            "Automated data processing operations through Python programming and SQL job scheduling, saving about 3–4 hours weekly from manual reporting efforts."
        ]
    },
    {
        role: "Software Engineer II — Machine Learning Engineer",
        company: "Deloitte",
        period: "Sep 2022 – Jul 2024",
        location: "Hyderabad, India",
        description: [
            "Built enterprise GenAI advisory assistants using RAG over financial statements and market APIs with LangChain and vector databases, reducing manual analysis time by 40% while ensuring factual accuracy (0.91 groundedness).",
            "Improved relevance of investment product recommendations and portfolio suggestions by 25% through LoRA/QLoRA fine-tuning and context-aware prompt engineering, while optimizing token utilization and inference cost.",
            "Deployed scalable GenAI services on AWS Bedrock and SageMaker with provisioned throughput models, orchestrated through FastAPI microservices and integrated with Lambda, S3, and EC2 to maintain 99.9% system uptime."
        ]
    },
    {
        role: "Software Engineer I — Machine Learning Engineer",
        company: "Deloitte",
        period: "May 2022 – Aug 2022",
        location: "Hyderabad, India",
        description: [
            "Built credit risk prediction pipelines using ETL, feature engineering, and XGBoost with 5-fold cross-validation (AUC 0.86), improving loan approval accuracy by 18%.",
            "Developed hybrid investment recommendation systems using collaborative filtering and XGBoost ranking, increasing CTR by 15% through precision-optimized ranking.",
            "Built a fraud detection pipeline using Isolation Forest and Gradient Boosting, reducing false positives by 25%, and deployed Dockerized FastAPI APIs on AWS Lambda for real-time monitoring."
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
