
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarClock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Build Something Amazing?</h2>
              <p className="text-lg text-muted-foreground mb-0 md:max-w-xl">
                I'm currently available for freelance projects. Let's discuss how I can help bring your ideas to life with clean, scalable code and exceptional user experience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <CalendarClock className="mr-2 h-5 w-5" />
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
