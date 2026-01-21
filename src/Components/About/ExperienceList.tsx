import { Stack } from '@chakra-ui/react';
import type { Experience } from '../../interfaces/interface';
import ExperienceItem from './ExperienceItem';
import "./ExperienceSection.css"

interface Props {
  experiences: Experience[];
}

const ExperienceList = ({ experiences }: Props) => {
  return (
    <Stack className="experienceList">
      {experiences.map(exp => (
        <ExperienceItem key={exp.id} experience={exp} />
      ))}
    </Stack>
  );
};

export default ExperienceList;