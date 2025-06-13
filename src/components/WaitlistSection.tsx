
import React from 'react';
import { useWaitlistSubmission } from '@/hooks/useWaitlistSubmission';
import WaitlistForm from './WaitlistForm';
import WaitlistSuccess from './WaitlistSuccess';

const WaitlistSection = () => {
  const { isSubmitted, isLoading, submitToWaitlist } = useWaitlistSubmission();

  if (isSubmitted) {
    return <WaitlistSuccess />;
  }

  return <WaitlistForm onSubmit={submitToWaitlist} isLoading={isLoading} />;
};

export default WaitlistSection;
