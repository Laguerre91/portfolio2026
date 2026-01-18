import { Stack } from '@chakra-ui/react';
import type { Project } from '../../interfaces/interface';
import ProjectItem from './ProjectItem';

interface Props {
  projects: Project[];
}

const ProjectList = ({ projects }: Props) => {
  return (
    <Stack className="project-list">
      {projects.map((p) => (
        <ProjectItem key={p.id} project={p} />
      ))}
    </Stack>
  );
};

export default ProjectList;
