
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  github, 
  liveLink, 
  index 
}: ProjectCardProps) => {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.stopPropagation(); // Prevent navigation to project detail page
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Generate a unique color for each card based on index
  const getBgColor = () => {
    const colors = [
      'bg-blue-50 hover:bg-blue-100 border-blue-200',
      'bg-purple-50 hover:bg-purple-100 border-purple-200',
      'bg-green-50 hover:bg-green-100 border-green-200',
      'bg-yellow-50 hover:bg-yellow-100 border-yellow-200',
      'bg-pink-50 hover:bg-pink-100 border-pink-200',
      'bg-orange-50 hover:bg-orange-100 border-orange-200',
      'bg-teal-50 hover:bg-teal-100 border-teal-200',
      'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
    ];
    return colors[index % colors.length];
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "overflow-hidden cursor-pointer rounded-2xl border-2 h-full transition-all duration-300",
        "shadow-md hover:shadow-xl",
        getBgColor()
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex space-x-2">
            {github && (
              <a 
                href={github} 
                onClick={(e) => handleLinkClick(e, github)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={`View ${title} code on GitHub`}
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
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => {
            const tagColors = [
              "bg-blue-100 text-blue-700",
              "bg-purple-100 text-purple-700",
              "bg-green-100 text-green-700",
              "bg-amber-100 text-amber-700",
              "bg-pink-100 text-pink-700",
              "bg-teal-100 text-teal-700",
            ];
            return (
              <span 
                key={idx} 
                className={cn(
                  "inline-block px-2 py-1 text-xs rounded-md font-medium transition-transform hover:scale-105",
                  tagColors[idx % tagColors.length]
                )}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
