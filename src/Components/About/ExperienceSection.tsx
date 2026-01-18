import { Box, Heading } from '@chakra-ui/react';
import { EXPERIENCE } from '../../constants/experience';
import ExperienceList from './ExperienceList';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  return (
    <Box as="section" id="experience" className={styles.experienceSection}>
      <Box className={styles.experienceContainer}>
        <Heading className={styles.experienceTitle}>
          Experience
        </Heading>
        
        <ExperienceList experiences={EXPERIENCE} />
      </Box>
    </Box>
  );
};

export default ExperienceSection;