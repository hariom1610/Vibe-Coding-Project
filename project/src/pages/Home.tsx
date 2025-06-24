import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FloatingCube, FloatingSphere, GeometricShape, ParticleField } from '../components/3DElements';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* 3D Background Elements */}
      <ParticleField />
      <FloatingCube className="top-20 left-10" delay={0} />
      <FloatingCube className="top-40 right-20" delay={2} />
      <FloatingSphere className="top-32 left-1/4" delay={1} />
      <FloatingSphere className="bottom-40 right-1/3" delay={3} />
      <GeometricShape className="top-60 right-10" type="triangle" />
      <GeometricShape className="bottom-32 left-20" type="diamond" />
      <GeometricShape className="top-1/3 right-1/4" type="hexagon" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative mx-auto w-32 h-32 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center relative"
              style={{
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                transform: 'rotateX(10deg) rotateY(-10deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <span className="text-4xl font-bold text-white relative z-10">HS</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-blue-400/30 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{
            textShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
          }}
        >
          Hey, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent relative">
            Hariom
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-lg blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          I love building things with code
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 max-w-2xl mx-auto relative"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transform: 'perspective(1000px) rotateX(5deg)',
          }}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">Currently</span>
          </div>
          <p className="text-gray-300 text-lg">
            Student at JECRC | Tech and AI Enthusiast | Creative Thinker | Aspiring Software Developer
          </p>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-gray-400 text-lg italic mb-8">
            "Building the future, one line of code at a time."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
              style={{
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
              }}
            >
              <span className="relative z-10">Know More</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;