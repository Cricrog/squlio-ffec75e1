
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                    "{t('sebastianQuote')}"
                  </blockquote>
                  <div className="border-t border-gray-100 pt-6">
                    <div className="font-semibold text-gray-900 text-lg">{t('sebastianName')}</div>
                    <div className="text-gray-600">{t('sebastianCompany')}</div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-48 h-60 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/e165d6b6-8894-4642-9576-7ed4d6d83f8b.png" 
                      alt="Sebastian Fröhlich"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
