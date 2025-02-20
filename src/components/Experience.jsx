import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience</h2>
        
        <div className="max-w-3xl">
          <motion.div 
            className="bg-tertiary p-6 rounded-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-secondary">Software Engineer</h3>
                <p className="text-lightText">ITC InfoTech, Bengaluru</p>
              </div>
              <p className="text-lightestText">Present</p>
            </div>
            
            <ul className="list-disc list-inside text-lightestText space-y-2">
              <li>Developed and maintained software solutions for ITC Ltd's internal IT projects</li>
              <li>Collaborated with cross-functional teams to troubleshoot technical issues and ensure smooth project delivery</li>
              <li>Contributed to bug resolution and API development for mission-critical applications</li>
              <li>Implemented efficient database queries and optimized application performance</li>
              <li>Participated in code reviews and provided constructive feedback to team members</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;