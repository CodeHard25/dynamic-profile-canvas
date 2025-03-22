
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectOverview from './ProjectOverview';
import ProjectFeatures from './ProjectFeatures';
import ProjectDemo from './ProjectDemo';

interface ProjectTabsProps {
  project: {
    title: string;
    technologies: string[];
    liveLink?: string;
  }
}

const ProjectTabs = ({ project }: ProjectTabsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <ProjectOverview project={project} />
        </TabsContent>
        
        <TabsContent value="features" className="space-y-6">
          <ProjectFeatures />
        </TabsContent>
        
        <TabsContent value="demo" className="space-y-6">
          <ProjectDemo project={project} />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default ProjectTabs;
