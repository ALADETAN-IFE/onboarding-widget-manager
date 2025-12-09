"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-6 py-12 border-t-2 border-purple-500/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bold text-xl bg-linear-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          product name
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center md:justify-end items-center gap-6"
        >
          <Link
            href="/documentation"
            className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
          >
            Documentation
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
          >
            Dashboard
          </Link>
          <Link
            href="/privacy"
            className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
          >
            Terms of Service
          </Link>
        </motion.div>
      </div>
    </div>
  );
}