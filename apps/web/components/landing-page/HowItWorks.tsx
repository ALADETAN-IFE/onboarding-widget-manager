"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileText, Code, Globe, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

export default function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    const steps = [
        {
            number: 1,
            icon: <FileText className="w-6 h-6" />,
            title: "Create Your Tour",
            description: "Define steps, target elements, and messages in our intuitive dashboard.",
            color: "from-blue-500/20 to-blue-600/20"
        },
        {
            number: 2,
            icon: <Code className="w-6 h-6" />,
            title: "Get Embed Code",
            description: "Copy the generated script tag ready for integration.",
            color: "from-blue-600/20 to-blue-700/20"
        },
        {
            number: 3,
            icon: <Globe className="w-6 h-6" />,
            title: "Add to Website",
            description: "Paste the script and see your onboarding appear instantly.",
            color: "from-blue-500/20 to-blue-600/20"
        },
        {
            number: 4,
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Track & Optimize",
            description: "Monitor completions, engagement, and optimize your tours.",
            color: "from-blue-600/20 to-blue-700/20"
        }
    ];

    return (
        <motion.div 
            ref={sectionRef}
            style={{ y, opacity }}
            className="relative py-20 md:py-32 overflow-hidden"
            id="how-it-works"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 mb-6"
                    >
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-gray-300">Simple Integration</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                    >
                        <span className="block text-gray-100">Get started in</span>
                        <span className="block mt-2 bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                            four simple steps
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Integrate beautiful onboarding tours in minutes with our streamlined workflow.
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 pointer-events-none">
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-full bg-linear-to-r from-blue-500/10 via-blue-400/30 to-blue-500/10 origin-left"
                        />
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <div className="h-full p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300">
                                    <div className="flex flex-col items-center text-center h-full">
                                        {/* Step Number */}
                                        <div className="relative mb-6">
                                            <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-600 to-blue-500 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-blue-500/20">
                                                {step.number}
                                            </div>
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                                                viewport={{ once: true }}
                                                className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-4 border-gray-950"
                                            />
                                        </div>
                                        
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                                            <div className="text-blue-400">
                                                {step.icon}
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-gray-50 transition-colors">
                                                {step.title}
                                            </h4>
                                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                                {step.description}
                                            </p>
                                        </div>
                                        
                                        {/* Arrow Connector (Mobile) */}
                                        {index < steps.length - 1 && (
                                            <div className="lg:hidden mt-6">
                                                <div className="text-blue-400">
                                                    <ArrowRight className="w-6 h-6" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl border border-gray-800 bg-linear-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm">
                            <div className="text-left">
                                <h4 className="text-lg font-semibold text-gray-100 mb-1">
                                    Ready to get started?
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Create your first tour in minutes
                                </p>
                            </div>
                            <a
                                href="/sign-up"
                                className="group inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/20"
                            >
                                Try It Free
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}