import { Box, Heading } from '@chakra-ui/react';
import { useRef } from 'react';
import { EXPERIENCE } from '../../constants/experience';
import ExperienceList from './ExperienceList';
import styles from './ExperienceSection.module.css';
import { useScrollPosition } from './useScrollPosition';

const ExperienceSection = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const progress = useScrollPosition(titleRef, 0.5);

    const translateY = -100 * (1 - progress); 
    const opacity = progress;

  return (
    <Box as="section" id="experience" className={styles.experienceSection}>
      <Box className={styles.experienceContainer}>
        <Heading ref={titleRef} className={styles.experienceTitle} style={{
        transform: `translateY(${translateY}px)`,
        opacity,
      }}>
          Experience
        </Heading>
        
        <ExperienceList experiences={EXPERIENCE} />
      </Box>
    </Box>
  );
};

export default ExperienceSection;