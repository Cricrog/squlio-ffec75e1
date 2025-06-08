import React from 'react';
import { Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">Xila.AI</span>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2024 Xila.AI. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Transforming front office email management for SMEs worldwide</p>
        </div>
      </div>
    </footer>;
};
export default Footer;