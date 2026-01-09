"use client";

import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <Section id="contact">
            <div className="grid md:grid-cols-2 gap-16 relative">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Email</p>
                                <p className="font-medium">apurvapatel981@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-400">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Location</p>
                                <p className="font-medium">Anand, Gujarat, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass p-8 rounded-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={4}
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                placeholder="Enter your message here..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Contact Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#0F172A] border border-white/10 p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Let's <span className="text-cyan-400">Connect!</span></h3>
                                <p className="text-slate-400">Thank you for your interest! You can reach me directly at:</p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="mailto:apurvapatel981@gmail.com"
                                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/50 border border-transparent transition-all group"
                                >
                                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                                        <p className="text-white font-medium break-all">apurvapatel981@gmail.com</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                                </a>

                                <a
                                    href="tel:+919875041641"
                                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/50 border border-transparent transition-all group"
                                >
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Phone</p>
                                        <p className="text-white font-medium">+91 987 504 1641</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-purple-400 transition-colors" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
