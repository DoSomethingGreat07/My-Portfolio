"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Code, Brain, Cloud, Layers, Database } from "lucide-react";

const skillsData = [
    {
        category: "Programming & Data",
        icon: Code,
        skills: [
            { name: "Python", level: 95 },
            { name: "TypeScript/JavaScript", level: 90 },
            { name: "Java", level: 85 },
            { name: "SQL", level: 90 },
            { name: "NumPy & Pandas", level: 95 },
            { name: "SciPy & Plotly", level: 85 }
        ]
    },
    {
        category: "Machine Learning",
        icon: Brain,
        skills: [
            { name: "XGBoost & Random Forest", level: 90 },
            { name: "Clustering (K-Means, DBSCAN)", level: 85 },
            { name: "Recommendation Systems", level: 90 },
            { name: "Hyperparameter Tuning", level: 90 },
            { name: "Model Evaluation", level: 90 },
            { name: "ETL & Feature Engineering", level: 85 }
        ]
    },
    {
        category: "GenAI & NLP",
        icon: Brain,
        skills: [
            { name: "PyTorch & Transformers", level: 90 },
            { name: "Multimodal RAG", level: 95 },
            { name: "PEFT (LoRA/QLoRA)", level: 90 },
            { name: "spaCy & NLTK", level: 85 },
            { name: "Vector Search (FAISS, Pinecone)", level: 90 }
        ]
    },
    {
        category: "Systems & MLOps",
        icon: Cloud,
        skills: [
            { name: "AWS Bedrock & SageMaker", level: 90 },
            { name: "Docker & Kubernetes", level: 85 },
            { name: "MLflow", level: 85 },
            { name: "FastAPI & Node.js", level: 90 },
            { name: "CI/CD Pipelines", level: 80 }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-background relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
                    <p className="text-muted-foreground">Technical proficiency across various domains.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-secondary/10 p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <ProgressBar key={idx} label={skill.name} percentage={skill.level} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
