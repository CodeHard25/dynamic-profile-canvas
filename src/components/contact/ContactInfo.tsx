
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactInfo = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Email</h3>
              <a 
                href="mailto:hardiktyagi007@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                hardiktyagi007@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Phone</h3>
              <a 
                href="tel:+919354152107" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                +91 9354152107
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Location</h3>
              <p className="text-muted-foreground">Sec-55, Faridabad</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <h3 className="font-medium text-lg mb-4">Connect With Me</h3>
          <div className="flex space-x-4">
            <a 
              href="http://www.linkedin.com/in/hardiktyagi2503" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-foreground text-background hover:bg-primary p-3 rounded-full transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/CodeHard25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-foreground text-background hover:bg-primary p-3 rounded-full transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
