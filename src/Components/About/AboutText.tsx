import React, { useRef } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "./AboutSection.css"
import { useScrollPosition } from "./useScrollPosition";
import type { AboutTextProps } from "../../interfaces/interface";

const AboutText: React.FC<AboutTextProps> = ({ title, subtitle }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const progress = useScrollPosition(textRef); 

  const opacity = progress;
  const translateY = 50 * (1 - progress);
  const scale = 0.95 + 0.05 * progress;

  return (
    <Box
      ref={textRef}
      className="aboutTextContainer" 
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      <Heading as="h1" className="aboutTitle">
        {title}
      </Heading>
      {subtitle && (
        <Text as="p" className="aboutSubtitle">
          {subtitle}
        </Text>
      )}
    </Box>
  );
};

export default AboutText;
