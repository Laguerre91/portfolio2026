import React from "react";
import AboutBackground from "./AboutBackground";
import AboutText from "./AboutText";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  imageSrc: string;      
  imageAlt?: string;      
  title: string;
  subtitle?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
}) => {
  return (
    <section className={styles.aboutSection}>
      <AboutBackground src={imageSrc} alt={imageAlt} />
      <AboutText title={title} subtitle={subtitle} />
    </section>
  );
};

export default AboutSection;
