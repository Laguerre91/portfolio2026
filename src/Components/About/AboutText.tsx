import React, { useRef } from "react";
import styles from "./AboutSection.module.css";
import { useScrollPosition } from "./useScrollPosition";

interface AboutTextProps {
  title: string;
  subtitle?: string;
}

const AboutText: React.FC<AboutTextProps> = ({ title, subtitle }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const progress = useScrollPosition(textRef);


  const opacity = progress;
  const translateY = 50 * (1 - progress); 
  const scale = 0.95 + 0.05 * progress; 

  return (
    <div
      ref={textRef}
      className={styles.aboutTextContainer}
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      <h1 className={styles.aboutTitle}>{title}</h1>
      {subtitle && <p className={styles.aboutSubtitle}>{subtitle}</p>}
    </div>
  );
};

export default AboutText;
