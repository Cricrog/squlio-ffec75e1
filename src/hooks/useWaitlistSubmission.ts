
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

export const useWaitlistSubmission = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const submitToWaitlist = async (firstName: string, lastName: string, email: string, confirmEmail: string) => {
    // Validate all fields are filled
    if (!firstName || !lastName || !email || !confirmEmail) {
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
          last_name: lastName
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

  return {
    isSubmitted,
    isLoading,
    submitToWaitlist
  };
};
