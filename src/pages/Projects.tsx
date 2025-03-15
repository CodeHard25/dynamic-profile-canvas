
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-accent rounded-full mb-3">
            My Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my most significant works, showcasing my expertise in Full Stack development
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <Link to={`/projects/${project.id}`} key={project.id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  github={project.github}
                  liveLink={project.liveLink}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center glass-card p-8"
        >
          <h2 className="text-2xl font-bold mb-3">Interested in Working Together?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="mailto:hardiktyagi007@gmail.com" 
            className="inline-block py-3 px-8 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
