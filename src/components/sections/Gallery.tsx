"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/gallery-bridal.png", alt: "Bridal Makeup", category: "Bridal" },
  { src: "/facial.png", alt: "Facial Treatment", category: "Facial" },
  { src: "/gallery-hair.png", alt: "Hair Styling", category: "Hair" },
  { src: "/gallery-nails.png", alt: "Nail Art", category: "Manicure" },
  { src: "/hero-bg.png", alt: "Salon Interior", category: "Interior" },
  { src: "/bridal.png", alt: "Engagement Look", category: "Makeup" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
              Our <span className="text-gradient">Work Gallery</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              A glimpse into the stunning transformations and the premium environment we offer at Khusi Beauty Parlour.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group aspect-square rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <span className="text-xs font-bold text-pink-200 uppercase tracking-widest">{image.category}</span>
                  <h4 className="text-white text-xl font-serif font-bold">{image.alt}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
