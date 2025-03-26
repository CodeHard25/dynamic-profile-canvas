
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  index: number;
}

const ServiceCard = ({ title, description, price, features, popular, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`h-full overflow-hidden ${popular ? 'border-primary shadow-lg relative' : ''}`}>
        {popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0">
              Popular
            </div>
          </div>
        )}
        <CardHeader className="pb-0">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6">
            <span className="text-3xl font-bold">{price}</span>
            {price !== 'Custom' && <span className="text-muted-foreground ml-1">/project</span>}
          </div>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className={`w-full ${popular ? 'bg-primary' : ''}`}>
            <Link to="/contact">Get Started</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
