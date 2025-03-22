
import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';
import ProjectNotFound from '@/components/projects/ProjectNotFound';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectTabs from '@/components/projects/ProjectTabs';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl mx-auto px-4">
        <ProjectHeader project={project} />
        <ProjectTabs project={project} />
      </div>
    </div>
  );
};

export default ProjectDetail;
