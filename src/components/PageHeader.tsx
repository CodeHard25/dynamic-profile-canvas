
import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
}

const PageHeader = ({ badge, title, description }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-accent rounded-full mb-3">
        {badge}
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default PageHeader;
