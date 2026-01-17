import React, { useRef } from "react";
import styles from "./AboutSection.module.css";
import { useScrollPosition } from "./useScrollPosition";

interface AboutBackgroundProps {
  src: string;
  alt?: string;
}

const AboutBackground: React.FC<AboutBackgroundProps> = ({ src, alt = "" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progress = useScrollPosition(sectionRef, 1); // 0 → 1 según scroll

  // Movimiento horizontal: empieza -50px, llega a 0
  const translateX = -50 * (1 - progress);

  // Escala: empieza 0.95, llega a 1
  const scale = 0.95 + 0.05 * progress;

  return (
    <div ref={sectionRef} className={styles.aboutSection}>
      <img
        className={styles.aboutImage}
        src={src}
        alt={alt}
        style={{
          transform: `translate(${translateX}px, -50%) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default AboutBackground;
