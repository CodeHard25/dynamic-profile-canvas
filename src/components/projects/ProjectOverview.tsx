
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectOverviewProps {
  project: {
    title: string;
    technologies: string[];
  }
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground mb-4">
          {project.title} is a comprehensive solution designed to solve real-world problems using 
          modern technology stack. This project showcases my skills in {project.technologies.join(', ')}.
        </p>
        <p className="text-muted-foreground">
          The development process involved careful planning, agile methodologies, and continuous 
          integration to ensure a high-quality final product. The project architecture follows 
          best practices for scalability and maintainability.
        </p>
      </CardContent>
    </Card>
  );
};

export default ProjectOverview;
