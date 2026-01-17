import React, { useRef } from "react";
import styles from "./AboutSection.module.css";
import { useScrollPosition } from "./useScrollPosition";

interface AboutBackgroundProps {
  src: string;
  alt?: string;
}

const AboutBackground: React.FC<AboutBackgroundProps> = ({ src, alt = "" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progress = useScrollPosition(sectionRef, 1); 

  // Escala: empieza 0.95, llega a 1
 const scale = 0.6 + 0.4 * progress;

  return (
    <div ref={sectionRef} className={styles.aboutImage}>
      <img      
        src={src}
        alt={alt}
        style={{
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
};

export default AboutBackground;
