import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Master of Engineering in Computer Science Engineering",
    institution: "Chandigarh University",
    period: "2024 – Pursuing",
    score: "80.4%"
  },
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Chandigarh Group of Colleges, Landran",
    period: "2019-2023",
    score: "84.7%"
  },
  {
    degree: "10+2",
    institution: "Delhi Public School, Faridabad",
    period: "2017-2019",
    score: "89.6%"
  },
  {
    degree: "10th",
    institution: "Dynasty International School, Faridabad",
    period: "2016-2017",
    score: "100%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {edu.degree}
              </h3>
              <p className="text-lightText">{edu.institution}</p>
              <div className="flex justify-between text-lightestText mt-2">
                <p>{edu.period}</p>
                <p>Score: {edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;