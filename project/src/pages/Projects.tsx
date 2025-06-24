import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, Sparkles, Code } from 'lucide-react';
import { FloatingCube, FloatingSphere, GeometricShape, ParticleField } from '../components/3DElements';

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      {/* 3D Background Elements */}
      <ParticleField />
      <FloatingCube className="top-32 left-10" delay={0} />
      <FloatingCube className="bottom-40 right-16" delay={2} />
      <FloatingSphere className="top-60 right-20" delay={1} />
      <FloatingSphere className="bottom-32 left-1/4" delay={3} />
      <GeometricShape className="top-40 right-1/3" type="triangle" />
      <GeometricShape className="bottom-60 left-16" type="diamond" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg">Innovative solutions and creative implementations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Main Content */}
          <div 
            className="relative bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transform: 'perspective(1000px) rotateX(5deg)',
            }}
          >
            {/* Icon Animation */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 relative"
              style={{
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
                transform: 'rotateX(10deg) rotateY(-10deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <Rocket className="h-12 w-12 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Coming Soon...
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Great things are in the making...
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {[
                { icon: Code, title: 'Web Applications', desc: 'Full-stack solutions with modern technologies', color: 'text-blue-400' },
                { icon: Sparkles, title: 'AI Projects', desc: 'Machine learning and AI-powered applications', color: 'text-purple-400' },
                { icon: Clock, title: 'Innovation', desc: 'Creative solutions to real-world problems', color: 'text-teal-400' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 relative"
                  style={{
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    transform: 'perspective(500px) rotateX(5deg)',
                  }}
                >
                  <item.icon className={`h-8 w-8 ${item.color} mx-auto mb-4`} />
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30 relative"
              style={{
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.2)',
              }}
            >
              <p className="text-gray-300 text-lg">
                I'm currently working on some exciting projects that showcase my skills in 
                <span className="text-blue-400 font-semibold"> web development</span>, 
                <span className="text-purple-400 font-semibold"> AI/ML</span>, and 
                <span className="text-teal-400 font-semibold"> innovative problem-solving</span>. 
                Stay tuned for amazing updates!
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl" />
            </motion.div>

            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl" />
          </div>
        </motion.div>

        {/* Progress Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              title: 'In Development',
              projects: [
                { name: 'Portfolio Website', progress: 100, color: 'from-blue-400 to-blue-600' },
                { name: 'Web Application', progress: 60, color: 'from-purple-400 to-purple-600' }
              ]
            },
            {
              title: 'Planning Phase',
              projects: [
                { name: 'AI Project', progress: 25, color: 'from-teal-400 to-teal-600' },
                { name: 'Mobile App', progress: 10, color: 'from-yellow-400 to-yellow-600' }
              ]
            }
          ].map((section, sectionIndex) => (
            <div 
              key={section.title}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 relative"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transform: `perspective(1000px) rotateY(${sectionIndex === 0 ? '-2deg' : '2deg'})`,
              }}
            >
              <h4 className="text-white font-semibold mb-3">{section.title}</h4>
              <div className="space-y-3">
                {section.projects.map((project, index) => (
                  <div key={project.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{project.name}</span>
                      <span className="text-blue-400">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 2, delay: 1 + (sectionIndex * 0.2) + (index * 0.2) }}
                        className={`h-2 bg-gradient-to-r ${project.color} rounded-full relative`}
                        style={{
                          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;