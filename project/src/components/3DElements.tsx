import React from 'react';
import { motion } from 'framer-motion';

export const FloatingCube = ({ className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`absolute w-8 h-8 ${className}`}
      style={{
        background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
        transform: 'rotateX(45deg) rotateY(45deg)',
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: [45, 90, 45],
        rotateY: [45, 90, 135, 45],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-lg backdrop-blur-sm border border-white/10" />
    </motion.div>
  );
};

export const FloatingSphere = ({ className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`absolute w-6 h-6 rounded-full ${className}`}
      style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(20, 184, 166, 0.6), rgba(59, 130, 246, 0.3))',
        boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)',
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 10, -10, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

export const GeometricShape = ({ className = "", type = "triangle" }) => {
  const shapeStyles = {
    triangle: {
      width: 0,
      height: 0,
      borderLeft: '15px solid transparent',
      borderRight: '15px solid transparent',
      borderBottom: '25px solid rgba(147, 51, 234, 0.3)',
    },
    diamond: {
      width: '20px',
      height: '20px',
      background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))',
      transform: 'rotate(45deg)',
    },
    hexagon: {
      width: '20px',
      height: '20px',
      background: 'rgba(34, 197, 94, 0.3)',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    },
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      style={shapeStyles[type]}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};