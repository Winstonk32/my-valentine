import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopePage from "./pages/EnvelopePage";
import FeelingsPage from "./pages/FeelingsPage";
import ValentinePage from "./pages/ValentinePage";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Pre-load the audio when the app mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      
      // Use the play promise to handle browsers that delay playback
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log("Music started instantly");
          })
          .catch((error) => {
            console.log("Playback interaction required", error);
          });
      }
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
      {/* PRELOAD="AUTO" is the key here. 
          It tells the browser to download the song immediately 
      */}
      <audio 
        ref={audioRef} 
        src="/music/song2.mp3" 
        preload="auto" 
        loop 
      />

      <Routes>
        <Route path="/" element={<EnvelopePage startMusic={startMusic} />} />
        <Route path="/feelings" element={<FeelingsPage />} />
        <Route path="/valentine" element={<ValentinePage />} />
      </Routes>

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