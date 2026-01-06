import React from "react";
import { getGitHubStats } from "@/lib/github";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Code, GitFork, Star, Layers, Calendar, Terminal } from "lucide-react";

export default async function Statistics() {
    const gitHubStats = await getGitHubStats();

    const stats = [
        {
            label: "Years Experience",
            value: 2,
            suffix: "+",
            icon: Calendar,
            description: "Building Enterprise Solutions"
        },
        {
            label: "Projects Completed",
            value: gitHubStats.repos, // Dynamically from GitHub
            suffix: "+",
            icon: Layers,
            description: "Open Source & Professional"
        },
        {
            label: "Lines of Code",
            value: 1500, // Static as per request/hard to calculate exactly via simple API
            suffix: "K+", // 1.5K+
            icon: Code,
            description: "Across all repositories"
        },
        {
            label: "Technolgies Mastered",
            value: 14,
            suffix: "+",
            icon: Terminal,
            description: "Full Stack & AI/ML Stack"
        }
    ];

    return (
        <section id="statistics" className="py-20 bg-secondary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <stat.icon size={24} />
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                                    <AnimatedCounter value={stat.value} />
                                    <span className="text-primary">{stat.suffix}</span>
                                </h3>

                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
                                    {stat.label}
                                </p>

                                <p className="text-xs text-muted-foreground/60 hidden md:block">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
