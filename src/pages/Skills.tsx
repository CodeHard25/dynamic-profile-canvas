
import React from 'react';
import { motion } from 'framer-motion';
import SkillTag from '@/components/SkillTag';
import { 
  Code, 
  Database, 
  Server, 
  Layout, 
  Terminal, 
  GitBranch,
  Box,
  Cloud,
  Wrench,
  Monitor
} from 'lucide-react';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', level: 5, color: 'blue' as const, icon: <Code /> },
    { name: 'TypeScript', level: 5, color: 'blue' as const, icon: <Code /> },
    { name: 'JavaScript', level: 5, color: 'blue' as const, icon: <Code /> },
    { name: 'HTML5/CSS3', level: 5, color: 'blue' as const, icon: <Layout /> },
    { name: 'Redux', level: 4, color: 'blue' as const, icon: <Box /> },
    { name: 'Tailwind CSS', level: 4, color: 'blue' as const, icon: <Layout /> },
    { name: 'Next.js', level: 4, color: 'blue' as const, icon: <Code /> },
    { name: 'Jest/Testing Library', level: 3, color: 'blue' as const, icon: <Terminal /> },
  ];

  const backendSkills = [
    { name: 'C#', level: 5, color: 'purple' as const, icon: <Code /> },
    { name: '.NET Core', level: 5, color: 'purple' as const, icon: <Server /> },
    { name: 'ASP.NET MVC', level: 5, color: 'purple' as const, icon: <Server /> },
    { name: 'Entity Framework', level: 4, color: 'purple' as const, icon: <Database /> },
    { name: 'Web API', level: 4, color: 'purple' as const, icon: <Server /> },
    { name: 'SQL Server', level: 4, color: 'purple' as const, icon: <Database /> },
    { name: 'Azure', level: 3, color: 'purple' as const, icon: <Cloud /> },
    { name: 'Microservices', level: 3, color: 'purple' as const, icon: <Box /> },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 5, color: 'green' as const, icon: <GitBranch /> },
    { name: 'Docker', level: 4, color: 'green' as const, icon: <Box /> },
    { name: 'CI/CD', level: 4, color: 'green' as const, icon: <Wrench /> },
    { name: 'Agile/Scrum', level: 4, color: 'green' as const, icon: <Terminal /> },
    { name: 'System Design', level: 3, color: 'green' as const, icon: <Monitor /> },
    { name: 'REST APIs', level: 5, color: 'green' as const, icon: <Server /> },
    { name: 'GraphQL', level: 3, color: 'green' as const, icon: <Database /> },
    { name: 'Performance Optimization', level: 4, color: 'green' as const, icon: <Wrench /> },
  ];

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
            My Expertise
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="space-y-12">
          <section>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                  <Layout size={20} />
                </div>
                <h2 className="text-2xl font-bold">Frontend Development</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {frontendSkills.map((skill, index) => (
                  <SkillTag
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Server size={20} />
                </div>
                <h2 className="text-2xl font-bold">Backend Development</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {backendSkills.map((skill, index) => (
                  <SkillTag
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">
                  <Wrench size={20} />
                </div>
                <h2 className="text-2xl font-bold">Tools & Other Skills</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherSkills.map((skill, index) => (
                  <SkillTag
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </section>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 glass-card p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm constantly expanding my knowledge and staying up-to-date with the latest technologies and industry trends through online courses, technical blogs, and hands-on projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
