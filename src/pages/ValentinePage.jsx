import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentinePage() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  // --- CONFIGURATION ---
  // IMPORTANT: No '+', no '00', and no '0' before the area code.
  // Example for UK: "447123456789" | Example for USA: "18001234567"
  const phoneNumber = "254794744770"; 
  const message = encodeURIComponent("YES! I will be your Valentine! ❤️✨");

  const handleYes = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
    // This method is the most robust for mobile browsers to trigger the app
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  const moveButton = () => {
    // Keeps the "No" button escaping within a reasonable range
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPos({ x, y });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#120C1F] text-white px-6 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[120px] -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -bottom-20 -right-20 pointer-events-none" />

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
            {/* Pulsing Start Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: ["0 0 0px rgba(255,45,117,0)", "0 0 30px rgba(255,45,117,0.3)", "0 0 0px rgba(255,45,117,0)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 rounded-full border border-pink-500/30 flex items-center justify-center mb-6 bg-pink-500/5 transition-all hover:bg-pink-500/20"
            >
              <span className="text-4xl text-pink-400">✨</span>
            </motion.div>
            
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
            {/* The Floating Flower */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8 text-6xl drop-shadow-[0_0_15px_rgba(255,45,117,0.4)]"
            >
              🌸
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-serif italic mb-20 leading-tight tracking-tight">
              Will you be my <br /> 
              <span className="text-pink-500 underline decoration-pink-500/20 underline-offset-8">Valentine?</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-12 items-center justify-center w-full">
              {/* YES BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255, 45, 117, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="px-16 py-5 bg-white text-[#120C1F] rounded-full text-[12px] font-black tracking-[0.4em] uppercase transition-all shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Yes</span>
                {/* Subtle shine sweep */}
                <motion.div 
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-pink-500/10 to-transparent skew-x-12"
                />
              </motion.button>

              {/* NO BUTTON */}
              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                onMouseEnter={moveButton}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-white/40 px-4 py-2"
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Details */}
      <div className="absolute bottom-12 text-[8px] tracking-[1.5em] text-white/10 uppercase font-black">
        Forever • 2026
      </div>
    </div>
  );
}