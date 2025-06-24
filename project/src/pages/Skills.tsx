import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, MessageCircle } from 'lucide-react';
import { FloatingCube, FloatingSphere, GeometricShape } from '../components/3DElements';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 75, color: 'from-orange-400 to-red-500' },
    { name: 'CSS', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 60, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', level: 85, color: 'from-green-400 to-blue-500' },
    { name: 'MySQL', level: 85, color: 'from-blue-500 to-purple-600' },
    { name: 'C', level: 80, color: 'from-gray-400 to-gray-600' },
  ];

  const softSkills = [
    {
      name: 'Communication',
      icon: MessageCircle,
      description: 'Clear and effective communication across teams',
      color: 'text-blue-400',
    },
    {
      name: 'Leadership',
      icon: Users,
      description: 'Leading teams and projects with confidence',
      color: 'text-purple-400',
    },
    {
      name: 'Teamwork',
      icon: Users,
      description: 'Collaborative approach to problem-solving',
      color: 'text-green-400',
    },
    {
      name: 'Innovative Problem Solving',
      icon: Lightbulb,
      description: 'Creative solutions to complex challenges',
      color: 'text-yellow-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <FloatingCube className="top-40 left-16" delay={0} />
      <FloatingSphere className="top-32 right-20" delay={1.5} />
      <GeometricShape className="bottom-32 left-1/4" type="triangle" />
      <GeometricShape className="top-1/2 right-16" type="hexagon" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg">Technologies and abilities I've mastered</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Technical Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transform: 'perspective(1000px) rotateY(-5deg)',
            }}
          >
            <div className="flex items-center mb-8">
              <Code className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.2 * index, duration: 1, ease: "easeOut" }}
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative`}
                      style={{
                        boxShadow: `0 0 10px rgba(59, 130, 246, 0.5)`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-2xl" />
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transform: 'perspective(1000px) rotateY(5deg)',
            }}
          >
            <div className="flex items-center mb-8">
              <Lightbulb className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Soft Skills</h2>
            </div>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 relative"
                  style={{
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                    transform: 'perspective(500px) rotateX(2deg)',
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg bg-white/10 ${skill.color} relative`}>
                      <skill.icon className="h-5 w-5" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{skill.name}</h3>
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-2xl" />
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30 text-center relative"
          style={{
            boxShadow: '0 12px 40px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transform: 'perspective(1000px) rotateX(-2deg)',
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies. 
            These skills represent my current expertise, but I'm always eager to learn more 
            and take on new challenges.
          </p>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;