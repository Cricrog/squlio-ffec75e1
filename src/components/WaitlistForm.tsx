
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Mail, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface WaitlistFormProps {
  onSubmit: (firstName: string, lastName: string, email: string, confirmEmail: string) => void;
  isLoading: boolean;
}

const WaitlistForm = ({ onSubmit, isLoading }: WaitlistFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(firstName, lastName, email, confirmEmail);
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm relative">
          {/* Clean Pill Sticker */}
          <div className="absolute -top-3 right-4 z-10">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg border border-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Users className="w-4 h-4" />
                {t('waitlistSticker')}
              </div>
            </div>
          </div>
          
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {t('waitlistTitle')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('waitlistDescription')}
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input 
                  type="text" 
                  placeholder={t('firstNamePlaceholder')} 
                  value={firstName} 
                  onChange={e => setFirstName(e.target.value)} 
                  className="h-12 px-4 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  required 
                  disabled={isLoading}
                />
                <Input 
                  type="text" 
                  placeholder={t('lastNamePlaceholder')} 
                  value={lastName} 
                  onChange={e => setLastName(e.target.value)} 
                  className="h-12 px-4 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  required 
                  disabled={isLoading}
                />
              </div>
              <div className="flex flex-col gap-4 mb-6">
                <Input 
                  type="email" 
                  placeholder={t('emailPlaceholder')} 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  className="h-12 px-4 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  required 
                  disabled={isLoading}
                />
                <Input 
                  type="email" 
                  placeholder={t('confirmEmailPlaceholder')} 
                  value={confirmEmail} 
                  onChange={e => setConfirmEmail(e.target.value)} 
                  className="h-12 px-4 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  required 
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-12 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? "Joining..." : t('joinNow')}
              </Button>
            </form>
            
            <div className="flex items-center justify-center mt-8 space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                {t('freeToJoin')}
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                {t('earlyAccessFeature')}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistForm;
