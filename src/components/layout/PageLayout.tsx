import React from 'react';
import TopBanner from './TopBanner';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBanner />
      <Header />
      <main className={`flex-1 ${className}`} style={{ paddingTop: '124px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;