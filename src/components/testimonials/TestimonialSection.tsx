
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Alex Chen",
    role: "CEO",
    company: "TechSolutions",
    content: "Hardik delivered our e-commerce platform ahead of schedule with exceptional quality. His expertise in both frontend and backend development truly shines through his work.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Creative Media",
    content: "Working with Hardik was a seamless experience. He translated our complex requirements into a beautiful, user-friendly interface that improved our conversion rates by 45%.",
    rating: 5
  },
  {
    name: "Michael Roberts",
    role: "Product Manager",
    company: "InnovateCorp",
    content: "Hardik's technical skill and problem-solving abilities are outstanding. He suggested performance optimizations we hadn't considered that significantly improved our app's load time.",
    rating: 4
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-accent rounded-full mb-3">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What My Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's feedback from clients who've trusted me with their projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
