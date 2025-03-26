
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating: number;
}

const TestimonialCard = ({ name, role, company, content, image, rating }: TestimonialCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-12 w-12 border-2 border-primary/20">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-accent text-accent-foreground">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
        
        <div className="mb-4 flex">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "fill-primary text-primary" : "text-muted-foreground"} 
            />
          ))}
        </div>
        
        <blockquote className="text-muted-foreground italic flex-grow">
          "{content}"
        </blockquote>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
