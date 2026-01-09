"use client";

import Section from "./Section";
import { experienceData } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <Section id="experience" className="bg-[#020617]/50">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Work <span className="text-gradient">Experience</span>
                </h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/10" />

                <div className="space-y-12">
                    {experienceData.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-1 w-10 h-10 bg-[#0F172A] border border-white/10 rounded-full flex items-center justify-center z-10">
                                <Briefcase className="w-4 h-4 text-cyan-400" />
                            </div>

                            <div className="glass p-6 rounded-xl hover:border-cyan-500/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-slate-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {exp.description}
                                </p>

                                {exp.skills && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.skills.map((skill: string, sIdx: number) => (
                                            <span key={sIdx} className="text-xs font-medium text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
