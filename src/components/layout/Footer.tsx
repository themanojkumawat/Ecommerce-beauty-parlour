import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-pink-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand section */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-serif font-bold text-gradient">Khusi Beauty Parlour</span>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed max-w-md">
            Dedicated to enhancing your natural beauty. Our parlour is exclusively for girls and women who value quality and self-care in a premium environment.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 rounded-full bg-soft text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-soft text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-soft text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Links section */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif font-semibold text-text-dark">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "About Us", "Services", "Gallery", "Contact"].map((link) => (
              <li key={link}>
                <Link href={`#${link.toLowerCase().replace(" ", "")}`} className="text-sm text-text-muted hover:text-primary transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact section */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif font-semibold text-text-dark">Reach Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-sm text-text-muted">
              <MapPin className="text-primary flex-shrink-0 mt-0.5" size={18} />
              <span>123 Beauty Lane, Main Road, New Delhi, India</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-text-muted">
              <Phone className="text-primary flex-shrink-0" size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-text-muted">
              <Mail className="text-primary flex-shrink-0" size={18} />
              <span>info@khusibeauty.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-pink-50 flex flex-col md:flex-row items-center justify-between text-xs text-text-muted tracking-wide text-center">
        <p>&copy; {new Date().getFullYear()} Khusi Beauty Parlour. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
