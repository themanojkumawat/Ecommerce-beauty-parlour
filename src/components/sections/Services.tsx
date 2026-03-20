"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Sparkles, CheckCircle } from "lucide-react";

const CategoryIcon = ({ category }: { category: string }) => {
  return <Sparkles className="text-primary" size={20} />;
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-soft/30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary uppercase bg-pink-100/50 rounded-full">
              Our Premium Offerings
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-dark mb-6">
              Tailored Beauty <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              Discover our wide range of professional beauty treatments designed to enhance your natural grace.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-pink-100 transition-all duration-300 border border-pink-50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50/50 rounded-bl-[100px] -z-0 transition-all group-hover:scale-110" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-pink-50 text-primary rounded-xl flex items-center justify-center">
                   <CategoryIcon category={service.category} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-text-dark mb-3">
                    {service.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-lg font-bold text-primary">Starting {service.price}</p>
                </div>
                
                <ul className="space-y-2 pt-4 border-t border-pink-50">
                   <li className="flex items-center text-xs text-text-muted">
                     <CheckCircle size={14} className="text-primary mr-2" />
                     Professional Consultation
                   </li>
                   <li className="flex items-center text-xs text-text-muted">
                     <CheckCircle size={14} className="text-primary mr-2" />
                     Premium Product Use
                   </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlighted service or banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#ff5da2] to-[#ff89b4] text-white p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl"
        >
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-4xl font-serif font-bold">Unveiling Your Radiance</h3>
            <p className="opacity-90 leading-relaxed text-lg">
              Check out our monthly special packages and bridal early-bird offers. We believe every woman deserves a touch of luxury.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#booking" className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:bg-pink-50 transition-all transform hover:scale-105 active:scale-95">
                Book Package
              </a>
              <a href="#" className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all transform hover:scale-105 active:scale-95">
                Download Menucard
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative aspect-video rounded-2xl overflow-hidden shadow-xl">
             <Image src="/facial.png" alt="Special Offer" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
