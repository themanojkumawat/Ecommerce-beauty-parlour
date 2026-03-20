"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-serif font-bold text-text-dark mb-6">
              Find <span className="text-gradient">Our Salon</span>
            </h2>
            <p className="text-text-muted leading-relaxed">
              We look forward to welcoming you to our salon. Have any questions? Our team is happy to help you with your beauty needs.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-soft/30 hover:bg-soft transition-colors duration-300">
              <div className="p-3 bg-white text-primary rounded-xl shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-dark mb-1">Our Address</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  123 Beauty Lane, Main Road,<br />
                  Chanakyapuri, New Delhi,<br />
                  India - 110021
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-soft/30 hover:bg-soft transition-colors duration-300">
              <div className="p-3 bg-white text-primary rounded-xl shadow-sm">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-dark mb-1">Business Hours</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Mon - Sat: 10:00 AM - 8:00 PM<br />
                  Sun: 11:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-soft/30 hover:bg-soft transition-colors duration-300">
              <div className="p-3 bg-white text-primary rounded-xl shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-dark mb-1">Contact Details</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  +91 98765 43210<br />
                  info@khusibeauty.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/3 h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.01633519842!2d77.18567295!3d28.5982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5867160751%3A0x6336e4f165e89d2b!2sChanakyapuri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
