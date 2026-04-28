"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const hackathons = [
  {
    title: "Microsoft HackWithChicago Finalist",
    description: "Finalist at the Microsoft HackWithChicago hackathon for building BugOrbit, a graph-powered incident intelligence platform."
  },
  {
    title: "WildHacks (Northwestern University) Top 25",
    description: "Selected as one of the top 25 projects at WildHacks by Northwestern University for PulseGrid, a real-time disaster response optimization system."
  },
  {
    title: "HackPrinceton Spring 2026 Sponsor-Track Runner-Up",
    description: "Runner-up in the sponsor track at HackPrinceton Spring 2026 for Lazarus, an autonomous clinical R&D swarm."
  }
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-20 bg-secondary/10 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Hackathon <span className="text-gradient">Achievements</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognized at major hackathons for building advanced AI platforms and clinical R&D systems.
          </p>
        </motion.div>
        <div className="flex flex-col gap-8">
          {hackathons.map((hack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8 flex items-center gap-6 shadow-sm"
            >
              <div className="p-3 rounded-lg bg-yellow-100 text-yellow-800">
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{hack.title}</h3>
                <p className="text-muted-foreground text-base">{hack.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
