
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectDemoProps {
  project: {
    title: string;
    liveLink?: string;
  }
}

const ProjectDemo = ({ project }: ProjectDemoProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4">Interactive Demo</h2>
        <p className="text-muted-foreground mb-6">
          Experience the application firsthand with our interactive demo. Click the button 
          below to access the live version of {project.title}.
        </p>
        
        <div className="flex justify-center">
          {project.liveLink ? (
            <Button 
              size="lg"
              onClick={() => window.open(project.liveLink, '_blank', 'noopener,noreferrer')}
              className="gap-2 hover:bg-primary/90 transition-colors duration-300"
            >
              <ExternalLink size={18} /> Launch Live Demo
            </Button>
          ) : (
            <p className="text-muted-foreground italic">
              Live demo is currently being updated. Please check back soon.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDemo;
