"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return(
        <motion.div 
            ref={sectionRef}
            style={{ y, opacity }}
            className="px-6 py-16 md:py-24 backdrop-blur-md border-t border-purple-500/20"
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/85 to-black/95 pointer-events-none" />
            
            <div className="relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-linear-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent"
                >
                    How It Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col gap-3 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 group"
                    >
                        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/50">
                            1
                        </div>
                        
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-2 mt-2 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>

                        <h4 className="text-lg md:text-xl font-semibold mb-1 text-white">
                            Create Your Tour
                        </h4>
                        <p className="text-gray-400">Add steps and descriptions inside the dashboard.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col gap-3 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 group"
                    >
                        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/50">
                            2
                        </div>
                        
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-2 mt-2 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <h4 className="text-lg md:text-xl font-semibold mb-1 text-white">
                            Get Your Embed Code
                        </h4>
                        <p className="text-gray-400">Copy the generated script tag.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col gap-3 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 group"
                    >
                        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/50">
                            3
                        </div>
                        
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-2 mt-2 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>

                        <h4 className="text-lg md:text-xl font-semibold mb-1 text-white">
                            Add It to Your Website
                        </h4>
                        <p className="text-gray-400">Paste the script and watch your onboarding appear instantly.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col gap-3 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 group"
                    >
                        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/50">
                            4
                        </div>
                        
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-2 mt-2 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>

                        <h4 className="text-lg md:text-xl font-semibold mb-1 text-white">
                            Track User Activity
                        </h4>
                        <p className="text-gray-400">Monitor completions, skips, and engagement.</p>
                    </motion.div>
                </div>

                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 pointer-events-none">
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-linear-to-r from-transparent via-purple-500/30 to-transparent origin-left"
                    />
                </div>
            </div>
        </motion.div>
    )
}