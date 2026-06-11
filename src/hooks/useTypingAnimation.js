import { useState, useEffect, useRef } from 'react';

export function useTypingAnimation(phrases, options = {}) {
  const {
    typeSpeed   = 90,
    deleteSpeed = 55,
    pauseAfter  = 1800,
    pauseBefore = 400,
  } = options;

  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const phraseIndex = useRef(0);
  const charIndex   = useRef(0);

  useEffect(() => {
    if (!phrases.length) return;

    const tick = () => {
      const current = phrases[phraseIndex.current];

      if (isDeleting) {
        charIndex.current -= 1;
        setDisplayed(current.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          setIsDeleting(false);
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          return pauseBefore;
        }
        return deleteSpeed;
      } else {
        charIndex.current += 1;
        setDisplayed(current.slice(0, charIndex.current));

        if (charIndex.current === current.length) {
          setIsDeleting(true);
          return pauseAfter;
        }
        return typeSpeed;
      }
    };

    const schedule = () => {
      const delay = tick();
      timeoutId = setTimeout(schedule, delay);
    };

    let timeoutId = setTimeout(schedule, typeSpeed);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting]);

  return displayed;
}
