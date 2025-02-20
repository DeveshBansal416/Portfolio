import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-lightestText">
            <p className="mb-4">
              Hello! I'm Devesh, a passionate Software Engineer with a strong foundation in Computer Science 
              and a drive for creating efficient, scalable solutions. Currently pursuing my Master's in 
              Computer Science Engineering at Chandigarh University, I combine academic excellence with 
              practical industry experience.
            </p>
            
            <p className="mb-4">
              At ITC InfoTech, I've had the opportunity to work on mission-critical projects, where I've 
              developed and maintained robust software solutions, collaborated with cross-functional teams, 
              and contributed to the entire software development lifecycle.
            </p>
            
            <p>
              I'm particularly passionate about problem-solving, having solved over 250 LeetCode questions, 
              and I'm always eager to learn and adapt to new technologies and methodologies in our 
              ever-evolving field.
            </p>
          </div>
          
          <div className="relative group">
            <div className="relative w-64 h-64 mx-auto">
              <img 
                src="src\profile.jpg" 
                alt="Devesh Bansal" 
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-2 border-secondary rounded-lg transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;