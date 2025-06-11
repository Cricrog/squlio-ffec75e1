
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = ({ onJoinWaitlist }: { onJoinWaitlist: () => void }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left section - Logo */}
          <div className="flex justify-start">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Squlio.AI
            </Link>
          </div>
          
          {/* Center section - Navigation */}
          <div className="flex justify-center">
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {t('howItWorks')}
            </Link>
          </div>
          
          {/* Right section - Language and CTA */}
          <div className="flex items-center justify-end gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-10 w-12 p-0">
                  <span className="text-lg">
                    {language === 'en' ? '🇬🇧' : '🇩🇪'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border shadow-lg">
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className="cursor-pointer"
                >
                  <span className="mr-2">🇬🇧</span>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('de')}
                  className="cursor-pointer"
                >
                  <span className="mr-2">🇩🇪</span>
                  Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('joinWaitlist')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
