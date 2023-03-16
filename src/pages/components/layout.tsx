import React from 'react';

interface PageLayoutProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ isLoading, children }) => {
  return isLoading ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex items-center justify-center">
      <div className="spinner rounded-full border-4 border-t-4 border-gray-800 h-12 w-12 mb-4"></div>
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default PageLayout;
