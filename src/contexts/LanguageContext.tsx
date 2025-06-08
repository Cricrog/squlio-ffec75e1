
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'navbar.joinWaitlist': 'Join Waitlist',
    
    // Hero Section
    'hero.title': 'Your AI Email Receptionist for Smart Business Communication',
    'hero.subtitle': 'Transform your Gmail and Outlook into an intelligent communication hub. Xila.AI automatically routes emails to the right team members and handles basic inquiries - perfect for SMEs who need professional email management without the cost.',
    'hero.getStarted': 'Get Started',
    'hero.joinWaitlist': 'Join Waitlist',
    
    // Features Section
    'features.title': 'Intelligent Email Management Made Simple',
    'features.subtitle': 'Everything you need to transform your email workflow and never miss an important message again',
    'features.smartRouting.title': 'Smart Email Routing',
    'features.smartRouting.description': 'Our AI understands email context and automatically routes messages to the right team member - sales, support, or management.',
    'features.instantResponses.title': 'Instant Smart Responses',
    'features.instantResponses.description': 'Handle common inquiries automatically with intelligent responses that maintain your professional tone and brand voice.',
    'features.seamlessIntegration.title': 'Seamless Integration',
    'features.seamlessIntegration.description': 'Works perfectly with Gmail and Outlook. No complex setup required - just connect and start benefiting immediately.',
    
    // Testimonials Section
    'testimonials.title': 'What Our Beta Users Say',
    'testimonials.subtitle': "Don't just take our word for it. Here's what early adopters are saying about Xila.AI",
    'testimonials.sarah.quote': 'Xila.AI transformed our email management completely. We went from missing important client emails to having everything perfectly organized and responded to within minutes.',
    'testimonials.sarah.author': 'Sarah Mitchell',
    'testimonials.sarah.role': 'Operations Manager',
    'testimonials.sarah.company': 'TechStart Solutions',
    'testimonials.marcus.quote': "As a small business, we couldn't afford a full-time receptionist. Xila.AI gave us professional email handling that makes us look like a much larger company.",
    'testimonials.marcus.author': 'Marcus Chen',
    'testimonials.marcus.role': 'Founder',
    'testimonials.marcus.company': 'CreativeFlow Agency',
    'testimonials.elena.quote': 'The AI routing is incredibly accurate. Our sales team gets sales inquiries instantly, support gets technical questions, and I get the strategic stuff. It just works.',
    'testimonials.elena.author': 'Elena Rodriguez',
    'testimonials.elena.role': 'CEO',
    'testimonials.elena.company': 'GrowthLab Consulting',
    
    // Waitlist Section
    'waitlist.title': 'Join the Waitlist',
    'waitlist.subtitle': 'Be among the first to experience the future of email management. Get early access and special pricing.',
    'waitlist.placeholder': 'Enter your email address',
    'waitlist.button': 'Join Waitlist',
    
    // Footer
    'footer.tagline': 'Intelligent email management for modern businesses',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.docs': 'Documentation',
    'footer.rights': 'All rights reserved.',
  },
  de: {
    // Navbar
    'navbar.joinWaitlist': 'Warteliste beitreten',
    
    // Hero Section
    'hero.title': 'Ihr KI E-Mail Empfangschef für intelligente Geschäftskommunikation',
    'hero.subtitle': 'Verwandeln Sie Ihr Gmail und Outlook in eine intelligente Kommunikationszentrale. Xila.AI leitet E-Mails automatisch an die richtigen Teammitglieder weiter und bearbeitet grundlegende Anfragen - perfekt für KMUs, die professionelles E-Mail-Management ohne Kosten benötigen.',
    'hero.getStarted': 'Loslegen',
    'hero.joinWaitlist': 'Warteliste beitreten',
    
    // Features Section
    'features.title': 'Intelligentes E-Mail-Management leicht gemacht',
    'features.subtitle': 'Alles was Sie brauchen, um Ihren E-Mail-Workflow zu transformieren und nie wieder eine wichtige Nachricht zu verpassen',
    'features.smartRouting.title': 'Intelligente E-Mail-Weiterleitung',
    'features.smartRouting.description': 'Unsere KI versteht den E-Mail-Kontext und leitet Nachrichten automatisch an das richtige Teammitglied weiter - Vertrieb, Support oder Management.',
    'features.instantResponses.title': 'Sofortige intelligente Antworten',
    'features.instantResponses.description': 'Bearbeiten Sie häufige Anfragen automatisch mit intelligenten Antworten, die Ihren professionellen Ton und Ihre Markensprache beibehalten.',
    'features.seamlessIntegration.title': 'Nahtlose Integration',
    'features.seamlessIntegration.description': 'Funktioniert perfekt mit Gmail und Outlook. Keine komplexe Einrichtung erforderlich - einfach verbinden und sofort profitieren.',
    
    // Testimonials Section
    'testimonials.title': 'Was unsere Beta-Nutzer sagen',
    'testimonials.subtitle': 'Glauben Sie nicht nur uns. Hier ist, was Early Adopters über Xila.AI sagen',
    'testimonials.sarah.quote': 'Xila.AI hat unser E-Mail-Management komplett transformiert. Wir sind von verpassten wichtigen Kunden-E-Mails zu perfekt organisierten und binnen Minuten beantworteten E-Mails gewechselt.',
    'testimonials.sarah.author': 'Sarah Mitchell',
    'testimonials.sarah.role': 'Operations Manager',
    'testimonials.sarah.company': 'TechStart Solutions',
    'testimonials.marcus.quote': 'Als kleines Unternehmen konnten wir uns keine Vollzeit-Empfangsdame leisten. Xila.AI gab uns professionelle E-Mail-Bearbeitung, die uns wie ein viel größeres Unternehmen aussehen lässt.',
    'testimonials.marcus.author': 'Marcus Chen',
    'testimonials.marcus.role': 'Gründer',
    'testimonials.marcus.company': 'CreativeFlow Agency',
    'testimonials.elena.quote': 'Die KI-Weiterleitung ist unglaublich genau. Unser Vertriebsteam erhält Verkaufsanfragen sofort, der Support bekommt technische Fragen, und ich bekomme die strategischen Sachen. Es funktioniert einfach.',
    'testimonials.elena.author': 'Elena Rodriguez',
    'testimonials.elena.role': 'CEO',
    'testimonials.elena.company': 'GrowthLab Consulting',
    
    // Waitlist Section
    'waitlist.title': 'Der Warteliste beitreten',
    'waitlist.subtitle': 'Seien Sie unter den Ersten, die die Zukunft des E-Mail-Managements erleben. Erhalten Sie frühen Zugang und Sonderpreise.',
    'waitlist.placeholder': 'E-Mail-Adresse eingeben',
    'waitlist.button': 'Warteliste beitreten',
    
    // Footer
    'footer.tagline': 'Intelligentes E-Mail-Management für moderne Unternehmen',
    'footer.product': 'Produkt',
    'footer.features': 'Funktionen',
    'footer.pricing': 'Preise',
    'footer.company': 'Unternehmen',
    'footer.about': 'Über uns',
    'footer.blog': 'Blog',
    'footer.contact': 'Kontakt',
    'footer.support': 'Support',
    'footer.help': 'Hilfe-Center',
    'footer.docs': 'Dokumentation',
    'footer.rights': 'Alle Rechte vorbehalten.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
