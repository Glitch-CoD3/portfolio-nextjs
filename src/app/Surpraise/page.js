"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Simple typewriter hook
function useTypewriter(text, speed = 50) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

// Floating hearts component
function FloatingHearts({ count = 20 }) {
  const hearts = Array.from({ length: count });
  return hearts.map((_, i) => (
    <motion.div
      key={i}
      className="absolute text-pink-400 text-2xl"
      style={{
        left: `${Math.random() * 90}%`,
        bottom: 0,
        position: "absolute",
        fontSize: `${10 + Math.random() * 20}px`,
      }}
      animate={{ y: [-10, -600], opacity: [1, 0], rotate: [0, 360] }}
      transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
    >
      ❤️
    </motion.div>
  ));
}

export default function ProposalPage() {
  const [activeSection, setActiveSection] = useState(""); // "wish" | "proposal" | "love" | "yes"
  const [showConfetti, setShowConfetti] = useState(false);

  const proposalText = "Pakhi, Will you be mine forever? I Want to Make You my Lifeline ❤️";

  const typedProposal = useTypewriter(proposalText, 40);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-500 text-white p-6 text-center overflow-hidden">

      {/* Confetti */}
      {showConfetti && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-yellow-300 rounded-full absolute"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, 600], x: [0, 20], rotate: 360 }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </motion.div>
      )}

      {/* Floating hearts */}
      {activeSection === "yes" && <FloatingHearts count={20} />}

      <motion.h1
        className="text-5xl font-bold mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎉 Happy Birthday <br /> 
        <h1 className="ml-32">Pakhi 💖</h1>
      </motion.h1>

      <motion.p
        className="text-lg max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        তুমি শুধু আমার ভালোবাসা নও, তুমি আমার শান্তি, আমার প্রেরণা, আমার স্বপ্ন।
      </motion.p>

      <div className="flex flex-wrap gap-4 justify-center z-10">
        {/* 🎂 Surprise */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-2xl shadow-lg"
          onClick={() => {
            setActiveSection("wish");
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 4000);
          }}
        >
          🎂 Click for Surprise
        </motion.button>

        {/* 💖 Proposal */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg"
          onClick={() => setActiveSection("proposal")}
        >
          💖 One More Surprise
        </motion.button>

        {/* 💞 Ask Love */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg"
          onClick={() => setActiveSection("love")}
        >
          💞 Do you love me?
        </motion.button>
      </div>

      {/* 🎂 Birthday Message */}
      {activeSection === "wish" && (
        <motion.div
          className="mt-10 text-2xl bg-white/20 p-6 rounded-2xl backdrop-blur-lg z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          🎈 You are the most beautiful part of my life, the reason behind my smile, and the peace in my heart.  
          Every moment with you feels special, and today, I just want to remind you how deeply I love you. 💕
        </motion.div>
      )}

      {/* 💍 Proposal Message with Typewriter */}
      {activeSection === "proposal" && (
        <motion.div
          className="mt-10 text-3xl font-semibold bg-white/20 p-6 rounded-2xl backdrop-blur-lg z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {typedProposal}
        </motion.div>
      )}

      {/* 💞 Love Question */}
      {activeSection === "love" && (
        <motion.div
          className="mt-10 text-2xl bg-white/20 p-6 rounded-2xl backdrop-blur-lg z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          💬 Do you love me Mim?
          <div className="flex gap-6 justify-center mt-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded-xl"
              onClick={() => setActiveSection("yes")}
            >
              💞 Yes, I love you
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-red-500 text-white font-semibold px-6 py-2 rounded-xl"
              onClick={() => setActiveSection("")}
            >
              😅 Maybe later
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* ❤️ If she loves you */}
      {activeSection === "yes" && (
        <motion.div
          className="mt-10 text-3xl font-semibold bg-white/20 p-6 rounded-2xl backdrop-blur-lg z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          ❤️ You just made my life complete! ❤️  
          <br />
          You’re my world, my forever, my everything 💫
        </motion.div>
      )}
    </div>
  );
}
