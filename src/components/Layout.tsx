
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <footer className="p-6 text-center text-muted-foreground">
        <div className="container max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} • Designed & Built with Precision</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
