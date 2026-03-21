"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "RITUALS", href: "#services" },
  { name: "VISION", href: "#gallery" },
  { name: "RESERVE", href: "#booking" },
  { name: "CONNECT", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 font-serif",
        scrolled
          ? "py-4 md:py-6"
          : "py-8 md:py-12"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-6 transition-all duration-500",
        scrolled ? "max-w-6xl" : "max-w-7xl"
      )}>
        <div className={cn(
          "relative flex items-center justify-between transition-all duration-500 rounded-[2.5rem]",
          scrolled 
            ? "bg-white/70 backdrop-blur-2xl px-10 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50" 
            : "bg-transparent px-0 py-0"
        )}>
          <Link href="/" className="flex items-center space-x-3 group outline-none">
            <div className="relative">
              <Sparkles size={24} className="text-primary group-hover:rotate-180 transition-transform duration-700" />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary blur-md -z-10"
              />
            </div>
            <span className="text-xl md:text-2xl font-black text-text-dark tracking-tighter uppercase leading-none">
              Khushi <br />
              <span className="text-xs tracking-[0.6em] text-primary/80 font-sans -mt-1 block">KUMAWAT.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative text-[10px] font-black text-text-dark tracking-[0.4em] uppercase transition-colors hover:text-primary outline-none"
              >
                {link.name}
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary shadow-[0_0_8px_rgba(255,93,162,1)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="bg-text-dark text-white px-10 py-4 rounded-2xl text-[10px] font-black tracking-widest uppercase hover:bg-primary transition-all shadow-xl hover:shadow-primary/20"
            >
              BOOK NOW
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 bg-white/50 backdrop-blur-md rounded-2xl border border-white transition-all hover:bg-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[-1] bg-white pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col space-y-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-text-dark tracking-tighter uppercase hover:text-primary active:scale-95 transition-all text-center"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center py-8 rounded-[2rem] text-sm font-black tracking-[0.4em] uppercase shadow-2xl active:scale-95 transition-all"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
            
            <div className="absolute bottom-20 left-10 right-10 flex justify-center items-center gap-6">
              <span className="w-12 h-[1px] bg-soft" />
              <p className="text-[10px] font-black tracking-widest text-text-muted">ESTD 2024</p>
              <span className="w-12 h-[1px] bg-soft" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

