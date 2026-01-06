import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border/50 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
                        Nikhil Juluri
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        Building intelligent systems that transform enterprise workflows.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/DoSomethingGreat07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/nikhil-juluri-001a98178"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:nikhiljuluri4@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-center md:text-right text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Nikhil Juluri. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
