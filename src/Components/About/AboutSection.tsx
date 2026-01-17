import React from "react";
import AboutBackground from "./AboutBackground";
import AboutText from "./AboutText";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  videoSrc: string;
  poster?: string;
  title: string;
  subtitle?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  videoSrc,
  poster,
  title,
  subtitle,
}) => {
  return (
    <section className={styles.aboutSection}>
      <AboutBackground src={videoSrc} poster={poster} />
      <AboutText title={title} subtitle={subtitle} />
    </section>
  );
};

export default AboutSection;
