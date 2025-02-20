import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Bank Application",
    description: "A console-based banking application built with Java and SQL, featuring secure transaction management and comprehensive account operations.",
    technologies: ["Java", "SQL", "JDBC"],
    link: "#"
  },
  {
    title: "Responsive Web Development",
    description: "Interactive and responsive web pages with dynamic content integration via backend services.",
    technologies: ["HTML", "CSS", "JavaScript", "Backend Integration"],
    link: "#"
  },
  {
    title: "Compliance Platform API",
    description: "Designed and developed APIs for compliance monitoring using Java and Spring Boot, with efficient MySQL database management.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                {project.title}
              </h3>
              
              <p className="text-lightestText mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-sm text-secondary bg-primary px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link}
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;