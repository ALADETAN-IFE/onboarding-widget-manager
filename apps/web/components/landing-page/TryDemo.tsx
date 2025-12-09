"use client"

import { motion } from "framer-motion";

export default function TryDemo() {
  return (
    <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-20 w-24 h-24 rounded-full bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 rounded-full border border-purple-500/30"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-fuchsia-400/30"
          style={{
            transform: "perspective(500px) rotateX(45deg) rotateZ(45deg)",
          }}
          animate={{
            y: [0, -10, 0],
            rotateZ: [45, 90, 45],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent"
      >
        Try the Interactive Demo
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 text-lg md:text-xl text-gray-300 max-w-2xl mb-12"
      >
        Experience how your users will navigate through smooth, guided
        onboarding steps — right inside your product.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full max-w-3xl bg-linear-to-br from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm rounded-xl p-8 mb-10 shadow-2xl border border-purple-500/30"
      >
        <p className="text-lg mb-4 font-semibold text-purple-200">
          Demo Preview
        </p>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 shadow-xl flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-4 bg-linear-to-br from-purple-800/30 to-fuchsia-800/30 rounded-md text-left border border-purple-500/20"
          >
            <p className="font-medium text-purple-200">
              Step 1: Welcome to your first tour!
            </p>
            <p className="text-sm mt-1 text-gray-400">
              Use steps like this to guide users through your interface.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-end px-5 py-2 rounded-lg font-medium bg-linear-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
          >
            Next Step
          </motion.button>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 px-8 py-3 rounded-lg font-semibold bg-linear-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300"
      >
        Start Demo Tour
      </motion.button>
    </section>
  );
}