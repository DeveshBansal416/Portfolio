import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <p className="text-lightestText mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="space-y-4 mb-8">
          <p className="text-lightText">
            <span className="text-secondary">Email:</span> devesh416@gmail.com
          </p>
          <p className="text-lightText">
            <span className="text-secondary">Phone:</span> +91-9643929196
          </p>
          <p className="text-lightText">
            <span className="text-secondary">Location:</span> Faridabad, India
          </p>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://linkedin.com/in/devesh-bansal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightText hover:text-secondary transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/devesh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightText hover:text-secondary transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;