import { useLayoutEffect } from 'react';

const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
};

export default useBodyScrollLock;
