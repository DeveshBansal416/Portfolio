import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Cloud",
    skills: ["AWS"]
  },
  {
    title: "Languages",
    skills: ["Java", "SQL", "HTML", "CSS", "JavaScript", "ReactJS"]
  },
  {
    title: "Operating Systems",
    skills: ["Windows", "Ubuntu"]
  },
  {
    title: "Version Control",
    skills: ["Git"]
  },
  {
    title: "IDEs",
    skills: ["Eclipse", "IntelliJ Idea", "VS Code"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["MySQL Workbench", "Postman"]
  },
  {
    title: "Problem Solving",
    skills: ["Data Structures", "Algorithms", "LeetCode (250+ solved)"]
  },
  {
    title: "Course Outcomes",
    skills: ["SDLC", "STLC", "OOPs", "DBMS"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;