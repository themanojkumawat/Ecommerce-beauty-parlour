"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, UserCheck, Star } from "lucide-react";
import { LuxuryCard } from "../ui/LuxuryCard";

export const About = () => {
  return (
    <section id="about" className="py-40 bg-white px-6 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
        <div className="lg:w-1/2 relative group">
          <LuxuryCard className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000"
                alt="Khushi Kumawat Artistry"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </LuxuryCard>

          {/* Floating Luxury Elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-12 -left-12 bg-white/80 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl z-20 flex items-center space-x-6 border border-white"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary relative">
              <Heart size={32} fill="currentColor" />
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary rounded-full blur-xl -z-10"
              />
            </div>
            <div>
              <p className="text-4xl font-serif font-black text-text-dark">100%</p>
              <p className="text-[10px] font-black tracking-widest text-text-muted uppercase">Purity & Trust</p>
            </div>
          </motion.div>
          
          <div className="absolute top-20 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-0" />
        </div>

        <div className="lg:w-1/2 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
               <span className="w-12 h-[2px] bg-primary" />
               <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Elite Heritage</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-serif font-black text-text-dark leading-[1.1] mb-10">
              Transformative <br />
              <span className="text-luxury-gradient italic">Artistry.</span>
            </h2>
            
            <p className="text-xl text-text-muted leading-[1.8] font-medium italic border-l-4 border-soft pl-10 mb-10">
              &ldquo;Welcome to a sanctuary where luxury meets women's empowerment. Our rituals are more than treatments—they are journeys of self-discovery designed exclusively for the modern woman.&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 bg-soft/30 rounded-3xl border border-pink-100 flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-black text-text-dark mb-2 uppercase tracking-wide">Premium Curation</h4>
                  <p className="text-sm text-text-muted leading-relaxed">We source only the world's most opulent and safe international aesthetics brands.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 bg-soft/30 rounded-3xl border border-pink-100 flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-black text-text-dark mb-2 uppercase tracking-wide">Elite Stylists</h4>
                  <p className="text-sm text-text-muted leading-relaxed">Our artisans are certified masters in high-end bridal and skin-care transformations.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

