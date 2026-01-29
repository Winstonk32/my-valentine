import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopePage from "./pages/EnvelopePage";
import FeelingsPage from "./pages/FeelingsPage";
import ValentinePage from "./pages/ValentinePage";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const startMusic = () => {
    if (audioRef.current && !isPlaying) {
      // Set volume to 50% so it's not too loud
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(err => console.error("Playback failed:", err));
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Router>
      {/* FIXED PATH: Removed 'my-valentine/public' */}
      <audio ref={audioRef} src="/music/song.mp3" loop />

      <Routes>
        {/* Pass startMusic only to the first page (Envelope) */}
        <Route path="/" element={<EnvelopePage startMusic={startMusic} />} />
        <Route path="/feelings" element={<FeelingsPage />} />
        <Route path="/valentine" element={<ValentinePage />} />
      </Routes>

      {/* Floating Mute Toggle */}
      <AnimatePresence>
        {isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl"
          >
            {isMuted ? (
              <span className="text-white/40 text-lg">🔇</span>
            ) : (
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-pink-500 text-lg"
              >
                🎵
              </motion.span>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;