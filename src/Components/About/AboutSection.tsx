import React from "react";
import { Box } from "@chakra-ui/react";
import AboutBackground from "./AboutBackground";
import AboutText from "./AboutText";
import "./AboutSection.css"
import type { AboutSectionProps } from "../../interfaces/interface";

const AboutSection: React.FC<AboutSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
}) => {
  return (
    <Box as="section" className="aboutSection" id="about">
      <AboutBackground src={imageSrc} alt={imageAlt} />
      <AboutText title={title} subtitle={subtitle} />
    </Box>
  );
};

export default AboutSection;
