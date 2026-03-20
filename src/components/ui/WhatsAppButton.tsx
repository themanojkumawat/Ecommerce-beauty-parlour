"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "+918058360783 ce with actual number
  const message = "Hello Khusi Beauty Parlour, I'd like to book an appointment!";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/30 hover:bg-[#1ebd5e] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} className="fill-white" />
      <span className="hidden md:block ml-2 font-semibold">Book on WhatsApp</span>
    </button>
  );
};
