
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
  index: number;
  id: string; // Add project ID for linking
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  github, 
  liveLink, 
  index,
  id
}: ProjectCardProps) => {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent navigation to project detail page
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <Link to={`/projects/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="project-card glass-card overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border border-border/30"
        whileHover={{ y: -5 }}
      >
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex space-x-3">
              {github && (
                <a 
                  href={github} 
                  onClick={(e) => handleLinkClick(e, github)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={`View ${title} code on GitHub`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              )}
              {liveLink && (
                <a 
                  href={liveLink} 
                  onClick={(e) => handleLinkClick(e, liveLink)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={`Visit ${title} live site`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
          <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className={cn(
                  "inline-block px-2 py-1 text-xs rounded-md font-medium transition-colors",
                  idx % 4 === 0 && "bg-blue-100 text-blue-700",
                  idx % 4 === 1 && "bg-purple-100 text-purple-700",
                  idx % 4 === 2 && "bg-green-100 text-green-700",
                  idx % 4 === 3 && "bg-amber-100 text-amber-700",
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
