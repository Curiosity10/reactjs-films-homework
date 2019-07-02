import { useLayoutEffect } from 'react';

const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = `${scrollWidth}px`;
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.paddingRight = '0';
    };
  }, []);
};

export default useBodyScrollLock;
