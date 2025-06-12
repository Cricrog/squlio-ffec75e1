import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

const WaitlistSection = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailProvider, setEmailProvider] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!firstName || !lastName || !emailProvider || !email || !confirmEmail) {
      toast({
        title: "All fields required",
        description: "Please fill out all fields to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    // Validate emails match
    if (email !== confirmEmail) {
      toast({
        title: "Emails don't match",
        description: "Please make sure both email fields match.",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ 
          email: email,
          first_name: firstName,
          last_name: lastName,
          email_provider: emailProvider
        }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Email already registered",
            description: "This email is already on our waitlist.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
        setIsLoading(false);
        return;
      }

      setIsSubmitted(true);
      toast({
        title: t('welcomeToast'),
        description: t('welcomeToastDesc')
      });
    } catch (error) {
      console.error('Error joining waitlist:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
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
              <div className="mb-4">
                <Select value={emailProvider} onValueChange={setEmailProvider} disabled={isLoading}>
                  <SelectTrigger className="h-12 px-4 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder={t('emailProviderPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="Gmail" className="text-lg">Gmail</SelectItem>
                    <SelectItem value="Outlook" className="text-lg">Outlook</SelectItem>
                    <SelectItem value="Other" className="text-lg">Other</SelectItem>
                  </SelectContent>
                </Select>
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

export default WaitlistSection;
