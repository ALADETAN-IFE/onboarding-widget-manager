"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Settings, Zap, Palette, Sparkles, TrendingUp } from "lucide-react";

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  });

  // Transform values for the blanket effect
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "No-Code Integration",
      description: "Add with a single script tag—no build process or dependencies required.",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customizable Steps",
      description: "Define steps, target elements, and messages for any product layout.",
      color: "from-blue-600/20 to-blue-700/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightweight & Fast",
      description: "Optimized script that loads instantly without slowing down your app.",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Theme Customization",
      description: "Match your brand with light/dark themes and custom styling options.",
      color: "from-blue-600/20 to-blue-700/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Interactive Elements",
      description: "Engage users with interactive tooltips, highlights, and animations.",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Analytics Ready",
      description: "Track user engagement and completion rates with built-in analytics.",
      color: "from-blue-600/20 to-blue-700/20",
      iconColor: "text-blue-400"
    }
  ];

  return (
    <motion.div 
      ref={sectionRef}
      style={{ y, opacity }}
      className="relative py-20 md:py-32 overflow-hidden"
      id="features"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-700/3 rounded-full blur-3xl" />
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
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Features</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="block text-gray-100">Everything you need for</span>
            <span className="block mt-2 bg-linear-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              seamless onboarding
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive set of features designed to create engaging, 
            effective onboarding experiences without the complexity.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <div className={feature.iconColor}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-gray-50 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Bottom Indicator */}
                  <div className="mt-6 pt-6 border-t border-gray-800 group-hover:border-gray-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Learn more</span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        className="text-blue-400"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "<2kb", label: "Bundle Size", suffix: "Gzipped" },
              { value: "99.9%", label: "Uptime", suffix: "Reliability" },
              { value: "0ms", label: "TTI", suffix: "Time to Interactive" },
              { value: "100+", label: "Integrations", suffix: "Platforms" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.suffix}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}