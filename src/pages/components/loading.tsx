'use-client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  children?: React.ReactNode;
}

const Loader: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    const handleRouteChangeError = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router?.events.off('routeChangeStart', handleStart);
      router?.events.off('routeChangeComplete', handleComplete);
      router?.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex items-center justify-center">
        <div className="spinner rounded-full border-4 border-t-4 border-gray-800 h-12 w-12 mb-4"></div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Loader;
