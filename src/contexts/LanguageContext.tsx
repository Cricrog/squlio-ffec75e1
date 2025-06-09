
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
    
    // Features Section
    featuresTitle: "Why Choose Xila.AI?",
    featuresSubtitle: "Transform your email workflow with AI-powered intelligence that works around the clock",
    smartEmailRouting: "Smart Email Routing",
    smartEmailRoutingDesc: "AI understands email context and automatically routes messages to the right person in your organization",
    instantResponses: "Instant Responses",
    instantResponsesDesc: "Responds to basic queries immediately without human intervention, saving time and improving customer satisfaction",
    smeFocused: "SME Focused",
    smeFocusedDesc: "Designed specifically for small and medium enterprises who need professional email management on a budget",
    secureIntegration: "Secure Integration",
    secureIntegrationDesc: "Seamlessly integrates with Gmail and Outlook with enterprise-grade security and privacy protection",
    
    // Waitlist Section
    waitlistTitle: "Join the Waitlist",
    waitlistDescription: "Be among the first to experience the future of front office email management. Get early access to Xila.AI and transform your business communication.",
    emailPlaceholder: "Enter your email address",
    joinNow: "Join Now",
    freeToJoin: "Free to join",
    earlyAccessFeature: "Early access",
    successTitle: "You're In! 🎉",
    successDescription: "Thank you for joining the Xila.AI waitlist. We'll keep you updated on our launch progress and notify you as soon as we're ready!",
    expectedLaunch: "Expected launch: Q2 2024 • You'll be among the first to know",
    emailRequired: "Email required",
    emailRequiredDesc: "Please enter your email address to join the waitlist.",
    welcomeToast: "Welcome to Xila.AI! 🎉",
    welcomeToastDesc: "You've successfully joined our waitlist. We'll notify you when we launch!",
    
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
    aiReceptionist: "Ihr KI-Rezeptionist",
    neverMisses: "Verpasst nie eine E-Mail",
    heroDescription: "Verwandeln Sie Ihr Gmail & Outlook in einen intelligenten Rezeptionist, der E-Mails perfekt weiterleitet und sofort antwortet - entwickelt für KMU, die einen smarten info@ Posteingang wollen.",
    earlyAccess: "🚀 Früher Zugang • Keine Kreditkarte erforderlich",
    emailAccuracy: "E-Mail-Genauigkeit",
    responseTime: "Antwortzeit",
    alwaysActive: "Immer aktiv",
    
    // Features Section
    featuresTitle: "Warum Xila.AI wählen?",
    featuresSubtitle: "Transformieren Sie Ihren E-Mail-Workflow mit KI-gestützter Intelligenz, die rund um die Uhr arbeitet",
    smartEmailRouting: "Intelligente E-Mail-Weiterleitung",
    smartEmailRoutingDesc: "KI versteht E-Mail-Kontext und leitet Nachrichten automatisch an die richtige Person in Ihrer Organisation weiter",
    instantResponses: "Sofortige Antworten",
    instantResponsesDesc: "Beantwortet grundlegende Anfragen sofort ohne menschlichen Eingriff, spart Zeit und verbessert die Kundenzufriedenheit",
    smeFocused: "KMU-fokussiert",
    smeFocusedDesc: "Speziell für kleine und mittlere Unternehmen entwickelt, die professionelles E-Mail-Management mit kleinem Budget benötigen",
    secureIntegration: "Sichere Integration",
    secureIntegrationDesc: "Nahtlose Integration in Gmail und Outlook mit Sicherheit und Datenschutz auf Unternehmensebene",
    
    // Waitlist Section
    waitlistTitle: "Warteliste beitreten",
    waitlistDescription: "Seien Sie unter den ersten, die die Zukunft des Front-Office-E-Mail-Managements erleben. Erhalten Sie frühen Zugang zu Xila.AI und transformieren Sie Ihre Geschäftskommunikation.",
    emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
    joinNow: "Jetzt beitreten",
    freeToJoin: "Kostenlos beitreten",
    earlyAccessFeature: "Früher Zugang",
    successTitle: "Sie sind dabei! 🎉",
    successDescription: "Vielen Dank für Ihren Beitritt zur Xila.AI-Warteliste. Wir halten Sie über unseren Launch-Fortschritt auf dem Laufenden und benachrichtigen Sie, sobald wir bereit sind!",
    expectedLaunch: "Erwarteter Launch: Q2 2024 • Sie werden zu den ersten gehören, die es erfahren",
    emailRequired: "E-Mail erforderlich",
    emailRequiredDesc: "Bitte geben Sie Ihre E-Mail-Adresse ein, um der Warteliste beizutreten.",
    welcomeToast: "Willkommen bei Xila.AI! 🎉",
    welcomeToastDesc: "Sie haben sich erfolgreich für unsere Warteliste angemeldet. Wir benachrichtigen Sie beim Launch!",
    
    // Testimonials
    testimonialsTitle: "Was unsere Beta-Nutzer sagen",
    testimonialsSubtitle: "Verlassen Sie sich nicht nur auf unser Wort. Hier ist, was Early Adopters über Xila.AI sagen",
    sebastianQuote: "Mit Xila.AI werden allgemeine Geschäftsanfragen jetzt entweder automatisch beantwortet oder nahtlos an den entsprechenden Kollegen weitergeleitet. Es ist ein Game Changer für das Management unserer info@ Inbox, wir müssen sie eigentlich nicht mehr managen.",
    sebastianName: "Sebastian Fröhlich",
    sebastianCompany: "Mertens Steuerberater GmbH"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

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
