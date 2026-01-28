import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const slides = [
  { img: "/images/1.jpeg", text: "You bring Joy in every moment.", date: "01" },
  { img: "/images/2.jpeg", text: "Every moment is a quiet poetry.", date: "02" },
  { img: "/images/3.jpeg", text: "You are a moment worth reliving.", date: "03" },
];

export default function FeelingsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#120C1F] text-white px-6 py-24 overflow-x-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="fixed w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] -top-20 -left-20 pointer-events-none" />
      <div className="fixed w-[800px] h-[800px] bg-pink-900/10 rounded-full blur-[120px] -bottom-20 -right-20 pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24 z-10"
      >
        <span className="uppercase tracking-[0.8em] text-[10px] text-pink-500 font-bold block mb-4 drop-shadow-[0_0_8px_rgba(255,45,117,0.6)]">
          The Archives
        </span>
        <h1 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter">
          JOY in <span className="text-white underline decoration-pink-500/30 underline-offset-8">Motion</span>
        </h1>
      </motion.div>

      {/* Gallery Grid - Reduced width for smaller, more elegant look */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl w-full z-10 mb-20">
        {slides.map((slide, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="flex flex-col group items-center"
          >
            {/* PHOTO CONTAINER: Narrower aspect ratio and max-width */}
            <div className="relative w-full max-w-[240px] aspect-[2/3] mb-6 overflow-hidden bg-white p-1 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-pink-500/10 transition-all duration-700 group-hover:border-pink-500/50 group-hover:shadow-[0_0_30px_rgba(255,45,117,0.3)]">
              
              {/* AUTOMATIC ZOOM ANIMATION */}
              <motion.img
                animate={{ 
                  scale: [1, 1.12, 1], 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: idx * 0.8
                }}
                src={slide.img}
                alt={`memory-${idx}`}
                className="w-full h-full object-cover opacity-100"
              />

              {/* Date Tag */}
              <div className="absolute top-1 right-1 bg-[#120C1F] text-pink-500 text-[9px] font-bold px-2 py-0.5 z-20">
                {slide.date}
              </div>
            </div>

            {/* Caption: Centered and smaller */}
            <p className="text-[10px] text-center font-medium tracking-[0.2em] text-white/80 uppercase italic group-hover:text-pink-400 transition-colors duration-500 max-w-[200px]">
              {slide.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* HIGH VISIBILITY PROCEED BUTTON */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-16 mb-10 z-20"
      >
        <motion.button
          onClick={() => navigate("/valentine")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 0 15px rgba(255,45,117,0.2)", 
              "0 0 45px rgba(255,45,117,0.5)", 
              "0 0 15px rgba(255,45,117,0.2)"
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-white text-[#120C1F] px-12 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-2xl flex items-center gap-4 group transition-all relative overflow-hidden"
        >
          <span className="relative z-10">Proceed to the end</span>
          <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
          
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-pink-500/10 to-transparent skew-x-12"
          />
        </motion.button>
      </motion.div>

      <div className="opacity-30 text-[8px] uppercase tracking-[1.2em] text-pink-500/80 font-black mb-20 flex items-center gap-4">
        MADE WITH <span className="text-pink-500 animate-pulse">♥</span> FOR YOU
      </div>
    </div>
  );
}