"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Khusi Beauty Parlour Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent md:bg-gradient-to-r md:from-white/80 md:via-white/20 md:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-pink-50 rounded-full">
              Welcome to Khusi Beauty Parlour
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark leading-tight mb-6">
              Enhancing Your <br />
              <span className="text-gradient">Natural Beauty</span>
            </h1>
            <p className="text-lg text-text-muted mb-10 leading-relaxed">
              Experience the pinnacle of feminine care and elegance. We provide premium beauty services tailored specifically for women, ensuring you look and feel your absolute best.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-pink-200 hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-full font-bold hover:bg-pink-50 transition-all transform hover:scale-105 active:scale-95"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements for Decoration */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-[10%] hidden lg:block"
      >
        <div className="w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
      </motion.div>
    </section>
  );
};
