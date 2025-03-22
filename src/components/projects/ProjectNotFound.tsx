
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectNotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
      <p className="text-muted-foreground mb-6">Sorry, we couldn't find the project you're looking for.</p>
      <Button onClick={() => navigate('/projects')}>
        <ArrowLeft className="mr-2" size={16} /> Back to Projects
      </Button>
    </div>
  );
};

export default ProjectNotFound;
