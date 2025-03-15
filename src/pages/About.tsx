
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Code, Download, MapPin, Mail, Github, Linkedin, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-accent rounded-full mb-3">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Developer Behind the Code</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know my journey, experience, and passion for creating elegant solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-accent rounded-2xl overflow-hidden mb-6">
              <img 
                src="public/lovable-uploads/818ea380-a648-4577-b206-b53ec15db6b6.png"
                alt="Hardik Tyagi portrait"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Sec-55, Faridabad</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hardiktyagi007@gmail.com" className="text-primary hover:underline">
                      hardiktyagi007@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-muted-foreground">2+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-4">
                <a 
                  href="http://www.linkedin.com/in/hardiktyagi2503" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-primary transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/CodeHard25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
              
              <div className="mt-6">
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl font-bold mb-6">Hello, I'm a Full Stack Developer</h2>
            
            <div className="prose prose-lg max-w-none mb-10">
              <p>
                Dynamic Full Stack Developer with a proven track record at PROIND BUSINESS SOLUTIONS, 
                enhancing user experiences and optimizing backend processes. Expert in AngularJS, React, 
                and cloud services, with a knack for efficient database management and innovative problem-solving.
              </p>
              
              <p>
                Demonstrates exceptional teamwork and technical prowess, significantly improving project outcomes. 
                Focused on creating modern, responsive, and user-friendly web applications with clean code and 
                best practices.
              </p>
            </div>

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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/projects">View My Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/skills">Explore My Skills</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-full">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
