"use client";

import { Github, Linkedin, Mail, Check } from "lucide-react";
import { useState } from "react";

export default function Footer() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("apurvapatel981@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="bg-[#020617] py-12 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://github.com/apurvapatel27" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 text-slate-400">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/apurva-patel-213a692a7" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 text-slate-400">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <button onClick={handleCopy} className="p-3 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 text-slate-400">
                        {copied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
                    </button>
                </div>
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Apurva Patel. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
