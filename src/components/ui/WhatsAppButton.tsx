"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  const phoneNumber = "+918058360783"; 
  const message = "Hello Khushi Beauty Parlour, I'd like to book an appointment!";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-12 right-12 z-[100]">
      {/* Pulse Rings */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#25D366] rounded-full blur-xl"
      />
      
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="relative bg-[#25D366] text-white p-6 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.4)] border-4 border-white flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} className="fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-4 transition-all duration-500 font-black text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">
          WhatsApp Us
        </span>
      </motion.button>
    </div>
  );
};

