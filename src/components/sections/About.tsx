"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, UserCheck } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            <Image
              src="/bridal.png"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 bg-soft rounded-3xl -z-0 transform rotate-12" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl z-20 flex items-center space-x-4 max-w-xs"
          >
            <div className="p-3 bg-pink-100 rounded-full text-primary">
              <Heart fill="currentColor" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-dark">100%</p>
              <p className="text-sm text-text-muted">Satisfaction Policy</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
              Empowering Women Through <br />
              <span className="text-gradient">Self-Care & Confidence</span>
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Welcome to Khusi Beauty Parlour, a sanctuary designed exclusively for girls and women. Our journey began with a simple mission: to provide a space where every woman can discover her inner radiance and embrace her true self.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              At Khusi, we believe that beauty is not just about appearances—it's about how you feel. We are committed to women's empowerment, offering a range of premium services in a relaxing, hygienic, and welcoming environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-pink-50 text-primary rounded-lg">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Premium Products</h4>
                  <p className="text-sm text-text-muted">We use only high-end, skin-safe international brands.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-pink-50 text-primary rounded-lg">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Expert Professionals</h4>
                  <p className="text-sm text-text-muted">Our team consists of highly trained and certified stylists.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
