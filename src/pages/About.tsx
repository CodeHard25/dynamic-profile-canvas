
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Code, Download, MapPin, Mail, Github, Linkedin } from 'lucide-react';
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
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                alt="Developer portrait"
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
                    <p className="text-muted-foreground">San Francisco, California</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@example.com" className="text-primary hover:underline">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-muted-foreground">7+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-primary transition-colors duration-300"
                >
                  <Linkedin size={20} />
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
                I specialize in building modern web applications using .NET and React technologies. 
                With a strong foundation in both backend and frontend development, I create scalable, 
                efficient, and user-friendly solutions for complex problems.
              </p>
              
              <p>
                My journey in software development began at a young age with a curiosity about how 
                things work. This led me to pursue a degree in Computer Science, where I honed my 
                problem-solving skills and developed a passion for clean, maintainable code.
              </p>
              
              <p>
                Over the years, I've worked with various technologies and frameworks, always 
                seeking to expand my knowledge and stay at the forefront of industry trends. My 
                experience spans from working with large enterprise applications to developing 
                innovative startups from the ground up.
              </p>
              
              <p>
                When I'm not coding, you might find me exploring new hiking trails, reading about 
                emerging technologies, or contributing to open-source projects. I believe in 
                continuous learning and giving back to the developer community.
              </p>
            </div>
            
            <div className="glass-card p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">My Approach to Development</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5">
                    <Code size={14} />
                  </div>
                  <div>
                    <p className="font-medium">Clean Code</p>
                    <p className="text-muted-foreground">
                      I write maintainable, well-documented code with a focus on readability and best practices.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mt-0.5">
                    <Code size={14} />
                  </div>
                  <div>
                    <p className="font-medium">User-Centered Design</p>
                    <p className="text-muted-foreground">
                      I believe in understanding user needs and designing intuitive experiences that solve real problems.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                    <Code size={14} />
                  </div>
                  <div>
                    <p className="font-medium">Continuous Improvement</p>
                    <p className="text-muted-foreground">
                      I'm constantly learning and improving my skills to deliver the best possible solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/projects">View My Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/skills">Explore My Skills</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
