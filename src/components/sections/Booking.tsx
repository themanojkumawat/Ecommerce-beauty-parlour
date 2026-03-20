"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Calendar, User, Phone, Clock, Scissors } from "lucide-react";
import { services } from "@/data/services";

type FormData = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
};

export const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Booking data:", data);
    toast.success("Thank you! Your appointment request has been sent. We'll contact you soon.");
    reset();
  };

  return (
    <section id="booking" className="py-24 bg-soft/50 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
              Book Your <br />
              <span className="text-gradient">Pamper Session</span>
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Take the first step towards your beauty transformation. Fill out the form, and our team will get back to you to confirm your slot.
            </p>

            <ul className="space-y-4">
              {[
                "Exclusive for girls and women",
                "Hygienic and safe environment",
                "Personalized beauty consultation",
                "Premium salon experience",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-text-dark font-medium">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Scissors size={14} className="transform rotate-45" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-pink-50 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-dark ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="E.g. Khushi Sharma"
                    className="w-full pl-12 pr-4 py-4 bg-soft/30 border border-pink-100/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1 pl-1">{errors.name.message}</p>}
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-dark ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                  <input
                    {...register("phone", { required: "Phone number is required" })}
                    type="tel"
                    placeholder="E.g. +91 XXXXX XXXXX"
                    className="w-full pl-12 pr-4 py-4 bg-soft/30 border border-pink-100/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1 pl-1">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-dark ml-1">Select Service</label>
                <div className="relative">
                  <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                  <select
                    {...register("service", { required: "Please select a service" })}
                    className="w-full pl-12 pr-4 py-4 bg-soft/30 border border-pink-100/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm appearance-none"
                  >
                    <option value="">Select Service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-dark ml-1">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                  <input
                    {...register("date", { required: "Date is required" })}
                    type="date"
                    className="w-full pl-12 pr-4 py-4 bg-soft/30 border border-pink-100/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Time */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-dark ml-1">Preferred Time</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                <input
                  {...register("time", { required: "Time is required" })}
                  type="time"
                  className="w-full pl-12 pr-4 py-4 bg-soft/30 border border-pink-100/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-5 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-pink-200 hover:bg-primary/90 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:scale-100"
            >
              {isSubmitting ? "Processing..." : "Confirm Appointment Request"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
