
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: t('emailRequired'),
        description: t('emailRequiredDesc'),
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the email to your backend
    console.log('Joining waitlist with email:', email);
    setIsSubmitted(true);
    toast({
      title: t('welcomeToast'),
      description: t('welcomeToastDesc')
    });
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">{t('successTitle')}</h3>
              <p className="text-xl text-gray-600 mb-6">
                {t('successDescription')}
              </p>
              <p className="text-sm text-gray-500">
                {t('expectedLaunch')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
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
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder={t('emailPlaceholder')} 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  className="flex-1 h-12 px-4 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  required 
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-12 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('joinNow')}
                </Button>
              </div>
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

export default WaitlistSection;
