"use client";

import Image from "next/image";
import Section from "./Section";

export default function About() {
    return (
        <Section id="about" className="bg-[#020617]/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Image */}
                <div className="w-full aspect-square max-w-[500px] mx-auto relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl rotate-6 opacity-30 group-hover:rotate-12 transition-all duration-500 blur-xl" />

                    <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/me.jpg"
                            alt="Apurva Patel"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Apurva <span className="text-cyan-400">Patel</span>
                    </h2>

                    <p className="text-slate-300 leading-relaxed mb-6">
                        I am a passionate IT student who enjoys building modern, responsive
                        web applications and learning how real-world software systems work.
                    </p>

                    <p className="text-slate-400 leading-relaxed">
                        My interests include full-stack development, UI/UX design, and
                        problem solving. I enjoy turning ideas into clean, functional
                        products.
                    </p>
                </div>

            </div>
        </Section>
    );
}
