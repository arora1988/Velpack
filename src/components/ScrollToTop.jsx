import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Using useLayoutEffect for more immediate execution
  useLayoutEffect(() => {
    // Force scroll to top
    window.scrollTo(0, 0);
    
    // Additional scroll reset attempts
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // For Safari
    document.querySelector('body').scrollTo(0, 0);
    
    // Fallback setTimeout
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
