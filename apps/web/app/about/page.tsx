"use client"

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative overflow-hidden">
      <div className="px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent"
          >
            About Our Onboarding Experience Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We help teams deliver smooth, intuitive product tours that guide
            users step-by-step and increase product adoption.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 p-6 rounded-lg border border-purple-500/20 bg-linear-to-br from-purple-900/10 to-fuchsia-900/10 backdrop-blur-sm"
          >
            <h2 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Our mission is simple: To make user onboarding effortless for both
              developers and end-users. We believe every product deserves a
              clear, helpful tour that makes users feel confident from the first
              interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 p-6 rounded-lg border border-purple-500/20 bg-linear-to-br from-fuchsia-900/10 to-purple-900/10 backdrop-blur-sm"
          >
            <h2 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
              What We Are Building
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              We designed a powerful onboarding tool that allows teams to create
              interactive, guided tours. With customizable steps, smooth
              animations, and easy embed integration, our platform helps users
              understand your product faster without reading long documentation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 p-6 rounded-lg border border-purple-500/20 bg-linear-to-br from-purple-900/10 to-fuchsia-900/10 backdrop-blur-sm"
          >
            <h2 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              Why Onboarding Matters
            </h2>
            <ul className="flex flex-col gap-3 text-lg leading-relaxed text-gray-300">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <span className="text-purple-400 mt-1">•</span>
                <span>First impressions shape product adoption.</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <span className="text-purple-400 mt-1">•</span>
                <span>
                  Users are more likely to stay when they understand how to use
                  your interface.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <span className="text-purple-400 mt-1">•</span>
                <span>
                  Tooltips, guided steps, and interactive flows reduce confusion
                  and support requests.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="text-purple-400 mt-1">•</span>
                <span>
                  A good onboarding experience improves retention and overall
                  product success.
                </span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 p-6 rounded-lg border border-purple-500/20 bg-linear-to-br from-fuchsia-900/10 to-purple-900/10 backdrop-blur-sm"
          >
            <h2 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
              Where We're Headed
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              We're building more than just a tour tool. Our long-term vision is
              to create intelligent, adaptive onboarding experiences that
              personalize guidance based on user behavior and product context.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}