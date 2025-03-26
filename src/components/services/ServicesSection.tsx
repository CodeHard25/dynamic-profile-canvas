
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Custom Web Application",
    description: "Full-stack development with modern technologies",
    price: "Starting at $2,999",
    features: [
      "Responsive, mobile-first design",
      "React frontend with smooth animations",
      ".NET Core backend development",
      "Database design and implementation",
      "User authentication and authorization",
      "API integration",
      "3 months of support included"
    ],
    popular: false
  },
  {
    title: "Premium Development",
    description: "Complete solution for complex business needs",
    price: "Starting at $4,999",
    features: [
      "All features from Custom Web Application",
      "Advanced data visualization",
      "Performance optimization",
      "Complex business logic implementation",
      "Third-party API integrations",
      "Admin dashboard development",
      "6 months of support and maintenance"
    ],
    popular: true
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable solutions for large organizations",
    price: "Custom",
    features: [
      "Full-scale enterprise application development",
      "Microservices architecture",
      "High performance and scalability",
      "Integration with existing systems",
      "Custom administrative tools",
      "Comprehensive documentation",
      "Long-term support and partnership"
    ],
    popular: false
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-accent rounded-full mb-3">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with clear deliverables. Choose the package that fits your project's needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              price={service.price}
              features={service.features}
              popular={service.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
