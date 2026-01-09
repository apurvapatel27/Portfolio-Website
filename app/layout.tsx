import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "PatelPortfolio | Senior Full Stack Engineer",
    description: "Premium portfolio of a Senior Full Stack Engineer specializing in Next.js, React, and Modern UI Design.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(inter.variable, outfit.variable, "font-sans antialiased text-slate-100 bg-[#0F172A]")}>
                {children}
            </body>
        </html>
    );
}
