
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectFeatures = () => {
  return (
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
  );
};

export default ProjectFeatures;
