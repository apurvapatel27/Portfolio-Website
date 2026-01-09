"use client";

import Section from "./Section";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    return (
        <Section id="projects">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Featured <span className="text-gradient">Projects</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    A selection of projects that showcase my ability to build complex, scalable, and beautiful web applications.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projectsData.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group glass rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors"
                    >
                        {/* Project Image */}
                        <div className="h-48 bg-slate-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60 z-10" />
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 left-4 right-4 z-20">
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                            </div>
                        </div>

                        <div className="p-6">
                            <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-xs font-medium text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" /> View Project
                                </a>
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                                >
                                    <Github className="w-4 h-4" /> Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
