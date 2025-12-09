"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  });

  // Transform values for the blanket effect
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <motion.div 
      ref={sectionRef}
      style={{ y, opacity }}
      className="sticky top-0 z-20 px-6 py-16 md:py-24 backdrop-blur-md border-t border-purple-500/20"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/80 to-black/95 pointer-events-none" />
      
      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 max-w-4xl mx-auto bg-linear-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent"
        >
          Powerful Features for Faster User Onboarding
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
              No Code Installation
            </h3>
            <p className="text-gray-400">A single script tag is all you need.</p>
            <p className="text-gray-400">Paste it into your site and your tour is live instantly.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
              Fully Customizable Steps
            </h3>
            <p className="text-gray-400">Define steps, target elements, and messages.</p>
            <p className="text-gray-400">Perfect for any product layout.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
              Lightweight & Fast
            </h3>
            <p className="text-gray-400">Optimized embed script.</p>
            <p className="text-gray-400">Loads instantly without slowing down your app.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}