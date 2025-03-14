
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  name: string;
  level: number; // 1-5
  color: 'blue' | 'green' | 'purple' | 'amber';
  icon?: React.ReactNode;
  className?: string;
  index: number;
}

const SkillTag = ({ name, level, color, icon, className, index }: SkillTagProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'green':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'purple':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'amber':
        return 'bg-amber-50 border-amber-200 text-amber-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        'skill-tag flex items-center p-4 border rounded-lg shadow-soft',
        getColorClasses(),
        className
      )}
      whileHover={{ y: -5 }}
    >
      {icon && <div className="mr-3">{icon}</div>}
      <div>
        <h3 className="font-medium">{name}</h3>
        <div className="flex mt-1 space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'h-1.5 w-5 rounded-full',
                i < level ? 
                  color === 'blue' ? 'bg-blue-500' :
                  color === 'green' ? 'bg-green-500' :
                  color === 'purple' ? 'bg-purple-500' : 
                  'bg-amber-500'
                : 'bg-gray-200'
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillTag;
