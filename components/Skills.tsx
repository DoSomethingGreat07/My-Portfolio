"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Code, Brain, Cloud, Layers, Database } from "lucide-react";

const skillsData = [
    {
        category: "Programming Languages",
        icon: Code,
        skills: [
            { name: "Python", level: 95 },
            { name: "Java", level: 85 },
            { name: "C++", level: 80 },
            { name: "C", level: 80 },
            { name: "SQL (MSSQL)", level: 85 },
            { name: "JavaScript/TypeScript", level: 85 }
        ]
    },
    {
        category: "Data Science & ML",
        icon: Brain,
        skills: [
            { name: "NumPy & Pandas", level: 95 },
            { name: "Scikit-learn/SciPy", level: 90 },
            { name: "Matplotlib & Seaborn", level: 85 },
            { name: "XGBoost", level: 85 },
            { name: "NLTK & SpaCy", level: 85 },
            { name: "Exploratory Data Analysis", level: 90 }
        ]
    },
    {
        category: "Deep Learning & GenAI",
        icon: Brain,
        skills: [
            { name: "PyTorch & TensorFlow", level: 90 },
            { name: "Hugging Face Transformers", level: 90 },
            { name: "RAG & LLM Inference", level: 90 },
            { name: "RLHF & Fine-tuning", level: 85 },
            { name: "Ray Tune", level: 80 }
        ]
    },
    {
        category: "Cloud & MLOps",
        icon: Cloud,
        skills: [
            { name: "AWS", level: 85 },
            { name: "Docker & Kubernetes", level: 85 },
            { name: "MLflow & Optuna", level: 85 },
            { name: "CI/CD Pipelines", level: 80 }
        ]
    },
    {
        category: "Frameworks & Tools",
        icon: Layers,
        skills: [
            { name: "React/Next.js", level: 85 },
            { name: "FastAPI & Spring Boot", level: 85 },
            { name: "FAISS & Weaviate", level: 85 },
            { name: "Git", level: 90 },
            { name: "MongoDB & PostgreSQL", level: 80 }
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
