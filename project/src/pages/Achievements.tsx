import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Calendar, Users, Briefcase } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Inter-house Quiz Competitions',
      category: 'Academic',
      description: 'Won multiple inter-house quiz competitions demonstrating strong knowledge and quick thinking abilities.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      date: 'Multiple Occasions',
      type: 'winner'
    },
    {
      id: 2,
      title: 'Sports Events Champion',
      category: 'Sports',
      description: 'Achieved victory in various sports events, showcasing teamwork and competitive spirit.',
      icon: Award,
      color: 'from-green-400 to-blue-500',
      date: 'Various Events',
      type: 'winner'
    },
    {
      id: 3,
      title: 'CBSE Essay Writing Competition',
      category: 'Writing',
      description: '3rd place in CBSE essay writing competition, demonstrating excellent writing and communication skills.',
      icon: Star,
      color: 'from-purple-400 to-pink-500',
      date: 'National Level',
      type: 'medal'
    },
    {
      id: 4,
      title: 'JIC Member',
      category: 'Leadership',
      description: 'Ex-member of JIC (JECRC Incubation Centre), contributing to innovation and entrepreneurship activities.',
      icon: Users,
      color: 'from-blue-400 to-purple-500',
      date: 'Academic Year',
      type: 'role'
    },
    {
      id: 5,
      title: 'YIIC 2.0 Intern at Scaler',
      category: 'Professional',
      description: 'Completed internship at YIIC 2.0 by Scaler, gaining valuable industry experience and technical skills.',
      icon: Briefcase,
      color: 'from-teal-400 to-blue-500',
      date: 'Recent',
      type: 'experience'
    },
  ];

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
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h1>
          <p className="text-gray-400 text-lg">Milestones and recognitions along my journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <achievement.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-white`}>
                          {achievement.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Achievement Type Indicator */}
                  <div className="hidden md:block">
                    {achievement.type === 'winner' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center border-2 border-yellow-400"
                      >
                        <Trophy className="h-6 w-6 text-yellow-400" />
                      </motion.div>
                    )}
                    {achievement.type === 'medal' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-purple-400"
                      >
                        <Award className="h-6 w-6 text-purple-400" />
                      </motion.div>
                    )}
                    {(achievement.type === 'role' || achievement.type === 'experience') && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-400"
                      >
                        <Star className="h-6 w-6 text-blue-400" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Timeline line (except for last item) */}
              {index < achievements.length - 1 && (
                <div className="hidden md:block absolute left-8 top-24 w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Journey of Excellence</h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Each achievement represents a step forward in my journey of learning and growth. 
            From academic excellence to leadership roles, these experiences have shaped me into 
            a well-rounded individual ready to take on new challenges.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;