import { Box, Text, Link, Image } from '@chakra-ui/react';
import type { Project } from '../../interfaces/interface';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <Box className="project-item">
      <Image src={project.image} alt={project.title} className="project-image" />
      <Box className="project-text">
        <Text className="project-title">{project.title}</Text>
        <Text className="project-description">{project.description}</Text>
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectItem;
