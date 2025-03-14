
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Server } from 'lucide-react';
import Hero3D from '@/components/Hero3D';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Hero3D />
      
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-accent rounded-full mb-3 animate-fade-in">
              Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-4 animate-fade-up text-balance">
              Crafting Digital <span className="text-gradient">Experiences</span><br /> 
              with .NET &amp; React
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl mb-8 animate-fade-up text-balance">
              Building robust, scalable, and elegant solutions that solve real-world problems 
              with a focus on performance and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 md:mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground">
                Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground">
                Building scalable APIs and services with .NET, C#, and enterprise-grade architecture.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Design</h3>
              <p className="text-muted-foreground">
                Designing efficient database schemas and implementing complex data operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
