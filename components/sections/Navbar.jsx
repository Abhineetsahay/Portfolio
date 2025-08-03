"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "TechStack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Connect", href: "#connect" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (href) => {
  setMobileMenuOpen(false);
  setTimeout(() => {
    const element = document.querySelector(href);
    if (!element) return;

    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo(element, { offset: -60 });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100); 
};

  return (
    <header className="w-full fixed top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-white text-xl font-bold cursor-pointer">
          Abhineet Sahay
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(item.href)}
              className="text-gray-300 hover:text-white text-sm font-medium relative group bg-transparent border-none outline-none cursor-pointer"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="md:hidden bg-black/90 backdrop-blur px-6 py-4 space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              className="block text-left w-full text-gray-300 hover:text-white text-base"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
