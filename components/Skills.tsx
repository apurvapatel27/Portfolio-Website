"use client";

import Section from "./Section";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Technical <span className="text-gradient">Arsenal</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    I constantly upgrade my tech stack to deliver the most modern, performant, and scalable solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {skillsData.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300 border border-white/5 hover:border-cyan-500/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}
