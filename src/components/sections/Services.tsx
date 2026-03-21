"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Sparkles, CheckCircle, Flame } from "lucide-react";
import { LuxuryCard } from "../ui/LuxuryCard";

const CategoryIcon = ({ category }: { category: string }) => {
  return <Sparkles className="text-primary" size={20} />;
};

export const Services = () => {
  return (
    <section id="services" className="py-40 bg-soft/30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-4 mb-4">
               <span className="w-10 h-[1px] bg-primary/30" />
               <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Elite Offerings</span>
               <span className="w-10 h-[1px] bg-primary/30" />
            </div>
            <h2 className="text-7xl md:text-9xl font-serif font-black text-text-dark leading-none">
              The <span className="text-luxury-gradient">Rituals.</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto mt-12 font-medium italic">
              Immerse yourself in our curated selection of high-end beauty transformations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-40">
          {services.map((service, index) => {
            const isPopular = service.name.includes("HydraFacial");
            return (
              <LuxuryCard key={service.id} className="h-full">
                <div className="bg-white rounded-[2.5rem] p-12 h-full border-2 border-pink-50/50 shadow-2xl relative overflow-hidden group">
                  {isPopular && (
                    <div className="absolute -top-4 -right-4 bg-primary text-white p-6 rotate-12 flex items-center gap-2 shadow-xl z-20">
                      <Flame size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest">MOST POPULAR</span>
                    </div>
                  )}
                  
                  <div className="relative z-10 space-y-10">
                    <div className="w-16 h-16 bg-pink-50 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                       <CategoryIcon category={service.category} />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif font-black text-text-dark leading-tight">
                        {service.name}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed font-medium">
                        {service.description}
                      </p>
                      <div className="pt-4 flex items-center gap-4">
                        <span className="text-[10px] font-black tracking-widest text-primary uppercase border-b-2 border-primary/20 pb-1">Starting From</span>
                        <p className="text-2xl font-black text-text-dark leading-none">{service.price}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-10 border-t border-soft">
                       <div className="flex items-center gap-4 text-[10px] font-black text-text-muted uppercase tracking-wider">
                         <CheckCircle size={16} className="text-primary" />
                         Premium Product Range
                       </div>
                       <div className="flex items-center gap-4 text-[10px] font-black text-text-muted uppercase tracking-wider">
                         <CheckCircle size={16} className="text-primary" />
                         Luxury Consultation
                       </div>
                    </div>
                  </div>
                </div>
              </LuxuryCard>
            );
          })}
        </div>

        {/* Highlighted Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-[5rem] overflow-hidden bg-text-dark text-white p-12 md:p-32 flex flex-col md:flex-row items-center gap-20 shadow-[0_60px_100px_rgba(0,0,0,0.3)] group"
        >
          {/* Animated Glow behind banner */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/20 via-transparent to-accent/10 blur-[150px] -z-10 group-hover:opacity-100 opacity-50 transition-opacity duration-1000" />
          
          <div className="md:w-1/2 space-y-10 relative z-10">
            <h3 className="text-6xl font-serif font-black leading-tight">Our Signature <br /> <span className="text-luxury-gradient">Royal Ritual.</span></h3>
            <p className="text-xl text-white/70 font-medium italic leading-relaxed">
              Experience the pinnacle of bridal excellence with our flagship transformation package. Designed for the modern woman who refuses to settle for anything but the extraordinary.
            </p>
            <div className="flex flex-wrap gap-8 pt-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#booking" 
                className="bg-primary text-white px-12 py-6 rounded-2xl font-black tracking-widest text-xs shadow-2xl hover:bg-[#ff4090] transition-colors"
              >
                REQUEST EXCLUSIVE ACCESS
              </motion.a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-primary/20 transition-all duration-700">
             <Image 
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1000" 
                alt="Signature Facial" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

