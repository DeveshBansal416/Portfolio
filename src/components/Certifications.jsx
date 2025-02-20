import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Java Development",
    platform: "Udemy",
    link: "#"
  },
  {
    title: "SQL Programming",
    platform: "Udemy",
    link: "#"
  },
  {
    title: "Data Structures and Algorithms",
    platform: "Udemy",
    link: "#"
  },
  {
    title: "Web Development (HTML, CSS, JavaScript)",
    platform: "Udemy",
    link: "#"
  },
  {
    title: "C and C++ Programming",
    platform: "Udemy",
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                {cert.title}
              </h3>
              <p className="text-lightestText mb-4">
                Platform: {cert.platform}
              </p>
              <a 
                href={cert.link}
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;