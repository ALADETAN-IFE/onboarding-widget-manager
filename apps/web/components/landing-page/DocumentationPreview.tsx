"use client"

import { motion } from "framer-motion";

export default function DocumentationPreview() {
    return(
        <div className="px-6 py-16 md:py-24 flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent"
            >
                Easy to Install
            </motion.h2>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-300 text-center mb-8 max-w-2xl"
            >
                Just add this script tag to your website to activate the onboarding tour.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-3xl mb-8 p-6 rounded-lg border-2 border-purple-500/30 bg-gray-900/50 backdrop-blur-sm shadow-xl shadow-purple-500/10"
            >
                <code className="block overflow-x-auto text-purple-200 font-mono text-sm md:text-base">
                    &lt;script src="https://yourproject.com/embed.js" data-tour-id="your-tour-id"&gt;&lt;/script&gt;
                </code>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg font-medium bg-linear-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300"
                >
                    View Full Documentation
                </motion.button>
            </motion.div>
        </div>
    )
}