import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const threshold = options.threshold ?? 0.4;
    const rootMargin = options.rootMargin ?? '-80px 0px -40% 0px';

    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds, options.threshold, options.rootMargin]);

  return activeId;
}
