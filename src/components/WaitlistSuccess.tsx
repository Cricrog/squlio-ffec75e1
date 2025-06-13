
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WaitlistSuccess = () => {
  const { t } = useLanguage();

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">{t('successTitle')}</h3>
            <p className="text-xl text-gray-600 mb-6">
              {t('successDescription')}
            </p>
            <p className="text-sm text-gray-500">
              {t('expectedLaunch')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistSuccess;
