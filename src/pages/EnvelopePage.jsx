import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function EnvelopePage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-romantic-bg px-6 overflow-hidden">
      {/* Deep Purple/Pink Ambient Blurs */}
      <div className="absolute w-[800px] h-[800px] bg-romantic-lilac/10 rounded-full blur-[120px] -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-[800px] h-[800px] bg-romantic-wine/30 rounded-full blur-[120px] -bottom-20 -right-20 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative group cursor-pointer z-10"
        onClick={() => navigate("/feelings")}
      >
        {/* The Envelope - Now with a subtle Purple-White Tint */}
        <motion.div
          whileHover={{ y: -12, scale: 1.05 }}
          className="relative w-80 h-48 bg-[#FDFCFB] border-2 border-romantic-lilac/30 shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden rounded-lg transition-all duration-700"
        >
          {/* Neon Seal */}
          <div className="w-12 h-12 rounded-full bg-romantic-bg border border-romantic-rose shadow-[0_0_15px_#FF2D75] flex items-center justify-center z-10 group-hover:bg-romantic-rose transition-all duration-500">
            <span className="text-romantic-rose group-hover:text-white text-lg font-serif italic">v</span>
          </div>

          {/* Elegant Fold Lines */}
          <div className="absolute inset-0 border-t-[1px] border-romantic-lilac/10 origin-top-left rotate-[31deg]" />
          <div className="absolute inset-0 border-t-[1px] border-romantic-lilac/10 origin-top-right rotate-[-31deg]" />
        </motion.div>

        {/* Hover Hint */}
        <motion.div 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-max text-center"
          animate={{ opacity: [0.4, 0.8, 0.4], y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-[11px] uppercase tracking-[0.6em] text-romantic-plum font-medium italic">
            Tap to open
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}