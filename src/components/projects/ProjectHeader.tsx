
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectHeaderProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    liveLink?: string;
  }
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className="mb-8">
      <Link 
        to="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4 transition-colors duration-200"
      >
        <ArrowLeft className="mr-1" size={16} /> Back to all projects
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <div className="aspect-video rounded-lg overflow-hidden glass-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="inline-block px-3 py-1 text-xs rounded-full font-medium bg-accent text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mb-8">
              {project.github && (
                <Button 
                  variant="outline" 
                  className="gap-2 hover:bg-accent hover:text-accent-foreground"
                  onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                >
                  <Github size={18} /> GitHub
                </Button>
              )}
              {project.liveLink && (
                <Button 
                  className="gap-2 hover:bg-primary/90"
                  onClick={() => window.open(project.liveLink, '_blank', 'noopener,noreferrer')}
                >
                  <ExternalLink size={18} /> Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectHeader;
