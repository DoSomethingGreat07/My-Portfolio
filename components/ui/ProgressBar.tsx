"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
    label: string;
    percentage: number;
}

export function ProgressBar({ label, percentage }: ProgressBarProps) {
    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-white">{label}</span>
                <span className="text-sm text-muted-foreground">{percentage}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                />
            </div>
        </div>
    );
}
