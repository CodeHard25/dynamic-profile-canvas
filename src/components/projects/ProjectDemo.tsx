
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Lock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

interface ProjectDemoProps {
  project: {
    title: string;
    liveLink?: string;
  }
}

const ProjectDemo = ({ project }: ProjectDemoProps) => {
  const { toast } = useToast();
  const [demoLoading, setDemoLoading] = useState(false);

  const handleOpenDemo = () => {
    if (project.liveLink) {
      setDemoLoading(true);
      
      // Simulate loading the demo (better UX)
      setTimeout(() => {
        window.open(project.liveLink, '_blank', 'noopener,noreferrer');
        toast({
          title: "Opening Demo",
          description: `Launching ${project.title} in a new tab`,
        });
        setDemoLoading(false);
      }, 800);
    }
  };

  return (
    <Card className="overflow-hidden border-2 border-accent">
      <CardContent className="p-0">
        <div className="relative">
          {/* Demo preview image - replace with actual project screenshot */}
          <div className="w-full h-48 md:h-64 bg-gradient-to-br from-accent to-primary/10 flex items-center justify-center">
            {project.liveLink ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Play size={40} className="mx-auto text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Click below to launch interactive demo</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Lock size={40} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Demo coming soon</p>
              </motion.div>
            )}
          </div>
          
          {/* Demo info overlay */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Interactive Demo</h2>
            <p className="text-muted-foreground mb-6">
              Experience {project.title} firsthand with our interactive demo. See how the application works in real-time with actual data.
            </p>
            
            <div className="flex justify-center">
              {project.liveLink ? (
                <Button 
                  size="lg"
                  onClick={handleOpenDemo}
                  className="gap-2 hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105"
                  disabled={demoLoading}
                >
                  {demoLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading Demo...
                    </>
                  ) : (
                    <>
                      <ExternalLink size={18} /> Launch Live Demo
                    </>
                  )}
                </Button>
              ) : (
                <p className="text-muted-foreground italic bg-accent/50 px-4 py-2 rounded-md">
                  Live demo is currently being updated. Please check back soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDemo;
