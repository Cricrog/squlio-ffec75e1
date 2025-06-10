
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onJoinWaitlist={scrollToWaitlist} />
      <HeroSection onJoinWaitlist={scrollToWaitlist} />
      <FeaturesSection />
      <TestimonialsSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
