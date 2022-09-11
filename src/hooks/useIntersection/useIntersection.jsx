import { useEffect, useState } from 'react';

/**
 * Hook that checks if the observed element is intersecting the viewport.
 * @param {string} selector - The selector of the element to observe.
 * @returns {Boolean}
 */
export default function useIntersection(selector) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const element = document.querySelector(selector);
    if (element) {
      observer.observe(element);
    }
  }, [selector]);

  return isIntersecting;
}
