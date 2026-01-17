import React, { useRef } from "react";
import styles from "./AboutSection.module.css";
import { useScrollPosition } from "./useScrollPosition";

interface AboutBackgroundProps {
  src: string;
  poster?: string;
}

const AboutBackground: React.FC<AboutBackgroundProps> = ({ src, poster }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progress = useScrollPosition(sectionRef, 1); 


  const translateX = -50 * (1 - progress); 

  const scale = 0.95 + 0.05 * progress; 

  return (
    <div ref={sectionRef} className={styles.aboutSection}>
      <video
        className={styles.aboutVideo}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        style={{
          transform: `translate(${translateX}px, -50%) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default AboutBackground;
