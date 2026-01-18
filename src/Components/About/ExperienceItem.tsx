import { Box, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { useScrollPosition } from '../About/useScrollPosition';
import type { Experience } from '../../interfaces/interface';
import styles from './ExperienceSection.module.css';

interface Props {
  experience: Experience;
}

const ExperienceItem = ({ experience }: Props) => {

const itemRef = useRef<HTMLDivElement>(null);
  const progress = useScrollPosition(itemRef, 0.5);

  const translateX = -100 * (1 - progress); 
  const opacity = progress;

  return (
    <Box ref={itemRef} className={styles.experienceItem} style={{
        transform: `translateX(${translateX}px)`,
        opacity,
      }}>
      <Box className={styles.experienceHeader}>
        <Text className={styles.experienceRole}>
          {experience.role}
        </Text>

        <Text className={styles.experienceCompany}>
          {experience.company}
        </Text>

        <Text className={styles.experiencePeriod}>
          {experience.period}
        </Text>
      </Box>

      <Box as="ul" className={styles.experienceDescription}>
        {experience.description.map((item, index) => (
          <Box as="li" key={index}>
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceItem;