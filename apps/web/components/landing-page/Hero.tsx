"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";

export default function Hero() {
  const { user, loading } = useAuth();

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-purple-500/30"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-linear-to-br from-fuchsia-500/20 to-purple-500/20 blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full border border-pink-500/40"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 3D-style Squares */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-16 h-16 border-2 border-purple-400/40"
          style={{
            transform: "perspective(500px) rotateX(45deg) rotateZ(45deg)",
          }}
          animate={{
            y: [0, -15, 0],
            rotateZ: [45, 90, 45],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 right-1/4 w-12 h-12 bg-linear-to-br from-purple-500/20 to-fuchsia-500/20"
          style={{
            transform: "perspective(500px) rotateY(45deg) rotateZ(45deg)",
          }}
          animate={{
            y: [0, 20, 0],
            rotateY: [45, 90, 45],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 left-1/4 w-14 h-14 border border-fuchsia-400/30"
          style={{
            transform: "perspective(500px) rotateX(-45deg) rotateZ(-45deg)",
          }}
          animate={{
            x: [0, -10, 0],
            y: [0, 15, 0],
            rotateX: [-45, -90, -45],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Lines */}
        <motion.div
          className="absolute top-1/2 left-10 w-40 h-0.5 bg-linear-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            x: [0, 50, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-0.5 bg-linear-to-r from-transparent via-fuchsia-500/50 to-transparent rotate-45"
          animate={{
            x: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/4 right-20 w-0.5 h-32 bg-linear-to-b from-transparent via-pink-500/50 to-transparent"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional Decorative Elements */}
        <motion.div
          className="absolute bottom-20 left-1/3 w-8 h-8 rounded-full bg-purple-500/30 blur-md"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-10 w-6 h-6 rounded-full bg-fuchsia-500/40 blur-sm"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-6xl font-bold text-center mb-4 max-w-4xl bg-linear-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent"
      >
        Create Beautiful Guided Product Tours in Minutes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-lg md:text-xl text-gray-300 text-center mb-8 max-w-2xl"
      >
        Enhance user experience with smooth, interactive onboarding flows that
        are simple to create and effortless to integrate.
      </motion.p>

      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4"
        >
          {!user && (
            <Link
              href="/sign-up"
              className="px-8 py-3 rounded-lg font-semibold bg-linear-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          )}

          {user && (
            <Link
              href="/dashboard"
              className="px-8 py-3 rounded-lg font-semibold bg-linear-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-300"
            >
              Go to Dashboard
            </Link>
          )}

          <Link
            href="/documentation"
            className="px-8 py-3 rounded-lg font-semibold border-2 border-purple-500/50 text-gray-300 hover:text-purple-400 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
          >
            Read Documentation
          </Link>
        </motion.div>
      )}
    </div>
  );
}
