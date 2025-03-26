
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Server, Terminal, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialSection from '@/components/testimonials/TestimonialSection';
import ServicesSection from '@/components/services/ServicesSection';
import CallToAction from '@/components/CallToAction';

// Lazy load the 3D hero component for better initial load time
const Hero3D = lazy(() => import('@/components/Hero3D'));

const Index = () => {
  const [showHero3D, setShowHero3D] = useState(true);
  
  useEffect(() => {
    // If Hero3D causes an error, this effect will still run
    // and we can catch unhandled errors from the window
    const handleError = () => {
      setShowHero3D(false);
      console.log("Disabled 3D hero due to rendering issues");
    };
    
    window.addEventListener('error', handleError);
    
    // Set a fallback timeout to disable 3D hero if it takes too long
    const timeoutId = setTimeout(() => {
      // Check if we have any error in the console related to Hero3D
      const consoleErrors = document.querySelectorAll('.error-message');
      if (consoleErrors.length > 0) {
        setShowHero3D(false);
      }
    }, 3000);
    
    return () => {
      window.removeEventListener('error', handleError);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {showHero3D && (
        <Suspense fallback={<div className="three-canvas-container bg-gradient-to-b from-background to-accent/20"></div>}>
          <Hero3D />
        </Suspense>
      )}
      
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
              Hi, I'm <span className="text-gradient">Hardik Tyagi</span><br /> 
              Developer & Problem Solver
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
          
          <div className="mt-16 mb-20 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card p-6 text-center"
            >
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">My Development Philosophy</h3>
              <p className="text-muted-foreground">
                "As a Full Stack Developer, I believe in creating digital experiences that are not only visually appealing but also technically robust. My approach combines strong architecture principles with user-centered design, ensuring applications are both powerful and intuitive. I specialize in bridging the gap between complex business requirements and elegant technical solutions that drive real results for my clients."
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card p-6 flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300"
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
              className="glass-card p-6 flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground">
                Building scalable APIs and services with .NET Core, C#, and enterprise-grade architecture.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-card p-6 flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300"
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
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 max-w-3xl mx-auto text-center"
          >
            <div className="glass-card p-6">
              <Terminal className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Tech Stack Highlights</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['React', '.NET Core', 'TypeScript', 'C#', 'SQL', 'Tailwind CSS', 'Azure', 'Git', 'Entity Framework'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-accent text-primary rounded-full text-sm font-medium inline-block">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Add the new sections */}
      <ServicesSection />
      <TestimonialSection />
      <CallToAction />
    </div>
  );
};

export default Index;
