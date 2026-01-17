import { useState, useEffect, type RefObject } from "react";

export const useScrollPosition = <T extends HTMLElement>(ref: RefObject<T | null>, offset: number = 0.8) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return; 

      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const progress = Math.min(Math.max((windowHeight - top) / (windowHeight * offset), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, offset]);

  return scrollProgress;
};
