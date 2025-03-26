
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

interface ProfileCardProps {
  handleDownloadResume: () => void;
}

const ProfileCard = ({ handleDownloadResume }: ProfileCardProps) => {
  const { toast } = useToast();
  
  const downloadResume = () => {
    try {
      handleDownloadResume();
      toast({
        title: "Download Started",
        description: "Your resume is being downloaded",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: "There was an error downloading the resume. Please try again.",
      });
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:col-span-2"
    >
      <div className="bg-accent rounded-2xl overflow-hidden mb-6">
        <img 
          src="/lovable-uploads/818ea380-a648-4577-b206-b53ec15db6b6.png"
          alt="Hardik Tyagi portrait"
          className="w-full aspect-[4/5] object-cover"
          loading="lazy"
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
              <a 
                href="mailto:hardiktyagi007@gmail.com" 
                className="text-primary hover:underline transition-colors duration-200"
              >
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
          <Button 
            className="w-full hover:bg-accent hover:text-accent-foreground" 
            variant="outline"
            onClick={downloadResume}
          >
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
