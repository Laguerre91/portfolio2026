import { Box, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { useScrollPosition } from '../About/useScrollPosition';
import type { Experience } from '../../interfaces/interface';
import "./ExperienceSection.css"

interface Props {
  experience: Experience;
}

const ExperienceItem = ({ experience }: Props) => {

const itemRef = useRef<HTMLDivElement>(null);
  const progress = useScrollPosition(itemRef, 0.5);

  const translateX = -100 * (1 - progress); 
  const opacity = progress;

  return (
    <Box ref={itemRef} className="experienceItem" style={{
        transform: `translateX(${translateX}px)`,
        opacity,
      }}>
      <Box className="experienceHeader">
        <Text className="experienceRole">
          {experience.role}
        </Text>

        <Text className="experienceCompany">
          {experience.company}
        </Text>

        <Text className="experiencePeriod">
          {experience.period}
        </Text>
      </Box>

      <Box as="ul" className="experienceDescription">
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