import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Use useLayoutEffect to run synchronously before browser paint
  useLayoutEffect(() => {
    // Disable any CSS transitions temporarily
    const originalStyle = window.getComputedStyle(document.body).transition;
    document.body.style.transition = 'none';
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Force scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Re-enable transitions after a small delay
    const timer = setTimeout(() => {
      document.body.style.transition = originalStyle;
      document.documentElement.style.scrollBehavior = '';
    }, 0);
    
    return () => {
      clearTimeout(timer);
      document.body.style.transition = originalStyle;
      document.documentElement.style.scrollBehavior = '';
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
