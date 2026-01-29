import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Accept startMusic as a prop from App.jsx
export default function EnvelopePage({ startMusic }) {
  const navigate = useNavigate();

  const handleOpenEnvelope = () => {
    // 1. Play the music (triggered by user interaction to bypass browser blocks)
    if (startMusic) startMusic();
    
    // 2. Navigate to the feelings gallery
    navigate("/feelings");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#120C1F] px-6 overflow-hidden">
      
      {/* Background Atmosphere: Deep Purple/Pink Glows */}
      <div className="absolute w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-[800px] h-[800px] bg-pink-900/10 rounded-full blur-[120px] -bottom-20 -right-20 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative group cursor-pointer z-10"
        onClick={handleOpenEnvelope}
      >
        {/* The Envelope */}
        <motion.div
          whileHover={{ y: -15, scale: 1.05 }}
          className="relative w-80 h-48 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden rounded-sm transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(255,45,117,0.3)]"
        >
          {/* Neon Pink Wax Seal with 'v' */}
          <div className="w-12 h-12 rounded-full bg-[#120C1F] border border-pink-500 shadow-[0_0_15px_rgba(255,45,117,0.4)] flex items-center justify-center z-20 group-hover:bg-pink-500 transition-all duration-500">
            <span className="text-pink-500 group-hover:text-white text-lg font-serif italic transition-colors">v</span>
          </div>

          {/* Minimalist Fold Lines */}
          <div className="absolute inset-0 border-t-[1px] border-black/5 origin-top-left rotate-[31deg] translate-y-[-1px]" />
          <div className="absolute inset-0 border-t-[1px] border-black/5 origin-top-right rotate-[-31deg] translate-y-[-1px]" />
          
          {/* Subtle Pinkish Tint on Hover */}
          <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/5 transition-colors duration-700" />
        </motion.div>

        {/* Interaction Hint */}
        <motion.div 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-max text-center"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.8em] text-pink-500 font-black italic">
            Tap to Open
          </span>
        </motion.div>
      </motion.div>

      {/* Subtle Footer Detail */}
      <div className="absolute bottom-12 text-[8px] tracking-[1.5em] text-white/10 uppercase font-black">
        A Love Story
      </div>
    </div>
  );
}