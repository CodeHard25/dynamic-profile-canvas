
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="lg:col-span-3"
    >
      <h2 className="text-3xl font-bold mb-6">Hello, I'm a Full Stack Developer</h2>
      
      <div className="prose prose-lg max-w-none mb-10">
        <p>
          Dynamic Full Stack Developer with a proven track record at PROIND BUSINESS SOLUTIONS, 
          enhancing user experiences and optimizing backend processes. Expert in AngularJS, React, 
          and cloud services, with a knack for efficient database management and innovative problem-solving.
        </p>
        
        <p>
          Demonstrates exceptional teamwork and technical prowess, significantly improving project outcomes. 
          Focused on creating modern, responsive, and user-friendly web applications with clean code and 
          best practices.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="rounded-full">
          <Link to="/projects">View My Projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <Link to="/skills">Explore My Skills</Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="rounded-full">
          <Link to="/contact">Get In Touch</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default AboutHero;
