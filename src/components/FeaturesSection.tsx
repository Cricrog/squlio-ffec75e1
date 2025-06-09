
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Users, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Mail,
      title: t('smartEmailRouting'),
      description: t('smartEmailRoutingDesc'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: t('instantResponses'),
      description: t('instantResponsesDesc'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: t('smeFocused'),
      description: t('smeFocusedDesc'),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: t('secureIntegration'),
      description: t('secureIntegrationDesc'),
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featuresSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
