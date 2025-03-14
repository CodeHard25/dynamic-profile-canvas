
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projectsData } from '@/data/projectsData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">Sorry, we couldn't find the project you're looking for.</p>
        <Button onClick={() => navigate('/projects')}>
          <ArrowLeft className="mr-2" size={16} /> Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Link 
            to="/projects"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
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
                      className="gap-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={18} /> GitHub
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button 
                      className="gap-2"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
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
            </TabsContent>
            
            <TabsContent value="features" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Responsive design for seamless mobile and desktop experience</li>
                    <li>Secure authentication and authorization</li>
                    <li>Intuitive user interface with modern design principles</li>
                    <li>Optimized performance with efficient data fetching</li>
                    <li>Comprehensive error handling and user feedback</li>
                    <li>Extensive unit and integration tests</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="demo" className="space-y-6">
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
                        onClick={() => window.open(project.liveLink, '_blank')}
                        className="gap-2"
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
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
