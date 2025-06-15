
import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  exitAnimation?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.05, rootMargin = '50px', exitAnimation = false, delay = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) {
      console.log('useScrollAnimation: No ref available');
      return;
    }

    console.log('useScrollAnimation: Setting up observer with threshold:', threshold, 'rootMargin:', rootMargin);

    // Fallback timer - show content after 2 seconds if intersection observer doesn't work
    const fallbackTimer = setTimeout(() => {
      console.log('useScrollAnimation: Fallback timer activated');
      setIsVisible(true);
      setHasAnimated(true);
    }, 2000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('useScrollAnimation: Intersection observed:', {
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          target: entry.target
        });

        if (entry.isIntersecting) {
          clearTimeout(fallbackTimer); // Clear fallback since observer worked
          if (delay > 0) {
            setTimeout(() => {
              console.log('useScrollAnimation: Setting visible after delay');
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          } else {
            console.log('useScrollAnimation: Setting visible immediately');
            setIsVisible(true);
            setHasAnimated(true);
          }
        } else if (exitAnimation && hasAnimated) {
          console.log('useScrollAnimation: Setting invisible (exit animation)');
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);
    console.log('useScrollAnimation: Observer attached to element');

    return () => {
      clearTimeout(fallbackTimer);
      observer.unobserve(currentRef);
      console.log('useScrollAnimation: Observer cleanup completed');
    };
  }, [threshold, rootMargin, exitAnimation, hasAnimated, delay]);

  // Additional fallback - if still not visible after 3 seconds, force visibility
  useEffect(() => {
    if (!isVisible) {
      const emergencyFallback = setTimeout(() => {
        console.log('useScrollAnimation: Emergency fallback activated - forcing visibility');
        setIsVisible(true);
        setHasAnimated(true);
      }, 3000);

      return () => clearTimeout(emergencyFallback);
    }
  }, [isVisible]);

  console.log('useScrollAnimation: Current state - isVisible:', isVisible, 'hasAnimated:', hasAnimated);

  return { ref, isVisible, hasAnimated };
};

export const useStaggeredAnimation = (itemCount: number, baseDelay = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of each item
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * baseDelay);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [itemCount, baseDelay]);

  return { ref, visibleItems };
};
