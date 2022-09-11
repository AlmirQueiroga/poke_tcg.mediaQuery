import { useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import { useState } from 'react';

const useMobile = () => {
  const [width, setWidth] = useState<number | null>(null);

  const windowListener = useCallback(
    debounce(() => {
      if (window) setWidth(window.innerWidth);
    }, 250),
    []
  );

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      window.addEventListener('resize', windowListener);
    }
    return () => window.removeEventListener('resize', windowListener);
  }, []);

  return width ? width <= 640 : false;
};

export default useMobile;
