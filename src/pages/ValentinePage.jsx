import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentinePage() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;
    setNoPos({ x, y });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#120C1F] text-white px-6 overflow-hidden">
      
      {/* Background: Subtle Heart Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.2, 0], x: Math.random() * 100 + "vw" }}
            transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, ease: "linear" }}
            className="absolute text-pink-500/30 text-xs"
          >
            ♥
          </motion.span>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            className="z-10 flex flex-col items-center cursor-pointer"
            onClick={() => setIsRevealed(true)}
          >
            {/* The Main "Call to Action" Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: ["0 0 0px rgba(255,45,117,0)", "0 0 20px rgba(255,45,117,0.4)", "0 0 0px rgba(255,45,117,0)"] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full border border-pink-500/30 flex items-center justify-center mb-6 bg-pink-500/5 transition-colors hover:bg-pink-500/20"
            >
              <span className="text-3xl text-pink-400">✨</span>
            </motion.div>

            {/* Clear, Minimalist Instruction */}
            <motion.p 
              className="text-[10px] uppercase tracking-[0.8em] text-white/40 font-bold"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tap to Reveal
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-xl w-full z-10 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8 text-5xl drop-shadow-[0_0_10px_rgba(255,45,117,0.5)]"
            >
              🌸
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-serif italic mb-20 leading-tight tracking-tight">
              Will you be my <br /> 
              <span className="text-pink-500 underline decoration-pink-500/20 underline-offset-8">Valentine?</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-12 items-center justify-center w-full">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#FF2D75" }}
                className="px-14 py-3 border border-pink-500/50 text-white rounded-full text-[10px] font-black tracking-[0.3em] uppercase transition-all shadow-[0_0_20px_rgba(255,45,117,0.2)]"
                onClick={() => alert("Yay! ❤️")}
              >
                Yes
              </motion.button>

              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                onMouseEnter={moveButton}
                className="text-[9px] uppercase tracking-[0.4em] text-white/20 hover:text-white/40"
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-12 text-[8px] tracking-[1.2em] text-white/10 uppercase font-bold">
        Forever • 2026
      </div>
    </div>
  );
}