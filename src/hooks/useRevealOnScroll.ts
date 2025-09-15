import { useEffect, useRef, useState } from 'react';

interface UseRevealOnScrollOptions {
  threshold?: number;
  delay?: number;
}

export const useRevealOnScroll = <T extends HTMLElement = HTMLDivElement>(options: UseRevealOnScrollOptions = {}) => {
  const { threshold = 0.1, delay = 0 } = options;
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, delay]);

  return { ref, isRevealed };
};