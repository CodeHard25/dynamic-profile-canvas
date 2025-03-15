
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';
import Layout from '@/components/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="min-h-screen overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
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
            className="mb-16"
          >
            {/* Grid layout inspired by lynnandtonic.com */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projectsData.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`
                    transform transition-all duration-300 hover:-translate-y-2
                    ${index % 5 === 0 ? 'md:col-span-2 md:row-span-1' : ''}
                    ${index % 5 === 3 ? 'md:col-span-1 md:row-span-2' : ''}
                  `}
                >
                  <Link to={`/projects/${project.id}`}>
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
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center glass-card p-8 rounded-3xl"
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
    </Layout>
  );
};

export default Projects;
