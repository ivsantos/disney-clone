import { useCallback, useEffect, useState } from 'react';

const SCROLL_EVENT_TYPE = 'scroll';

/**
 * Hook that checks if the user has scrolled past a certain threshold and
 * as long as the condition is met, in order to avoid creating unnecessary listeners.
 * @typedef {Object} Props
 * @property {number} threshold
 * @property {boolean} condition
 * @param {Props} props
 * @returns {boolean}
 */
export default function useHasScrolled({ threshold, condition }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleHasScrolled = useCallback(() => {
    if (window.scrollY > threshold) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }, [threshold]);

  useEffect(() => {
    if (condition) {
      document.addEventListener(SCROLL_EVENT_TYPE, handleHasScrolled);

      handleHasScrolled();
    }

    return () => {
      document.removeEventListener(SCROLL_EVENT_TYPE, handleHasScrolled);
    };
  }, [handleHasScrolled, condition]);

  return { hasScrolled };
}
