
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('testimonial1'),
      author: t('testimonial1Author'),
      role: t('testimonial1Role'),
      company: t('testimonial1Company')
    },
    {
      quote: t('testimonial2'),
      author: t('testimonial2Author'), 
      role: t('testimonial2Role'),
      company: t('testimonial2Company')
    },
    {
      quote: t('testimonial3'),
      author: t('testimonial3Author'),
      role: t('testimonial3Role'),
      company: t('testimonial3Company')
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-semibold text-gray-900 text-lg">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500 mt-1">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
