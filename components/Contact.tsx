"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, Code as CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(139,92,246,0.1),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
                    <p className="text-muted-foreground">Let&apos;s work together and create something extraordinary.</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="bg-secondary/10 p-8 rounded-2xl border border-border">
                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                                        <a href="mailto:nikhiljuluri4@gmail.com" className="text-white hover:text-primary transition-colors block">nikhiljuluri4@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium mb-1">Phone</p>
                                        <a href="tel:+17733108811" className="text-white hover:text-primary transition-colors">+1 (773)-310-8811</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                                        <p className="text-white">821 South Laflin, Chicago, IL</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border/50">
                                <h4 className="text-lg font-bold mb-4 text-white">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://linkedin.com/in/nikhil-juluri-001a98178" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all text-muted-foreground">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://github.com/DoSomethingGreat07" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all text-muted-foreground">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all text-muted-foreground">
                                        <CodeIcon size={20} /> {/* LeetCode Placeholder */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex-[1.5]"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-secondary/5 p-8 rounded-2xl border border-border">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                        })}
                                        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                                <input
                                    {...register("subject", { required: "Subject is required" })}
                                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Project Inquiry"
                                />
                                {errors.subject && <span className="text-red-500 text-xs">{errors.subject.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    rows={6}
                                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                                {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </>
                                )}
                            </Button>

                            {submitStatus === "success" && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-sm text-center">
                                    Message sent successfully! I&apos;ll get back to you soon.
                                </div>
                            )}
                            {submitStatus === "error" && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
                                    Failed to send message. Please try again later.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
