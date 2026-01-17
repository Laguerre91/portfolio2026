import React, { useRef } from "react";
import { Box, Image } from "@chakra-ui/react";
import styles from "./AboutSection.module.css";
import { useScrollPosition } from "./useScrollPosition";
import type { AboutBackgroundProps } from "../../interfaces/interface";

const AboutBackground: React.FC<AboutBackgroundProps> = ({ src, alt = "" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progress = useScrollPosition(sectionRef, 1); 

  const translateX = (-100 * (1 - progress)).toFixed(2);

  return (
    <Box ref={sectionRef} className={styles.aboutImage} position="relative">
      <Image
        src={src}
        alt={alt}
        className={styles.aboutImage} 
        style={{
          transform: `translateX(${translateX}%)`,
        }}
      />
    </Box>
  );
};

export default AboutBackground;
