
import React from 'react';
import { Code } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import PageHeader from '@/components/PageHeader';
import ProfileCard from '@/components/about/ProfileCard';
import AboutHero from '@/components/about/AboutHero';
import Education from '@/components/about/Education';
import WorkExperience from '@/components/about/WorkExperience';

const About = () => {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    // Create a proper file URL
    const resumeUrl = '/Hardik_Tyagi_Resume.pdf';
    
    // Create a temporary link and try to download directly
    try {
      fetch(resumeUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(blob => {
          // Create a blob URL for the resume
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Hardik_Tyagi_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          
          // Clean up
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        })
        .catch(error => {
          console.error('Error downloading resume:', error);
          toast({
            variant: "destructive",
            title: "Download Failed",
            description: "There was a problem downloading the resume. Please try again later.",
          });
        });
    } catch (error) {
      console.error('Error in download function:', error);
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: "There was a problem with your download. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl mx-auto px-4">
        <PageHeader
          badge="About Me"
          title="The Developer Behind the Code"
          description="Get to know my journey, experience, and passion for creating elegant solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ProfileCard handleDownloadResume={handleDownloadResume} />
          
          <div className="lg:col-span-3 space-y-8">
            <AboutHero />
            <Education />
            <WorkExperience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
