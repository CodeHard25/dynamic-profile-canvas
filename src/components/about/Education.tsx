
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex items-center mb-4">
        <GraduationCap className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-xl font-semibold">Education</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Swami Keshvanand Institute of Tech.</h4>
            <span className="text-sm text-muted-foreground">2019-2023</span>
          </div>
          <p className="text-muted-foreground">Bachelor of Technology (ECE)</p>
          <p>CGPA: 8.6</p>
        </div>
        
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Vidya Mandir Public School</h4>
            <span className="text-sm text-muted-foreground">2015-2018</span>
          </div>
          <p className="text-muted-foreground">General Science</p>
          <p>Percentage in 12th: 81%</p>
          <p>CGPA in 10th: 9.2</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
