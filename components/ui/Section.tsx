import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  disableAnimation?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, disableAnimation = false }) => {
  if (disableAnimation) {
    return (
      <section id={id} className={`py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={`py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;