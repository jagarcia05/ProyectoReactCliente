import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ padding: '16px' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;