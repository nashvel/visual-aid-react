import React from 'react';
import { motion } from 'framer-motion';

const TextPopup = ({ show, content }) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-0 right-0 z-50 mt-8"
    >
      <div className="sticky-note p-10 w-[500px] max-w-[195vw]">
        {content}
      </div>
    </motion.div>
  );
};

export default TextPopup;
