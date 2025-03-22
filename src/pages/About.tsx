
import React from 'react';
import { Code } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProfileCard from '@/components/about/ProfileCard';
import AboutHero from '@/components/about/AboutHero';
import Education from '@/components/about/Education';
import WorkExperience from '@/components/about/WorkExperience';

const About = () => {
  const handleDownloadResume = () => {
    // Create a temporary link
    const link = document.createElement('a');
    link.href = '/Hardik_Tyagi_Resume.pdf'; // Update this path to your actual resume PDF
    link.download = 'Hardik_Tyagi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
