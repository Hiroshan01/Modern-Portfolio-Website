import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code,
  Terminal,
  Cpu,
  Zap,
} from "lucide-react";
import { smoothScrollTo } from "../utils/smoothScroll";
import { useState, useEffect } from "react";

import profileImage from "../assets/portfile.jpeg";

export const Hero = () => {
  const [codingText, setCodingText] = useState(0);
  const [particles, setParticles] = useState([]);

  const codingSnippets = [
    "const code = 'poetry';",
    "function create() { return magic; }",
    "while (learning) { grow(); }",
    "if (passionate) { build(); }",
    "=> innovation.deploy();",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodingText((prev) => (prev + 1) % codingSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  const codeLines = [
    { text: "const app = () => {", color: "text-yellow-400" },
    { text: "  return <Component />;", color: "text-yellow-400" },
    { text: "async function fetch()", color: "text-yellow-400" },
    { text: "useState([])", color: "text-yellow-400" },
    { text: "def calculate():", color: "text-blue-400" },
    { text: "class Model:", color: "text-blue-400" },
    { text: "import numpy as np", color: "text-blue-400" },
    { text: "for i in range(10):", color: "text-blue-400" },
    { text: "<div className=''>", color: "text-orange-400" },
    { text: "display: flex;", color: "text-pink-400" },
    { text: "{ }", color: "text-green-400" },
    { text: "=>", color: "text-purple-400" },
    { text: "</>", color: "text-cyan-400" },
    { text: "//TODO", color: "text-gray-400" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden pt-16"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Matrix-style code rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeLines.map((code, i) => (
          <motion.div
            key={i}
            className={`absolute font-mono text-sm font-bold ${code.color} opacity-30`}
            initial={{ x: `${Math.random() * 100}%`, y: -50 }}
            animate={{ y: "110vh" }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {code.text}
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-indigo-500/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,100 Q250,200 500,100 T1000,100"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0,300 Q250,400 500,300 T1000,300"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating tech icons */}
      <motion.div
        className="absolute top-20 left-10 text-indigo-500/20"
        animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 text-purple-500/20"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Terminal size={70} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-32 text-cyan-500/20"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Cpu size={55} />
      </motion.div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile image with holographic effect */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              {/* Rotating rings */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-indigo-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-6 rounded-full border-2 border-purple-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing glow */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 opacity-60 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Hiroshan Madusanka"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status badge */}
              <motion.div
                className="absolute bottom-2 right-2 flex items-center gap-1 bg-green-500 px-2 py-1 rounded-full border-2 border-gray-800"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-xs font-bold text-white">ONLINE</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Name with glitch effect */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 relative text-indigo-400 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Hiroshan Madusanka
            </motion.span>
            {/* Lightning bolt */}
            <motion.span
              className="absolute -right-4 sm:-right-8 top-0 text-yellow-400"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap size={32} />
            </motion.span>
          </motion.h1>

          {/* Typing effect subtitle */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-bold text-indigo-300 mb-2">
              <Terminal size={24} className="text-cyan-400" />
              <span>Full-Stack Web Developer</span>
            </div>
          </motion.div>

          {/* Description with fade in */}
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Crafting digital experiences with cutting-edge technologies.
            Building the future, one line of code at a time.
          </motion.p>

          {/* Animated code snippet display */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3">
              <Code className="text-indigo-400" size={24} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={codingText}
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: -90 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="font-mono text-sm sm:text-base bg-gray-900/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-indigo-500/30 shadow-lg shadow-indigo-500/20">
                    <span className="text-cyan-400">
                      {codingSnippets[codingText]}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* CTA buttons with magnetic hover */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={() => smoothScrollTo("projects")}
              className="group relative px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold text-base sm:text-lg overflow-hidden shadow-lg shadow-indigo-500/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={20} />
                View My Work
              </span>
            </motion.button>

            <motion.button
              onClick={() => smoothScrollTo("contact")}
              className="px-8 py-3 sm:py-4 bg-gray-800/50 backdrop-blur-sm text-white border-2 border-indigo-500/50 hover:border-indigo-400 rounded-lg font-bold text-base sm:text-lg transition-all"
              whileHover={{ scale: 1.05, y: -2, borderColor: "#818cf8" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social links with 3D effect */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {[
              {
                href: "https://github.com/Hiroshan01",
                icon: Github,
                label: "GitHub",
                color: "hover:bg-purple-600",
              },
              {
                href: "https://www.linkedin.com/in/hiroshan-madushanka-a5a436282/",
                icon: Linkedin,
                label: "LinkedIn",
                color: "hover:bg-blue-600",
              },
              {
                href: "mailto:pmhiroshan@gmail.com",
                icon: Mail,
                label: "Email",
                color: "hover:bg-indigo-600",
              },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`p-3 sm:p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white transition-all ${social.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              onClick={() => smoothScrollTo("about")}
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
              aria-label="Scroll to about section"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
            >
              <ArrowDown size={32} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, transparent 2px, transparent 4px)",
        }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
};
