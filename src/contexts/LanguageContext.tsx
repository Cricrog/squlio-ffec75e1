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
    
    // Features (keeping existing content)
    
    // Testimonials
    testimonialsTitle: "What Our Beta Users Say",
    testimonialsSubtitle: "Don't just take our word for it. Here's what early adopters are saying about Xila.AI",
    testimonial1: "Xila.AI transformed our email management completely. We went from missing important client emails to having everything perfectly organized and responded to within minutes.",
    testimonial1Author: "Sarah Mitchell",
    testimonial1Role: "Operations Manager",
    testimonial1Company: "TechStart Solutions",
    testimonial2: "As a small business, we couldn't afford a full-time receptionist. Xila.AI gave us professional email handling that makes us look like a much larger company.",
    testimonial2Author: "Marcus Chen",
    testimonial2Role: "Founder", 
    testimonial2Company: "CreativeFlow Agency",
    testimonial3: "The AI routing is incredibly accurate. Our sales team gets sales inquiries instantly, support gets technical questions, and I get the strategic stuff. It just works.",
    testimonial3Author: "Elena Rodriguez",
    testimonial3Role: "CEO",
    testimonial3Company: "GrowthLab Consulting"
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
    testimonial1: "Xila.AI hat unser E-Mail-Management völlig verändert. Wir gingen davon aus, wichtige Kunden-E-Mails zu verpassen, zu allem perfekt organisiert und innerhalb von Minuten beantwortet.",
    testimonial1Author: "Sarah Mitchell",
    testimonial1Role: "Betriebsleiterin",
    testimonial1Company: "TechStart Solutions",
    testimonial2: "Als kleines Unternehmen konnten wir uns keine Vollzeit-Empfangsdame leisten. Xila.AI gab uns professionelle E-Mail-Bearbeitung, die uns wie ein viel größeres Unternehmen aussehen lässt.",
    testimonial2Author: "Marcus Chen",
    testimonial2Role: "Gründer",
    testimonial2Company: "CreativeFlow Agency",
    testimonial3: "Das KI-Routing ist unglaublich genau. Unser Vertriebsteam bekommt Verkaufsanfragen sofort, Support bekommt technische Fragen, und ich bekomme die strategischen Sachen. Es funktioniert einfach.",
    testimonial3Author: "Elena Rodriguez",
    testimonial3Role: "CEO",
    testimonial3Company: "GrowthLab Consulting"
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
