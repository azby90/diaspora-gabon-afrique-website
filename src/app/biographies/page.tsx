import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import NewBiographySection from '@/components/biography/NewBiographySection';

export default function BiographiesPage() {
  return (
    <PageLayout>
      <NewBiographySection />
    </PageLayout>
  );
}