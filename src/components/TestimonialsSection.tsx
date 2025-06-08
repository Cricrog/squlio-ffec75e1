
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Xila.AI transformed our email management completely. We went from missing important client emails to having everything perfectly organized and responded to within minutes.",
      author: "Sarah Mitchell",
      role: "Operations Manager",
      company: "TechStart Solutions"
    },
    {
      quote: "As a small business, we couldn't afford a full-time receptionist. Xila.AI gave us professional email handling that makes us look like a much larger company.",
      author: "Marcus Chen", 
      role: "Founder",
      company: "CreativeFlow Agency"
    },
    {
      quote: "The AI routing is incredibly accurate. Our sales team gets sales inquiries instantly, support gets technical questions, and I get the strategic stuff. It just works.",
      author: "Elena Rodriguez",
      role: "CEO",
      company: "GrowthLab Consulting"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            What Our Beta Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what early adopters are saying about Xila.AI
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
