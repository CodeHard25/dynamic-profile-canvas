
import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';
import ProjectNotFound from '@/components/projects/ProjectNotFound';
import ProjectHeader from '@/components/projects/ProjectHeader';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load ProjectTabs for better performance
const ProjectTabs = lazy(() => import('@/components/projects/ProjectTabs'));

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl mx-auto px-4">
        <ProjectHeader project={project} />
        <Suspense fallback={
          <div className="space-y-4 mt-8">
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-[300px] w-full rounded-lg" />
          </div>
        }>
          <ProjectTabs project={project} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectDetail;
