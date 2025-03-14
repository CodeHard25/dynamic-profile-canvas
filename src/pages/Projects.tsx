
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const projectsData = [
  {
    title: 'Enterprise Management System',
    description: 'A comprehensive system built with .NET Core and React for managing company resources, employees, and projects.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['C#', '.NET Core', 'React', 'TypeScript', 'SQL Server', 'Entity Framework'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with a RESTful API backend and a responsive React frontend.',
    image: 'https://images.unsplash.com/photo-1556742077-0a6b7a4a0c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['ASP.NET', 'React', 'Redux', 'Azure', 'MongoDB', 'Docker'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Healthcare Portal',
    description: 'A secure healthcare portal allowing patients to access medical records and communicate with providers.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['.NET', 'React', 'GraphQL', 'Azure AD B2C', 'SQL Server'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Real-time Collaboration Tool',
    description: 'A web application enabling teams to collaborate on documents and projects in real-time.',
    image: 'https://images.unsplash.com/photo-1600267165089-12b07181450f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['SignalR', 'React', '.NET Core', 'WebSockets', 'Redis'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Financial Dashboard',
    description: 'An interactive dashboard for visualizing financial data with advanced filtering capabilities.',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['C#', 'React', 'D3.js', 'Entity Framework', 'Identity Server'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile application for tracking workouts and nutrition with a .NET backend.',
    image: 'https://images.unsplash.com/photo-1571019113651-415d77c547f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['Xamarin', '.NET', 'React Native', 'Azure Functions', 'CosmosDB'],
    github: 'https://github.com',
    liveLink: 'https://example.com'
  }
];

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
            A collection of my most significant works, showcasing my expertise in .NET and React development
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                github={project.github}
                liveLink={project.liveLink}
                index={index}
              />
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
            href="mailto:contact@example.com" 
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
