
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    joinWaitlist: "Join Waitlist",
    
    // Hero Section
    aiReceptionist: "Your AI Receptionist",
    neverMisses: "Never Misses an Email",
    heroDescription: "Transform your Gmail & Outlook into an intelligent receptionist that routes emails perfectly and responds instantly - designed for SMEs who want to have a smart info@ inbox.",
    earlyAccess: "🚀 Early access • No credit card required",
    emailAccuracy: "Email Accuracy",
    responseTime: "Response Time",
    alwaysActive: "Always Active",
    
    // Testimonials
    testimonialsTitle: "What Our Beta Users Say",
    testimonialsSubtitle: "Don't just take our word for it. Here's what early adopters are saying about Xila.AI",
    sebastianQuote: "With Xila.AI, generic business inquiries are now either answered automatically or seamlessly routed to the appropriate colleague. It's a game changer for managing our info@ inbox, we actually no longer have to manage it.",
    sebastianName: "Sebastian Fröhlich",
    sebastianCompany: "Mertens Steuerberater GmbH"
  },
  de: {
    // Navbar
    joinWaitlist: "Warteliste beitreten",
    
    // Hero Section
    aiReceptionist: "Ihr KI-Empfangschef",
    neverMisses: "Verpasst nie eine E-Mail",
    heroDescription: "Verwandeln Sie Ihr Gmail & Outlook in einen intelligenten Empfangschef, der E-Mails perfekt weiterleitet und sofort antwortet - entwickelt für KMU, die einen smarten info@ Posteingang wollen.",
    earlyAccess: "🚀 Früher Zugang • Keine Kreditkarte erforderlich",
    emailAccuracy: "E-Mail-Genauigkeit",
    responseTime: "Antwortzeit",
    alwaysActive: "Immer aktiv",
    
    // Testimonials
    testimonialsTitle: "Was unsere Beta-Nutzer sagen",
    testimonialsSubtitle: "Verlassen Sie sich nicht nur auf unser Wort. Hier ist, was Early Adopters über Xila.AI sagen",
    sebastianQuote: "Mit Xila.AI werden allgemeine Geschäftsanfragen jetzt entweder automatisch beantwortet oder nahtlos an den entsprechenden Kollegen weitergeleitet. Es ist ein Game Changer für die Verwaltung unserer info@ Inbox, wir müssen sie eigentlich nicht mehr verwalten.",
    sebastianName: "Sebastian Fröhlich",
    sebastianCompany: "Mertens Steuerberater GmbH"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
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
