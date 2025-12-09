"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Failed to log out.");
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="px-6 py-4 border-b border-gray-800/50 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
        >
          logo
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          <li>
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
            >
              How it Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/documentation"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
            >
              Documentation
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </motion.ul>

        {/* Desktop Auth Buttons */}
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex items-center gap-4"
        >
          {!loading && (
            <>
              {!user && (
                <>
                  <li>
                    <Link
                      href="/sign-up"
                      className="px-6 py-2.5 rounded-lg bg-linear-to-r from-purple-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/sign-in"
                      className="px-6 py-2.5 rounded-lg border-2 border-purple-500/50 text-gray-300 hover:text-purple-400 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                    >
                      Sign In
                    </Link>
                  </li>
                </>
              )}

              {user && (
                <>
                  <li>
                    <Link
                      href="/dashboard"
                      className="px-6 py-2.5 rounded-lg text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="px-6 py-2.5 rounded-lg border-2 border-purple-500/50 text-gray-300 hover:text-purple-400 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </>
          )}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
                >
                  Features
                </Link>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
                >
                  How it Works
                </Link>
                <Link
                  href="/documentation"
                  onClick={toggleMenu}
                  className="block px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
                >
                  Documentation
                </Link>
                <Link
                  href="/about"
                  onClick={toggleMenu}
                  className="block px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
                >
                  About
                </Link>
              </motion.div>

              {/* Mobile Auth Buttons */}
              {!loading && (
                <motion.div variants={itemVariants} className="space-y-2 pt-4 border-t border-gray-800/50">
                  {!user && (
                    <>
                      <Link
                        href="/sign-up"
                        onClick={toggleMenu}
                        className="block px-4 py-2.5 rounded-lg bg-linear-to-r from-purple-500 to-fuchsia-500 text-white font-semibold text-center shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300"
                      >
                        Get Started
                      </Link>
                      <Link
                        href="/sign-in"
                        onClick={toggleMenu}
                        className="block px-4 py-2.5 rounded-lg border-2 border-purple-500/50 text-gray-300 hover:text-purple-400 hover:border-purple-400 text-center transition-all duration-300"
                      >
                        Sign In
                      </Link>
                    </>
                  )}

                  {user && (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={toggleMenu}
                        className="block px-4 py-2.5 rounded-lg text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 text-center transition-all duration-300"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          toggleMenu();
                        }}
                        className="w-full px-4 py-2.5 rounded-lg border-2 border-purple-500/50 text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}