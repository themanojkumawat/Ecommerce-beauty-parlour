"use client";
import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel3D } from "../ui/Carousel3D";
import { X, ZoomIn, ChevronRight, ChevronLeft } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import Image from "next/image";
export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-7xl md:text-[10rem] font-serif font-black text-text-dark leading-[0.7] uppercase mb-12 tracking-tighter">
            Vision of <br />
            <span className="text-luxury-gradient">Excellence</span>
          </h2>
          <p className="text-2xl text-text-muted max-w-2xl mx-auto italic font-medium">
            Explore our curated 3D portfolio. Touch and drag to discover the transformative artistry of Khushi Kumawat.
          </p>
        </motion.div>
      </div>
      {/* 3D Immersive Carousel Control */}
      <div className="relative h-[700px] w-full group">
        <Carousel3D onCardClick={(url) => setSelectedImg(url)} />
        {/* Indicators */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 flex items-center gap-4 text-primary/30 group-hover:text-primary transition-all duration-500 pointer-events-none hidden md:flex">
          <ChevronLeft size={60} />
          <p className="text-[10px] font-black tracking-widest uppercase origin-left -rotate-90">DRAG LEFT</p>
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 flex items-center gap-4 text-primary/30 group-hover:text-primary transition-all duration-500 pointer-events-none hidden md:flex">
          <p className="text-[10px] font-black tracking-widest uppercase origin-right rotate-90">DRAG RIGHT</p>
          <ChevronRight size={60} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <p className="text-xs font-black text-primary tracking-[0.4em] uppercase border-y border-pink-50 py-8 inline-block">
          Click any image to enter full-screen view
        </p>
      </div>
      {/* FullScreen Immersive Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-text-dark/95 backdrop-blur-3xl p-6"
          >
            <motion.button
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              onClick={() => setSelectedImg(null)}
              className="absolute top-12 right-12 text-white p-6 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              <X size={40} />
            </motion.button>
            <motion.div 
              layoutId={selectedImg}
              initial={{ scale: 0.5, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 90 }}
              className="relative w-full max-w-6xl aspect-[4/5] md:aspect-video rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-4 border-white/20"
            >
              <Image src={selectedImg} alt="Luxury Transformation" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-20 left-20">
                <h3 className="text-5xl font-serif font-black text-white uppercase tracking-widest mb-4">Luminous Result</h3>
                <p className="text-white/60 font-black tracking-widest text-[10px] uppercase underline underline-offset-8 decoration-primary">BRIDAL TRANSFORMATION</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
