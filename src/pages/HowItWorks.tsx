
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Settings, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';

const HowItWorks = () => {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    // Navigate to home page and scroll to waitlist
    window.location.href = '/#waitlist';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar onJoinWaitlist={scrollToWaitlist} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('backToHome')}
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('howItWorksTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('howItWorksSubtitle')}
          </p>
        </div>

        {/* Step 1: Connect your info@ inbox */}
        <div className="mb-12">
          <Card className="bg-white shadow-lg border-0 p-8">
            <CardContent className="p-0">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 rounded-full p-4 flex-shrink-0">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {t('connectInfoInbox')}
                  </h3>
                  <p className="text-gray-600">
                    {t('connectInfoInboxDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 2: Set up your Org */}
        <div className="mb-12">
          <Card className="bg-white shadow-lg border-0 p-8">
            <CardContent className="p-0">
              <div className="flex items-start gap-6">
                <div className="bg-purple-100 rounded-full p-4 flex-shrink-0">
                  <Settings className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {t('setupYourOrg')}
                  </h3>
                  <p className="text-gray-600">
                    {t('setupYourOrgDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 3: Let Squlio do the work */}
        <div className="mb-12">
          <Card className="bg-white shadow-lg border-0 p-8">
            <CardContent className="p-0">
              <div className="mb-6">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-green-100 rounded-full p-4 flex-shrink-0">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {t('letSqulioWork')}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t('letSqulioWorkDesc')}
                    </p>
                  </div>
                </div>
                
                {/* Two columns showing the workflow */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{t('routingMachinery')}</h4>
                    <p className="text-sm text-gray-600">{t('routingMachineryDesc')}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{t('prewrittenDrafts')}</h4>
                    <p className="text-sm text-gray-600">{t('prewrittenDraftsDesc')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              {t('getStarted')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
