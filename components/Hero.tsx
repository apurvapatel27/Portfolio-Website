"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { heroData } from "@/lib/data";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wider mb-6">
                        Ready to Work
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hello, I'm <span className="text-gradient">Apurva</span>
                    </h1>
                    <div className="h-8 md:h-12 overflow-hidden mb-8">
                        <motion.div
                            animate={{ y: ["0%", "-33%", "-66%"] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", times: [0, 0.33, 0.66] }}
                            className="text-2xl md:text-4xl text-slate-400 font-light"
                        >
                            {heroData.role.map((role, index) => (
                                <div key={index} className="h-8 md:h-12 flex items-center justify-center">
                                    {role}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {heroData.subtext}
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="group px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="group px-8 py-3.5 bg-white/5 border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                        >
                            Download Resume
                            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}
