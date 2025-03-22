
import React from 'react';
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex items-center mb-4">
        <Briefcase className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-xl font-semibold">Work Experience</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Proind Business Solutions Pvt. Ltd.</h4>
            <span className="text-sm text-muted-foreground">Jan 2024 - Present</span>
          </div>
          <p className="text-primary">Associate Full Stack Developer</p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Managed the frontend and backend of a compliance controller tool using Angular JS, SSMS and Internet Information Services</li>
            <li>Scaling up the backend API to handle multiple request</li>
            <li>Design of data model for compliance website that captures different user events visiting the compliance portal</li>
            <li>Integration of alerting systems using Email and SMS push notifications</li>
            <li>Optimisation & debugging using ASP.NET and MS SQL to reduce latency</li>
          </ul>
        </div>
        
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Samyak Infotech Private Limited</h4>
            <span className="text-sm text-muted-foreground">Aug 2023 - Dec 2023</span>
          </div>
          <p className="text-primary">Full Stack Developer Intern</p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Developed and maintained dynamic websites using REACT and EXPRESS JS</li>
            <li>Collaborated with senior developers to implement responsive design principles, enhancing user experience</li>
            <li>Utilized frontend library like FIGMA, SCSS, REACT and bootstrap to build and optimize UI</li>
            <li>Assisted in database management and routing of incoming requests to required view function, including schema design and optimization using MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
