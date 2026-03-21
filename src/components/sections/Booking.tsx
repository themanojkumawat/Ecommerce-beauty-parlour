"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { 
  Calendar, User, Phone, Clock, Scissors, 
  ChevronRight, ChevronLeft, CheckCircle, 
  Flame, Sparkles, Star
} from "lucide-react";
import { services } from "@/data/services";

type FormData = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
};

const STEPS = [
  { id: 1, title: "Identity", icon: User },
  { id: 2, title: "Ritual", icon: Scissors },
  { id: 3, title: "Schedule", icon: Calendar }
];

export const Booking = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const formData = watch();

  const nextStep = async () => {
    let fields: (keyof FormData)[] = [];
    if (step === 1) fields = ["name", "phone"];
    if (step === 2) fields = ["service"];
    
    const isValid = await trigger(fields);
    if (isValid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Booking data:", data);
    setIsSubmitted(true);
    toast.success("Golden appointment confirmed!");
    // reset();
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-soft/50 px-6 min-h-[800px] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white p-16 rounded-[4rem] shadow-2xl border-4 border-primary/20 text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary animate-pulse" />
          
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
              className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
            >
              <CheckCircle size={64} className="text-primary" />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl font-serif font-black text-text-dark">Reservation Confirmed</h2>
            <p className="text-xl text-text-muted italic">
              Your transformation journey with Khushi Kumawat begins soon. <br />
              Expect a royal call within 30 minutes.
            </p>
          </div>

          <button 
            onClick={() => { setIsSubmitted(false); setStep(1); reset(); }}
            className="px-12 py-5 bg-text-dark text-white rounded-2xl font-black tracking-widest text-xs hover:bg-primary transition-all"
          >
            BOOK ANOTHER SESSION
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-32 bg-soft/50 px-6 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="lg:w-1/2 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Reservation Portal</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-serif font-black text-text-dark leading-tight mb-8">
              Claim Your <br />
              <span className="text-luxury-gradient">Glow.</span>
            </h2>

            {/* Urgency Banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-4 px-6 py-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-pink-100 mb-12"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Flame size={20} className="text-primary animate-bounce" />
              </div>
              <div>
                <p className="text-xs font-black text-text-dark uppercase tracking-tight">Only 3 slots available</p>
                <p className="text-[10px] text-text-muted">For the upcoming week. Secure yours now!</p>
              </div>
            </motion.div>
            
            <ul className="space-y-6">
              {[
                { title: "Divine Craftsmanship", desc: "Expert artistry by Khushi Kumawat" },
                { title: "Sterile Sanctuary", desc: "Highest hygiene & safety protocols" },
                { title: "Opulent Care", desc: "Premium world-class products only" },
              ].map((item, index) => (
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Star size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-black text-text-dark">{item.title}</h4>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotateY: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 w-full perspective-1000"
        >
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_50px_100px_rgba(255,148,197,0.15)] border-2 border-pink-50 relative">
            
            {/* Step Indicators */}
            <div className="flex justify-between mb-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-soft -translate-y-1/2 -z-0" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-primary transition-all duration-500 -translate-y-1/2 -z-0" 
                style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
              />
              
              {STEPS.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${
                    step >= s.id ? "bg-primary text-white border-primary shadow-lg" : "bg-white text-text-muted border-soft"
                  }`}>
                    <s.icon size={20} />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                    step >= s.id ? "text-primary" : "text-text-muted"
                  }`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30" size={24} />
                        <input
                          {...register("name", { required: "Name is required" })}
                          placeholder="Your Royal Name"
                          className="w-full pl-16 pr-8 py-6 bg-soft/30 border-2 border-transparent rounded-[2rem] focus:outline-none focus:border-primary/20 focus:bg-white transition-all text-lg font-serif"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-2 ml-4">{errors.name.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30" size={24} />
                        <input
                          {...register("phone", { required: "Phone is required" })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full pl-16 pr-8 py-6 bg-soft/30 border-2 border-transparent rounded-[2rem] focus:outline-none focus:border-primary/20 focus:bg-white transition-all text-lg font-serif"
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-2 ml-4">{errors.phone.message}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Select Ritual</label>
                      <div className="grid grid-cols-1 gap-4 h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                        {services.map((s) => (
                          <div 
                            key={s.id}
                            onClick={() => {
                              register("service").onChange({ target: { value: s.name, name: "service" } });
                            }}
                            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group ${
                              watch("service") === s.name 
                                ? "border-primary bg-primary/5 shadow-md" 
                                : "border-soft hover:border-accent hover:bg-white"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                                watch("service") === s.name ? "bg-primary text-white" : "bg-soft text-primary"
                              }`}>
                                <Sparkles size={20} />
                              </div>
                              <div>
                                <h5 className="font-serif font-black text-text-dark">{s.name}</h5>
                                <p className="text-[10px] text-text-muted uppercase tracking-widest">{s.price}</p>
                              </div>
                            </div>
                            {watch("service") === s.name && (
                              <CheckCircle size={24} className="text-primary" />
                            )}
                          </div>
                        ))}
                      </div>
                      <input type="hidden" {...register("service", { required: "Select a ritual" })} />
                      {errors.service && <p className="text-xs text-red-500 mt-2 ml-4">{errors.service.message}</p>}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30" size={24} />
                          <input
                            {...register("date", { required: "Date is required" })}
                            type="date"
                            className="w-full pl-16 pr-8 py-6 bg-soft/30 border-2 border-transparent rounded-[2rem] focus:outline-none focus:border-primary/20 focus:bg-white transition-all text-sm uppercase tracking-widest font-black"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Time</label>
                        <div className="relative">
                          <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30" size={24} />
                          <input
                            {...register("time", { required: "Time is required" })}
                            type="time"
                            className="w-full pl-16 pr-8 py-6 bg-soft/30 border-2 border-transparent rounded-[2rem] focus:outline-none focus:border-primary/20 focus:bg-white transition-all text-sm font-black"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-8 bg-soft/40 rounded-3xl border border-pink-100 flex items-start gap-4">
                      <Sparkles className="text-primary flex-shrink-0" size={20} />
                      <p className="text-xs text-text-muted leading-relaxed italic">
                        By confirming, you are requesting a premium slot. We will prioritize your preferred time and contact you for final verification.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-4 pt-10">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-7 border-2 border-soft rounded-[2rem] text-[10px] font-black tracking-widest text-text-muted hover:bg-soft transition-all uppercase flex items-center justify-center gap-3"
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-[2] py-7 bg-text-dark text-white rounded-[2rem] text-[10px] font-black tracking-widest uppercase hover:bg-primary transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-primary/20"
                  >
                    Continue Ritual <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="flex-[2] py-7 bg-primary text-white rounded-[2rem] text-[10px] font-black tracking-widest uppercase hover:bg-text-dark transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,93,162,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Confirm Royal Visit"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

