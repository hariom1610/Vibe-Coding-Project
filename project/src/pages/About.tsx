import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Target, Quote } from 'lucide-react';
import { FloatingCube, FloatingSphere, GeometricShape } from '../components/3DElements';

const About = () => {
  const traits = ['Creative', 'Curious', 'Disciplined', 'Passionate', 'Simple'];
  const hobbies = ['Reading', 'Playing Games', 'Exploring', 'Learning New Things'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      {/* 3D Background Elements */}
      <FloatingCube className="top-32 right-10" delay={1} />
      <FloatingSphere className="top-60 left-20" delay={2} />
      <GeometricShape className="bottom-40 right-1/4" type="diamond" />
      <GeometricShape className="top-1/2 left-10" type="hexagon" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-400 text-lg">Get to know the person behind the code</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Introduction */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transform: 'perspective(1000px) rotateX(2deg)',
            }}
          >
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Introduction</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello everyone, my name is Hariom Shivnani, I am a young and innovative tech and AI 
              enthusiast. I'm currently in my 2nd year of B.Tech CSE at JECRC Foundation. I enjoy 
              problem-solving, have leadership and communication skills, and love learning about 
              new technologies while exploring entrepreneurship.
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-2xl" />
          </motion.div>

          {/* Personal Traits */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center mb-6">
              <Target className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Personal Traits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 text-center border border-blue-400/30 relative"
                  style={{
                    boxShadow: '0 4px 16px rgba(59, 130, 246, 0.2)',
                    transform: 'perspective(500px) rotateX(5deg)',
                  }}
                >
                  <span className="text-white font-medium relative z-10">{trait}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center mb-6">
              <Heart className="h-6 w-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Hobbies & Interests</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center p-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg border border-teal-400/30 relative"
                  style={{
                    boxShadow: '0 4px 16px rgba(20, 184, 166, 0.2)',
                  }}
                >
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 relative z-10">{hobby}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30 text-center relative"
            style={{
              boxShadow: '0 12px 40px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transform: 'perspective(1000px) rotateX(-2deg)',
            }}
          >
            <Quote className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4">
              "Building the future, one line of code at a time."
            </blockquote>
            <p className="text-gray-400">— My Motto</p>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-2xl" />
          </motion.div>

          {/* Location Info */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center relative"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Currently Based In</h3>
            <p className="text-gray-300 text-lg">Jaipur, Rajasthan 📍</p>
            <p className="text-gray-400 mt-2">Student at JECRC Foundation</p>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-blue-600/5 rounded-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;