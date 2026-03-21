"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ThreeScene } from "../ui/ThreeScene";
const Particle = ({ i }: { i: number }) => {
  const randomX = useMemo(() => Math.random() * 100, []);
  const randomY = useMemo(() => Math.random() * 100, []);
  const randomDelay = useMemo(() => Math.random() * 5, []);
  const randomDuration = useMemo(() => 10 + Math.random() * 10, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.4, 0],
        scale: [1, 2.5, 1],
        x: [0, (Math.random() - 0.5) * 200, 0],
        y: [0, (Math.random() - 0.5) * 200, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
      }}
      className="absolute w-1.5 h-1.5 bg-white rounded-full blur-[2px] hidden md:block"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
    />
  );
};
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-80"
        >
          <source
            src="https://player.vimeo.com/external/494294069.sd.mp4?s=6a99285095d66c30f7b973dc66f9172f3e536531&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffafa] via-[#fffafa]/30 to-transparent" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>
      {/* Light Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <Particle key={i} i={i} />
        ))}
      </div>
      {/* Real 3D Elements */}
      <ThreeScene />
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.4em] text-primary uppercase bg-white/80 backdrop-blur-md border border-pink-100 rounded-full shadow-2xl">
              Exclusively for Khushi Kumawat
            </span>
            <h1 className="text-7xl md:text-[11rem] font-serif font-black leading-[0.8] mb-12 text-luxury-gradient tracking-tight">
              Natural <br />
              <span className="italic font-light opacity-90 pl-12 md:pl-24">Aura.</span>
            </h1>
            <p className="text-xl text-text-muted mb-16 max-w-lg leading-relaxed mix-blend-multiply border-l-4 border-primary/20 pl-8 font-medium italic">
              Experience a sensory transformation where every touch is tailored for the high-end woman. Luxury, redefined.
            </p>
            <div className="flex flex-wrap gap-10 items-center">
              <motion.a
                whileHover={{ scale: 1.05, y: -10, rotateX: 10, rotateY: -10 }}
                whileTap={{ scale: 0.95 }}
                href="#booking"
                className="btn-glow relative px-14 py-7 bg-primary text-white rounded-[2rem] font-black tracking-widest text-xs shadow-[0_30px_60px_rgba(255,93,162,0.4)]"
              >
                BOOK YOUR EXPERIENCE
              </motion.a>
              <motion.a
                whileHover={{ x: 15 }}
                href="#services"
                className="group flex items-center gap-6 text-primary font-black tracking-widest text-[10px]"
              >
                THE RITUALS
                <span className="w-20 h-[2px] bg-primary/20 group-hover:bg-primary transition-all duration-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fffafa] to-transparent z-10" />
    </section>
  );
};
