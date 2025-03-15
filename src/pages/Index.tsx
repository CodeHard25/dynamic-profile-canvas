
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Server, ExternalLink } from 'lucide-react';
import Hero3D from '@/components/Hero3D';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

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

  // Floating elements animation variants
  const floatingAnimation = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: "loop" as const,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden">
        {showHero3D && (
          <div className="absolute inset-0 z-0">
            <Hero3D />
          </div>
        )}
        
        {/* Animated background shapes - inspired by lynnandtonic.com */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={floatingAnimation}
              animate="animate"
              className={`absolute rounded-full opacity-20 ${
                i % 4 === 0 ? 'bg-blue-300' :
                i % 4 === 1 ? 'bg-purple-300' :
                i % 4 === 2 ? 'bg-green-300' :
                'bg-pink-300'
              }`}
              style={{
                width: `${(i % 3 + 1) * 100}px`,
                height: `${(i % 3 + 1) * 100}px`,
                left: `${(i * 13) % 90}%`,
                top: `${(i * 17) % 80}%`,
                filter: 'blur(40px)',
              }}
            />
          ))}
        </div>
        
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 px-4 z-10">
          <div className="container max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                className="inline-block px-3 py-1 text-xs font-medium text-primary bg-accent rounded-full mb-3"
              >
                Full Stack Developer
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-4 text-balance">
                Crafting Digital{' '}
                <motion.span 
                  initial={{ backgroundPosition: "200% 0%" }}
                  animate={{ backgroundPosition: "0% 0%" }}
                  transition={{ duration: 2 }}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                  Experiences
                </motion.span><br /> 
                with .NET &amp; React
              </h1>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl mb-8 text-balance">
                Building robust, scalable, and elegant solutions that solve real-world problems 
                with a focus on performance and user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-2 hover:bg-accent/50 transition-all duration-300">
                  <Link to="/about">Learn More About Me</Link>
                </Button>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 md:mt-32">
              {[
                {
                  title: "Frontend Development",
                  description: "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS.",
                  icon: Code,
                  color: "bg-blue-100 text-blue-600",
                  delay: 0.2
                },
                {
                  title: "Backend Development",
                  description: "Building scalable APIs and services with .NET, C#, and enterprise-grade architecture.",
                  icon: Server,
                  color: "bg-purple-100 text-purple-600",
                  delay: 0.3
                },
                {
                  title: "Database Design",
                  description: "Designing efficient database schemas and implementing complex data operations.",
                  icon: Database,
                  color: "bg-green-100 text-green-600",
                  delay: 0.4
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: item.delay }}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
                    index === 0 ? 'bg-blue-50 hover:bg-blue-100 border-blue-200' :
                    index === 1 ? 'bg-purple-50 hover:bg-purple-100 border-purple-200' :
                    'bg-green-50 hover:bg-green-100 border-green-200'
                  }`}
                >
                  <div className={`h-12 w-12 ${item.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-center">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-20 text-center"
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Let's work together
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
