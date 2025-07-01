import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMenu, FiHome, FiSliders, FiSettings, FiHelpCircle } from 'react-icons/fi';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-xl"
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FiMenu size={24} className="text-blue-600" />
            </button>
            <div className="flex items-center gap-2">
              <FiHome size={24} className="text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
                Duolingo Usability Analysis
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search analysis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-3 text-lg rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                <FiSliders size={20} className="text-gray-600 hover:text-blue-600" />
              </button>
              <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                <FiSettings size={20} className="text-gray-600 hover:text-blue-600" />
              </button>
              <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                <FiHelpCircle size={20} className="text-gray-600 hover:text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-16 left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 p-4"
        >
          <div className="container mx-auto">
            <ul className="space-y-2">
              <li className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg">
                <FiHome className="text-blue-600" />
                <span className="text-xl text-gray-700">Home</span>
              </li>
              <li className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg">
                <FiSliders className="text-blue-600" />
                <span className="text-gray-700">Analysis Tools</span>
              </li>
              <li className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg">
                <FiSettings className="text-blue-600" />
                <span className="text-gray-700">Settings</span>
              </li>
              <li className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg">
                <FiHelpCircle className="text-blue-600" />
                <span className="text-gray-700">Help</span>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
