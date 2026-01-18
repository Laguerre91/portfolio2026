import { Stack } from '@chakra-ui/react';
import type { Experience } from '../../interfaces/interface';
import ExperienceItem from './ExperienceItem';
import styles from './ExperienceSection.module.css';

interface Props {
  experiences: Experience[];
}

const ExperienceList = ({ experiences }: Props) => {
  return (
    <Stack className={styles.experienceList}>
      {experiences.map(exp => (
        <ExperienceItem key={exp.id} experience={exp} />
      ))}
    </Stack>
  );
};

export default ExperienceList;